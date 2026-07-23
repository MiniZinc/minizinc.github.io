include "globals.mzn";

% Author: Patrick Paetzold
%
% These MiniZinc models are adapted from the model presented in the paper
% “RectEuler: Visualizing Intersecting Sets using Rectangles”
% https://doi.org/10.1111/cgf.14814
%
% A demo of the diagrams generated in the paper is available online at:
% https://rectvis.de/
%
% The model automatically solves a layout problem for set visualization using
% Euler diagrams. Euler diagrams represent relationships between sets using
% closed shapes — rectangles in this case — where overlaps denote shared set
% membership and separate regions denote distinct set memberships. The main
% challenge is to construct diagrams that correctly encode the required set
% intersections while remaining readable, compact, and visually clear.
%
% This model adapts the original formulation by avoiding the manual encoding
% of all pairwise rectangle exclusions and instead expressing them using
% diffn constraints.

% -----------------------------
% Data
% -----------------------------

int: n_elements;
set of int: ELEMENT = 1..n_elements;

array[ELEMENT] of int: w;
array[ELEMENT] of int: h;

int: n_container;
set of int: CONT = 1..n_container;

array[CONT] of int: w_container_name;
array[CONT] of int: h_container_name;

array[CONT, ELEMENT] of bool: in_container;


int: n_group;
set of int: GROUP = 1..n_group;

int: n_non_overlap_container_groups;
set of int: NON_OVERLAP_GROUP = 1..n_non_overlap_container_groups;

array[NON_OVERLAP_GROUP, CONT] of bool: non_overlap_container_member;

array[NON_OVERLAP_GROUP] of set of CONT: non_overlap_containers = [{ c | c in CONT where non_overlap_container_member[g, c] }|g in NON_OVERLAP_GROUP];




array[ELEMENT] of GROUP: element_group;

% -----------------------------
% Fixed membership sets
% -----------------------------

array[CONT] of set of ELEMENT: rects_in_cont =  [ { r | r in ELEMENT where in_container[c,r] } | c in CONT ];


% -----------------------------
% Group structure
% -----------------------------

array[GROUP] of set of ELEMENT: elements_in_group =  [ { e | e in ELEMENT where element_group[e] = g } | g in GROUP ];

% Minimum gap between container boundaries
int: min_container_dist = 5;

% -----------------------------
% Placement bounds
% -----------------------------

int: UBX = sum(w);
int: UBY = sum(h);

array[ELEMENT] of var 0..UBX: x;
array[ELEMENT] of var 0..UBY: y;

var 0..UBX: mx;
var 0..UBY: my;



% -----------------------------
% Bounding box of each container
% -----------------------------

array[CONT] of var 0..UBX: cx_min;
array[CONT] of var 0..UBY: cy_min;
array[CONT] of var 0..UBX: cx_max;
array[CONT] of var 0..UBY: cy_max;

array[CONT] of var 0..UBX: c_width;
array[CONT] of var 0..UBY: c_height;




% -----------------------------
% Non-overlap only within groups of Elements
% -----------------------------

constraint
  forall(g in GROUP where card(elements_in_group[g]) > 1) (
    let {
      int: k = card(elements_in_group[g]);
      array[1..k] of int: rr = [r | r in elements_in_group[g]],
      array[1..k] of var int: gx = [x[r] | r in rr],
      array[1..k] of var int: gy = [y[r] | r in rr],
      array[1..k] of int: gw = [w[r] | r in rr],
      array[1..k] of int: gh = [h[r] | r in rr]
    } in
      diffn(gx, gy, gw, gh)
  );






% strict subset test
predicate strict_subset(set of int: a, set of int: b) =  a subset b /\ card(a) < card(b);

% seperate a and b by at least d
predicate separated(var int: a, var int: b, int: d) =  a + d <= b \/ b + d <= a;


% -----------------------------
% Convenience to have the size of each container as variable
% -----------------------------
constraint
  forall(c in CONT) (
      c_width[c] = cx_max[c] - cx_min[c] /\
      c_height[c] = cy_max[c] - cy_min[c]
 );

% -----------------------------
% Constraints for each container to be at least as large as its label
% -----------------------------
 constraint
  forall(c in CONT) (
      c_width[c] >= w_container_name[c] /\
      c_height[c] >= h_container_name[c]
 );


% -----------------------------
% Place elements in containers
% -----------------------------
  constraint
    forall(c in CONT, r in ELEMENT where in_container[c,r]) (
        cx_min[c] + min_container_dist <= x[r]  /\
        cy_min[c] + min_container_dist <= y[r]  /\
        cx_max[c]  >= x[r] + w[r] + min_container_dist /\
        cy_max[c]  >= y[r] + h[r] +min_container_dist/\
        (x[r]>= cx_min[c]+w_container_name[c] \/ y[r]>= cy_min[c]+h_container_name[c])

    );


% -----------------------------
% Prevent container labels from overlapping
% -----------------------------
constraint
  let {
    array[CONT] of var int: gx = [cx_min[c] | c in CONT],
    array[CONT] of var int: gy = [cy_min[c] | c in CONT],
    array[CONT] of int: gw = [w_container_name[c] | c in CONT],
    array[CONT] of int: gh = [h_container_name[c] | c in CONT]
 } in
    diffn(gx, gy, gw, gh);


constraint mx = max(c in CONT)(cx_max[c] - cx_min[c]);
constraint my = max(c in CONT)(cy_max[c]- cy_min[c]);

constraint min(c in CONT)(cx_min[c]) = 0;
constraint min(c in CONT)(cy_min[c]) = 0;

% -----------------------------
% If an element is NOT part of a container,
% it must be completely outside that container
% -----------------------------

constraint
  forall(c in CONT, e in ELEMENT where not in_container[c,e]) (
      x[e] + w[e] + min_container_dist <= cx_min[c] \/
      cx_max[c]+ min_container_dist <= x[e] \/
      y[e] + h[e]+ min_container_dist <= cy_min[c] \/
      cy_max[c]+ min_container_dist <= y[e]
  );

% -----------------------------
% Container relations
%
%
% 1) If c1 is a strict subset of c2: place c1 inside c2
%    with distance min_container_dist to every side.
%
% 2) If c2 is a strict subset of c1: place c2 inside c1
%    with distance min_container_dist to every side.
%
% 3) If c1 and c2 are have a common element and are not subsets: keep their borders each other
%    with distance min_container_dist.
% -----------------------------

constraint
  forall(c1, c2 in CONT where c1 < c2 /\  card(rects_in_cont[c1] intersect rects_in_cont[c2]) > 0) (
      let {
        set of ELEMENT: s1 = rects_in_cont[c1],
        set of ELEMENT: s2 = rects_in_cont[c2]
      } in

      if strict_subset(s1, s2) then
        cx_min[c2] + min_container_dist <= cx_min[c1] /\
        cy_min[c2] + min_container_dist <= cy_min[c1] /\
        cx_max[c1] + min_container_dist <= cx_max[c2] /\
        cy_max[c1] + min_container_dist <= cy_max[c2]
      elseif strict_subset(s2, s1) then
        cx_min[c1] + min_container_dist <= cx_min[c2] /\
        cy_min[c1] + min_container_dist <= cy_min[c2] /\
        cx_max[c2] + min_container_dist <= cx_max[c1] /\
        cy_max[c2] + min_container_dist <= cy_max[c1]
       else
        separated(cx_min[c1], cx_min[c2], min_container_dist) /\
        separated(cx_min[c1], cx_max[c2], min_container_dist) /\
        separated(cx_max[c1], cx_min[c2], min_container_dist) /\
        separated(cx_max[c1], cx_max[c2], min_container_dist) /\
        separated(cy_min[c1], cy_min[c2], min_container_dist) /\
        separated(cy_min[c1], cy_max[c2], min_container_dist) /\
        separated(cy_max[c1], cy_min[c2], min_container_dist) /\
        separated(cy_max[c1], cy_max[c2], min_container_dist)
      endif
  );


% -----------------------------
% Containers that do not share membership sets
% -----------------------------

constraint forall(
	group in non_overlap_containers
	where card(group) >= 2
) (
	diffn([cx_min[c] | c in group], [cy_min[c] | c in group], [c_width[c] + min_container_dist | c in group], [c_height[c] + min_container_dist | c in group])
);


var 0..UBX: d;

constraint d =abs(mx-my);

% -----------------------------
% Objective
% -----------------------------

var int: total_container_perimeter =  sum(c in CONT)(c_width[c] + c_height[c]);

var int: enclosing = mx+my + d;

solve :: seq_search([
  int_search(x, first_fail, indomain_min, complete),
  int_search(y, first_fail, indomain_min, complete),
  int_search(cx_min, first_fail, indomain_min, complete),
  int_search(cy_min, first_fail, indomain_min, complete),
  int_search(cx_max, first_fail, indomain_min, complete),
  int_search(cy_max, first_fail, indomain_min, complete)
]) minimize total_container_perimeter + enclosing;

