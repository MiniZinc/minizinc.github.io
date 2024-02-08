function draw_scores_over_time(selected_solver, selected_problem, xaxis_type, lineshape, step) {
    var s = 0;
    var time = 0;
    var score_step = [];
    var time_step = [];
    var time_score = [];
    var index = 0;
    var data = [];
    var list_times = [];
    //var xaxis_type = 'linear';
    // Initialisation
    for (s = 0; s < nb_s; s++) {
        score_step[s] = [];
        time_step[s] = [];
    }
    if (0 < step) {
        for (time = 0; time < max_time_in_ms + step; time += step) {
            if (time > max_time_in_ms) {
                time = max_time_in_ms;
            }
            list_times[index] = time;
            index++;
        }
    }
    else {
        list_times = compute_all_times(selected_solver, selected_problem);
        console.log(list_times);
    }
    // Iteration of the steps
    for (index = 0; index < list_times.length; index++) {
        time = list_times[index];
        // Get the scores for the time step `time`
        time_score = get_scores_for_time(time, selected_solver, selected_problem);
        // Save the scores for the time step `time`
        for (s = 0; s < nb_s; s++) {
            if (selected_solver[s]) {
                score_step[s][index] = time_score[s];
                time_step[s][index] = time;
            }
        }
    }
    // Re-initialise
    index = 0;
    // Create data for the plot
    for (s = 0; s < nb_s; s++) {
        if (selected_solver[s]) {
            var trace = {};
            if (lineshape == 'lines') {
                trace = {
                    x: time_step[s],
                    y: score_step[s],
                    type: 'scatter',
                    name: solvers[s]
                }
            }
            else {
                trace = {
                    x: time_step[s],
                    y: score_step[s],
                    type: 'scatter',
                    line: {shape: lineshape},
                    name: solvers[s]
                }
            }
            data[index] = trace;
            index++;
        }
    }
    // Draw the plot
    var layout = {
        title: 'Score development over time',
        xaxis: {title: 'time in ms', type: xaxis_type},
        yaxis: {title: 'Borda score (complete)'},
        showlegend: true,
        height: 700,
        legend: {orientation: 'h'}
    };
    Plotly.newPlot("total_scores", data, layout);
}

function compute_all_times(selected_s, selected_p) {
    // Initialisations
    var p = 0;
    var s = 0;
    var list_init = [0, max_time_in_ms];
    // Iterating over all problems selected and all solvers selected
    for (p = 0; p < nb_p; p++) {
        if (!selected_p[p]) {
            continue;
        }
        var new_list = compute_all_times_for_problem(selected_s, p);
        list_init = mergeWithoutDuplicates(new_list, list_init);
    }
    return list_init;
}

function compute_all_times_for_problem(selected_s, p) {
    var ii = 0;
    var list_init = [0, max_time_in_ms];
    for (ii = 0; ii < instances[p].length; ii++) {
        var i = instances[p][ii];
        var new_list = compute_all_times_for_instance(selected_s, i);
        list_init = mergeWithoutDuplicates(new_list, list_init);
    }
    return list_init;
}

function compute_all_times_for_instance(selected_s, i) {
    var s = 0;
    var list_init = [0, max_time_in_ms];
    for (s = 0; s < nb_s; s++) {
        if (selected_s[s]) {
            var time_obj_list = step_times[s][i];
            // Add completion time
            if (results[s][i] == "SC" || results[s][i] == "C") {
                time_obj_list = time_obj_list.concat([ times[s][i] ]);
            }
            // Merge the two arrays without duplicates
            list_init = mergeWithoutDuplicates(list_init, time_obj_list);
        }
    }
    return list_init;
}

/**
 * Merging of two sorted arrays and removal of duplicate elements
 */
function mergeWithoutDuplicates(list1, list2) {
    // Initialisations
    var index = 1;
    var i1 = 0;
    var i2 = 0;
    var list_merge = [];
    // Some tests
    if (list1.length == 0) 
        return list2;
    if (list2.length == 0)
        return list1;
    // First element
    if (list1[0] < list2[0])
        list_merge[0] = list1[0];
    else
        list_merge[0] = list2[0];
    // Do the merge
    while (i1 < list1.length || i2 < list2.length) {
        if (list2.length <= i2 || (i1 < list1.length && list1[i1] < list2[i2])) {
            // Check for duplicate
            if (list_merge[index-1] != list1[i1]) {
                // Add new element
                list_merge[index] = list1[i1];
                index++;
            }
            // Increment index of list 'list1'
            i1++;
        }
        else {
            // list2[i2] <= list1[i1] \/ list1.length <= i1
            // Check for duplicate
            if (list_merge[index-1] != list2[i2]) {
                // Add new element
                list_merge[index] = list2[i2];
                index++;
            }
            // Increment index of list 'list2'
            i2++;
        }
    }
    return list_merge;
}

function get_scores_for_time(time, selected_s, selected_p) {
    // Initialisations
    var p = 0;
    var s = 0;
    var ii = 0;
    var score_total = [];
    var outcome = [];
    var runtime = [];
    var objective = [];
    // Initialise the scores for each solver selected
    for (s = 0; s < nb_s; s++) {
        if (selected_s[s]) {
            score_total[s] = 0.0;
        }
    }
    // Iterate over all problems
    for (p = 0; p < nb_p; p++) {
        // Check if the problem is selected
        if (selected_p[p]) {
            // Iterate over all instances of the problem
            for (ii = 0; ii < instances[p].length; ii++) {
                var i = instances[p][ii];
                // Get results for the time `time`
                get_results_for_instance(time, p, i, selected_s, outcome, runtime, objective);
                // Get scoring for the instance at the time `time`
                var score_inst = get_borda_score_for_instance(p, i, selected_s, selected_p, outcome, runtime, objective);
                // Save scoring for the solver at the time `time`
                for (s = 0; s < nb_s; s++) {
                    if (selected_s[s]) {
                        score_total[s] += score_inst[s];
                    }
                }
            }
        }
    }
    // Return score
    return score_total;
}

function get_results_for_instance(time, p, i, selected_s, outcome, runtime, objective) {
    // Initialisations
    var s = 0;
    // Iterate over the solver selected
    for (s = 0; s < nb_s; s++) {
        if (selected_s[s]) {
            // Gather the result for the time `time`
            // results[.][.] = "UNK" | "ERR" | "S" | "SC" | "C"
            if (results[s][i] == "UNK") {
                outcome[s] = "UNK";
                runtime[s] = time;
                objective[s] = " ";
            }
            else if (results[s][i] == "ERR") {
                outcome[s] = "ERR";
                runtime[s] = " ";
                objective[s] = " ";
            }
            else if (results[s][i] == "SC" && times[s][i] <= time) {
                // Problem `p` is an optimisation problem
                outcome[s] = "SC";
                runtime[s] = times[s][i];
                objective[s] = objectives[s][i];
            }
            else if (results[s][i] == "C" && times[s][i] <= time) {
                outcome[s] = "C";
                runtime[s] = times[s][i];
                objective[s] = " ";
            }
            else if (results[s][i] == "C") {
                outcome[s] = "UNK";
                runtime[s] = time;
                objective[s] = " ";
            }
            else if (step_times[s][i][0] <= time && kind[p] == "SAT") {
                // Problem `p` is a satisfaction problem
                outcome[s] = "S";
                runtime[s] = times[s][i];
                objective[s] = " ";
            }
            else if (step_times[s][i][0] <= time) {
                // Problem `p` is an optimisation problem
                outcome[s] = "S";
                runtime[s] = time;
                var k = 0;
                for (k = 0; k < step_count[s][i] && step_times[s][i][k] <= time; k++) {
                    objective[s] = step_obj[s][i][k];
                }
            }
            else {
                outcome[s] = "UNK";
                runtime[s] = time;
                objective[s] = " ";
            }
        }
    }
}

// Computes the borda score for all solvers selected for one instance
function get_borda_score_for_instance(p, i, selected_s, selected_p, outcome, runtime, objective) {
    // Initialisation
    var s1 = 0;
    var s2 = 0;
    var score_inst = [];
    // Initialise the scores for each solver selected
    for (s1 = 0; s1 < nb_s; s1++) {
        if (selected_s[s1]) {
            score_inst[s1] = 0.0;
        }
    }
    // Iterate over pairs of solvers selected
    for (s1 = 0; s1 < nb_s; s1++) {
        if (selected_s[s1]) {
            for (s2 = s1 + 1; s2 < nb_s; s2++) {
                if (selected_s[s2]) {
                    // Compute the borda scoring for these two solver on the particular instance
                    //compute_borda_scoring_for_solver_pair(p, i, s1, s2, outcome, runtime, objective, score_inst)
                    compute_incomplete_borda_scoring_for_solver_pair(p, i, s1, s2, outcome, runtime, objective, score_inst)
                }
            }
        }
    }
    // Return score
    return score_inst;
}

// Computes the borda scoring for two solvers on one instance
function compute_borda_scoring_for_solver_pair(p, i, s1, s2, outcome, runtime, objective, score_inst) {
    // The array `outcome` contains strings 
    // `S`   - Solver found a solution
    // `SC`  - Solver found a solution and proved optimality
    // `C`   - Solver proved infeasibility of instance
    // `UNK` - Solver did not find any solution nor proved infeasibility of instance
    // `ERR` - Solver experienced an error
    if (outcome[s1] == "S" || outcome[s1] == "SC" || outcome[s1] == "C") {
        if (outcome[s2] == "S" || outcome[s2] == "SC" || outcome[s2] == "C") {
            // Both solvers found a solution and/or completed the search
            if (outcome[s1] == outcome[s2] && (outcome[s1] == "SC" || outcome[s1] == "C")) {
                // Both have completed the search
                compute_borda_scoring_for_solver_pair_runtime(s1, s2, runtime, score_inst);
            }
            else if (outcome[s1] == outcome[s2]) {
                // Both solvers have the outcome `S`
                if (kind[p] == "SAT") {
                    // SAT problem
                    compute_borda_scoring_for_solver_pair_runtime(s1, s2, runtime, score_inst);
                }
                else if (objective[s1] == objective[s2]) {
                    // Same objective value
                    score_inst[s1] += 0.5;
                    score_inst[s2] += 0.5;
                }
                else if (kind[p] == "MIN") {
                    // Minimisation problem
                    if (objective[s1] < objective[s2]) {
                        score_inst[s1] += 1.0;
                    }
                    else if (objective[s1] > objective[s2]) {
                        score_inst[s2] += 1.0;
                    }
                }
                else if (kind[p] == "MAX") {
                    // Maximisation problem
                    if (objective[s1] < objective[s2]) {
                        score_inst[s2] += 1.0;
                    }
                    else if (objective[s1] > objective[s2]) {
                        score_inst[s1] += 1.0;
                    }
                }
            }
            else if (outcome[s1] == "S") {
                score_inst[s2] += 1.0;
            }
            else if (outcome[s2] == "S") {
                score_inst[s1] += 1.0;
            }
        }
        else {
            // The outcome of solver `s2` is either `UNK` or `ERR`
            score_inst[s1] += 1.0;
        }
    }
    else if (outcome[s2] == "S" || outcome[s2] == "SC" || outcome[s2] == "C") {
        // The outcome of solver `s1` is either `UNK` or `ERR`
        score_inst[s2] += 1.0;
    }
}

// Computes the borda scoring for two solvers on one instance
function compute_incomplete_borda_scoring_for_solver_pair(p, i, s1, s2, outcome, runtime, objective, score_inst) {
    // The array `outcome` contains strings 
    // `S`   - Solver found a solution
    // `SC`  - Solver found a solution and proved optimality
    // `C`   - Solver proved infeasibility of instance
    // `UNK` - Solver did not find any solution nor proved infeasibility of instance
    // `ERR` - Solver experienced an error
    if (outcome[s1] == "S" || outcome[s1] == "SC") {
        if (outcome[s2] == "S" || outcome[s2] == "SC") {
            // Both solvers found a solution and/or completed the search
            if (kind[p] == "SAT") {
                // SAT problem
                compute_borda_scoring_for_solver_pair_runtime(s1, s2, runtime, score_inst);
            }
            else if (objective[s1] == objective[s2]) {
                // Same objective value
                score_inst[s1] += 0.5;
                score_inst[s2] += 0.5;
            }
            else if (kind[p] == "MIN") {
                // Minimisation problem
                if (objective[s1] < objective[s2]) {
                    score_inst[s1] += 1.0;
                }
                else if (objective[s1] > objective[s2]) {
                    score_inst[s2] += 1.0;
                }
            }
            else if (kind[p] == "MAX") {
                // Maximisation problem
                if (objective[s1] < objective[s2]) {
                    score_inst[s2] += 1.0;
                }
                else if (objective[s1] > objective[s2]) {
                    score_inst[s1] += 1.0;
                }
            }
        }
        else {
            // The outcome of solver `s2` is either `UNK` or `ERR`
            score_inst[s1] += 1.0;
        }
    }
    else if (outcome[s2] == "S" || outcome[s2] == "SC") {
        // The outcome of solver `s1` is either `UNK` or `ERR`
        score_inst[s2] += 1.0;
    }
}

function compute_borda_scoring_for_solver_pair_runtime(s1, s2, runtime, score_inst) {
    if (runtime[s1] == 0 && runtime[s2] == 0) {
        score_inst[s1] += 0.5;
        score_inst[s2] += 0.5;
    }
    else {
        score_inst[s1] += runtime[s2] / (runtime[s1] + runtime[s2]);
        score_inst[s2] += runtime[s1] / (runtime[s1] + runtime[s2]);
    }
}
