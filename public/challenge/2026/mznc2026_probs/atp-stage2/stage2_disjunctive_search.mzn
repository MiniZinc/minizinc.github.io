% MIT License
%
% Copyright (c) 2026 Felix Winter
%
% Permission is hereby granted, free of charge, to any person obtaining a copy
% of this software and associated documentation files (the "Software"), to deal
% in the Software without restriction, including without limitation the rights
% to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
% copies of the Software, and to permit persons to whom the Software is
% furnished to do so, subject to the following conditions:
%
% The above copyright notice and this permission notice shall be included in all
% copies or substantial portions of the Software.
%
% THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
% IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
% FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
% AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
% LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
% OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
% SOFTWARE.

% Changes by MiniZinc Challenge Organizers:
% - Add demand_end_job and demand_tardiness to search annotation

include "circuit.mzn";
include "arg_sort.mzn";
include "disjunctive.mzn";

% input
int: program_setup_time;
int: sequence_setup_time;

int: reference_makespan;
int: reference_tardiness;

int: num_jobs;
set of int: jobs = 1..num_jobs;

int: num_products;
set of int: products = 1..num_products;

int: num_programs;
set of int: programs = 1..num_programs;

array[jobs] of programs: job_program;
array[jobs] of int: job_time;
array[jobs, products] of int: job_qty;

array[demands] of set of int: demand_jobs = [{j | j in jobs where job_qty[j, demand_product[d]] > 0} | d in demands];

int: num_demands;
set of int: demands = 1..num_demands;
array[demands] of int: demand_duedate;
array[demands] of int: total_demand_qty;
array[demands] of products: demand_product;


int: lower_bound_end = sum(j in jobs)(job_time[j]) + (num_jobs-1)*sequence_setup_time;
int: upper_bound_end = sum(j in jobs)(job_time[j]) + (num_jobs-1)*program_setup_time;

int: ub_tardiness = sum(d in demands)(max([0,upper_bound_end-demand_duedate[d]]));

% variables
array[0..num_jobs] of var 0..num_jobs: job_successor;
array[jobs] of var 0..upper_bound_end: job_end;
array[jobs] of var 0..upper_bound_end: job_start;
array[demands] of var jobs: demand_end_job;
array[demands] of var 0..upper_bound_end: demand_end;
array[demands] of var 0..max([max([0,upper_bound_end-demand_duedate[d]]) | d in demands]): demand_tardiness;
var 0..ub_tardiness: tardiness;
var lower_bound_end..upper_bound_end: makespan; 

array[jobs, products] of var 0..max([sum([job_qty[j,p] | j in jobs]) | p in products]): produced_qty;


% constraints
constraint(
  circuit(job_successor)
  /\
  disjunctive(job_start, job_time)
);
constraint forall(j in jobs where job_successor[0] = j)(
  job_end[j] = job_time[j]
  /\
  job_start[j] = 0
);
constraint forall(j in jobs)(
  job_end[j] = job_start[j] + job_time[j]
);
constraint forall(j1 in jobs, j2 in jobs where job_program[j1] != job_program[j2] /\ job_successor[j1] = j2)(
  job_start[j2] = job_end[j1] + program_setup_time
);
constraint forall(j1 in jobs, j2 in jobs where job_program[j1] = job_program[j2] /\ job_successor[j1] = j2)(
  job_start[j2] = job_end[j1] + sequence_setup_time
);

constraint forall(j in jobs where job_successor[0] = j)(
  forall(p in products)(produced_qty[j,p] = job_qty[j,p])
);
constraint forall(j1 in jobs, j2 in jobs where job_successor[j1] = j2)(
  forall(p in products)(produced_qty[j2,p] = produced_qty[j1,p] + job_qty[j2,p])
);

constraint forall(j in jobs, d in demands where demand_end_job[d] = j /\ job_qty[j,demand_product[d]] > 0)(
  produced_qty[j,demand_product[d]] >= total_demand_qty[d]
  /\
  demand_end[d] = job_end[j]
);
constraint forall(j in jobs, d in demands where job_qty[j,demand_product[d]] = 0)(
  demand_end_job[d] != j
);

% tardiness
constraint forall(d in demands)(
  demand_tardiness[d] >= demand_end[d] - demand_duedate[d]
);
constraint(
  tardiness = sum(d in demands)(demand_tardiness[d])
);

% makespan
constraint forall(j in jobs)(
  makespan >= job_end[j]
);

% objective
var int: objective = tardiness + makespan;
solve::search minimize objective;

ann : search = seq_search([
  int_search(job_end, smallest, indomain_min, complete),
  int_search(demand_end_job, smallest, indomain_min, complete),
  int_search(demand_tardiness, smallest, indomain_min, complete)
]);

output [
"\njob_successor = " ++ show(job_successor) ++
"\njob_end = " ++ show(job_end) ++
"\ndemand_end_job = " ++ show(demand_end_job) ++
"\ndemand_end = " ++ show(demand_end) ++
"\ndemand_tardiness = " ++ show(demand_tardiness) ++
"\ntardiness = " ++ show(tardiness) ++
"\nmakespan = " ++ show(makespan) ++
"\nproduced_qty = " ++ show(produced_qty) ++
"\njob_pattern = " ++ show(arg_sort(job_end))
];