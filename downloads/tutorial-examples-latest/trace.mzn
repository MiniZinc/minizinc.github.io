
int:n;
set of int: NODES = 1..n;
array [NODES,NODES] of bool: adj;

%int:count = sum([ 1 | i,j,k in NODES where trace("("++show(i)++","++show(j)++","++show(k)++")",i<j /\j<k /\ adj[i,j] /\ adj[i,k] /\ adj[j,k]) ]);


int: count = sum( i,j in NODES where i < j /\ adj[i,j])(sum([1 | k in NODES where trace("("++show(i)++","++show(j)++","++show(k)++")",j < k /\ adj[i,k] /\ adj[j,k])]));

bool: t = true;
bool: f = false;
n = 4;
adj = [| f, t, t, f
       | t, f, t, f
       | t, t, f, t
       | f, f, t, f |];
%n = 10; 
%adj = [| f, t, f, f, t, f, f, f, f, f 
%      | f, f, t, f, f, f, f, f, t, f
%      | f, f, f, f, f, f, f, t, f, f
%      | t, f, f, f, f, t, f, f, f, f
%      | f, f, t, f, f, f, f, f, t, f
%      | f, f, f, f, f, f, f, t, f, f
%      | t, f, f, f, f, t, f, f, f, f
%      | f, f, t, t, t, f, f, f, f, f
%      | f, f, f, f, f, f, f, f, f, t
%      | t, t, f, f, f, f, f, f, t, t |];
     

solve satisfy;
output [show(count)];