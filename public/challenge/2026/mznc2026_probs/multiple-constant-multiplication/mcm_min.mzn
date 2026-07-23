include "globals.mzn";

/* DATA */
int: N; 
int: w;
array [int] of int: T;
int: nb_target = length(T);

/* VARIABLES */
int: l=1;
int: r=2;
array [1..N, l..r] of var 0..pow(2,w)-1 : cai;
array [1..N] of var 0..1 : ua;
constraint forall (a in 1..N-1)
  (ua[a] >= ua[a+1]);
array [0..N] of var 0..pow(2,w)-1 : ca;
constraint forall (a in 1..N)
  (ca[a] mod 2 = ua[a]);
array [1..N] of var 0..pow(2,w+1) : cansh;
array [1..N, l..r] of var -pow(2,w+1)..pow(2,w+1) : caishsg;
array [1..N, l..r] of var -pow(2,w)..pow(2,w) : kai;
set of int: powers_of_two = {-pow(2, s) | s in 0..w} union {pow(2, s) | s in 0..w};
constraint forall (a in 1..N) 
  (kai[a,l] in powers_of_two);
constraint forall (a in 1..N) 
  (kai[a,r] in {-1,1});
array [1..N] of var -pow(2,w)..pow(2,w) : ka;
constraint forall (a in 1..N) 
  (ka[a] in powers_of_two);
array [1..N, l..r] of var 0..N-1 : indai;
constraint forall (a in 1..N, i in l..r)
  (indai[a,i] < a);

/* CONSTRAINTS */
constraint forall (a in 1..N)
  (ka[a] * ca[a] = cansh[a]);
constraint forall (a in 1..N, i in l..r)
  (kai[a,i] * cai[a,i] = caishsg[a,i]);
constraint forall (a in 1..N)
  (caishsg[a,l] + caishsg[a,r] = cansh[a]);
constraint forall (a in 1..N, i in l..r)
  (ua[a] == 0 \/ cai[a,i] = ca[indai[a,i]]);
constraint forall (a in 1..N)
  (kai[a,l] > 0 \/ kai[a,r] > 0);
constraint forall (a in 1..N)
  (not (ka[a] + kai[a,l] in {0, 2}));
constraint all_different_except_0 (ca);
constraint forall (j in 1..nb_target)
  (exists (a in 1..N)(ca[a] == T[j]));
constraint forall (a in 1..N)
  (ua[a] == 1 /\ count(indai, a) = 0 -> member(T, ca[a]));
constraint (ca[0] = 1);
constraint forall(a in 1..N)
  ((ua[a] == 0 /\ ca[a] == 0 /\ cai[a,l] == 0 /\ cai[a,r] == 0 /\ caishsg[a,l] == 0 /\ caishsg[a,r] == 0 /\ cansh[a] == 0) \/
  (ua[a] != 0 /\ ca[a] != 0 /\ cai[a,l] != 0 /\ cai[a,r] != 0 /\ caishsg[a,l] != 0 /\ caishsg[a,r] != 0 /\ cansh[a] != 0));
  
/* SOLVER */
var int: objective = count(ua,1);
solve :: seq_search([
  int_search(ua, first_fail, indomain_max, complete),
  int_search([indai[a,i] | a in 1..N, i in l..r], first_fail, indomain_min, complete),
  int_search([ka[a] | a in 1..N], first_fail, indomain_min, complete),
  int_search([kai[a,i] | a in 1..N, i in l..r], first_fail, indomain_min, complete),
  int_search([ca[a] | a in 1..N], first_fail, indomain_min, complete),
  int_search([cai[a,i] | a in 1..N, i in l..r], first_fail, indomain_min, complete)
]) minimize objective;

/* OUTPUT */
output ["ca = \(ca)/"];
output ["cai = \(cai)/"];
output ["ka = \(ka)/"];
output ["kai = \(kai)/"];
output ["indai = \(indai)/"];
output ["N = \(count(ua,1))"];
