%-----------------------------------------------------------------------------%
% Model example for Resource-Constrained Project Scheduling Problems (RCPSP)
%
% A RCPSP consists of resources, tasks, and precedences between some tasks 
% where resources have of a specific capacity and tasks need some capacity of 
% some resource to be executed.
% Here, we consider resources with a constant discrete capacity over time and
% tasks with a constant discrete duration and resource requirements.
% The objective is to find a optimal schedule with respect to the earliest end
% time of the schedule where the tasks' resource requirements do not exceed
% the resource capacities to any time and each precedence is met.
%
%-----------------------------------------------------------------------------%

include "globals.mzn";

%-----------------------------------------------------------------------------%
% Model parameters.
%

% Resource parameters
%
int: n_res;                                    % The number of resources
array [ 1..n_res ] of int: rc;                 % The resource capacities

% Task parameters
%
int: n_tasks;                                  % The number of tasks
array [ 1..n_tasks ] of int: d;                % The task durations
int: sum_d = sum( i in 1..n_tasks ) (d[i]);    % The total duration
array [ 1..n_res, 1..n_tasks ] of int: rr;     % The resource requirements
array [ 1..n_tasks ] of set of int: suc;       % The task successors

%-----------------------------------------------------------------------------%
% Model variables.
%
array [ 1..n_tasks ] of var 0..sum_d: s;       % The start times
var 0..sum_d: end;                             % The total end time (makespan)


%-----------------------------------------------------------------------------%
% Constraints.
%
% successor constraints
constraint
   forall ( i in 1..n_tasks, j in suc[i] )
   (
         s[i] + d[i] <= s[j]
   );

% cumulative resource constraints
constraint
   forall ( i in 1..n_res )
   (
      cumulative( 
         s,
         d, 
         [ rr[i,j] | j in 1..n_tasks ], 
         rc[i] 
      )
   );

% makespan constraints
constraint
   forall ( i in 1..n_tasks )
   (
      s[i] + d[i] <= end
   );

%-----------------------------------------------------------------------------%
% Objective.
%
solve
   :: int_search( s, "smallest", "indomain_min", "complete" )
   minimize end;

output [
   "s = ",
   show( s ),
   ";\n",
   "end = ",
   show( end ),
   ";\n"
];

%-----------------------------------------------------------------------------%
%%% EOF %%%

