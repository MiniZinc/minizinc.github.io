include "disjunctive.mzn";

int: jobs;                                    % no of jobs
int: tasks;                                   % no of tasks per job
array [1..jobs,1..tasks] of int: d;           % task durations
int: total = sum(i in 1..jobs, j in 1..tasks) 
             (d[i,j]);                        % total duration
int: digs = ceil(log(10.0,int2float(total))); % digits for output
array [1..jobs,1..tasks] of var 0..total: s;  % start times
var 0..total: end;                            % total end time


constraint %% ensure the tasks occur in sequence
    forall(i in 1..jobs) (
        forall(j in 1..tasks-1) 
            (s[i,j] + d[i,j] <= s[i,j+1]) /\
        s[i,tasks] + d[i,tasks] <= end
    );

constraint %% ensure no overlap of tasks
    forall(j in 1..tasks) (
        disjunctive([s[i,j] | i in 1..jobs], [d[i,j] | i in 1..jobs])
    );

solve minimize end;

output ["end = ", show(end), "\n"] ++
       [ show_int(digs,s[i,j]) ++ " " ++ 
         if j == tasks then "\n" else "" endif |
         i in 1..jobs, j in 1..tasks ];
