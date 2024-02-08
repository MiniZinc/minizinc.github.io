var max_time=900;
var problem = {};
var pbox={};
var sbox={};
var solver = {};
var optimisation={};
var solved={};
var completed={};
var objective={};
var instance={};
var kind = {};
var status_ = {};
var status_code = {"ERROR":"E","INCORRECT":"I","FLATTENING_ERROR":"FE"};

var time={};
var score={};

var total_time={};
var total_score={};

var problem_time={};
var problem_score={};

var categories = {
  fd_solver:{
    chuffed_fd:true, 
    gecode_fd:true, 
    g12_fd:true, 
    jacop_fd:true
  },
  free_solver:{
    chuffed_free:true, 
    cplex_free:true,
    gecode_free:true,
    fzn2smt_free:true,
    fzntini_free:true,
    g12_fd_free:true, 
    jacop_fd:true,
    scip_free:true
  },
  par_solver:{
    chuffed_par:true, 
    cplex_par:true,
    gecode_par:true,
    fzn2smt_free:true,
    fzntini_free:true,
    g12_fd_free:true, 
    jacop_fd:true,
    scip_free:true
  },
  all:{
    'chuffed_fd':true, 
    'chuffed_free':true, 
    'chuffed_par':true, 
    'cplex_free':true,
    'cplex_par':true,
    'gecode_fd':true, 
    'gecode_free':true,
    'gecode_par':true,
    'fzn2smt_free':true,
    'fzntini_free':true,
    'g12_fd':true, 
    'g12_fd_free':true, 
    'jacop_fd':true,
    'scip_free':true
  }}
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
  for(var ri in results){
    var r = results[ri];
    var k = r[0]; var p = r[1]; var i = r[2]; var v = r[3];
    var so = r[4]; var co = r[5]; var t = r[6]; var o = r[7];
    problem[p] = true;
    solver[v] = true;
    kind[p] = k;
    if(k == "MIN")
      optimisation[p] = -1;
    if(k == "MAX")
      optimisation[p] = 1;
    var sol = "";
    var com = "";
    if(p in instance) {}
    else {instance[p] = {};}
    instance[p][i] = true;
    if(so == "SOL" || so == "UNSOL") {
      if(so == "SOL") {
        solved[v + p + i] = true;
        sol = "S";
      }
      if(co == "COMP"){
        completed[v + p + i] = true;
        com = "C";
      }
      status_[v + p + i] = sol + com;
      if(t != undefined){
        time[v + p + i]=parseInt(t);
        if(o != undefined){
          objective[v + p + i]=parseInt(o);
        }
      }
      else {printArr(r);}
      if(status_[v + p + i]==""){
        status_[v + p + i]="U"
      }
    } else {
      status_[v + p + i] = status_code[so];
    }
  }
  var p1 = document.getElementById("solver_selection");
  var f1 = document.createElement('form');
  f1.name="solver_checked";
  for(var s in solver){
    sbox[s] = document.createElement("input");
    sbox[s].type='checkbox';
    sbox[s].name=s;
    sbox[s].defaultChecked=false;
    sbox[s].value=s;
    f1.appendChild(sbox[s]);
    f1.appendChild(document.createTextNode(s));
    f1.appendChild(document.createElement('br'));
  }
  p1.appendChild(f1);
  var p2 = document.getElementById("problem_selection");
  var f2 = document.createElement('form');
  f2.name="problem_checked";
  for(var p in problem) {
    pbox[p] = document.createElement("input");
    pbox[p].type='checkbox';
    pbox[p].name=p;
    pbox[p].defaultChecked=false;
    pbox[p].value=p;
    f2.appendChild(pbox[p]);
    f2.appendChild(document.createTextNode(p));
    f2.appendChild(document.createElement('br'));
  }
  p2.appendChild(f2);
}



function selectFD(){
  for(var s in categories.fd_solver)
    sbox[s].checked = true;
}

function selectFree(){
  for(var s in categories.free_solver)
    sbox[s].checked = true;
}

function selectPar(){
  for(var s in categories.par_solver)
    sbox[s].checked = true;
}

function selectAll(){
  for(var p in problem)
    pbox[p].checked = true;
}

function clearAll(){
  for(var p in problem)
    pbox[p].checked = false;
  for(var s in solver)
    sbox[s].checked = false;
  
}

function computeSelected(){
  var prob = {};
  var solv = {};
  for(var p in problem){
    if(pbox[p].checked == true){
      prob[p] = true;
    }
  }
  for(var s in solver){
    if(sbox[s].checked == true){
      solv[s] = true;
    }
  }
  modifyTables(solv, prob);
}

// Assume n_solved > 0
function scoreSatisfaction(selected_solver, p, c, solved, n_solved) {
    var sf = {};
    var total_sf = 0;
    for(var v in selected_solver) {
        if ((v + p + c) in solved) {
            sf[v] = max_time/(1 + parseInt(time[v + p + c]));
            total_sf += sf[v];
        } else {
            sf[v] = 0;
        }
    }
    for(var v in selected_solver) {
        if ((v + p + c) in solved) {
            var solution_score = (n_solved ? 50 : 0)/n_solved;
            var speed_score = 50*sf[v]/total_sf;
            score[v + p + c] = solution_score + speed_score;
        } else {
            score[v + p + c] = 0;
        }
    }
}

// Assume n_solved > 0
function scoreOptimisation(selected_solver, p, c) {
    var best = {};
    var n_solved = 0;
    var sf = {};
    var qf = {};
    var total_sf = 0;
    for (var v in selected_solver) {
        score[v + p + c] = 0;
        sf[v] = 0;
        qf[v] = 0;
        if ((v + p + c) in objective) {
            n_solved++;
        }
    }
    var o = optimisation[p];
    // Find the best result.
    var best_score = -999999999;
    var worst_score = -best_score;
    var some_completed=false;
    for (var v in selected_solver) {
        if ((v + p + c) in objective) {
          var this_score = o * objective[v + p + c];
          if (this_score > best_score) {
              best_score = this_score;
          }
          if (this_score < worst_score) {
              worst_score = this_score;
          }
          if((v + p + c) in completed)
            some_completed=true;
        }
    }
    // Count how many found the best result
    var n_best = 0;
    for (var v in selected_solver) {
        if ((v + p + c) in objective) {
            var this_score = o * objective[v + p + c];
            if (this_score == best_score && 
                (some_completed == false || (v + p + c) in completed)){
                n_best++;
                best[v]=true;
            }
        }
    }
    for (var v in selected_solver) {
      if(v in best) {
        sf[v] = max_time/(1 + time[v + p + c]);
        total_sf += sf[v];
      } else {
        sf[v] = 0;
      }
    }
    var total_qf = 0;
    var delta = best_score - worst_score;
    for(var v in selected_solver) {
      if ((v + p + c) in objective) {
          if (delta <= 0) {
              qf[v] = 1/n_solved;
          } else {
              var this_score = o * objective[v + p + c];
              qf[v] = (this_score - (worst_score - delta))/delta;
          }
          total_qf += qf[v];
      } else {
          qf[v] = 0;
      }
    }
    var quality_purse = 100 * n_solved/(n_best + n_solved);
    var speed_purse = 100 * n_best/(n_best + n_solved);
    // Compute the scores.
    for(var v in selected_solver) {
      if ((v + p + c) in objective) {
        var quality_score = quality_purse * (qf[v]/total_qf);
        var speed_score = speed_purse * (sf[v]/total_sf);
        score[v + p + c] = quality_score + speed_score;
      } else {
        score[v + p + c] = 0;
      }
    }
}

function computeScore(selected_solver, selected_problem){
    for(var p in selected_problem){
        for(var c in instance[p]){
            var n_solved = 0;
            var n_completed = 0;
            for(var v in selected_solver) {
                if ((v + p + c) in solved) { n_solved++; }
                if ((v + p + c) in completed) { n_completed++; }
            }
            if (n_completed > 0 && n_solved == 0) {
                // instance is unsatisfiable
                n_solved = n_completed;
                scoreSatisfaction(selected_solver, p, c, completed, n_completed);
            } else {
              // Compute the score for each solver with a solution.
              if (p in optimisation) {
                scoreOptimisation(selected_solver, p, c);
              } else {
                scoreSatisfaction(selected_solver, p, c, solved, n_solved);
              }
            }
        }
    }

  for(var s in selected_solver){
        total_score[s] = 0;
        total_time[s] = 0;
        for(var p in selected_problem){
          problem_score[s + p] = 0;
          problem_time[s + p] = 0;
          for(var i in instance[p]){
            problem_score[s + p] += score[s + p + i];
            if((s + p + i) in time) {
              problem_time[s + p] +=
                parseInt(time[s + p + i]);
            }
            else 
              problem_time[s + p] += max_time;
          }
          total_score[s] += problem_score[s + p];
          total_time[s] += problem_time[s + p];
        }
  }
}

function timeStr(v, p, i) {
  if((v + p + i) in time)
    return(time[v + p + i]);
  else
    return("");
}

function scoreStr(v, p, i) {
  if((v + p + i) in score)
    return(score[v + p + i].toFixed(1));
  else
    return "";
}

function objectiveStr(v, p, i) {
  if(v + p + i in objective)
    return objective[v + p + i];
  else
    return "";
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

function modifyToTal(selected_solver) {
  var tbl = document.getElementsByName('total_table')[0];
  var bd = document.createElement('tbody');
  var tt = 0;
  var ts = 0;
  for(var v in selected_solver){
    tt+=total_time[v];
    ts+=total_score[v];
  }
  addRowText(bd, ["TOTAL", tt, ts.toFixed(1)], 1);
  tbl.appendChild(bd);
  bd = document.createElement('tbody');
  for(var v in selected_solver){
    addRowText(bd, [v, total_time[v], total_score[v].toFixed(1)], 1);
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
  for(var p in selected_problem) {
    var bd = document.createElement('tbody');
    var tt = 0;
    var ts = 0;
    for(var v in selected_solver){
      tt+=problem_time[v + p];
      ts+=problem_score[v + p];
    }
    
    var row = document.createElement('tr');
    row.appendChild(createLinkCol(
      p + " (" + kind[p] +" x" + nb_instances(p) + ")",
      loc[p]));
    row.appendChild(createTxtCol("TOTAL", "left"));
    row.appendChild(createTxtCol(tt, "right"));
    row.appendChild(createTxtCol(ts.toFixed(1), "right"));
    bd.appendChild(row);
    tbl.appendChild(bd);
    bd = document.createElement('tbody');
    for(var v in selected_solver){
      addRowText(bd, 
        [" ", v, problem_time[v + p], problem_score[v + p].toFixed(1)],2
        );
    }
    tbl.appendChild(bd);
  }
}

function modifyInstance(selected_solver, selected_problem) {
  var tbl = document.getElementsByName('instance_table')[0];
  for(var p in selected_problem) {
    for(var i in instance[p]) {
    var bd = document.createElement('tbody');
      var tt = 0;
      var ts = 0;
      for(var v in selected_solver){
        tt+=((v + p + i) in time ? time[v + p + i] : 0);
        ts+=score[v + p + i];
      }
      var row = document.createElement('tr');
      row.appendChild(createLinkCol(
        p + " (" + kind[p] + ")",
        loc[p]));
      row.appendChild(createLinkCol(i, loc[p+i]));
      row.appendChild(createTxtCol("TOTAL", "left"));
      row.appendChild(createTxtCol(" ", "left"));
      row.appendChild(createTxtCol(tt, "right"));
      row.appendChild(createTxtCol(" ", "right"));
      row.appendChild(createTxtCol(ts.toFixed(1), "right"));
      bd.appendChild(row);
      tbl.appendChild(bd);
      bd = document.createElement('tbody');
      for(var v in selected_solver){
        addRowText(bd, 
          [" ", " ", v, 
          status_[v + p + i],  
          timeStr(v,p,i), 
          objectiveStr(v,p,i), 
          scoreStr(v,p,i)], 4
          );
      }
    tbl.appendChild(bd);
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
  for(var s in score){
    score[s] = 0;
  }
  computeScore(selected_solver, selected_problem);
  modifyToTal(selected_solver);
  modifyProblem(selected_solver, selected_problem);
  modifyInstance(selected_solver, selected_problem);
  
}

