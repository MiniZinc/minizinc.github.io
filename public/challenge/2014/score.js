var max_time=900;
var pbox={};
var sbox={};
var status_code = {"ERROR":"E","INCORRECT":"I","FLATTENING_ERROR":"FE"};

var total = 0;
var total_solver          = []; // Total overall score of a solver
var total_problem         = [];
var total_instance        = [];
var total_solver_instance = []; // Total score of a solver per instance
var total_solver_problem  = []; // Total score of a solver per problem

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
  p2.appendChild(f2);
  for(i = 0; i < nb_s; i++){
    total_solver_problem[i] = [];
    total_solver_instance[i] = [];
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
  addRowText(bd, ["TOTAL", total], 1);
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
          total_solver[i].toFixed(2)], 1);
      } else {
        addRowTextWithColor(bd, [solvers[i], 
          total_solver[i].toFixed(2)], 1, color, 0);
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
    row.appendChild(createTxtCol(total_problem[i], "right"));
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
            total_solver_problem[j][i].toFixed(2)
          ],2
        );
      } else {
        addRowTextWithColor(bd, 
          [" ", solvers[j], 
            total_solver_problem[j][i].toFixed(2)
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
        row.appendChild(createLinkCol(benchmarks[i], loc_instance[i]));
        row.appendChild(createTxtCol("TOTAL", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(" ", "left"));
        row.appendChild(createTxtCol(total_instance[i], "right"));
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
                total_solver_instance[s][i].toFixed(2)
                ], 4
              );
            } else {
              addRowTextWithColor(bd, 
                [p_string, i_string, solvers[s], 
                results[s][i], times[s][i], objectives[s][i], 
                total_solver_instance[s][i].toFixed(2)
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

function modifyTables(selected_solver, selected_problem) {
  var tables=["total_table", "problem_table", "instance_table"];
  for(var i in tables){
    var tbl_l=document.getElementsByName(tables[i]); 
    var tbl=tbl_l[0];
    while(tbl.tBodies.length>0) 
      tbl.removeChild(tbl.tBodies[0]);
  }
  modifyToTal(selected_solver, selected_problem);
  modifyProblem(selected_solver, selected_problem);
  modifyInstance(selected_solver, selected_problem);
}

