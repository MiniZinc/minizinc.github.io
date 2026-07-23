% Copyright 2026 Siemens AG Österreich and Benedetta Strizzolo and Francesco Zuccato and Thomas Sergeys
%Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
%The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
%THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

% ENERGY-AWARE DOUBLE-FLEXIBLE JOB SHOP SCHEDULING WITH MACHINE MODES AND SETUP TIMES
% Authors: Benedetta Strizzolo, Francesco Zuccato, Richard Comploi-Taupe, Thomas Sergeys
% Originators of the problem definition: Martin Hackhofer (voestalpine High Performance Metals GmbH) and the whole project team of the research project SAELING (SAving Energy by Learning and ImproviNG logic-based optimization models)
% https://aics.aau.at/saeling/
% Reference for the problem specification:
%   Zuccato, F., Rodler, P., Friedrich, G., Schekotihin, K. and Comploi-Taupe, R.,
%   Energy-Aware Double-Flexible Job Shop Scheduling with Machine Modes and Setup Times:
%   A Real-World Industrial Case Study using Constraint Programming.
%   ECAI Workshop on AI-based Planning for Complex Real-World Applications (CAIPI’25),
%   CEUR Workshop Proceedings, 4103.
% Model loosely based on the CPMpy model for the paper:
%   Bleukx, I., Boumazouza, R., Guns, T., Laage, N. and Poveda, G.,
%   Modeling and explaining an industrial workforce allocation and scheduling problem. 
%   CP 2025, Leibniz International Proceedings in Informatics, 340.
% and the Minizinc model from https://github.com/ML-KULeuven/Explainable-Workforce-Scheduling/blob/minizinc/minizinc/scheduling_model.mzn
% This work was supported by FFG, contract FO999910235.

% Change by MiniZinc Challenge Organisers:
% - Mark proc_energy_wh, auxiliar_energy_wh, idle_energy_wh, and idle_energy_wh as ::output_only


include "disjunctive_opt.mzn";

%% ENUMS
% NOTE: enums are indexed from 1 in minizinc
enum OperationType = {load, cut, unload};

% -------------------------------------------------------------------------- %
%                                 Parameters                                 %
% -------------------------------------------------------------------------- %

%%% GENERATION PARAMETERS
int: instance_seed;
int: num_jobs;
int: num_machines;
int: num_workers;
int: num_workers_per_machine;

%%% DOMAINS
int: max_horizon;
int: min_horizon;
int: max_total_energy_Wh;
int: max_total_tardiness;
int: min_total_energy_Wh;
int: min_total_tardiness;
int: min_auxiliar_energy_Wh;
int: max_auxiliar_energy_Wh;
int: min_idle_energy_Wh;
int: max_idle_energy_Wh;
int: min_processing_energy_Wh;
int: max_processing_energy_Wh;

%%% STATISTICS
int: num_cuts;
int: num_operations;
int: num_modes;
int: num_st;
int: num_tt;

%%% SOLVING CONSTANTS
int: factory_power_auxiliar_equipments_W;

% -------------------------------------------------------------------------- %
%                                   Ranges                                   %
% -------------------------------------------------------------------------- %

%%% DATA INPUT
%%% ITERATORS
set of int: rngCuts = 1..num_cuts;
set of int: rngJobs = 1..num_jobs;
set of int: rngMchs = 1..num_machines;
set of int: rngWrks = 1..num_workers;
set of int: rngWrksMchs = 1..num_workers_per_machine*num_machines;
set of int: rngOp = 1..num_operations;
set of int: rngMd = 1..num_modes;
set of int: rngSetTimes = 1..num_st;
set of int: rngTrTimes = 1..num_tt;
set of int: rngLCUs = 1..num_cuts; % See later for definition.

% -------------------------------------------------------------------------- %
%                                  Records                                   %
% -------------------------------------------------------------------------- %

type Job = record(
  int: job_id,
  int: deadline
);

type Cut = record(
  int: cut_id,            % cut id
  float: cut_depth_mm, 	  % cut depth (useless)
  float: cut_channel_mm,  % cut channel (useless)
  float: in_weight_kg 	  % weight of the input material (useless)
);

type Operation = record(
  int: op_id,             % operation id
  int: cut_id,            % cut id
  int: job_id,            % job id
  int: pos_in_job,        % position in job
  int: op_type            % type in {load=0, cutting=1, unload=2}
);

type Mode = record(
  int:   cut_id,		    % cut id
  int:   mch_id, 	      % machine id
  int:   mode_id,       % mode id
  float: feed_rate, 		% feed rate (useless)
  float: blade_speed, 	% blade speed (useless)
  int:   time,		      % processing time
  int: energy_Wh        % energy consumed for processing with this mode [Wh]
);

type Machine = record(
  int:     mch_id, 	  % machine id
  string:  mch_type,	% "basic" or "with-feeder" (useless)
  int:   idle_power_W	% required power when idle [watt]
);

type WorkerMachine = record(
  int: worker_id,		% worker id
  int: machine_id		% machine id
);

type SetupTime = record(
  int: op_id,
  int: time
);

% NOTE: transport time is assumed to be machine independent
type TransportTime = record(
  int: op_id_from,
  int: op_id_to,
  int: time
);

% LCU = Load + Cut + Unload
% Operation = Load v Cut v Unload
% Job = one or more LCUs
type LCU = record(int: load, int: cut, int: unload);

% -------------------------------------------------------------------------- %
%                                   Arrays                                   %
% -------------------------------------------------------------------------- %

array[rngCuts] of Cut: cuts;
array[rngJobs] of Job: jobs;
array[rngMchs] of Machine: machines;
array[rngMd] of Mode: modes;
array[rngOp] of Operation: operations;
array[rngSetTimes] of SetupTime: setup_times;
array[rngTrTimes] of TransportTime: transport_times;
array[rngWrksMchs] of WorkerMachine: workers_machines;
array[rngLCUs] of LCU: lcus = [
  (
    load: min([operations[o].op_id | o in rngOp
      where operations[o].cut_id == cuts[k].cut_id /\
            int_to_OperationType(operations[o].op_type) == load]),
    cut: min([operations[o].op_id | o in rngOp
      where operations[o].cut_id == cuts[k].cut_id /\
            int_to_OperationType(operations[o].op_type) == cut]),
    unload: min([operations[o].op_id | o in rngOp
      where operations[o].cut_id == cuts[k].cut_id /\
            int_to_OperationType(operations[o].op_type) == unload])
  )
  | k in rngLCUs
];

% ------------------------------ Helper arrays ----------------------------- %

% convert 0-based int op_type from data to OperationType enum (1-based)
function OperationType: int_to_OperationType(int: i) = to_enum(OperationType, i + 1);

array[rngLCUs] of int: job_of_lcu = [min([operations[o].job_id | o in rngOp where operations[o].op_id == lcus[k].cut]) | k in rngLCUs];
array[rngLCUs] of int: pos_in_job_of_lcu = [min([operations[o].pos_in_job | o in rngOp where operations[o].op_id == lcus[k].cut]) | k in rngLCUs];

% Int-only mode helper arrays (avoid variable-indexing into records with float fields).
array[rngMd] of int: mode_mch_id = [modes[md].mch_id | md in rngMd];
array[rngMd] of int: mode_time = [modes[md].time | md in rngMd];
array[rngMd] of int: mode_energy_wh = [modes[md].energy_Wh | md in rngMd];

% Direct lookup by operation id (op_id): setup_time_by_op_id[op_id].
% Only load/unload operations have setup; all other op_ids map to 0.
% Index 0 is kept for convenience/default and maps to 0.
array[0..num_operations] of int: setup_time_by_op_id =
  array1d(0..num_operations, [
    if exists(o in rngOp)(
         operations[o].op_id == op_id /\
         (int_to_OperationType(operations[o].op_type) == load \/
          int_to_OperationType(operations[o].op_type) == unload)
       )
    then
      sum(st in rngSetTimes where setup_times[st].op_id == op_id)(setup_times[st].time)
    else
      0
    endif
  | op_id in 0..num_operations ]);

% Lookup from operation id to the corresponding LCU index.
array[0..num_operations] of int: lcu_by_op_id =
  array1d(0..num_operations, [
    if op_id == 0 then
      0
    else
      min([k | k in rngLCUs where op_id in {lcus[k].load, lcus[k].cut, lcus[k].unload}])
    endif
  | op_id in 0..num_operations ]);

array[rngLCUs] of set of int: eligible_modes_for_lcu = [
  { md | md in rngMd where modes[md].cut_id == operations[lcus[k].cut].cut_id }
  | k in rngLCUs
];
array[rngLCUs] of set of int: eligible_machines_for_lcu = [
  { mode_mch_id[md] | md in eligible_modes_for_lcu[k] }
  | k in rngLCUs
];

% Worker-machine compatibility from data (1 iff worker can operate that machine).
array[rngWrks, rngMchs] of int: compatible_worker_machine =
  array2d(rngWrks, rngMchs, [
    bool2int(exists(wm in rngWrksMchs)(
      workers_machines[wm].worker_id == w /\
      workers_machines[wm].machine_id == machines[m].mch_id
    ))
  | w in rngWrks, m in rngMchs ]);

int: max_mode_time = max([ modes[md].time | md in rngMd ]);
int: max_setup_time = max([ setup_times[st].time | st in rngSetTimes ]);
int: max_transport_time =
  if num_tt > 0 then max([ transport_times[tt].time | tt in rngTrTimes ]) else 0 endif;
% Cuts take a mode `time`; load/unload use setup (and handover can be setup+transport).
int: max_lcu_duration = max_mode_time + max_setup_time + max_transport_time;

% -------------------------------------------------------------------------- %
%                                  Variables                                 %
% -------------------------------------------------------------------------- %

array[rngLCUs] of var 0..max_horizon: StartLCU;
array[rngLCUs] of var 0..max_lcu_duration: DurLCU;
array[rngLCUs] of var 0..(max_setup_time + max_transport_time): DurLoad;
array[rngLCUs] of var 0..max_mode_time: DurCut;
array[rngLCUs] of var 0..max_setup_time: DurUnload;

array[rngLCUs] of var 1..num_machines: AllocLCUToMachine;
array[rngLCUs] of var 1..num_workers: AllocLoadingOpToWorker;
array[rngLCUs] of var 1..num_workers: AllocUnloadingOpToWorker;
array[rngLCUs] of var 1..num_modes: AllocCutOpToMode;

% Aux vars for the objectives.
array[rngJobs] of var 0..max_horizon: end_time_job;
array[rngMchs] of var int: mch_makespan;
array[rngMchs] of var int: mch_proc_time;

% -------------------------------------------------------------------------- %
%                                 Constraints                                %
% -------------------------------------------------------------------------- %

% ------------------------------ Compatibility ------------------------------ %

% A cutting operation can only be scheduled on a machine that it is compatible with
constraint forall(k in rngLCUs, m in rngMchs)(
    not (m in eligible_machines_for_lcu[k]) -> (AllocLCUToMachine[k] != m)
);

% Loading worker must be compatible with the machine.
constraint forall(k in rngLCUs, w in rngWrks)(
  compatible_worker_machine[w, AllocLCUToMachine[k]] == 0 ->
    (AllocLoadingOpToWorker[k] != w)
);

% Unloading worker must be compatible with the machine.
constraint forall(k in rngLCUs, w in rngWrks)(
  compatible_worker_machine[w, AllocLCUToMachine[k]] == 0 ->
    (AllocUnloadingOpToWorker[k] != w)
);

% ------------------------------- Disjunctive ------------------------------ %

% LCUs assigned to the same machine must not overlap in time.
constraint forall(m in rngMchs)(
  disjunctive([StartLCU[k] | k in rngLCUs where AllocLCUToMachine[k] == m],
              DurLCU)
);

% Operations (load and unload) assigned to the same worker must not overlap in time.
constraint forall(w in rngWrks)(
  disjunctive([StartLCU[k] | k in rngLCUs where AllocLoadingOpToWorker[k] == w] ++ [StartLCU[k] + DurLCU[k] - DurUnload[k] | k in rngLCUs where AllocUnloadingOpToWorker[k] == w],
              [DurLoad[k] | k in rngLCUs] ++ [DurUnload[k] | k in rngLCUs])
);

% ------------------------------- Sequencing ------------------------------ %

% LCUs of the same job must appear in job order (pos_in_job)
constraint forall(k1 in rngLCUs, k2 in rngLCUs where
  job_of_lcu[k1] == job_of_lcu[k2] /\
  pos_in_job_of_lcu[k1] < pos_in_job_of_lcu[k2]
)(
  StartLCU[k1] + DurLCU[k1] <= StartLCU[k2]
);

% ----------------------------- Mode selection ----------------------------- %

% Restrict chosen mode variable to modes valid for this cut operation.
constraint forall(k in rngLCUs)(
  AllocCutOpToMode[k] in eligible_modes_for_lcu[k]
);

% Mode's required machine must be the same as the LCU's assigned machine
constraint forall(k in rngLCUs)(
  AllocLCUToMachine[k] == mode_mch_id[AllocCutOpToMode[k]]
);

% -------------------------------- Durations ------------------------------- %

% Cut duration is the mode's processing time.
constraint forall(k in rngLCUs)(
  DurCut[k] == mode_time[AllocCutOpToMode[k]]
);

% Load duration is the setup time
% A transport time between LCUs of the same job gets added if the next LCU is on a different machine
% (material needs to get moved between machines)
constraint forall(k in rngLCUs)(
  DurLoad[k] ==
    setup_time_by_op_id[lcus[k].load] +
    sum(tt in rngTrTimes where transport_times[tt].op_id_to == lcus[k].load)(
      transport_times[tt].time *
      bool2int(
        AllocLCUToMachine[lcu_by_op_id[transport_times[tt].op_id_from]] !=
        AllocLCUToMachine[k]
      )
    )
);

% Unload duration is the setup time
constraint forall(k in rngLCUs)(
  DurUnload[k] == setup_time_by_op_id[lcus[k].unload]
);

% LCU duration is the sum of the load, cut, and unload durations.
% We allow for a gap before unload, since the worker will not always reach the machine in time.
constraint forall(k in rngLCUs)(
  DurLCU[k] >= DurLoad[k] + DurCut[k] + DurUnload[k] % allow for gap before unload
);

% ------------------------------ Objectives ------------------------------ %

% Job end time = completion of the last LCU for that job (by unload pos_in_job).
constraint forall(j in rngJobs)(
  let {
    set of int: last_lcus = {
      k | k in rngLCUs
      where job_of_lcu[k] == jobs[j].job_id /\
            not exists(k2 in rngLCUs)(
              job_of_lcu[k2] == jobs[j].job_id /\
              pos_in_job_of_lcu[k2] > pos_in_job_of_lcu[k]
            )
    }
  } in
  end_time_job[j] = StartLCU[min(last_lcus)] + DurLCU[min(last_lcus)]
);

% makespan per machine (last LCU completion among LCUs on that physical machine).
constraint
  forall(m in rngMchs) (
    mch_makespan[m] =
      max([
        if AllocLCUToMachine[k] == machines[m].mch_id
        then StartLCU[k] + DurLCU[k]
        else 0
        endif
        | k in rngLCUs
      ])
  );

% total processing time per machine (cut time only, per LCU on that machine).
constraint
  forall(m in rngMchs) (
    mch_proc_time[m] =
      sum(k in rngLCUs)(
        DurCut[k] * bool2int(AllocLCUToMachine[k] == machines[m].mch_id)
      )
  );

% -------------------------------------------------------------------------- %
%                                 Objectives                                 %
% -------------------------------------------------------------------------- %

%%% 1) Tardiness
var min_total_tardiness..max_total_tardiness: tardiness = sum(j in rngJobs) (
  max(0,(end_time_job[j] - jobs[j].deadline))
);

%%% 3) Makespan
var min_horizon..max_horizon: makespan = max(j in rngJobs) (
  end_time_job[j]
); 

%%% 2) Total Energy Consumption (TEC) = Processing Energy (PE) + Idle Energy (IE) + Auxiliar Energy (AE)

% Processing Energy (PE): sum energy of the selected cut mode per LCU.
min_processing_energy_Wh..max_processing_energy_Wh: proc_energy_wh :: output_only = sum(k in rngLCUs) (
  mode_energy_wh[fix(AllocCutOpToMode[k])]
);

% Auxiliar Energy (AE): energy required to run the factory
min_auxiliar_energy_Wh..max_auxiliar_energy_Wh: auxiliar_energy_wh :: output_only = 
  (fix(makespan) * factory_power_auxiliar_equipments_W) div 60;

% Idle Energy (IE)
min_idle_energy_Wh..max_idle_energy_Wh: idle_energy_wh :: output_only = sum(m in rngMchs) (
  (machines[m].idle_power_W * (fix(mch_makespan[m]) - fix(mch_proc_time[m]))) div 60
);

% Total Energy Consumption (TEC) = Processing Energy (PE) + Idle Energy (IE) + Auxiliar Energy (AE)
min_total_energy_Wh..max_total_energy_Wh: total_energy_wh :: output_only = 
  proc_energy_wh + idle_energy_wh + auxiliar_energy_wh;


% NOTE: lexicographic optimization not supported by minizinc anymore
% lexicographically minimize (1) tardiness, (2) energy, (3) makespan
% solve minimize [tardiness, total_energy_wh, makespan];
% solve :: lexicographic minimize [tardiness, total_energy_wh, makespan];
%%% OBJECTIVE FUNCTION
var int: objective = makespan;
solve :: seq_search([
  int_search(StartLCU, first_fail, indomain_min, complete),
  int_search(DurLCU, first_fail, indomain_min, complete),
  int_search(AllocLCUToMachine, first_fail, indomain_min, complete),
  int_search(AllocLoadingOpToWorker, first_fail, indomain_min, complete),
  int_search(AllocUnloadingOpToWorker, first_fail, indomain_min, complete),
  int_search(AllocCutOpToMode, first_fail, indomain_min, complete)
]) minimize objective;

%%% OUTPUT
output [
  "=== OBJECTIVES ===\n",
  "tardiness      = ", show(tardiness), " [min]\n",
  "energy         = ", show(total_energy_wh), " [Wh]\n",
  "  proc_energy  = ", show(proc_energy_wh), " [Wh]\n",
  "  idle_energy  = ", show(idle_energy_wh), " [Wh]\n",
  "  aux_energy   = ", show(auxiliar_energy_wh), " [Wh]\n",
  "makespan       = ", show(makespan), " [min]\n",
] ++
[
  "=== DEBUG SOLUTION BEGIN ===\n",
  "META,total_energy_wh,", show(total_energy_wh), "\n",
  "META,proc_energy_wh,", show(proc_energy_wh), "\n",
  "META,idle_energy_wh,", show(idle_energy_wh), "\n",
  "META,aux_energy_wh,", show(auxiliar_energy_wh), "\n",
  "META,tardiness,", show(tardiness), "\n",
  "META,makespan,", show(makespan), "\n"
] ++
[
  "JOB," ++ show(jobs[j].job_id) ++ ",deadline," ++ show(jobs[j].deadline) ++
  ",end," ++ show(end_time_job[j]) ++ "\n"
  | j in rngJobs
] ++
[
  "MACHINE," ++ show(machines[m].mch_id) ++ ",idle_power_w," ++ show(machines[m].idle_power_W) ++
  ",makespan," ++ show(mch_makespan[m]) ++ ",proc_time," ++ show(mch_proc_time[m]) ++ "\n"
  | m in rngMchs
] ++
[
  "LCU," ++ show(k) ++
  ",job," ++ show(job_of_lcu[k]) ++
  ",pos," ++ show(pos_in_job_of_lcu[k]) ++
  ",cut_id," ++ show(cuts[k].cut_id) ++
  ",load_op," ++ show(lcus[k].load) ++
  ",cut_op," ++ show(lcus[k].cut) ++
  ",unload_op," ++ show(lcus[k].unload) ++
  ",start," ++ show(StartLCU[k]) ++
  ",dur_lcu," ++ show(DurLCU[k]) ++
  ",dur_load," ++ show(DurLoad[k]) ++
  ",dur_cut," ++ show(DurCut[k]) ++
  ",dur_unload," ++ show(DurUnload[k]) ++
  ",machine," ++ show(AllocLCUToMachine[k]) ++
  ",load_worker," ++ show(AllocLoadingOpToWorker[k]) ++
  ",unload_worker," ++ show(AllocUnloadingOpToWorker[k]) ++
  ",mode," ++ show(AllocCutOpToMode[k]) ++ "\n"
  | k in rngLCUs
] ++
["=== DEBUG SOLUTION END ===\n"];
