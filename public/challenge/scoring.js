function challengeResults({
    results: {
        nb_s,
        nb_p,
        solvers,
        fd_solvers,
        free_solvers,
        par_solvers,
        open_solvers,
        local_solvers,
        problems,
        kind,
        instances,
        benchmarks,
        results,
        times,
        objectives,
        first_objectives,
        step_count,
        step_obj,
        step_times,
        scores,
        scores_loc
    },
    locations: {
        problems: loc_problems,
        instances: loc_instances
    }
}) {
    const max_time_in_ms = 1200000;
    const pbox = {};
    const sbox = {};

    // Complete Scoring
    let total = 0;
    const total_solver = []; // Total overall score of a solver
    const total_problem = [];
    const total_instance = [];
    const total_solver_instance = []; // Total score of a solver per instance
    const total_solver_problem = []; // Total score of a solver per problem

    // Incomplete Scoring
    const hasIncompleteScoring = scores_loc !== undefined;
    let total_inc = 0;
    const total_solver_inc = []; // Total overall score of a solver
    const total_problem_inc = [];
    const total_instance_inc = [];
    const total_solver_instance_inc = []; // Total score of a solver per instance
    const total_solver_problem_inc = []; // Total score of a solver per problem

    // Area Scoring
    const hasAreaScoring = step_count !== undefined;
    let total_area = 0;
    const total_solver_area = []; // Total overall score of a solver
    const total_problem_area = [];
    const total_instance_area = [];
    const total_solver_instance_area = []; // Total score of a solver per instance
    const total_solver_problem_area = []; // Total score of a solver per problem

    const rank_solver = [];
    const rank_problem_solver = [];
    const map_problem_solver_rank = [];

    function init() {
        const p1 = document.getElementById("solver_selection");
        while (p1.firstChild) {
            p1.removeChild(p1.lastChild)
        }
        const f1 = document.createElement('form');
        f1.name = "solver_checked";
        for (let i = 0; i < nb_s; i++) {
            sbox[i] = document.createElement("input");
            sbox[i].id = `solver-checkbox-${i}`
            sbox[i].type = 'checkbox';
            sbox[i].name = solvers[i];
            sbox[i].defaultChecked = false;
            sbox[i].value = i;
            f1.appendChild(sbox[i]);
            const label = document.createElement('label');
            label.htmlFor = `solver-checkbox-${i}`;
            label.style.paddingLeft = '0.25rem';
            label.appendChild(document.createTextNode(solvers[i]));
            f1.appendChild(label);
            f1.appendChild(document.createElement('br'));
        }
        if (p1 != null)
            p1.appendChild(f1);
        const p2 = document.getElementById("problem_selection");
        while (p2.firstChild) {
            p2.removeChild(p2.lastChild)
        }
        const f2 = document.createElement('form');
        f2.name = "problem_checked";
        for (let i = 0; i < nb_p; i++) {
            pbox[i] = document.createElement("input");
            pbox[i].id = `problem-checkbox-${i}`
            pbox[i].type = 'checkbox';
            pbox[i].name = problems[i];
            pbox[i].defaultChecked = false;
            pbox[i].value = i;
            f2.appendChild(pbox[i]);
            const label = document.createElement('label');
            label.htmlFor = `problem-checkbox-${i}`;
            label.style.paddingLeft = '0.25rem';
            label.appendChild(document.createTextNode(problems[i]));
            f2.appendChild(label)
            f2.appendChild(document.createElement('br'));
        }
        if (p2 != null)
            p2.appendChild(f2);
        for (let i = 0; i < nb_s; i++) {
            total_solver_problem[i] = [];
            total_solver_instance[i] = [];
            total_solver_problem_inc[i] = [];
            total_solver_instance_inc[i] = [];
            total_solver_problem_area[i] = [];
            total_solver_instance_area[i] = [];
        }

        const classControls = [
            [fd_solvers, document.getElementById("control-fd")],
            [free_solvers, document.getElementById("control-free")],
            [par_solvers, document.getElementById("control-par")],
            [open_solvers, document.getElementById("control-open")],
            [local_solvers, document.getElementById("control-local")]
        ];
        let prevSolvers = null;
        for (const [s, e] of classControls) {
            if (s.every(x => !x) || prevSolvers && prevSolvers.every((x, i) => (s[i] === x))) {
                e.style.display = 'none';
            }
            prevSolvers = s;
        }
        if (!hasIncompleteScoring) {
            for (const el of document.getElementsByClassName('score-incomplete')) {
                el.style.display = 'none';
            }
        }
        if (!hasAreaScoring) {
            for (const el of document.getElementsByClassName('score-area')) {
                el.style.display = 'none';
            }
        }
    }

    function selectCategory(category) {
        for (let i = 0; i < nb_s; i++) {
            if (category[i] && !sbox[i].disabled) {
                sbox[i].checked = true;
            }
        }
    }

    function selectFD() {
        selectCategory(fd_solvers);
    }

    function selectFree() {
        selectCategory(free_solvers);
    }

    function selectPar() {
        selectCategory(par_solvers);
    }

    function selectOpen() {
        selectCategory(open_solvers);
    }

    function selectLocal() {
        selectCategory(local_solvers);
    }

    function selectAll() {
        for (let i = 0; i < nb_p; i++) {
            pbox[i].checked = true;
        }
    }

    function clearAll() {
        for (let i = 0; i < nb_p; i++)
            pbox[i].checked = false;
        for (let i = 0; i < nb_s; i++)
            sbox[i].checked = false;
    }

    function computeSelected() {
        document.getElementById('results-section').style.display = 'block';
        const prob = [];
        const solv = [];
        for (let i = 0; i < nb_p; i++) {
            prob[i] = pbox[i].checked;
        }
        for (let i = 0; i < nb_s; i++) {
            solv[i] = sbox[i].checked;
        }
        computeScores(solv, prob);
        if (hasIncompleteScoring) {
            computeScoresInc(solv, prob);
        }
        if (hasAreaScoring) {
            computeScoresArea(solv, prob);
        }
        rankSolvers(solv, prob);
        modifyTables(solv, prob);
    }

    function computeScores(selected_s, selected_p) {
        total = 0.0;
        for (let s = 0; s < nb_s; s++) {
            if (!selected_s[s])
                continue;
            let ts = 0.0;
            for (let p = 0; p < nb_p; p++) {
                if (!selected_p[p])
                    continue;
                let tsp = 0.0;
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];
                    let tsi = 0.0;
                    for (let s2 = 0; s2 < nb_s; s2++) {
                        if (selected_s[s2])
                            tsi += scores[s][s2][i]
                    }
                    total_solver_instance[s][i] = tsi;
                    tsp += tsi;
                }
                total_solver_problem[s][p] = tsp;
                ts += tsp;
            }
            total_solver[s] = ts;
            total += ts;
        };
        for (let p = 0; p < nb_p; p++) {
            if (selected_p[p]) {
                let tp = 0.0;
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];
                    let ti = 0.0;
                    for (let s = 0; s < nb_s; s++) {
                        if (selected_s[s])
                            ti += total_solver_instance[s][i];
                    }
                    total_instance[i] = ti;
                    tp += ti;
                }
                total_problem[p] = tp;
            }
        }
    }

    function computeScoresInc(selected_s, selected_p) {
        total_inc = 0.0;
        for (let s = 0; s < nb_s; s++) {
            if (!selected_s[s])
                continue;
            let ts = 0.0;
            for (let p = 0; p < nb_p; p++) {
                if (!selected_p[p])
                    continue;
                let tsp = 0.0;
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];
                    let tsi = 0.0;
                    for (let s2 = 0; s2 < nb_s; s2++) {
                        if (selected_s[s2])
                            tsi += scores_loc[s][s2][i]
                    }
                    total_solver_instance_inc[s][i] = tsi;
                    tsp += tsi;
                }
                total_solver_problem_inc[s][p] = tsp;
                ts += tsp;
            }
            total_solver_inc[s] = ts;
            total_inc += ts;
        };
        for (let p = 0; p < nb_p; p++) {
            if (selected_p[p]) {
                let tp = 0.0;
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];
                    let ti = 0.0;
                    for (let s = 0; s < nb_s; s++) {
                        if (selected_s[s])
                            ti += total_solver_instance_inc[s][i];
                    }
                    total_instance_inc[i] = ti;
                    tp += ti;
                }
                total_problem_inc[p] = tp;
            }
        }
    }

    // Area scoring
    //
    function computeScoresArea(selected_s, selected_p) {
        total_area = 0.0;
        let normalise = false;
        if (document.getElementById("area_scoring").checked) {
            normalise = true;
        }
        // Iterating over the problems
        for (let p = 0; p < nb_p; p++) {
            // Check if the problem is selected
            if (!selected_p[p])
                continue;
            // Problem is selected

            // Iterating over the instances
            for (let ii = 0; ii < instances[p].length; ii++) {
                const i = instances[p][ii];

                // Computing the scores for the instance for each solver
                if (kind[p] == "SAT") {
                    computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
                } else if (kind[p] == "MIN") {
                    computeScoresArea_for_instance_min(selected_s, p, i, normalise);
                } else if (kind[p] == "MAX") {
                    computeScoresArea_for_instance_max(selected_s, p, i, normalise);
                }

                // Aggregate results for the instance
                let ti = 0;
                for (let s = 0; s < nb_s; s++) {
                    if (selected_s[s]) {
                        ti += total_solver_instance_area[s][i];
                    }
                }
                total_instance_area[i] = ti;
            }

            // Aggregate results for the problem
            let tp = 0;
            for (let ii = 0; ii < instances[p].length; ii++) {
                const i = instances[p][ii];
                tp += total_instance_area[i];
            }
            total_problem_area[p] = tp;
        }

        // Aggregate remaining results for the solvers
        for (let s = 0; s < nb_s; s++) {
            if (selected_s[s]) {
                let ts = 0;
                for (let p = 0; p < nb_p; p++) {
                    if (selected_p[p]) {
                        let tsp = 0;
                        for (let ii = 0; ii < instances[p].length; ii++) {
                            const i = instances[p][ii];
                            tsp += total_solver_instance_area[s][i];
                        }
                        total_solver_problem_area[s][p] = tsp;
                        ts += tsp;
                    }
                }
                total_solver_area[s] = ts;
                total_area += ts;
            }
        }
    }

    // Computation of the area score for an instance that is unsatisfiable or
    // belongs to sat problem
    //
    function computeScoresArea_for_instance_sat(selected_s, p, i, normalise) {
        for (let s = 0; s < nb_s; s++) {
            let area = 0;
            // Check if the solver is selected
            if (selected_s[s]) {
                // Solver is selected

                // Compute the area below the two step function
                area = 1 * times[s][i] + 0 * (max_time_in_ms - times[s][i]);
                if (normalise) {
                    area = area / max_time_in_ms;
                }
                // Saving the value
                total_solver_instance_area[s][i] = area;
            }
        }
    }

    // Computation of the area score for an instance that belongs to a minimisation problem
    //
    function computeScoresArea_for_instance_min(selected_s, p, i, normalise) {
        let min_obj = 0;
        let max_obj = 0;
        let sol = false;
        const scale_unsol = 0.25;
        const scale_proof = 0.25;
        const scale_sol = 1 - scale_unsol - scale_proof;
        // Computing the minimal and maximal objective value
        for (let s = 0; s < nb_s; s++) {
            // Check if the solver is selected
            if (selected_s[s]) {
                // Solver is selected
                if (step_count[s][i] > 0) {
                    if (sol) {
                        min_obj = Math.min(min_obj, objectives[s][i]);
                        max_obj = Math.max(max_obj, first_objectives[s][i]);
                    } else {
                        min_obj = objectives[s][i];
                        max_obj = first_objectives[s][i];
                        sol = true;
                    }
                }
            }
        }
        // Computng the area score
        if (sol) {
            // At least one solver found a feasible solution
            for (let s = 0; s < nb_s; s++) {
                let area = 0;
                // Check if the solver is selected
                if (selected_s[s]) {
                    // Solver is selected
                    if (step_count[s][i] > 0) {
                        // Solver has found at least one solution

                        // First (solution) step
                        area += scale_unsol * step_times[s][i][0];
                        // Intermediate steps
                        let prev_time = 0;
                        let prev_obj = max_obj;
                        const scale_obj = max_obj - min_obj;
                        if (scale_obj > 0) {
                            for (let k = 0; k < step_count[s][i]; k++) {
                                area += scale_sol * (((prev_obj - min_obj) / scale_obj) * (step_times[s][i][k] - prev_time));
                                prev_time = step_times[s][i][k];
                                prev_obj = step_obj[s][i][k];
                            }
                            area += scale_sol * (((prev_obj - min_obj) / scale_obj) * (times[s][i] - prev_time));
                        } else {
                            area += scale_sol * step_times[s][i][0];
                        }
                        // Last (optimal proof) step
                        area += scale_proof * times[s][i];
                    } else {
                        // Solver has not found any solution
                        area = 1 * max_time_in_ms;
                    }
                    // Normalise area scoring
                    if (normalise) {
                        area = area / max_time_in_ms;
                    }
                    // Storing area scoring
                    total_solver_instance_area[s][i] = area;
                }
            }
        } else {
            // Use the scoring for sat (unsat) instances
            computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
        }
    }

    // Computation of the area score for an instance that belongs to a maximisation problem
    //
    function computeScoresArea_for_instance_max(selected_s, p, i, normalise) {
        let min_obj = 0;
        let max_obj = 0;
        let sol = false;
        const scale_unsol = 0.25;
        const scale_proof = 0.25;
        const scale_sol = 1 - scale_unsol - scale_proof;
        // Computing the minimal and maximal objective value
        for (let s = 0; s < nb_s; s++) {
            // Check if the solver is selected
            if (selected_s[s]) {
                // Solver is selected
                if (step_count[s][i] > 0) {
                    if (sol) {
                        min_obj = Math.min(min_obj, first_objectives[s][i]);
                        max_obj = Math.max(max_obj, objectives[s][i]);
                    } else {
                        min_obj = first_objectives[s][i];
                        max_obj = objectives[s][i];
                        sol = true;
                    }
                }
            }
        }
        // Computng the area score
        if (sol) {
            // At least one solver found a feasible solution
            for (let s = 0; s < nb_s; s++) {
                let area = 0;
                // Check if the solver is selected
                if (selected_s[s]) {
                    // Solver is selected
                    if (step_count[s][i] > 0) {
                        // Solver has found at least one solution

                        // First (solution) step
                        area += scale_unsol * step_times[s][i][0];
                        // Intermediate steps
                        let prev_time = 0;
                        let prev_obj = min_obj;
                        const scale_obj = max_obj - min_obj;
                        if (scale_obj > 0) {
                            for (let k = 0; k < step_count[s][i]; k++) {
                                area += scale_sol * (((max_obj - prev_obj) / scale_obj) * (step_times[s][i][k] - prev_time));
                                prev_time = step_times[s][i][k];
                                prev_obj = step_obj[s][i][k];
                            }
                            area += scale_sol * (((max_obj - prev_obj) / scale_obj) * (times[s][i] - prev_time));
                        } else {
                            area += scale_sol * step_times[s][i][0];
                        }
                        // Last (optimal proof) step
                        area += scale_proof * times[s][i];
                    } else {
                        // Solver has not found any solution
                        area = 1 * max_time_in_ms;
                    }
                    // Normalise area scoring
                    if (normalise) {
                        area = area / max_time_in_ms;
                    }
                    total_solver_instance_area[s][i] = area;
                }
            }
        } else {
            // Use the scoring for sat (unsat) instances
            computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
        }
    }

    // Ranking of the solvers corresponding their score
    //
    function rankSolvers(selected_s, selected_p) {
        for (let p = 0; p < nb_p; p++) {
            rank_problem_solver[p] = [];
            map_problem_solver_rank[p] = [];
        }
        // Initialise arrays
        for (let s = 0; s < nb_s; s++) {
            if (selected_s[s]) {
                rank_solver[s] = {
                    id: s,
                    score: total_solver[s]
                };
                for (let p = 0; p < nb_p; p++) {
                    if (selected_p[p])
                        rank_problem_solver[p][s] = {
                            id: s,
                            score: total_solver_problem[s][p],
                            color: "none"
                        };
                }
            } else {
                rank_solver[s] = {
                    id: s,
                    score: -1.0
                };
                for (let p = 0; p < nb_p; p++) {
                    if (selected_p[p])
                        rank_problem_solver[p][s] = {
                            id: s,
                            score: -1.0,
                            color: "none"
                        };
                }
            }
        }
        // Sorting of the arrays
        rank_solver.sort((a, b) => b.score - a.score);
        for (let p = 0; p < nb_p; p++) {
            if (!selected_p[p])
                continue;
            rank_problem_solver[p].sort((a, b) => b.score - a.score);
            rank_problem_solver[p][0].color = "gold";
            for (let r = 1; r < nb_s; r++) {
                if (rank_problem_solver[p][r].score < 0.0)
                    break;
                if (rank_problem_solver[p][r - 1].score == rank_problem_solver[p][r].score) {
                    rank_problem_solver[p][r].color = rank_problem_solver[p][r - 1].color;
                } else if (r == 1) {
                    rank_problem_solver[p][r].color = "silver";
                } else if (r == 2) {
                    rank_problem_solver[p][r].color = "#cd7f32";
                } else {
                    break;
                }
            }
            for (let r = 0; r < nb_s; r++) {
                var s = rank_problem_solver[p][r].id;
                map_problem_solver_rank[p][s] = r;
            }
        }
    }

    function createLinkCol(text, loc) {
        const link = document.createElement('a');
        link.href = `../${loc}`;
        link.target = "_blank";
        link.appendChild(document.createTextNode(text));
        const col = document.createElement('td');
        col.appendChild(link);
        return col;
    }

    function createTxtCol(text, al) {
        const col = document.createElement('td');
        col.align = al;
        const txt = document.createTextNode(text);
        col.appendChild(txt);
        return col;
    }

    function createTxtColWithColor(text, al, color) {
        const col = document.createElement('td');
        col.align = al;
        col.style.backgroundColor = color;
        const txt = document.createTextNode(text);
        col.appendChild(txt);
        return col;
    }


    // The first n left elements are left aligned, the rest is right aligned
    function addRowText(table, rowtext, n) {
        const row = document.createElement('tr');
        let k = n;
        for (const i in rowtext) {
            let al = "right";
            if (k > 0) {
                k--;
                al = "left";
            }
            row.appendChild(createTxtCol(`   ${rowtext[i]} `, al));
        }
        table.appendChild(row);
    }

    // The first n left elements are left aligned, the rest is right aligned.
    // The first m elements have no background color.
    function addRowTextWithColor(table, rowtext, n, color, m) {
        const row = document.createElement('tr');
        let k = n;
        let l = m;
        //row.style.backgroundColor = color;
        for (const i in rowtext) {
            let al = "right";
            if (k > 0) {
                k--;
                al = "left";
            }
            if (l > 0) {
                row.appendChild(createTxtCol(`   ${rowtext[i]} `, al));
                l--;
            } else {
                row.appendChild(createTxtColWithColor(`   ${rowtext[i]} `, al, color));
            }
        }
        table.appendChild(row);
    }

    function modifyToTal(selected_solver) {
        const tbl = document.getElementsByName('total_table')[0];
        let bd = document.createElement('tbody');
        const tr = ["TOTAL", total.toFixed(0)];
        if (hasIncompleteScoring) {
            tr.push(total_inc.toFixed(0));
        }
        if (hasAreaScoring) {
            tr.push(total_area.toFixed(3));
        }
        addRowText(bd, tr, 1);
        tbl.appendChild(bd);
        bd = document.createElement('tbody');
        for (let i = 0; i < nb_s; i++) {
            if (selected_solver[i]) {
                let color = "none";
                if (rank_solver[0].id == i)
                    color = "gold";
                if (rank_solver[1].id == i)
                    color = "silver";
                if (rank_solver[2].id == i)
                    color = "#cd7f32";
                const tr = [solvers[i], total_solver[i].toFixed(2)];
                if (hasIncompleteScoring) {
                    tr.push(total_solver_inc[i].toFixed(2));
                }
                if (hasAreaScoring) {
                    tr.push(total_solver_area[i].toFixed(2));
                }
                if (color == "none") {
                    addRowText(bd, tr, 1);
                } else {
                    addRowTextWithColor(bd, tr, 1, color, 0);
                }
            }
        }
        tbl.appendChild(bd);
    }

    function modifyProblem(selected_solver, selected_problem) {
        const tbl = document.getElementsByName('problem_table')[0];
        for (let i = 0; i < nb_p; i++) {
            if (!selected_problem[i])
                continue;
            let bd = document.createElement('tbody');
            const row = document.createElement('tr');
            if (loc_problems[i] != 'null') {
                row.appendChild(createLinkCol(
                    `${problems[i]} (${kind[i]} x${instances[i].length})`, loc_problems[i]
                ));
            } else {
                row.appendChild(createTxtCol(
                    `${problems[i]} (${kind[i]} x${instances[i].length})`
                ));
            }
            row.appendChild(createTxtCol("TOTAL", "left"));
            row.appendChild(createTxtCol(total_problem[i].toFixed(0), "right"));
            if (hasIncompleteScoring) {
                row.appendChild(createTxtCol(total_problem_inc[i].toFixed(0), "right"));
            }
            if (hasAreaScoring) {
                row.appendChild(createTxtCol(total_problem_area[i].toFixed(3), "right"));
            }
            bd.appendChild(row);
            tbl.appendChild(bd);
            bd = document.createElement('tbody');
            for (let j = 0; j < nb_s; j++) {
                if (!selected_solver[j])
                    continue;
                const rank = map_problem_solver_rank[i][j];
                const color = rank_problem_solver[i][rank].color;
                const tr = [" ", solvers[j], total_solver_problem[j][i].toFixed(2)];
                if (hasIncompleteScoring) {
                    tr.push(total_solver_problem_inc[j][i].toFixed(2));
                }
                if (hasAreaScoring) {
                    tr.push(total_solver_problem_area[j][i].toFixed(2));
                }
                if (color == "none") {
                    addRowText(bd, tr, 2);
                } else {
                    addRowTextWithColor(bd, tr, 2, color, 1);
                }
            }
            tbl.appendChild(bd);
        }
    }

    function rankAndMap(ranking, map) {
        // Sort the array
        ranking.sort((a, b) => b.score - a.score);
        // Compute the colors
        ranking[0].color = "gold";
        for (let r = 1; r < nb_s; r++) {
            if (ranking[r].score < 0.0)
                break;
            if (ranking[r - 1].score == ranking[r].score) {
                ranking[r].color = ranking[r - 1].color;
            } else if (r == 1) {
                ranking[r].color = "silver";
            } else if (r == 2) {
                ranking[r].color = "#cd7f32";
            } else {
                break;
            }
        }
        // Create the mapping
        for (let r = 0; r < nb_s; r++)
            map[ranking[r].id] = r;
    }


    function modifyInstance(selected_solver, selected_problem) {
        const tbl = document.getElementsByName('instance_table')[0];

        for (let p = 0; p < nb_p; p++) {
            if (selected_problem[p]) {
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];

                    // Compute the solver ranking
                    const ranking = [];
                    const map = [];
                    for (let s = 0; s < nb_s; s++) {
                        if (selected_solver[s]) {
                            ranking[s] = {
                                id: s,
                                score: total_solver_instance[s][i],
                                color: "none"
                            };
                        } else {
                            ranking[s] = {
                                id: s,
                                score: -1.0,
                                color: "none"
                            };
                        }
                    }

                    // Generate the ranking and mapping
                    rankAndMap(ranking, map);

                    let bd = document.createElement('tbody');
                    const row = document.createElement('tr');
                    if (loc_problems[p] != 'null') {
                        row.appendChild(createLinkCol(
                            `${problems[p]} (${kind[p]})`, loc_problems[p]
                        ));
                    } else {
                        row.appendChild(createTxtCol(
                            `${problems[p]} (${kind[p]})`
                        ));
                    }
                    row.appendChild(createLinkCol(benchmarks[i], loc_instances[i]));
                    row.appendChild(createTxtCol("TOTAL", "left"));
                    row.appendChild(createTxtCol(" ", "left"));
                    row.appendChild(createTxtCol(" ", "left"));
                    row.appendChild(createTxtCol(" ", "left"));
                    row.appendChild(createTxtCol(total_instance[i].toFixed(0), "right"));
                    if (hasIncompleteScoring) {
                        row.appendChild(createTxtCol(total_instance_inc[i].toFixed(0), "right"));
                    }
                    if (hasAreaScoring) {
                        row.appendChild(createTxtCol(total_instance_area[i].toFixed(3), "right"));
                    }
                    bd.appendChild(row);
                    tbl.appendChild(bd);
                    bd = document.createElement('tbody');
                    let p_string = problems[p];
                    let i_string = benchmarks[i];
                    for (let s = 0; s < nb_s; s++) {
                        if (selected_solver[s]) {
                            const tr = [p_string, i_string, solvers[s],
                                results[s][i], times[s][i], objectives[s][i],
                                total_solver_instance[s][i].toFixed(2),
                            ]
                            if (hasIncompleteScoring) {
                                tr.push(total_solver_instance_inc[s][i].toFixed(2));
                            }
                            if (hasAreaScoring) {
                                tr.push(total_solver_instance_area[s][i].toFixed(2));
                            }
                            if (ranking[map[s]].color == "none" || ranking[map[s]].score <= 0.0) {
                                addRowText(bd, tr, 4);
                            } else {
                                addRowTextWithColor(bd, tr, 4, ranking[map[s]].color, 2);
                            }
                            p_string = " ";
                            i_string = " ";
                        }
                    }
                    tbl.appendChild(bd);
                }
            }
        }
    }

    function modifyInstancePlots(selected_solver, selected_problem, xaxis_type, lineshape) {
        const tbl = document.getElementsByName('objective_plots')[0];
        for (let p = 0; p < nb_p; p++) {
            if (selected_problem[p]) {
                for (let k = 0; k < instances[p].length; k++) {
                    const i = instances[p][k];
                    let bd = document.createElement('tbody');
                    let row = document.createElement('tr');
                    if (loc_problems[p] != 'null') {
                        row.appendChild(
                            createLinkCol(`${problems[p]} (${kind[p]})`, loc_problems[p])
                        );
                    } else {
                        row.appendChild(
                            createTxtCol(`${problems[p]} (${kind[p]})`)
                        );
                    }
                    row.appendChild(createLinkCol(benchmarks[i], loc_instances[i]));
                    row.appendChild(createTxtCol("Plot", "left"));
                    bd.appendChild(row);
                    tbl.appendChild(bd);

                    bd = document.createElement('tbody');

                    row = document.createElement('tr');
                    // First column
                    let col = document.createElement('td');
                    let txt = document.createTextNode(problems[p]);
                    col.align = "left";
                    col.appendChild(txt);
                    row.appendChild(col);

                    // Second column
                    col = document.createElement('td');
                    txt = document.createTextNode(benchmarks[i]);
                    col.align = "left";
                    col.appendChild(txt);
                    row.appendChild(col);

                    // Third column
                    col = document.createElement('td');
                    const div = document.createElement('div');
                    div.id = p + benchmarks[i];
                    col.appendChild(div);
                    row.appendChild(col);

                    bd.appendChild(row);

                    tbl.appendChild(bd);
                }
            }
        }
        // Plotting
        for (let p = 0; p < nb_p; p++) {
            //Check if the problem was selected
            if (!selected_problem[p])
                continue;
            // Problem is selected
            for (let k = 0; k < instances[p].length; k++) {
                const i = instances[p][k];
                const data = getDataForObjectivePlot(selected_solver, p, i, lineshape);
                const layout = {
                    title: `${problems[p]}   ${benchmarks[i]}`,
                    xaxis: {
                        title: 'time in ms',
                        type: xaxis_type
                    },
                    yaxis: {
                        title: 'objective value'
                    },
                    showlegend: true,
                    height: 700,
                    legend: {
                        orientation: 'h'
                    }
                };
                //console.log(data);
                Plotly.newPlot(p + benchmarks[i], data, layout);
            }
        }
    }

    function getDataForObjectivePlot(selected_s, p, i, lineshape) {
        const data = [];
        let index = 0;
        let min_obj = 0;
        let max_obj = 0;
        let sol = false;
        // Compute minimal and maximal objective
        for (let s = 0; s < nb_s; s++) {
            if (!selected_s[s])
                continue;
            if (step_count[s][i] > 0) {
                if (sol) {
                    min_obj = Math.min(min_obj, objectives[s][i]);
                    max_obj = Math.max(max_obj, objectives[s][i]);
                    min_obj = Math.min(min_obj, first_objectives[s][i]);
                    max_obj = Math.max(max_obj, first_objectives[s][i]);
                } else {
                    sol = true;
                    min_obj = Math.min(objectives[s][i], first_objectives[s][i]);
                    max_obj = Math.max(objectives[s][i], first_objectives[s][i]);
                }
            }
        }
        // Generate data
        if (sol) {
            for (let s = 0; s < nb_s; s++) {
                if (!selected_s[s])
                    continue;
                if (step_count[s][i] > 0) {
                    let trace = {};
                    if (lineshape == 'lines') {
                        trace = {
                            x: step_times[s][i],
                            y: step_obj[s][i],
                            type: 'scatter',
                            name: solvers[s]
                        };
                    } else {
                        trace = {
                            x: step_times[s][i],
                            y: step_obj[s][i],
                            type: 'scatter',
                            line: {
                                shape: lineshape
                            },
                            name: solvers[s]
                        };
                    }
                    data[index] = trace;
                    index++;
                }
            }
        }
        return data;
    }


    function modifyTables(selected_solver, selected_problem) {
        const tables = ["total_table", "problem_table", "instance_table", "objective_plots"];
        for (const i in tables) {
            const tbl_l = document.getElementsByName(tables[i]);
            const tbl = tbl_l[0];
            while (tbl.tBodies.length > 0)
                tbl.removeChild(tbl.tBodies[0]);
        }
        modifyToTal(selected_solver, selected_problem);
        modifyProblem(selected_solver, selected_problem);
        modifyInstance(selected_solver, selected_problem);

        // Retrieve parameters for plotting

        // x-axis type
        let xaxis_type = '-';
        if (document.getElementById("xaxis_linear").checked) {
            xaxis_type = 'linear';
        } else if (document.getElementById("xaxis_log").checked) {
            xaxis_type = 'log';
        }
        // lineshape type
        let lineshape = 'hv';
        if (document.getElementById("lineshape_lines").checked) {
            lineshape = 'lines';
        }
        // Draw plots for each instance
        if (document.getElementById("plot_instance").checked) {
            modifyInstancePlots(selected_solver, selected_problem, xaxis_type, lineshape);
            document.getElementById('plots-section').style.display = 'block';
        } else {
            document.getElementById('plots-section').style.display = 'none';
        }
        // Draw plot for the total score
        // XXX Disable it, because it is not finished yet
        //if (document.getElementById("plot_totalscore").checked) {
        //    draw_scores_over_time(selected_solver, selected_problem, xaxis_type, lineshape, timestep);
        //}
    }

    function sortTotalTable(col, sort_criteria) {
        console.log(`column: ${col}`);
        sortTable("total_table", col, 2, sort_criteria);
    }

    // Adapted from https://www.w3schools.com/howto/howto_js_sort_table.asp
    function sortTable(name, col, col_start, sort_criteria) {
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById(name);
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        console.log(table);
        // Make a loop that will continue until no switching has been done:
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("tr");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = col_start; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("td")[col];
                y = rows[i + 1].getElementsByTagName("td")[col];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (
                        (sort_criteria == "string" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) ||
                        (sort_criteria == "number" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))
                    ) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (
                        (sort_criteria == "string" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) ||
                        (sort_criteria == "number" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))
                    ) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    init();

    return {
        selectFD,
        selectFree,
        selectPar,
        selectOpen,
        selectLocal,
        selectAll,
        clearAll,
        computeSelected,
        sortTotalTable
    }
}