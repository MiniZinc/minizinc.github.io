var max_time=900;
var pbox={};
var sbox={};
var status_code = {"ERROR":"E","INCORRECT":"I","FLATTENING_ERROR":"FE"};

var total = 0;
var total_solver = [];
var total_problem = [];
var total_instance = [];
var total_solver_instance = [];
var total_solver_problem = [];

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
    if(category[i]){
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
  modifyTables(solv, prob);
}

function computeScores(selected_s, selected_p){
  var i = 0;
  var s = 0;
  var s2 = 0;
  var p = 0;
  var k = 0;
  total = 0;
  for(s = 0; s < nb_s; s++){
    if(!selected_s[s])
      continue;
    var ts = 0;
    for(p = 0; p < nb_p; p++){
      if(!selected_p[p])
        continue;
      var tsp = 0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var tsi = 0;
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
      var tp = 0;
      for(k = 0; k < instances[p].length; k++){
        i = instances[p][k];
        var ti = 0;
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


function createLinkCol(text, loc) {
  var link = document.createElement('a');
  link.href=loc;
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


// The first n left elements are left aligned, the rest is right aligned
function addRowText(table, rowtext, n) {
  var row=document.createElement('tr');
  var k = n;
  for(var i in rowtext){
    if(k > 0){
      k--; al = "left";
    } else 
      al = "right";
    row.appendChild(createTxtCol(" " + rowtext[i] + " ", al));
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
    if(selected_solver[i])
      addRowText(bd, [solvers[i], 
        total_solver[i]], 1);
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
      addRowText(bd, 
        [" ", solvers[j], 
          total_solver_problem[j][i]
        ],2
      );
    }
    tbl.appendChild(bd);
  }
}

function modifyInstance(selected_solver, selected_problem) {
  var tbl = document.getElementsByName('instance_table')[0];
  var p = 0;
  var k = 0;
  
  for(p = 0; p < nb_p; p++) {
    if(selected_problem[p]){
      for(k = 0; k < instances[p].length; k++) {
      var i = instances[p][k];
  
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
            addRowText(bd, 
              [p_string, i_string, solvers[s], 
              results[s][i], times[s][i], objectives[s][i], 
              total_solver_instance[s][i]
              ], 4
              );
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

