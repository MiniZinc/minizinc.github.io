include "partition_set.mzn";
int: weeks;
int: groups;
int: size;
int: ngolfers = groups*size;

array[1..weeks,1..groups] of var set of 1..ngolfers: Sched;

% constraints
constraint 
    forall (i in 1..weeks-1) (
               Sched[i,1] < Sched[i+1,1]
    ) /\
    forall (i in 1..weeks, j in 1..groups) (
           card(Sched[i,j]) = size
        /\ forall (k in j+1..groups) (
                Sched[i,j] < Sched[i,k]
             /\ Sched[i,j] intersect Sched[i,k] = {}
           )
    ) /\
    forall (i in 1..weeks) (
          partition_set([Sched[i,j] | j in 1..groups], 1..ngolfers)
       /\ forall (j in 1..groups-1) (
              Sched[i,j] < Sched[i,j+1]
          )
    ) /\
    forall (i in 1..weeks-1, j in i+1..weeks) (
        forall (x in 1..groups, y in 1..groups) (
            card(Sched[i,x] intersect Sched[j,y]) <= 1
        )
    );
% symmetry
  constraint 
    % Fix the first week %
    forall (i in 1..groups, j in 1..size) (
        ((i-1)*size + j) in Sched[1,i]
    ) /\
    % Fix first group of second week %
    forall (i in 1..size) (
        ((i-1)*size + 1) in Sched[2,1]
    ) /\
    % Fix first 'size' players
    forall (w in 2..weeks, p in 1..size) (
        p in Sched[w,p]
    );
  
solve :: set_search([Sched[i,1] | i in 1..weeks] ++
                        [Sched[i,j] | i in 1..weeks, j in 2..groups],
                        input_order, indomain_min, complete) 
         satisfy;

output [ show(Sched[i,j]) ++ " " ++
         if j == groups then "\n" else "" endif |
         i in 1..weeks, j in 1..groups ];
