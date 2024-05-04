var max_time=1200;
var max_time_in_ms = 1200000;
var pbox={};
var sbox={};
var status_code = {"ERROR":"E","INCORRECT":"I","FLATTENING_ERROR":"FE"};

// Complete Scoring
var total = 0;
var total_solver          = []; // Total overall score of a solver
var total_problem         = [];
var total_instance        = [];
var total_solver_instance = []; // Total score of a solver per instance
var total_solver_problem  = []; // Total score of a solver per problem

// Incomplete Scoring
var total_inc = 0;
var total_solver_inc          = []; // Total overall score of a solver
var total_problem_inc         = [];
var total_instance_inc        = [];
var total_solver_instance_inc = []; // Total score of a solver per instance
var total_solver_problem_inc  = []; // Total score of a solver per problem

// Area Scoring
var total_area = 0;
var total_solver_area          = []; // Total overall score of a solver
var total_problem_area         = [];
var total_instance_area        = [];
var total_solver_instance_area = []; // Total score of a solver per instance
var total_solver_problem_area  = []; // Total score of a solver per problem

var rank_solver              = []; 
var rank_problem_solver      = [];
var map_problem_solver_rank  = [];

function printArr(r){
  document.write("["); 
  var SEP="";
  for(var ri in r){
    document.write(SEP + r[ri]);
    SEP=", ";
  }
  document.write("]");
}

function init(){  
  var p1 = document.getElementById("solver_selection");
  var f1 = document.createElement('form');
  f1.name="solver_checked";
  var i = 0;
  for(i = 0; i < nb_s; i++){
    sbox[i] = document.createElement("input");
    sbox[i].type='checkbox';
    sbox[i].name=solvers[i];
    sbox[i].defaultChecked=false;
    sbox[i].value=i;
    f1.appendChild(sbox[i]);
    f1.appendChild(document.createTextNode(solvers[i]));
    f1.appendChild(document.createElement('br'));
  }
  if (p1 != null)
    p1.appendChild(f1);
  var p2 = document.getElementById("problem_selection");
  var f2 = document.createElement('form');
  f2.name="problem_checked";
  for(i = 0; i < nb_p; i++){
    pbox[i] = document.createElement("input");
    pbox[i].type='checkbox';
    pbox[i].name=problems[i];
    pbox[i].defaultChecked=false;
    pbox[i].value=i;
    f2.appendChild(pbox[i]);
    f2.appendChild(document.createTextNode(problems[i]));
    f2.appendChild(document.createElement('br'));
  }
  if (p2 != null)
    p2.appendChild(f2);
  for(i = 0; i < nb_s; i++){
    total_solver_problem[i] = [];
    total_solver_instance[i] = [];
    total_solver_problem_inc[i] = [];
    total_solver_instance_inc[i] = [];
    total_solver_problem_area[i] = [];
    total_solver_instance_area[i] = [];
  }
}



function selectCategory(category){
  var i = 0;
  for(i = 0; i < nb_s; i++){
    if(category[i] && !sbox[i].disabled){
      sbox[i].checked = true;
    }
  }
}

function selectFD(){
  selectCategory(fd_solvers);
}

function selectFree(){
  selectCategory(free_solvers);
}

function selectPar(){
  selectCategory(par_solvers);
}

function selectOpen(){
  selectCategory(open_solvers);
}

function selectLocal(){
  selectCategory(local_solvers);
}

function selectAll(){
  var i = 0;
  for(i = 0; i < nb_p; i++){
      pbox[i].checked = true;
  }
}

function clearAll(){
  var i = 0;
  for(i = 0; i < nb_p; i++)
    pbox[i].checked = false;
  for(i = 0; i < nb_s; i++)
    sbox[i].checked = false;
}

function computeSelected(){
  var i = 0;
  var prob = [];
  var solv = [];
  for(i = 0; i < nb_p; i++){
    prob[i] = pbox[i].checked;
  }
  for(i = 0; i < nb_s; i++){
    solv[i] = sbox[i].checked;
  }
  computeScores(solv, prob);
  computeScoresInc(solv, prob);
  computeScoresArea(solv, prob);
  rankSolvers(solv, prob);
  modifyTables(solv, prob);
}

function computeScores(selected_s, selected_p){
  var i = 0;
  var s = 0;
  var s2 = 0;
  var p = 0;
  var k = 0;
  total = 0.0;
  for(s = 0; s < nb_s; s++){
    if(!selected_s[s])
      continue;
    var ts = 0.0;
    for(p = 0; p < nb_p; p++){
      if(!selected_p[p])
        continue;
      var tsp = 0.0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var tsi = 0.0;
        for(s2 = 0; s2 < nb_s; s2++){
          if(selected_s[s2])
            tsi += scores[s][s2][i]
        }
        total_solver_instance[s][i] = tsi;
        tsp += tsi;
      }
      total_solver_problem[s][p] = tsp;
      ts += tsp;
    }
    total_solver[s] = ts;
    total+=ts;
  };
  for(p = 0; p < nb_p; p++){
    if(selected_p[p]){
      var tp = 0.0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var ti = 0.0;
        for(s = 0; s < nb_s; s++){
          if(selected_s[s])
            ti += total_solver_instance[s][i];
        }
        total_instance[i] = ti;
        tp+= ti;
      }
      total_problem[p] = tp;
    }
  }
}

function computeScoresInc(selected_s, selected_p){
  var i = 0;
  var s = 0;
  var s2 = 0;
  var p = 0;
  var k = 0;
  total_inc = 0.0;
  for(s = 0; s < nb_s; s++){
    if(!selected_s[s])
      continue;
    var ts = 0.0;
    for(p = 0; p < nb_p; p++){
      if(!selected_p[p])
        continue;
      var tsp = 0.0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var tsi = 0.0;
        for(s2 = 0; s2 < nb_s; s2++){
          if(selected_s[s2])
            tsi += scores_loc[s][s2][i]
        }
        total_solver_instance_inc[s][i] = tsi;
        tsp += tsi;
      }
      total_solver_problem_inc[s][p] = tsp;
      ts += tsp;
    }
    total_solver_inc[s] = ts;
    total_inc+=ts;
  };
  for(p = 0; p < nb_p; p++){
    if(selected_p[p]){
      var tp = 0.0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var ti = 0.0;
        for(s = 0; s < nb_s; s++){
          if(selected_s[s])
            ti += total_solver_instance_inc[s][i];
        }
        total_instance_inc[i] = ti;
        tp+= ti;
      }
      total_problem_inc[p] = tp;
    }
  }
}

// Area scoring
//
function computeScoresArea(selected_s, selected_p) {
    // Initialisations of indeces
    var i = 0;  // Instance
    var ii = 0;
    var p = 0;  // Problem
    var s = 0;  // Solver
    total_area = 0;
    var normalise = false;
    if (document.getElementById("area_scoring").checked) {
        normalise = true;
    }
    // Iterating over the problems
    for (p = 0; p < nb_p; p++) {
        // Check if the problem is selected
        if (!selected_p[p])
            continue;
        // Problem is selected

        // Iterating over the instances
        for (ii = 0; ii < instances[p].length; ii++) {
            i = instances[p][ii];

            // Computing the scores for the instance for each solver
            if (kind[p] == "SAT") {
                computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
            }
            else if (kind[p] == "MIN") {
                computeScoresArea_for_instance_min(selected_s, p, i, normalise);
            }
            else if (kind[p] == "MAX") {
                computeScoresArea_for_instance_max(selected_s, p, i, normalise);
            }

            // Aggregate results for the instance
            var ti = 0;
            for (s = 0; s < nb_s; s++) {
                if (selected_s[s]) {
                    ti += total_solver_instance_area[s][i];
                }
            }
            total_instance_area[i] = ti;
        }

        // Aggregate results for the problem
        var tp = 0;
        for (ii = 0; ii < instances[p].length; ii++) {
            i = instances[p][ii];
            tp += total_instance_area[i];
        }
        total_problem_area[p] = tp;
        total_area += tp;
    }
    
    // Aggregate remaining results for the solvers
    for (s = 0; s < nb_s; s++) {
        if (selected_s[s]) {
            var ts = 0;
            for (p = 0; p < nb_p; p++) {
                if (selected_p[p]) {
                    var tsp = 0;
                    for (ii = 0; ii < instances[p].length; ii++) {
                        i = instances[p][ii];
                        tsp += total_solver_instance_area[s][i];
                    }
                    total_solver_problem_area[s][p] = tsp;
                    ts += tsp;
                }
            }
            total_solver_area[s] = ts;
        }
    }
}

// Computation of the area score for an instance that is unsatisfiable or
// belongs to sat problem
//
function computeScoresArea_for_instance_sat(selected_s, p, i, normalise) {
    var s = 0;
    for (s = 0; s < nb_s; s++) {
        var area = 0;
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
    var s = 0;
    var min_obj = 0;
    var max_obj = 0;
    var sol = false;
    var scale_unsol = 0.25;
    var scale_proof = 0.25;
    var scale_sol = 1 - scale_unsol - scale_proof;
    // Computing the minimal and maximal objective value
    for (s = 0; s < nb_s; s++) {
        // Check if the solver is selected
        if (selected_s[s]) {
            // Solver is selected
            if (step_count[s][i] > 0) {
                if (sol) {
                    min_obj = Math.min(min_obj, objectives[s][i]);
                    max_obj = Math.max(max_obj, first_objectives[s][i]);
                }
                else {
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
        for (s = 0; s < nb_s; s++) {
            var area = 0;
            // Check if the solver is selected
            if (selected_s[s]) {
                // Solver is selected
                if (step_count[s][i] > 0) {
                    // Solver has found at least one solution

                    // First (solution) step
                    area += scale_unsol * step_times[s][i][0];
                    // Intermediate steps
                    var k = 0;
                    var prev_time = 0;
                    var prev_obj = max_obj;
                    var scale_obj = max_obj - min_obj;
                    if (scale_obj > 0) {
                        for (k = 0; k < step_count[s][i]; k++) {
                            area += scale_sol * (((prev_obj - min_obj) / scale_obj) * (step_times[s][i][k] - prev_time));
                            prev_time = step_times[s][i][k];
                            prev_obj  = step_obj[s][i][k];
                        }
                        area += scale_sol * (((prev_obj - min_obj) / scale_obj) * (times[s][i] - prev_time));
                    }
                    else {
                        area += scale_sol * step_times[s][i][0];
                    }
                    // Last (optimal proof) step
                    area += scale_proof * times[s][i];
                }
                else {
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
    }
    else {
        // Use the scoring for sat (unsat) instances
        computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
    }
}

// Computation of the area score for an instance that belongs to a maximisation problem
//
function computeScoresArea_for_instance_max(selected_s, p, i, normalise) {
    var s = 0;
    var min_obj = 0;
    var max_obj = 0;
    var sol = false;
    var scale_unsol = 0.25;
    var scale_proof = 0.25;
    var scale_sol = 1 - scale_unsol - scale_proof;
    // Computing the minimal and maximal objective value
    for (s = 0; s < nb_s; s++) {
        // Check if the solver is selected
        if (selected_s[s]) {
            // Solver is selected
            if (step_count[s][i] > 0) {
                if (sol) {
                    min_obj = Math.min(min_obj, first_objectives[s][i]);
                    max_obj = Math.max(max_obj, objectives[s][i]);
                }
                else {
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
        for (s = 0; s < nb_s; s++) {
            var area = 0;
            // Check if the solver is selected
            if (selected_s[s]) {
                // Solver is selected
                if (step_count[s][i] > 0) {
                    // Solver has found at least one solution

                    // First (solution) step
                    area += scale_unsol * step_times[s][i][0];
                    // Intermediate steps
                    var k = 0;
                    var prev_time = 0;
                    var prev_obj = min_obj;
                    var scale_obj = max_obj - min_obj;
                    if (scale_obj > 0) {
                        for (k = 0; k < step_count[s][i]; k++) {
                            area += scale_sol * (((max_obj - prev_obj) / scale_obj) * (step_times[s][i][k] - prev_time));
                            prev_time = step_times[s][i][k];
                            prev_obj  = step_obj[s][i][k];
                        }
                        area += scale_sol * (((max_obj - prev_obj) / scale_obj) * (times[s][i] - prev_time));
                    }
                    else {
                        area += scale_sol * step_times[s][i][0];
                    }
                    // Last (optimal proof) step
                    area += scale_proof * times[s][i];
                }
                else {
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
    }
    else {
        // Use the scoring for sat (unsat) instances
        computeScoresArea_for_instance_sat(selected_s, p, i, normalise);
    }
}

// Ranking of the solvers corresponding their score
//
function rankSolvers(selected_s, selected_p) {
    for (p = 0; p < nb_p; p++) {
        rank_problem_solver[p]     = [];
        map_problem_solver_rank[p] = [];
    }
    // Initialise arrays
    for (s = 0; s < nb_s; s++) {
        if (selected_s[s]) {
            rank_solver[s] = {id:s, score:total_solver[s]};
            for (p = 0; p < nb_p; p++) {
                if (selected_p[p])
                    rank_problem_solver[p][s] = {id:s, score:total_solver_problem[s][p], color:"none"};
            }
        } else {
            rank_solver[s] = {id:s, score:-1.0};
            for (p = 0; p < nb_p; p++) {
                if (selected_p[p])
                    rank_problem_solver[p][s] = {id:s, score:-1.0, color:"none"};
            }
        }
    }
    // Sorting of the arrays
    rank_solver.sort(function(a, b){return b.score - a.score;});
    for (p = 0; p < nb_p; p++) {
        if (!selected_p[p])
            continue;
        rank_problem_solver[p].sort(function(a, b){return b.score - a.score;});
        var color = "gold";
        rank_problem_solver[p][0].color = "gold";
        for (r = 1; r < nb_s; r++) {
            if (rank_problem_solver[p][r].score < 0.0)
                break;
            if (rank_problem_solver[p][r-1].score == rank_problem_solver[p][r].score) {
                rank_problem_solver[p][r].color = rank_problem_solver[p][r-1].color;
            } else if (r == 1) {
                rank_problem_solver[p][r].color = "silver";
            } else if (r == 2) {
                rank_problem_solver[p][r].color = "#cd7f32";
            } else {
                break;
            }
        }
        for (r = 0; r < nb_s; r++) {
            var s = rank_problem_solver[p][r].id;
            map_problem_solver_rank[p][s] = r;
        }
    }
}

function createLinkCol(text, loc) {
  var link = document.createElement('a');
  link.href=`../${loc}`;
  link.target="_blank";
  link.appendChild(document.createTextNode(text));
  var col = document.createElement('td');
  col.appendChild(link);
  return col;
}

function createTxtCol(text, al) {
  var col = document.createElement('td');
  col.align=al;
  var txt = document.createTextNode(text);
  col.appendChild(txt);
  return col;
}

function createTxtColWithColor(text, al, color) {
  var col = document.createElement('td');
  col.align=al;
  col.style.backgroundColor = color;
  var txt = document.createTextNode(text);
  col.appendChild(txt);
  return col;
}


// The first n left elements are left aligned, the rest is right aligned
function addRowText(table, rowtext, n) {
  var row=document.createElement('tr');
  var k = n;
  for(var i in rowtext){
    if(k > 0){
      k--; al = "left";
    } else 
      al = "right";
    row.appendChild(createTxtCol("   " + rowtext[i] + " ", al));
  }
  table.appendChild(row);
}

// The first n left elements are left aligned, the rest is right aligned.
// The first m elements have no background color.
function addRowTextWithColor(table, rowtext, n, color, m) {
  var row=document.createElement('tr');
  var k = n;
  var l = m;
  //row.style.backgroundColor = color;
  for(var i in rowtext){
    if(k > 0){
      k--; al = "left";
    } else 
      al = "right";
    if (l > 0) {
        row.appendChild(createTxtCol("   " + rowtext[i] + " ", al));
        l--;
    } else {
        row.appendChild(createTxtColWithColor("   " + rowtext[i] + " ", al, color));
    }
  }
  table.appendChild(row);
}

function modifyToTal(selected_solver, selected_problem) {
  var tbl = document.getElementsByName('total_table')[0];
  var bd = document.createElement('tbody');
  addRowText(bd, ["TOTAL", total.toFixed(0), total_inc.toFixed(0), total_area.toFixed(3)], 1);
  tbl.appendChild(bd);
  bd = document.createElement('tbody');
  var i = 0;
  for(i=0; i < nb_s; i++){
    if(selected_solver[i]) {
    var color = "none";
      if (rank_solver[0].id == i)
        color = "gold";
      if (rank_solver[1].id == i)
        color = "silver";
      if (rank_solver[2].id == i)
        color = "#cd7f32";
      if (color == "none") {
        addRowText(bd, [solvers[i], 
          total_solver[i].toFixed(2), total_solver_inc[i].toFixed(2), total_solver_area[i].toFixed(2)], 1);
      } else {
        addRowTextWithColor(bd, [solvers[i], 
          total_solver[i].toFixed(2), total_solver_inc[i].toFixed(2), total_solver_area[i].toFixed(2)], 1, color, 0);
      }
    }
  }
  tbl.appendChild(bd);
}

function nb_instances(p) {
  var nb_i=0;
  for(var i in instance[p])
    nb_i++;
  return nb_i;
}

function modifyProblem(selected_solver, selected_problem) {
  var tbl = document.getElementsByName('problem_table')[0];
  var i = 0;
  for(i = 0; i < nb_p; i++){
    if(!selected_problem[i])
      continue;
    var bd = document.createElement('tbody');
    var row = document.createElement('tr');
    row.appendChild(createLinkCol(
      problems[i] + " (" + kind[i] +" x" + instances[i].length + ")",
      loc_problems[i]));
    row.appendChild(createTxtCol("TOTAL", "left"));
    row.appendChild(createTxtCol(total_problem[i].toFixed(0), "right"));
    row.appendChild(createTxtCol(total_problem_inc[i].toFixed(0), "right"));
    row.appendChild(createTxtCol(total_problem_area[i].toFixed(3), "right"));
    bd.appendChild(row);
    tbl.appendChild(bd);
    bd = document.createElement('tbody');
    var j = 0;
    for(j = 0; j < nb_s; j++){
      if(!selected_solver[j])
        continue;
      var rank = map_problem_solver_rank[i][j];
      var color = rank_problem_solver[i][rank].color;
      if (color == "none") {
        addRowText(bd, 
          [" ", solvers[j], 
            total_solver_problem[j][i].toFixed(2),
            total_solver_problem_inc[j][i].toFixed(2),
            total_solver_problem_area[j][i].toFixed(2)
          ],2
        );
      } else {
        addRowTextWithColor(bd, 
          [" ", solvers[j], 
            total_solver_problem[j][i].toFixed(2),
            total_solver_problem_inc[j][i].toFixed(2),
            total_solver_problem_area[j][i].toFixed(2)
          ],2, color, 1
        );
      }
    }
    tbl.appendChild(bd);
  }
}

function rankAndMap(ranking, map) {
    // Sort the array
    ranking.sort(function(a, b){return b.score - a.score;});
    // Compute the colors
    ranking[0].color = "gold";
    for (r = 1; r < nb_s; r++) {
      if (ranking[r].score < 0.0)
          break;
      if (ranking[r-1].score == ranking[r].score) {
          ranking[r].color = ranking[r-1].color;
      } else if (r == 1) {
          ranking[r].color = "silver";
      } else if (r == 2) {
          ranking[r].color = "#cd7f32";
      } else {
          break;
      }
    }
    // Create the mapping
    for (r = 0; r < nb_s; r++)
      map[ranking[r].id] = r;
}


function modifyInstance(selected_solver, selected_problem) {
  var tbl = document.getElementsByName('instance_table')[0];
  var p = 0;
  var k = 0;
  
  for(p = 0; p < nb_p; p++) {
    if(selected_problem[p]){
      for(k = 0; k < instances[p].length; k++) {
      var i = instances[p][k];

      // Compute the solver ranking
      var ranking = [];
      var map     = [];
      for (s = 0; s < nb_s; s++) {
        if (selected_solver[s]) {
            ranking[s] = {id:s, score:total_solver_instance[s][i], color:"none"};
        } else {
            ranking[s] = {id:s, score:-1.0, color:"none"};
        }
      }
      // Generate the ranking and mapping
      rankAndMap(ranking, map);
  
      var bd = document.createElement('tbody');
        var row = document.createElement('tr');
        row.appendChild(createLinkCol(
          problems[p] + " (" + kind[p] + ")",
          loc_problems[p]));
        row.appendChild(createLinkCol(benchmarks[i], loc_instances[i]));
        row.appendChild(createTxtCol("TOTAL", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(total_instance[i], "right"));
        row.appendChild(createTxtCol(total_instance_inc[i], "right"));
        row.appendChild(createTxtCol(total_instance_area[i], "right"));
        bd.appendChild(row);
        tbl.appendChild(bd);
        bd = document.createElement('tbody');
        var p_string = problems[p];
        var i_string = benchmarks[i];
        var s = 0;
        for(s = 0; s < nb_s; s++){
          if(selected_solver[s]){
            if (ranking[map[s]].color == "none" || ranking[map[s]].score <= 0.0) {
              addRowText(bd, 
                [p_string, i_string, solvers[s], 
                results[s][i], times[s][i], objectives[s][i], 
                total_solver_instance[s][i].toFixed(2),
                total_solver_instance_inc[s][i].toFixed(2),
                total_solver_instance_area[s][i].toFixed(2)
                ], 4
              );
            } else {
              addRowTextWithColor(bd, 
                [p_string, i_string, solvers[s], 
                results[s][i], times[s][i], objectives[s][i], 
                total_solver_instance[s][i].toFixed(2),
                total_solver_instance_inc[s][i].toFixed(2),
                total_solver_instance_area[s][i].toFixed(2)
                ], 4, ranking[map[s]].color, 2
              );
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

function modifyInstancePlots(selected_solver, selected_problem) {
    var tbl = document.getElementsByName('objective_plots')[0];
    var p = 0;
    var k = 0;
  
    for(p = 0; p < nb_p; p++) {
        if(selected_problem[p]){
            for(k = 0; k < instances[p].length; k++) {
                var i = instances[p][k];
                var bd = document.createElement('tbody');
                var row = document.createElement('tr');
                row.appendChild(
                    createLinkCol(problems[p] + " (" + kind[p] + ")", loc_problems[p])
                );
                row.appendChild(createLinkCol(benchmarks[i], loc_instances[i]));
                row.appendChild(createTxtCol("Plot", "left"));
                bd.appendChild(row);
                tbl.appendChild(bd);
                
                bd = document.createElement('tbody');
                var p_string = problems[p];
                var i_string = benchmarks[i];
                
                row = document.createElement('tr');
                // First column
                var col = document.createElement('td');
                var txt = document.createTextNode(problems[p]);
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
                var div = document.createElement('div');
                div.id = p + benchmarks[i];
                col.appendChild(div);
                row.appendChild(col);

                bd.appendChild(row);

                tbl.appendChild(bd);
            }
        }
    }
    // x-axis type
    var xaxis_type = '-';
    if (document.getElementById("xaxis_linear").checked) {
        xaxis_type = 'linear';
    }
    else if (document.getElementById("xaxis_log").checked) {
        xaxis_type = 'log';
    }
    var lineshape = 'hv';
    if (document.getElementById("lineshape_lines").checked) {
        lineshape = 'lines';
    }
    // Plotting
    for (p = 0; p < nb_p; p++) {
        //Check if the problem was selected
        if (!selected_problem[p])
            continue;
        // Problem is selected
        for (k = 0; k < instances[p].length; k++) {
            var i = instances[p][k];
            var data = getDataForObjectivePlot(selected_solver, p, i, lineshape);
            var layout = {
                title: problems[p] + '   ' + benchmarks[i],
                xaxis: {title: 'time in ms', type: xaxis_type},
                yaxis: {title: 'objective value'},
                showlegend: true,
                height: 700,
                legend: {orientation: 'h'}
            };
            console.log(data);
            Plotly.newPlot(p + benchmarks[i], data, layout);
        }
    }
}

function getDataForObjectivePlot(selected_s, p, i, lineshape) {
    var data = [];
    var s = 0;
    var index = 0;
    var min_obj = 0;
    var max_obj = 0;
    var sol = false;
    // Compute minimal and maximal objective
    for (s = 0; s < nb_s; s++) {
        if (!selected_s[s])
            continue;
        if (step_count[s][i] > 0) {
            if (sol) {
                min_obj = Math.min(min_obj, objectives[s][i]);
                max_obj = Math.max(max_obj, objectives[s][i]);
                min_obj = Math.min(min_obj, first_objectives[s][i]);
                max_obj = Math.max(max_obj, first_objectives[s][i]);
            }
            else {
                sol = true;
                min_obj = Math.min(objectives[s][i], first_objectives[s][i]);
                max_obj = Math.max(objectives[s][i], first_objectives[s][i]);
            }
        }
    }
    // Generate data
    if (sol) {
        for (s = 0; s < nb_s; s++) {
            if (!selected_s[s])
                continue;
            if (step_count[s][i] > 0) {
                var trace = {};
                if (lineshape == 'lines') {
                    trace = {
                        x: step_times[s][i],
                        y: step_obj[s][i],
                        type: 'scatter',
                        name: solvers[s]
                    };
                }
                else {
                    trace = {
                        x: step_times[s][i],
                        y: step_obj[s][i],
                        type: 'scatter',
                        line: {shape: lineshape},
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
  var tables=["total_table", "problem_table", "instance_table", "objective_plots"];
  for(var i in tables){
    var tbl_l=document.getElementsByName(tables[i]); 
    var tbl=tbl_l[0];
    while(tbl.tBodies.length>0) 
      tbl.removeChild(tbl.tBodies[0]);
  }
  modifyToTal(selected_solver, selected_problem);
  modifyProblem(selected_solver, selected_problem);
  modifyInstance(selected_solver, selected_problem);
  if (document.getElementById("plot_instance").checked) {
    modifyInstancePlots(selected_solver, selected_problem);
  }
}

