% Copyright 2026 Ignace Bleukx

% Permission is hereby granted, free of charge, to any person obtaining a copy of 
% this software and associated documentation files (the “Software”), to deal in the Software 
% without restriction, including without limitation the rights to use, copy, modify, merge, 
% publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
% to whom the Software is furnished to do so, subject to the following conditions:

% The above copyright notice and this permission notice shall be included in all copies or 
% substantial portions of the Software.

% THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
% BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
% NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
% DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
% OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


% Workforce Allocation and Scheduling problem in Minizinc.
% Given a set of teams and tasks, allocate each task to exactly one team, and schedule the tasks in time.
% Teams have to be compatible with the tasks they are assigned to; 
%   they can only do a single task at a time and can only do tasks if they are available according to their calendar;
%   teams have to be compatible with the tasks they are assigned to.
% 
% By-level optimization problem with objectives:
% - minimize the number of teams used
% - minimize the unfairness between teams (difference in max/min time worked)
%
% Model written by Ignace Bleukx, loosely based on the CPMpy model for the paper:
%   Bleukx, I., Boumazouza, R., Guns, T., Laage, N. and Poveda, G.,
%   Modeling and explaining an industrial workforce allocation and scheduling problem. 
%   CP 2025, Leibniz International Proceedings in Informatics, 340.
%
% Contact: ignace.bleukx@kuleuven.be

include "globals.mzn";

enum Team;
enum Task;

int: horizon;
set of int: Time = 0..horizon;

array[Task] of int: duration;
array[Task] of int: released;
array[Task] of int: due;
array[Task, Team] of int: compatible;
array[int] of set of Task: same_allocation;
array[int] of record(Team: team, Time: start_unavailable, Time: dur_unavailable): calendars;
array[int] of record(Task: task, set of Task: successors): successors;

array[Task] of var Team: Alloc;  % Team allocated to each task
array[Task] of var Time: Start; % start time of each task

array[Task] of int: original_start; % unused for this variant of the problem; see allocation_model.mzn

% Tasks in the same same_allocation group should be assigned to the same team
constraint forall(group in same_allocation)(
    all_equal([Alloc[task] | task in group])
);

% Teams should be compatible with the tasks they are assigned to
constraint forall(team in Team, task in Task)(
    compatible[task, team] == 0 -> (Alloc[task] != team)
);

% Tasks assigned to the same team should not overlap
constraint forall(team in Team)(
    disjunctive([Start[task] | task in Task where Alloc[task] == team] ++ [cal.start_unavailable | cal in calendars where cal.team == team], 
                [duration[task] | task in Task] ++ [cal.dur_unavailable | cal in calendars where cal.team == team])
);

% Adhere to release date and due date
constraint forall(task in Task)(
    (released[task] <= Start[task]) /\ (Start[task] + duration[task]<= due[task])
);

% Adhere to precedence constraints
constraint forall(succ_record in successors, other_task in succ_record.successors)(
    Start[succ_record.task] + duration[succ_record.task] <= Start[other_task]
);

% A team is used if at least one task is assigned to it
var set of Team: UsedTeams = {team | team in Team where exists([Alloc[task] == team | task in Task])};
array[Team] of var opt int: TimeWorked = [sum([duration[task] | task in Task where Alloc[task] == team]) | team in UsedTeams];

% Redundant constraint to strengthen the model
constraint redundant_constraint(card(UsedTeams) == nvalue(Alloc));

% Bi-objective optimization problem:
% - minimize the number of teams used
% - minimize the unfairness between teams (difference in max/min time worked)
var int: objective = sum(duration) * card(UsedTeams)
                     + (max(TimeWorked) - min(TimeWorked));
solve :: seq_search([
    int_search([enum2int(Alloc[t]) | t in Task], first_fail, indomain_min, complete),
    int_search(Start, first_fail, indomain_min, complete)
]) minimize objective;

output [ "Number of used teams:", show(card(UsedTeams)), 
        "\nAllocation: ", show(Alloc),
        "\nStart: ", show(Start),
       "\nTime worked: ", show(TimeWorked), 
       "\nDispersion: ", show(max(TimeWorked) - min(TimeWorked))];