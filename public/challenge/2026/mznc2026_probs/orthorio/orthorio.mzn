/*
Hobby project to solve complex multi-agent pathfinding problems using Factorio's conveyor belts.

MIT License

Copyright (c) 2026 Julia Dijkstra

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

% Changes by MiniZinc Challenge Organizers:
% - Added license text to top of file
% - Removed visualisation code
% - Named the goal variable objective
% - Added search annotation

include "globals.mzn";
% include "ide/vis.mzn";

% ----------------------
%      Parameters
% ----------------------

int: HEIGHT;
int: WIDTH;
int: AGENTS;
int: NODES = HEIGHT * WIDTH;
int: WALLS = sum(walls);
bool: TUNNEL_4;
bool: TUNNEL_6;

array[1..AGENTS, Marker] of Node: path;
array[1..HEIGHT, 1..WIDTH] of 0..1: walls;
array[1..NODES] of 0..AGENTS: starts = [sum (a in 1..AGENTS) (a * (path(a, Start) == n)) | n in 1..NODES];
array[1..NODES] of 0..AGENTS:   ends = [sum (a in 1..AGENTS) (a * (path(a,   End) == n)) | n in 1..NODES];

% ----------------------
%      Datatypes
% ----------------------

% Surface belt types.
enum SB = {
  SB_None,
  SB_Wall,
  SB_N,
  SB_E,
  SB_S,
  SB_W,
  SB_TI_N4,
  SB_TI_N6,
  SB_TI_E4,
  SB_TI_E6,
  SB_TI_S4,
  SB_TI_S6,
  SB_TI_W4,
  SB_TI_W6,
  SB_TO_N4,
  SB_TO_N6,
  SB_TO_E4,
  SB_TO_E6,
  SB_TO_S4,
  SB_TO_S6,
  SB_TO_W4,
  SB_TO_W6
};

% A Start or End marker.
enum Marker = {
  Start,
  End
};

% Path node.
type Node = record (int: y, int: x, string: d);

% ----------------------
%   Decision Variables
% ----------------------

array[1..NODES] of var SB: sb;
array[1..NODES] of var 0..AGENTS: sba;
array[1..NODES] of var 1..NODES: next;
array[1..NODES] of var 1..HEIGHT: nexty = [y(next[n]) | n in 1..NODES];
array[1..NODES] of var 1..WIDTH:  nextx = [x(next[n]) | n in 1..NODES];

% ----------------------
%       Functions
% ----------------------

function bool: bounds(int: y, int: x) =
  y in 1..HEIGHT /\ x in 1..WIDTH;

function 0..NODES: index(int: y, int: x) =
  if bounds(y, x) then (y - 1) * WIDTH + x else 0 endif;

function var 1..WIDTH: x(var int: n) =
  (n - 1) mod WIDTH + 1;

function var 1..HEIGHT: y(var int: n) =
  (n - 1) div WIDTH + 1;

function var SB: sb(int: y, int: x) =
  if bounds(y, x) then sb[index(y, x)] else SB_None endif;

function var 0..AGENTS: sba(int: y, int: x) =
  if bounds(y, x) then sba[index(y, x)] else 0 endif;

function 1..NODES: path(int: a, Marker: m) =
  index(path[a, m].y, path[a, m].x);

function 0..AGENTS: starts(int: y, int: x) =
  starts[index(y, x)];

function 0..AGENTS: ends(int: y, int: x) =
  ends[index(y, x)];

function var 1..NODES: next(int: y, int: x) =
  next[index(y, x)];

function var 1..HEIGHT: nexty(int: y, int: x) =
  nexty[index(y, x)];

function var 1..WIDTH: nextx(int: y, int: x) =
  nextx[index(y, x)];

% ----------------------
%   Global Constraints
% ----------------------

% There must be one path connecting all the starts and ends.
constraint subcircuit(next);

% Every node must point at a different node.
constraint alldifferent(next);

% ----------------------
%   Fixed Constraints
% ----------------------

% Fix all agent start and end directions.
constraint forall (a in 1..AGENTS, m in Marker) (
  if     path[a, m].d == "^" then sb[path(a, m)] == SB_N
  elseif path[a, m].d == "v" then sb[path(a, m)] == SB_S
  elseif path[a, m].d == "<" then sb[path(a, m)] == SB_W
  elseif path[a, m].d == ">" then sb[path(a, m)] == SB_E endif);

constraint forall (y in 1..HEIGHT, x in 1..WIDTH) (sb(y, x) == SB_Wall <-> walls[y, x] == 1);

constraint forall (n in 1..NODES) (if not TUNNEL_4 then sb[n] in SB diff {SB_TI_N4, SB_TI_S4, SB_TI_W4, SB_TI_E4, SB_TO_N4, SB_TO_S4, SB_TO_W4, SB_TO_E4} endif);
constraint forall (n in 1..NODES) (if not TUNNEL_6 then sb[n] in SB diff {SB_TI_N6, SB_TI_S6, SB_TI_W6, SB_TI_E6, SB_TO_N6, SB_TO_S6, SB_TO_W6, SB_TO_E6} endif);

% ----------------------
% Channeling Constraints
% ----------------------

% Empty cells point at themselves.
constraint forall (n in 1..NODES) (sb[n] in {SB_None, SB_Wall} <-> next[n] == n);

% Next agrees with surface belt placement.
constraint forall(y in 1..HEIGHT, x in 1..WIDTH where ends(y,x) = 0)
  (table(
    [enum2int(sb(y, x)), nexty(y, x), nextx(y, x)],
    [|enum2int(SB_None), y          , x
     |enum2int(SB_Wall), y          , x
     |enum2int(   SB_N), y - 1      , x
     |enum2int(   SB_S), y + 1      , x
     |enum2int(   SB_W), y          , x - 1
     |enum2int(   SB_E), y          , x + 1
     |enum2int(SB_TI_N4), y - 2      , x
     |enum2int(SB_TI_N4), y - 3      , x
     |enum2int(SB_TI_N4), y - 4      , x
     |enum2int(SB_TI_N4), y - 5      , x
     |enum2int(SB_TI_S4), y + 2      , x
     |enum2int(SB_TI_S4), y + 3      , x
     |enum2int(SB_TI_S4), y + 4      , x
     |enum2int(SB_TI_S4), y + 5      , x
     |enum2int(SB_TI_W4), y          , x - 2
     |enum2int(SB_TI_W4), y          , x - 3
     |enum2int(SB_TI_W4), y          , x - 4
     |enum2int(SB_TI_W4), y          , x - 5
     |enum2int(SB_TI_E4), y          , x + 2
     |enum2int(SB_TI_E4), y          , x + 3
     |enum2int(SB_TI_E4), y          , x + 4
     |enum2int(SB_TI_E4), y          , x + 5
     |enum2int(SB_TO_N4), y - 1      , x
     |enum2int(SB_TO_S4), y + 1      , x
     |enum2int(SB_TO_W4), y          , x - 1
     |enum2int(SB_TO_E4), y          , x + 1
     |enum2int(SB_TI_N6), y - 2      , x
     |enum2int(SB_TI_N6), y - 3      , x
     |enum2int(SB_TI_N6), y - 4      , x
     |enum2int(SB_TI_N6), y - 5      , x
     |enum2int(SB_TI_N6), y - 6      , x
     |enum2int(SB_TI_N6), y - 7      , x
     |enum2int(SB_TI_S6), y + 2      , x
     |enum2int(SB_TI_S6), y + 3      , x
     |enum2int(SB_TI_S6), y + 4      , x
     |enum2int(SB_TI_S6), y + 5      , x
     |enum2int(SB_TI_S6), y + 6      , x
     |enum2int(SB_TI_S6), y + 7      , x
     |enum2int(SB_TI_W6), y          , x - 2
     |enum2int(SB_TI_W6), y          , x - 3
     |enum2int(SB_TI_W6), y          , x - 4
     |enum2int(SB_TI_W6), y          , x - 5
     |enum2int(SB_TI_W6), y          , x - 6
     |enum2int(SB_TI_W6), y          , x - 7
     |enum2int(SB_TI_E6), y          , x + 2
     |enum2int(SB_TI_E6), y          , x + 3
     |enum2int(SB_TI_E6), y          , x + 4
     |enum2int(SB_TI_E6), y          , x + 5
     |enum2int(SB_TI_E6), y          , x + 6
     |enum2int(SB_TI_E6), y          , x + 7
     |enum2int(SB_TO_N6), y - 1      , x
     |enum2int(SB_TO_S6), y + 1      , x
     |enum2int(SB_TO_W6), y          , x - 1
     |enum2int(SB_TO_E6), y          , x + 1|]));

% Enforce belt to belt transitions are valid.
constraint forall (y in 1..HEIGHT, x in 1..WIDTH where ends(y, x) == 0)
  (table(
    [enum2int(sb(y, x)), enum2int(sb[next(y, x)])],
    [|enum2int( SB_None), enum2int( SB_None)
     |enum2int( SB_Wall), enum2int( SB_Wall)
     |enum2int(    SB_N), enum2int(    SB_N)
     |enum2int(    SB_N), enum2int(    SB_W)
     |enum2int(    SB_N), enum2int(    SB_E)
     |enum2int(    SB_N), enum2int(SB_TI_N4)
     |enum2int(    SB_N), enum2int(SB_TI_N6)
     |enum2int(    SB_S), enum2int(    SB_S)
     |enum2int(    SB_S), enum2int(    SB_W)
     |enum2int(    SB_S), enum2int(    SB_E)
     |enum2int(    SB_S), enum2int(SB_TI_S4)
     |enum2int(    SB_S), enum2int(SB_TI_S6)
     |enum2int(    SB_W), enum2int(    SB_N)
     |enum2int(    SB_W), enum2int(    SB_S)
     |enum2int(    SB_W), enum2int(    SB_W)
     |enum2int(    SB_W), enum2int(SB_TI_W4)
     |enum2int(    SB_W), enum2int(SB_TI_W6)
     |enum2int(    SB_E), enum2int(    SB_N)
     |enum2int(    SB_E), enum2int(    SB_S)
     |enum2int(    SB_E), enum2int(    SB_E)
     |enum2int(    SB_E), enum2int(SB_TI_E4)
     |enum2int(    SB_E), enum2int(SB_TI_E6)
     |enum2int(SB_TI_N4), enum2int(SB_TO_N4)
     |enum2int(SB_TI_S4), enum2int(SB_TO_S4)
     |enum2int(SB_TI_W4), enum2int(SB_TO_W4)
     |enum2int(SB_TI_E4), enum2int(SB_TO_E4)
     |enum2int(SB_TO_N4), enum2int(    SB_N)
     |enum2int(SB_TO_N4), enum2int(    SB_W)
     |enum2int(SB_TO_N4), enum2int(    SB_E)
     |enum2int(SB_TO_N4), enum2int(SB_TI_N4)
     |enum2int(SB_TO_N4), enum2int(SB_TI_N6)
     |enum2int(SB_TO_S4), enum2int(    SB_S)
     |enum2int(SB_TO_S4), enum2int(    SB_W)
     |enum2int(SB_TO_S4), enum2int(    SB_E)
     |enum2int(SB_TO_S4), enum2int(SB_TI_S4)
     |enum2int(SB_TO_S4), enum2int(SB_TI_S6)
     |enum2int(SB_TO_W4), enum2int(    SB_N)
     |enum2int(SB_TO_W4), enum2int(    SB_S)
     |enum2int(SB_TO_W4), enum2int(    SB_W)
     |enum2int(SB_TO_W4), enum2int(SB_TI_W4)
     |enum2int(SB_TO_W4), enum2int(SB_TI_W6)
     |enum2int(SB_TO_E4), enum2int(    SB_N)
     |enum2int(SB_TO_E4), enum2int(    SB_S)
     |enum2int(SB_TO_E4), enum2int(    SB_E)
     |enum2int(SB_TO_E4), enum2int(SB_TI_E4)
     |enum2int(SB_TO_E4), enum2int(SB_TI_E6)
     |enum2int(SB_TI_N6), enum2int(SB_TO_N6)
     |enum2int(SB_TI_S6), enum2int(SB_TO_S6)
     |enum2int(SB_TI_W6), enum2int(SB_TO_W6)
     |enum2int(SB_TI_E6), enum2int(SB_TO_E6)
     |enum2int(SB_TO_N6), enum2int(    SB_N)
     |enum2int(SB_TO_N6), enum2int(    SB_W)
     |enum2int(SB_TO_N6), enum2int(    SB_E)
     |enum2int(SB_TO_N6), enum2int(SB_TI_N4)
     |enum2int(SB_TO_N6), enum2int(SB_TI_N6)
     |enum2int(SB_TO_S6), enum2int(    SB_S)
     |enum2int(SB_TO_S6), enum2int(    SB_W)
     |enum2int(SB_TO_S6), enum2int(    SB_E)
     |enum2int(SB_TO_S6), enum2int(SB_TI_S4)
     |enum2int(SB_TO_S6), enum2int(SB_TI_S6)
     |enum2int(SB_TO_W6), enum2int(    SB_N)
     |enum2int(SB_TO_W6), enum2int(    SB_S)
     |enum2int(SB_TO_W6), enum2int(    SB_W)
     |enum2int(SB_TO_W6), enum2int(SB_TI_W4)
     |enum2int(SB_TO_W6), enum2int(SB_TI_W6)
     |enum2int(SB_TO_E6), enum2int(    SB_N)
     |enum2int(SB_TO_E6), enum2int(    SB_S)
     |enum2int(SB_TO_E6), enum2int(    SB_E)
     |enum2int(SB_TO_E6), enum2int(SB_TI_E4)
     |enum2int(SB_TO_E6), enum2int(SB_TI_E6)|]));

% ----------------------
%   Agent Constraints
% ----------------------

% Empty cells have no agent.
constraint forall (n in 1..NODES) (sb[n] in {SB_None, SB_Wall} <-> sba[n] = 0);

% The agent of a cell equals the agent of the cell it points at for all nodes except ends.
constraint forall (n in 1..NODES where ends[n] == 0) (sba[n] == sba[next[n]]);

% Agent starts must match.
constraint forall (n in 1..NODES where starts[n] != 0) (sba[n] == starts[n]);

% Agent ends must match.
constraint forall (n in 1..NODES where ends[n] != 0) (sba[n] == ends[n]);

% ----------------------
%   Tunnel Constraints
% ----------------------

% Disallow nested tunnels in the same axis.
constraint forall (y in 1..HEIGHT, x in 1..WIDTH) (
  let {
    set of SB: notNS4 = SB diff {SB_TI_N4, SB_TO_N4, SB_TI_S4, SB_TO_S4};
    set of SB: notWE4 = SB diff {SB_TI_E4, SB_TO_E4, SB_TI_W4, SB_TO_W4};
    set of SB: notNS6 = SB diff {SB_TI_N6, SB_TO_N6, SB_TI_S6, SB_TO_S6};
    set of SB: notWE6 = SB diff {SB_TI_E6, SB_TO_E6, SB_TI_W6, SB_TO_W6};
  } in
  if     sb(y, x) == SB_TI_N4 then forall (yy in nexty(y, x) + 1..y - 1) (sb(yy,  x) in notNS4)
  elseif sb(y, x) == SB_TI_S4 then forall (yy in y + 1..nexty(y, x) - 1) (sb(yy,  x) in notNS4)
  elseif sb(y, x) == SB_TI_W4 then forall (xx in nextx(y, x) + 1..x - 1) (sb( y, xx) in notWE4)
  elseif sb(y, x) == SB_TI_E4 then forall (xx in x + 1..nextx(y, x) - 1) (sb( y, xx) in notWE4)
  elseif sb(y, x) == SB_TI_N6 then forall (yy in nexty(y, x) + 1..y - 1) (sb(yy,  x) in notNS6)
  elseif sb(y, x) == SB_TI_S6 then forall (yy in y + 1..nexty(y, x) - 1) (sb(yy,  x) in notNS6)
  elseif sb(y, x) == SB_TI_W6 then forall (xx in nextx(y, x) + 1..x - 1) (sb( y, xx) in notWE6)
  elseif sb(y, x) == SB_TI_E6 then forall (xx in x + 1..nextx(y, x) - 1) (sb( y, xx) in notWE6) endif);

% Tunnel entrances are followed by a non-empty tile.
constraint forall (y in 1..HEIGHT, x in 1..WIDTH) (
  let {
    set of SB: notNS4 = SB diff {SB_None, SB_TI_N4, SB_TO_N4, SB_TI_S4, SB_TO_S4};
    set of SB: notWE4 = SB diff {SB_None, SB_TI_E4, SB_TO_E4, SB_TI_W4, SB_TO_W4};
    set of SB: notNS6 = SB diff {SB_None, SB_TI_N6, SB_TO_N6, SB_TI_S6, SB_TO_S6};
    set of SB: notWE6 = SB diff {SB_None, SB_TI_E6, SB_TO_E6, SB_TI_W6, SB_TO_W6};
  } in
  if     sb(y, x) == SB_TI_N4 then sb(y - 1, x    ) in notNS4
  elseif sb(y, x) == SB_TI_S4 then sb(y + 1, x    ) in notNS4
  elseif sb(y, x) == SB_TI_W4 then sb(y    , x - 1) in notWE4
  elseif sb(y, x) == SB_TI_E4 then sb(y    , x + 1) in notWE4
  elseif sb(y, x) == SB_TI_N6 then sb(y - 1, x    ) in notNS6
  elseif sb(y, x) == SB_TI_S6 then sb(y + 1, x    ) in notNS6
  elseif sb(y, x) == SB_TI_W6 then sb(y    , x - 1) in notWE6
  elseif sb(y, x) == SB_TI_E6 then sb(y    , x + 1) in notWE6 endif);

% Tunnel exits are preceded by a non-empty tile.
constraint forall (y in 1..HEIGHT, x in 1..WIDTH) (
  let {
    set of SB: notNS4 = SB diff {SB_None, SB_TI_N4, SB_TO_N4, SB_TI_S4, SB_TO_S4};
    set of SB: notWE4 = SB diff {SB_None, SB_TI_E4, SB_TO_E4, SB_TI_W4, SB_TO_W4};
    set of SB: notNS6 = SB diff {SB_None, SB_TI_N6, SB_TO_N6, SB_TI_S6, SB_TO_S6};
    set of SB: notWE6 = SB diff {SB_None, SB_TI_E6, SB_TO_E6, SB_TI_W6, SB_TO_W6};
  } in
  if     sb(y, x) == SB_TO_S4 then sb(y - 1, x    ) in notNS4
  elseif sb(y, x) == SB_TO_N4 then sb(y + 1, x    ) in notNS4
  elseif sb(y, x) == SB_TO_E4 then sb(y    , x - 1) in notWE4
  elseif sb(y, x) == SB_TO_W4 then sb(y    , x + 1) in notWE4
  elseif sb(y, x) == SB_TO_S6 then sb(y - 1, x    ) in notNS6
  elseif sb(y, x) == SB_TO_N6 then sb(y + 1, x    ) in notNS6
  elseif sb(y, x) == SB_TO_E6 then sb(y    , x - 1) in notWE6
  elseif sb(y, x) == SB_TO_W6 then sb(y    , x + 1) in notWE6 endif);

% ----------------------
% Subcircuit Constraints
% ----------------------

% All starts are path of the subcircuit.
constraint forall (a in 1..AGENTS) (next[path(a, Start)] != path(a, Start));

% All ends connect to the start of the next agent.
constraint forall (a in 1..AGENTS) (next[path(a, End)] == path(a mod AGENTS + 1, Start));

% ----------------------
%  Disallowed Patterns
% ----------------------

% u shapes.
array[int, 1..4] of SB: u_shapes =
 [|SB_S, SB_E, SB_E, SB_N
  |SB_N, SB_S, SB_N, SB_W
  |SB_S, SB_N, SB_E, SB_N
  |SB_W, SB_S, SB_N, SB_W
  |SB_S, SB_W, SB_W, SB_N
  |SB_E, SB_S, SB_N, SB_S
  |SB_S, SB_W, SB_S, SB_N
  |SB_E, SB_S, SB_N, SB_E
  |SB_S, SB_W, SB_E, SB_S
  |SB_E, SB_E, SB_N, SB_W
  |SB_S, SB_W, SB_E, SB_E
  |SB_E, SB_N, SB_N, SB_W
  |SB_N, SB_W, SB_E, SB_N
  |SB_E, SB_S, SB_W, SB_W
  |SB_W, SB_W, SB_E, SB_N
  |SB_E, SB_S, SB_S, SB_W|];

% o shapes.
array[int, 1..4] of SB: o_shapes =
 [|SB_E, SB_S, SB_N, SB_W
  |SB_S, SB_W, SB_E, SB_N|];

array[int, 1..4] of SB: disallowed_shapes = u_shapes ++ o_shapes;

constraint forall(y in 1..HEIGHT-1, x in 1..WIDTH-1) (
  forall (p in index_set_1of2(disallowed_shapes)) (
    exists (i in 1..4) (
      [sb(y    , x    ), sb(y    , x + 1), 
       sb(y + 1, x    ), sb(y + 1, x + 1)][i] != disallowed_shapes[p, i])));

% ----------------------
%         Goal
% ----------------------

var 2 * AGENTS..HEIGHT * WIDTH - WALLS: goal = count (n in 1..NODES) (sb[n] in SB diff {SB_None, SB_Wall});
var int: objective = goal;

solve :: seq_search([
  int_search(next, first_fail, indomain_min, complete),
  int_search([enum2int(sb[n]) | n in 1..NODES], first_fail, indomain_min, complete),
  int_search(sba, first_fail, indomain_min, complete)
]) minimize objective;

% ----------------------
%       Output
% ----------------------

% any: initial_data :: output_only = (
%   height: HEIGHT,
%   width:  WIDTH,
%   agents: AGENTS,
%   walls:  walls,
%   path:   path);
  
% any: solution_data :: output_only = (
%   sb: fix(sb)
% );

% output :: vis_server("orthorio.html", initial_data) solution_data;

function string: show_sb(int: y, int: x) =
  let {
    bool: ON = fix(sb[index(y, x)]) == SB_N;
    bool: OS = fix(sb[index(y, x)]) == SB_S;
    bool: OW = fix(sb[index(y, x)]) == SB_W;
    bool: OE = fix(sb[index(y, x)]) == SB_E;
    bool: IN = 1 < y      /\ (fix(sb[index(y - 1, x    )]) in {SB_S, SB_TO_S4, SB_TO_S6});
    bool: IS = y < HEIGHT /\ (fix(sb[index(y + 1, x    )]) in {SB_N, SB_TO_N4, SB_TO_N6});
    bool: IW = 1 < x      /\ (fix(sb[index(y    , x - 1)]) in {SB_E, SB_TO_E4, SB_TO_E6});
    bool: IE = x < WIDTH  /\ (fix(sb[index(y    , x + 1)]) in {SB_W, SB_TO_W4, SB_TO_W6});
  } in
  
  if     fix(sb[index(y, x)]) == SB_None then " "
  elseif fix(sb[index(y, x)]) == SB_Wall then "╳"
  
  elseif IN /\ ON then "?"
  elseif IN /\ OS then "│"
  elseif IN /\ OW then "┘"
  elseif IN /\ OE then "└"

  elseif IS /\ ON then "│"
  elseif IS /\ OS then "?"
  elseif IS /\ OW then "┐"
  elseif IS /\ OE then "┌"

  elseif IW /\ ON then "┘"
  elseif IW /\ OS then "┐"
  elseif IW /\ OW then "?"
  elseif IW /\ OE then "─"

  elseif IE /\ ON then "└"
  elseif IE /\ OS then "┌"
  elseif IE /\ OW then "─"
  elseif IE /\ OE then "?"

  elseif ON then "│"
  elseif OS then "│"
  elseif OW then "─"
  elseif OE then "─"

  elseif fix(sb[index(y, x)]) in {SB_TI_N4, SB_TO_N4, SB_TI_S4, SB_TO_S4} then "║"
  elseif fix(sb[index(y, x)]) in {SB_TI_W4, SB_TO_W4, SB_TI_E4, SB_TO_E4} then "═"

  elseif fix(sb[index(y, x)]) in {SB_TI_N6, SB_TO_N6, SB_TI_S6, SB_TO_S6} then "║"
  elseif fix(sb[index(y, x)]) in {SB_TI_W6, SB_TO_W6, SB_TI_E6, SB_TO_E6} then "═̈"

  else "?"
  
  endif;

output [show_sb(y, x) ++ if x == WIDTH then "\n" else "" endif | y in 1..HEIGHT, x in 1..WIDTH] ++
       [show(goal)];