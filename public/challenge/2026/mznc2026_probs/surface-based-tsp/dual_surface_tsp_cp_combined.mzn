/* 
Surface-based TSP with MiniZinc

MIT License

Copyright (c) 2026 Yılmaz Arslanoğlu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

% Modifications by MiniZinc Challenge Organizers:
% - Combine included model files into single file
% - Add license text directly to model file
% - Hoist root node variable to top level and add to search annotation
% - Remove restart_luby annotation which is not allowed in the challenge

% data schema
% Number of primal vertices (TSP cities).
int: N;

% Number of primal edges in the triangulation.
% Equivalently, the number of primal edge incidences / local edge-groups
% used by the planar edge-based local-connectivity encoding.
int: P;

% Number of triangles in the candidate triangulation.
% These are the main selectable surface elements.
int: T;

% Number of dual edges, i.e. adjacencies between pairs of triangles.
int: E;


% Endpoints of each dual edge in the triangle adjacency graph.
% Edge e connects triangles u_dual_edges[e] and v_dual_edges[e].
array[1..E] of 1..T: u_dual_edges;
array[1..E] of 1..T: v_dual_edges;


% Flattened list of triangle indices incident to each primal vertex.
% For a city v, the slice
%   subtree_node_indices[
%     subtree_node_indices_start[v] ..
%     subtree_node_indices_start[v] + subtree_node_indices_length[v] - 1
%   ]
% gives the triangles containing v.
% This is the local node set of the per-vertex subtree / Euler structure.
array[int] of 1..T: subtree_node_indices;

% Start offset of city v inside subtree_node_indices.
array[1..N] of int: subtree_node_indices_start;

% Number of incident triangles stored for city v.
array[1..N] of int: subtree_node_indices_length;


% Flattened list of dual-edge indices belonging to the local subgraph of each city.
% For a city v, the slice
%   subtree_edge_indices[
%     subtree_edge_indices_start[v] ..
%     subtree_edge_indices_start[v] + subtree_edges_length[v] - 1
%   ]
% gives the dual edges whose two endpoint triangles are both incident to v.
array[int] of 1..E: subtree_edge_indices;

% Start offset of city v inside subtree_edge_indices.
array[1..N] of int: subtree_edge_indices_start;

% Number of local dual edges stored for city v.
array[1..N] of int: subtree_edges_length;

% Local endpoint numbering for the per-city subgraph.
% These describe the local graph induced around a single primal vertex:
% for each entry in subtree_edge_indices, the corresponding local edge joins
% local nodes u_of_subtree_edges[k] and v_of_subtree_edges[k], where the local
% node labels refer to the city-specific slice in subtree_node_indices.
array[int] of 1..E: u_of_subtree_edges;
array[int] of 1..E: v_of_subtree_edges;


% Cost contribution associated with selecting each triangle.
% In the planar simplification this is the perimeter of the triangle, used in
% the objective together with edge-sharing cancellations so that the remaining
% cost equals the induced tour boundary length.
array[1..T] of int: triangle_perimeters;

% Cost / reward correction associated with each dual adjacency.
% Selecting two adjacent triangles cancels the shared primal edge once; these
% values encode that shared-edge contribution in the planar objective.
array[1..E] of int: dual_edge_costs;


% Flattened incidence list from primal triangulation edges to incident triangles.
% For a primal edge p, the slice
%   pe_triangle_incidence_indices[
%     pe_triangle_incidence_start[p] ..
%     pe_triangle_incidence_start[p] + pe_triangle_incidence_length[p] - 1
%   ]
% gives the triangles incident to that primal edge.
% In a planar triangulation this is typically one or two triangles.
array[int] of 1..T: pe_triangle_incidence_indices;

% Start offset of primal edge p inside pe_triangle_incidence_indices.
array[1..P] of int: pe_triangle_incidence_start;

% Number of incident triangles for primal edge p.
array[1..P] of int: pe_triangle_incidence_length;

% Load Helper Functions (depends on problem data)
array[1..T] of set of int: IncE_To = [
    { e | e in 1..E where v_dual_edges[e] = t } | t in 1..T
];

array[1..T] of set of int: IncE_From = [
    { e | e in 1..E where u_dual_edges[e] = t } | t in 1..T
];

int: min_degree = min(subtree_node_indices_length);

% Identify the pivot vertex
int: pivot_v = min([ i | i in 1..N where subtree_node_indices_length[i] = min_degree ]);

set of int: root_candidates = { 
    subtree_node_indices[j] 
    | j in subtree_node_indices_start[pivot_v] .. 
           subtree_node_indices_start[pivot_v] + subtree_node_indices_length[pivot_v] - 1 
};

% Active nodes (triangles)
array[1..T] of var bool: x;

% Active edges (shared edges between triangles)
array[1..E] of var bool: y;

% Root of the global connectivity tree (must be an active triangle candidate).
var root_candidates: root_node;

var int: objective = cost_triangle_perimeters - profit_internal_edges;

var int: cost_triangle_perimeters =
    sum(t in 1..T)(bool2int(x[t]) * triangle_perimeters[t]);

var int: profit_internal_edges =
    2 * sum(e in 1..E)(bool2int(y[e]) * dual_edge_costs[e]);

solve
% :: restart_luby(50)
:: seq_search([
    int_search([root_node], first_fail, indomain_min, complete),
    bool_search(x, first_fail, indomain_min, complete)
])
minimize objective;

% ================================================================================
% Constraints
% ================================================================================

% Dual Edge Consistency
constraint forall(e in 1..E) (
  y[e] = (x[u_dual_edges[e]] /\ x[v_dual_edges[e]])
);

% Degree constraints, for each primal edge
constraint forall(p in 1..P
                  where pe_triangle_incidence_length[p] > 2)(
  sum(i in 0..pe_triangle_incidence_length[p]-1)(
    bool2int(x[ pe_triangle_incidence_indices[ pe_triangle_incidence_start[p] + i ] ])
  ) <= 2
);

% --------------------------------------------------------------------------------
% Global Connectivity
% --------------------------------------------------------------------------------

%%
% activate only one of the global connectivity alternatives.
% only change the include file, no need to change the constraint.
%%

include "globals.mzn";

predicate global_tree_connectivity() =
    (
        tree(
            T,
            E,
            u_dual_edges,
            v_dual_edges,
            root_node,
            x,
            y
        )
        /\
        sum(n in 1..T)(bool2int(x[n])) = N - 2
        /\
        sum(e in 1..E)(bool2int(y[e])) = N - 3
    );
% include "global_connectivity/custom_tree_implementation_int.mzn";


%%
%%

constraint global_tree_connectivity();

% --------------------------------------------------------------------------------
% Local Connectivity (Steiner Group Constraint per Vertex)
% --------------------------------------------------------------------------------

%%
% activate only one of the local-connectivity alternatives.
% only change the include file, no need to change the constraint.
%%

predicate local_connectivity(int: v) =
  let {
      int: ns_start = subtree_node_indices_start[v];
      int: ns_len   = subtree_node_indices_length[v];
      
      int: ms_start = subtree_edge_indices_start[v];
      int: ms_len   = subtree_edges_length[v];

      var int: local_active_node_count = sum(j in ns_start .. ns_start + ns_len - 1)(
          bool2int( x[ subtree_node_indices[j] ] )
      );

      var int: local_active_edge_count = sum(j in ms_start .. ms_start + ms_len - 1)(
          bool2int( y[ subtree_edge_indices[j] ] )
      );
  } in
      local_active_node_count >= 1 /\
      local_active_node_count - local_active_edge_count = 1;

% include "local_connectivity/local_tree.mzn";


%%
%%

constraint forall(v in 1..N) (
    local_connectivity(v)
);

% ================================================================================
% Output
% ================================================================================

output ["Obj: ", show(objective), "\n"];