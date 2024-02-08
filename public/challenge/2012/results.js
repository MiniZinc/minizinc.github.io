var nb_s = 29;
 var nb_p = 19;
 var solvers = [
  "bprolog-fd"
 ,"bprolog-free"
 ,"cbc-free"
 ,"choco-fd"
 ,"choco-free"
 ,"chuffed-fd"
 ,"chuffed-free"
 ,"cplex-free"
 ,"cplex-par"
 ,"fzn2smt-free"
 ,"g12_cpx-fd"
 ,"g12_cpx-free"
 ,"g12_fd-fd"
 ,"g12_fd-free"
 ,"g12_lazyfd-fd"
 ,"g12_lazyfd-free"
 ,"gecode-fd"
 ,"gecode-free"
 ,"gecode-par"
 ,"gurobi-free"
 ,"gurobi-par"
 ,"izplus-free"
 ,"jacop-fd"
 ,"jacop-free"
 ,"minisatid-free"
 ,"mistral-free"
 ,"or_tools-fd"
 ,"or_tools-free"
 ,"or_tools-par"
];
var fd_solvers = [
  true
 ,false
 ,false
 ,true
 ,false
 ,true
 ,false
 ,false
 ,false
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,false
 ,false
 ,false
 ,false
 ,true
 ,false
 ,false
 ,false
 ,true
 ,false
 ,false
];
var free_solvers = [
  false
 ,true
 ,true
 ,false
 ,true
 ,false
 ,true
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,true
 ,true
 ,false
 ,true
 ,false
];
var par_solvers = [
  false
 ,true
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,true
 ,false
 ,false
 ,true
 ,false
 ,true
 ,true
 ,false
 ,true
 ,true
 ,true
 ,false
 ,false
 ,true
];
var all_solvers = [
  true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
 ,true
];
var problems = [
  "amaze"
 ,"amaze2"
 ,"carpet-cutting"
 ,"fast-food"
 ,"filters"
 ,"league"
 ,"mspsp"
 ,"nonogram"
 ,"parity-learning"
 ,"pattern-set-mining-k1"
 ,"pattern-set-mining-k2"
 ,"project-planning"
 ,"radiation"
 ,"ship-schedule"
 ,"solbat"
 ,"still-life-wastage"
 ,"tpp"
 ,"train"
 ,"vrp"
];
var kind = [
  "MIN"
 ,"SAT"
 ,"MIN"
 ,"MIN"
 ,"MIN"
 ,"MIN"
 ,"MIN"
 ,"SAT"
 ,"MIN"
 ,"MAX"
 ,"MAX"
 ,"MIN"
 ,"MIN"
 ,"MAX"
 ,"SAT"
 ,"MAX"
 ,"MIN"
 ,"MIN"
 ,"MIN"
];
var instances = [
 [ 0,1,2,3,4,5]
,[ 6,7,8,9,10,11]
,[ 12,13,14,15,16]
,[ 17,18,19,20,21]
,[ 22,23,24,25,26]
,[ 27,28,29,30,31,32]
,[ 33,34,35,36,37,38]
,[ 39,40,41,42,43]
,[ 44,45,46,47,48,49,50]
,[ 51,52]
,[ 53,54,55]
,[ 56,57,58,59,60,61]
,[ 62,63,64,65,66]
,[ 67,68,69,70,71]
,[ 72,73,74,75,76]
,[ 77,78,79,80,81]
,[ 82,83,84,85,86,87,88]
,[ 89,90,91,92,93,94]
,[ 95,96,97,98,99]

];
var benchmarks = [
  "2012-03-08"
 ,"2012-03-15"
 ,"2012-03-19"
 ,"2012-06-22"
 ,"2012-06-29"
 ,"2012-07-04"
 ,"2012-03-08"
 ,"2012-03-15"
 ,"2012-06-22"
 ,"2012-06-28"
 ,"2012-06-29"
 ,"2012-07-04"
 ,"mzn_rnd_test.05"
 ,"mzn_rnd_test.10"
 ,"mzn_rnd_test.14"
 ,"mzn_rnd_test.16"
 ,"mzn_rnd_test.17"
 ,"ff3"
 ,"ff58"
 ,"ff59"
 ,"ff61"
 ,"ff63"
 ,"ar_1_2"
 ,"dct_1_1"
 ,"ewf_1_1"
 ,"fir16_1_1"
 ,"fir_1_1"
 ,"model100-21-12"
 ,"model20-3-5"
 ,"model30-4-6"
 ,"model50-4-4"
 ,"model55-3-12"
 ,"model90-18-20"
 ,"easy_01"
 ,"hard_01"
 ,"hard_03"
 ,"medium_02"
 ,"medium_03"
 ,"medium_05"
 ,"non_awful_3"
 ,"non_awful_5"
 ,"non_fast_11"
 ,"non_fast_4"
 ,"non_fast_8"
 ,"44_22_5.2"
 ,"44_22_5.3"
 ,"48_24_6.1"
 ,"48_24_6.2"
 ,"52_26_6.1"
 ,"52_26_6.2"
 ,"52_26_6.3"
 ,"ionosphere"
 ,"mushroom"
 ,"audiology"
 ,"german-credit"
 ,"segment"
 ,"ProjectPlannertest_12_8"
 ,"ProjectPlannertest_13_6"
 ,"ProjectPlannertest_13_8"
 ,"ProjectPlannertest_14_8"
 ,"ProjectPlannertest_16_7"
 ,"ProjectPlannertest_17_9"
 ,"m06_15_15"
 ,"m07_07_20"
 ,"m12_10_20"
 ,"m18_12_05"
 ,"m40_10_02"
 ,"5Ships"
 ,"6ShipsMixed"
 ,"7ShipsMixed"
 ,"7ShipsMixedUnconst"
 ,"8ShipsUnconst"
 ,"sb_12_12_5_1"
 ,"sb_13_13_5_4"
 ,"sb_14_14_6_0"
 ,"sb_14_14_6_4"
 ,"sb_15_15_6_3"
 ,"09"
 ,"10"
 ,"11"
 ,"12"
 ,"13"
 ,"tpp_3_3_30_1"
 ,"tpp_3_5_20_1"
 ,"tpp_5_3_20_1"
 ,"tpp_5_5_20_1"
 ,"tpp_7_3_20_1"
 ,"tpp_7_5_20_1"
 ,"tpp_7_5_30_1"
 ,"instance.12"
 ,"instance.15"
 ,"instance.2"
 ,"instance.3"
 ,"instance.6"
 ,"instance.7"
 ,"A-n38-k5.vrp"
 ,"A-n62-k8.vrp"
 ,"B-n51-k7.vrp"
 ,"P-n20-k2.vrp"
 ,"P-n60-k15.vrp"
];
var results = [
 [ "UNKNOWN","UNKNOWN","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","SC","S ","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","UNKNOWN","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","SC","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","S ","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect"," C"," C","SC","SC","S ","S ","S ","S ","ERROR Incorrect","S ","S ","ERROR Incorrect","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S "]
,[ "S ","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","S ","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","SC","UNKNOWN","SC","SC","SC","S ","S ","S ","S ","S ","UNKNOWN","SC","SC","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","SC","SC","S ","S ","UNKNOWN","SC","SC","UNKNOWN","SC","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","S ","S ","SC","SC","SC","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","  "]
,[ "UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","SC","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","UNKNOWN","S "]
,[ "UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","SC","S ","S ","S ","S ","S ","S ","UNKNOWN","S ","S ","SC","SC","SC","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","S ","S ","SC","S ","S ","S ","S ","UNKNOWN","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","S ","UNKNOWN","S ","SC","SC","SC","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","UNKNOWN","ERROR Incorrect","UNKNOWN","ERROR Incorrect","ERROR Incorrect","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","SC","S ","SC","SC","S ","S ","S ","UNKNOWN","S ","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","ERROR Incorrect","UNKNOWN","ERROR Incorrect","UNKNOWN","S ","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","SC","SC","SC","S ","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","S ","UNKNOWN"]
,[ "S ","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","SC","S ","SC","SC","SC","SC","S ","SC","SC","SC","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","SC","SC","SC","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","SC","S ","S ","S ","S ","S ","S "]
,[ "SC","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","SC","S ","SC","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","SC","S ","S ","SC","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","S ","S ","S ","SC","UNKNOWN","ERROR Incorrect","ERROR Incorrect","SC","SC","UNKNOWN","SC","SC","S ","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","SC","SC","S ","S ","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","S ","S ","SC","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","SC","S ","UNKNOWN","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","S ","SC","S ","SC","S ","S ","S ","SC","UNKNOWN","ERROR Incorrect","ERROR Incorrect","SC","SC","UNKNOWN","SC","S ","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","SC","SC","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","SC","SC","S ","ERROR Incorrect","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","UNKNOWN","S ","S ","S ","S ","SC","SC","SC"]
,[ "S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","S ","S ","SC","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","SC","S ","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","S ","S "]
,[ "S ","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","SC","SC","S ","SC","SC","SC","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","S ","SC","SC","UNKNOWN","S ","S ","UNKNOWN","UNKNOWN","SC","SC","SC","S ","S ","SC","SC","SC","S ","SC","S ","SC","SC","S ","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","SC","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","SC","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","S ","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","UNKNOWN","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","SC","S ","S ","SC","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","SC","SC","SC","SC","SC","S ","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","S ","SC","S ","S ","S ","S ","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","S ","SC","S ","SC","S ","S ","S ","S ","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","S ","SC","SC","S ","UNKNOWN","UNKNOWN","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","SC","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","SC","SC","SC","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","SC","S ","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","SC","S ","S ","SC","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","S ","SC","SC","SC","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","SC","SC","SC","S ","SC","S ","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","UNKNOWN","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","SC","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","SC","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","SC","S ","S ","UNKNOWN","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","SC","S ","S ","S ","S ","S ","S ","SC","S ","S ","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","SC","S ","S ","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","SC","S ","S ","S ","S ","S ","S ","SC","S ","S ","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","SC","S ","S ","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","UNKNOWN","S ","S ","S ","SC","S ","SC","S ","S ","S ","S ","SC","S ","S ","SC","SC","SC","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","SC","SC","S ","S ","S ","S ","SC","S ","S ","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","SC","S ","S ","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","SC","S ","SC","SC","S ","S ","S ","SC","UNKNOWN","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect","UNKNOWN","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","SC","SC","SC","SC","SC","S ","SC","SC","SC","SC","S ","S ","S ","SC","SC","S ","S ","S ","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","S ","S ","S ","S ","SC","SC","SC","S ","S ","S ","UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","SC","SC","SC","SC","S ","SC","SC","SC","UNKNOWN","ERROR Incorrect","ERROR Incorrect","SC","ERROR Incorrect","UNKNOWN","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","SC","SC","SC","SC","S ","S ","S ","SC","SC","S ","S ","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","SC","S ","S ","S ","S ","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","SC","S ","S ","S ","UNKNOWN","SC","S ","S ","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","S ","S ","S ","SC","S ","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","SC","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","S ","S ","S ","SC","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","S ","SC","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","UNKNOWN","SC","SC","SC","SC","SC","SC","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","SC","SC","S ","S ","S ","S ","SC","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","ERROR Incorrect","ERROR Incorrect","ERROR Incorrect"," C"," C","S ","S ","S ","S ","UNKNOWN","S ","S ","S ","S ","S ","S ","S ","S ","ERROR Incorrect","S ","S ","UNKNOWN","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","S ","SC","SC","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","ERROR Incorrect","S ","ERROR Incorrect","S ","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","SC","SC","SC","SC","S ","UNKNOWN","S ","S ","UNKNOWN","SC","SC","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","UNKNOWN","S ","S ","S ","S ","S ","SC","ERROR Incorrect","S ","S ","S ","SC","SC","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S ","S ","SC","SC","SC","SC","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","S ","S ","UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","UNKNOWN","SC","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","S ","SC","SC","SC","SC","SC","SC","UNKNOWN","SC","SC","SC","S ","S ","UNKNOWN","S ","UNKNOWN","S ","S ","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","S ","S ","S ","UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","S ","SC","UNKNOWN","S ","UNKNOWN","S ","SC","UNKNOWN","UNKNOWN","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","S ","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","  ","  ","  ","S ","  "]
,[ "UNKNOWN","SC","SC","SC","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","UNKNOWN","SC","SC","SC","SC","UNKNOWN","UNKNOWN","S ","SC","SC","SC","SC","SC","SC","UNKNOWN","UNKNOWN","UNKNOWN","S ","SC","SC","S ","S ","UNKNOWN","S ","UNKNOWN","S ","S ","UNKNOWN","SC","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","S ","SC","SC","SC","UNKNOWN","UNKNOWN","S ","S ","UNKNOWN","UNKNOWN","UNKNOWN","SC","SC","SC","SC","SC","SC","S ","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","UNKNOWN","S ","S ","S ","S ","S "]

];
var times = [
 [ " "," ","563","203"," "," "," "," "," "," "," "," "," "," "," "," "," ","80","900","357","758","474"," "," "," "," "," "," "," "," "," "," ","900","2"," "," ","11","1","22"," "," "," "," ","19","22","40","181","148","641","428","692","900"," ","698","900","900"," "," "," ","900"," "," ","8"," "," "," "," ","900"," "," "," ","900"," "," "," ","0","0","24","43","900","900","900","900"," ","900","900"," ","900","900"," "," "," "," "," "," ","900","900","900","900","900"]
,[ "900","27","5","5","25","3"," "," ","364","19"," ","661"," "," "," "," "," ","596"," ","180","327","174","900","900","900","900","900"," ","87","613","900","900"," "," "," "," ","68"," "," ","260","179","243","114","205","30","9","58","368","617","551","54"," "," ","289"," "," ","170","241","309","463","900","900","80","21","900","900"," ","593","687"," ","794"," ","5","2","1","2","5","219","389","301","478","900","900","147","351","798","900"," "," "," "," "," "," "," "," ","900","900","900","900","900"]
,[ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","900","900","900","900","900"," "," "," "," ","420"," ","25","900"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","900"," "," "," "," "," "," ","900"," "," "," "," "," "," "," "," "," "," "," ","7","900"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","900","900","900"," ","900"]
,[ " ","330"," "," "," "," "," "," "," "," "," "," ","900"," "," ","900"," ","11","263","108","122","77"," "," ","900","900","211","900","900","900","900","900","900"," ","900","900","164","97","206"," "," ","28","141","3","78","110","552","433","900"," "," ","900","900","65","900","900","900","900"," ","900","900","900","12"," "," "," "," ","152","900","900"," ","900","3","34","3"," "," ","26","39","900","900","900"," "," "," "," "," "," "," "," "," ","900","900","900","900","900","900","900","900","900"]
,[ " ","900","137"," "," "," "," "," "," ","117"," "," "," "," "," "," "," ","900"," ","900","900","900","900","900","900","900","2","900","12","133","900","900","900"," ","900"," ","2","3","15"," "," ","4","2","2"," "," "," "," "," "," "," "," "," "," "," ","900","900","349","900","900","900","900","900","900","900","900"," ","71","96","152","900"," ","5","72","3"," "," ","900","900","900","900","900"," "," "," "," "," "," "," ","900","900","900","900","900","900","900","900"," ","900"," "]
,[ "900","0","1","0","18","0"," "," "," ","20"," "," ","900"," "," ","900"," ","119","900","359","317","175","0","900","0","162","0","900","0","3","900","900","900","0","3","1","0","0","0","9","2","1","0","1","22","32","230","143","549","614","899"," "," "," "," "," ","1","1","3","144","18","900","0","0","186"," "," ","0","46","249","107","14","1","3","0","153","7","2","2","40","113","93","1","0","1","0","1","3","6","900","900","900","900","76","900","900","900","900","900","900"]
,[ "244","1","0","0","9","1"," ","120","6","0"," "," ","900"," "," ","900"," ","31","321","101","86","46","0","900","1","900","0","900","0","0","900","900","900","1","18","0","0","1","0","0","1","0","0","1","6","13","769","268"," ","90"," "," "," "," "," "," ","0","2","1","2","13","29","0","1","415","900","900","1","0","0","0","0","0","5","1","30","1","4","4","31","59","84","0","1","0","1","1","1","5","900","707","900","900","28","900","900","900","900","900","900"]
,[ " ","406","41","45"," ","411","898","898","891","338","891","885"," "," "," "," "," ","900","900","900","900","900","560","900","900","900","0"," "," "," ","32","37"," ","15","266","900","4","16","35"," "," "," "," "," ","69","48","85"," "," "," ","731","14","900","1","900","900","882","881","882","882","882","882","0","0","875","900","900","14","19","51","23","102","418","882","313","341","311","900","900"," "," "," ","31","175","900","900","900","900"," "," ","900"," "," ","900","900","900","816","900","900","900"]
,[ " "," ","278"," "," ","782","233"," ","894","382","891","886"," "," "," "," "," ","862","812","900","735","900","105","900","900","900","1"," "," "," ","28","30"," ","14","900","417","4","14","15"," "," "," "," "," ","51","11","29","439","855"," ","512","14","900","2","900","900","882","881","882","882","882","884","1","0","507","900"," ","12","14","26","19","39","39","882","112","883","402","900","900","900","900"," ","28","128","238"," "," "," "," ","900","900"," "," ","900","900","900","900","587","639","233"]
,[ "900","16","3","2","74","20"," ","93","4","0"," ","577"," "," "," "," "," ","284","740","342","320","217","14","900","900","900","1","900","0","0","900","900","900","4","34","10","1","4","3"," ","801","115","29","74"," "," "," "," "," "," "," ","900"," ","4","900"," ","2","4","5","5","21","68","900","111"," "," "," ","3","4","5","5","6","6","10","4","18","3","85","192","900","900","900","1","2","3","14","9","103","132","900","900","900","900","900","900","900","900"," ","900","900"]
,[ "900","0","3","0","88","1"," "," "," ","872"," "," ","900"," ","900","900","900","13","358","106","89","51","1","900","0","492","0","900","0","9","900","900","900","0","20","1","0","1","0"," ","519","295","91","4","211","362"," ","900","900"," "," ","196","208","1","900","900","3","4","7","900","66","900","1","0","900"," "," ","1","2","7","3","22","0","8","1","531","30","5","5","54","285","195","1","1","0","7","3","26","137","900","900","900","900","25","900","900","900","900","900","900"]
,[ " ","22","4","3","65","10"," ","832","4","0"," ","12"," "," "," "," "," ","3","21","11","11","9","1","900","22","900","0"," "," "," "," "," "," ","1","161","2","0","1","0","67","47","88","4","140","258","105","267","900"," "," ","348","34","66","0","900","39","0","3","3","7","17","74","2","1","900","900"," ","0","3","10","6","0","142","11","4"," ","810","32","79","187","327","866","1","0","1","6","4","149","149","900","36","900","900","6","900","900","900","900","900","900"]
,[ " "," ","688","223"," "," "," "," "," "," "," "," ","900","900","900","900","900","6","80","30","34","20"," ","900","900","900","900","900","900","900","900","900","900"," "," "," "," "," ","900"," "," "," "," ","6","28","41","211","167","602","572","892","900","900","448","900","900","900","900","900","900","900","900","10"," "," "," "," ","129","900","900","900","900","2","41","1"," "," ","38","62","900","900","900","900","877","900","900","900","900","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " "," ","9"," "," "," "," "," "," ","5"," "," ","900","900","900","900","900","115","900","850","900","608","900","900","900","900","3"," ","0"," "," "," "," ","791","900","900","0","796","900"," "," ","36","3","161"," "," "," "," "," "," "," ","900","32","2","900","900","19","900","900","900"," "," ","53","1","900","900","900","12","55","155","900","900","6"," "," "," "," ","900","900","900","900","900","900","131","900"," ","900"," "," ","900","484","900","900","9","900","900","900","900","900","900"]
,[ " ","0","6","1","323","1"," "," "," ","713"," "," "," "," "," "," "," ","900","900","900","900","900","0","900","1","517","1","900","2","63","900","900","900","1","46","3","0","1","1"," ","312","471","66","5","900","900"," "," "," "," "," ","900","373","4","900","900","2","4","5","900","57","900","1","1"," "," "," ","10","7","19","11","108","1","25","7"," ","20","19","13","900","900","900","1","1","0","3","1","15","33","900","900","900","900","900","900","900","900","900","900","900"]
,[ "900","4","0","1","41","2"," ","147","9","0"," "," "," "," "," "," "," ","35","477","103","85","89","2","900","16","900","1"," "," "," "," "," "," ","1","37","2","1","1","1","23","30","17","5","15","635","573"," "," "," "," "," ","900","900","1","900","900","1","2","1","1","6","19","2","0","900","900"," ","27","19","50","27","46","6","9","3","11","4","535","628","900","900","900","0","1","1","3","1","50","51","900","900","900","900","365","900","900"," ","900","900","900"]
,[ " ","108","75","24"," ","190"," "," "," "," "," "," ","900","900","900","900","900","1","21","8","9","6"," ","900","900","900","46","900","900","900","900","900","900","18","900","900","29","18","64"," "," ","1","26","2","9","13","77","58","200","198","294","255","134","12","900","900","900","900","900","900","900","900","8"," "," "," "," ","2","4","157","103","900","0","14","1"," "," ","11","19","572","900","900","471","51","53","86","258","177","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " ","122","84","29"," ","214"," "," "," "," "," "," ","900","900","900","900","900","2","25","10","12","6"," ","900","900","900","56","900","900","900","900","900","900","22","900","900","35","22","79"," "," ","2","31","2","11","16","95","71","248","245","365","259","139","13","900","900","900","900","900","900","900","900","10"," "," "," "," ","2","4","157","103","900","0","17","0"," "," ","13","23","696","900","900","448","49","50","82","247","169","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " ","32","21","7"," ","56"," "," "," "," "," "," ","900","900","900","900","900","1","8","4","5","3"," ","900","900","900","12","900","430","900","900","900","900","2","900","900","3","2","7","1","1","0","1","0","2","4","9","14","49","34","57","108","149","4","900","900","306","681","900","900","900","900","3","900","900"," "," ","4","5","50","27","900","1","9","0"," "," ","3","7","186","900","900","86","4","2","9","32","59","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " "," ","286"," "," "," ","899","560","891","30","891","886"," "," "," "," "," ","412","900","503","900","319","94","900","900","900","1"," "," "," "," "," "," ","17","433","750","4","17","37"," "," "," "," "," ","81","114","46","819","900","80","196","11","557","3","900","285","238","567","349","882","882","883","2","0","900","900","900","20","23","34","33","53","248","882","140","882","886","547","900","900","900","900","32","146","237","900","900","900"," "," ","900","900"," ","900","900","900","900","900","900","900"]
,[ " "," "," "," "," "," ","551","487","891","36","463","885"," "," "," "," "," ","419","900","261","223","100","48","900","302","470","1"," "," "," ","9"," "," ","18","235","754","5","16","35"," "," "," "," "," ","32","9","26","165","814","56","127","11","496","2","900","221","306","571","547","882","882","882","1","0","900","900","490","27","25","30","35","56","882","882","193","882","883","283","900","900","900","900","26","223","98"," "," "," "," ","900"," "," ","900","900","900","900","900","900","900","900"]
,[ " "," ","900","900"," "," "," "," "," ","855"," "," ","900"," ","900","900","900","648","900","900","900","900","900","900","900","900","790"," ","1","900","900","900"," ","0","900","900","0","1","0"," "," "," "," "," ","55","49","419","900","900","900","679","900","900","69","900","900","900","900","900","900","900","900","900","900","900","900","900","1","0","1","0","1","581"," "," ","185"," ","900","900","900","900","900","516","900","900","900","900","900","900","900","900","900","900","900","900","900","900","900","900","900"]
,[ " "," "," ","43"," "," "," "," "," "," "," "," ","900"," ","900","900"," ","26","292","115","149","120","0","1","0","1","0","900","900","900","900","900","900","638"," "," "," ","642"," "," "," ","2","34","2","64","144","649","370","900"," "," ","900","163","70","900","900","900","900","900","900","900","900","21"," "," "," "," ","2","11","289","178","900","1","25","2"," "," ","33","56","900","900","900","900","155","162","292","883","766","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " ","435"," ","44"," "," "," "," "," "," "," "," ","900"," ","900","900"," ","26","292","116","150","121","0","1","0","1","0","900","900","900","900","900","900","640"," "," "," ","641"," "," "," ","2","34","2","65","144","656","369","900"," "," ","900","162","71","900","900","900","900","900","900","900","900","21"," "," "," "," ","2","11","290","183","900","1","25","1"," "," ","33","55","900","900","900","900","154","160","291","879","772","900"," ","900","900","900","900","900","900","900","900","900","900"]
,[ " "," ","900","900"," ","900"," "," "," "," "," "," "," "," "," "," "," ","900"," "," "," "," "," "," "," "," "," ","900","900","900","900","900","900"," "," "," "," "," "," ","106","60","69","19","85"," ","900"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","900","900","900","900"," "," "," "," "," "," "," "," "," ","0","0","900","900","900","900"," ","900","900","900","900","900","900","900","900"," ","900","900"," ","900","900","900","900","900","900"]
,[ " ","900","2","27"," ","900"," "," "," ","1"," "," "," "," "," "," "," ","900","900","900","900","900"," ","900"," ","900","0"," "," "," "," "," "," ","10","900","108","0","10","6","70"," ","39","4"," ","804","445"," "," ","900"," "," ","900","27","3","900","900"," ","4","1","6","6","5","18"," ","900","900","900","6","796","900","900","900"," "," "," "," "," ","900","900","900","900","900","900","78","171","146","552","900","900","900","900","900","900","900","900","900","900","900","900","900"]
,[ " ","81","83","19"," ","244"," "," "," "," "," "," ","900"," ","900","900"," ","9","153","51","55","33"," "," "," "," ","118"," "," "," "," "," ","900","68"," ","105","104","68","120"," "," ","8","127","4","38","55","262","208","747","636"," ","758","142","56","900","900"," ","900"," ","900","900"," ","8"," "," "," "," ","0","4","131","77","557","1","10","1"," "," ","900","900"," "," "," ","217","16","17","18","70","38","900"," "," "," "," "," "," ","900","900","900","900","900"]
,[ " ","777","520","165"," "," "," "," "," "," "," "," "," "," "," "," "," ","44","654","179","176","109"," "," "," "," ","25","900","1"," ","900"," ","900","0"," "," ","27","0","8"," "," ","34","2","27"," "," "," "," "," "," "," ","900","305","373","900","900"," "," "," "," "," "," "," ","900"," "," "," ","1","31","597","302","900","9","85","1"," "," "," "," "," "," "," ","349"," "," "," "," "," "," "," "," "," "," "," "," ","900","900","900","900","900"]
,[ " ","155","160","36"," ","467"," "," "," "," "," "," "," "," "," "," "," ","19","294","98","102","57"," "," "," "," ","228"," "," "," "," "," ","900","138"," ","224","207","138","242"," "," ","31","379","23","74","104","501","395"," "," "," ","900","349","141","900","900"," ","900"," ","900","900"," ","14"," "," "," "," ","2","8","268","150","900","3","23","3"," "," ","900","900"," "," "," ","399","31","31","34","130","73","900"," "," "," "," "," "," ","900","900","900","900","900"]

];
var objectives = [
 [ " "," ","447","928"," "," "," "," "," "," "," "," "," "," "," "," "," ","1330","1492","242","152","103"," "," "," "," "," "," "," "," "," "," ","2089931","26"," "," ","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","38"," ","54","10","79"," "," "," "," "," "," ","711"," "," "," "," ","391960"," "," "," ","375190"," "," "," "," "," ","43","54","64","73","88","274"," ","147","140"," ","197","228"," "," "," "," "," "," ","2770","6832","5143","727","2634"]
,[ "762","1429","447","928","763","481"," "," "," "," "," "," "," "," "," "," "," ","1330"," ","242","152","103","81","100","99","99","94"," ","49984","79973","189975","119949"," "," "," "," ","15"," "," "," "," "," "," "," ","2","2","2","5","5","2","1"," "," ","54"," "," "," "," "," "," "," "," ","711","856","5087","24082"," ","483650","301650"," ","389100"," "," "," "," "," "," ","43","54","64","76","71","281","127","141","115","209"," "," "," "," "," "," "," "," ","2231","4533","4097","585","2346"]
,[ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","1332","1381","398","221","221"," "," "," "," ","18"," ","49984","89975"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","2"," "," "," "," "," "," ","3"," "," "," "," "," "," "," "," "," "," "," ","856","5234"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","814","1949","1075"," ","1195"]
,[ " ","1429"," "," "," "," "," "," "," "," "," "," ","1417"," "," ","1412"," ","1330","1154","242","152","103"," "," ","28","35","18","3139922","59985","139977","159976","159958","2089930"," ","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5"," "," ","52","624","54","20","245"," "," "," "," "," "," ","711"," "," "," "," ","483650","222900","240100"," ","481050"," "," "," "," "," ","43","54","64","76","88"," "," "," "," "," "," "," "," "," ","72920","73320","32120","73420","2660","6584","4869","631","2558"]
,[ " ","1429","447"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","4638"," ","1960","1083","400","18","34","28","35","18","3569924","49984","79973","99971","179958","1479922"," ","37"," ","15","26","18"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","214"," "," "," "," "," "," ","3328","5584","22101","156324"," ","483650","301650","407850","389100"," "," "," "," "," "," ","29","36","37","35","69"," "," "," "," "," "," "," ","77860","81740","84650","79750","28290","78580","1901","4430"," ","357"," "]
,[ "746","1429","447","928","763","481"," "," "," "," "," "," ","2121"," "," ","2297"," ","1330","1183","242","152","103","18","34","28","35","18","3129923","49984","79973","159974","159955","2029929","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1"," "," "," "," "," "," "," "," "," "," "," ","711","856","5086"," "," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","76","90","190","127","141","115","125","105","124","74040","82010","71820","72920","28290","71920","2660","6584","4985","656","2558"]
,[ "746","1429","447","928","763","481"," "," "," "," "," "," ","2121"," "," ","2297"," ","1330","1154","242","152","103","18","34","28","35","18","3139917","49984","79973","99971","109949","2029915","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5"," ","2"," "," "," "," "," "," "," "," "," "," "," "," ","711","856","5086","17899","6771496","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","76","90","190","127","141","115","125","105","124","76480","81740","71820","72920","28290","71920","1296","3258","1922","250","1697"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","34","28","35","18"," "," "," ","99971","109949"," ","26","35","34","15","26","18"," "," "," "," "," ","2","2","2"," "," "," ","1","195","3288","54","399","323"," "," "," "," "," "," ","711","856","5086","17571","203368","483650","301650","407850","389100","834150"," "," "," "," "," ","30","53"," "," "," ","190","127","150","190","158","174"," "," ","92550"," "," ","31820","75030","749","1515","1042","216","1051"]
,[ " "," ","447"," "," ","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","34","28","35","18"," "," "," ","99971","109949"," ","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5"," ","1","195","3288","54","402","321"," "," "," "," "," "," ","711","856","5086","17571"," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","47","58","66"," ","190","127","141"," "," "," "," ","74800","89340"," "," ","28540","77120","736","1529","1030","217","1028"]
,[ "826","1429","447","928","763","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","41","28","40","18","4889943","49984","79973","99976","109950","2449933","26","35","30","15","26","18"," "," "," "," "," "," "," "," "," "," "," "," ","113"," ","54","368"," "," "," "," "," "," "," ","711","856"," "," "," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","73","2","190","127","141","115","125","105","124","105640","107120","99240","123040","29410","105640","3076","7098"," ","1022","2768"]
,[ "746","1429","447","928","763","481"," "," "," "," "," "," ","1417"," ","1937","1236","2216","1330","1154","242","152","103","18","34","28","35","18","3109923","49984","79973","159974","159953","2059930","26","35","30","15","26","18"," "," "," "," "," ","2","2"," ","5","6"," "," ","195","3288","54","20","313"," "," "," "," "," "," ","711","856","5086"," "," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","76","90","190","127","141","115","125","105","124","74040","81740","71820","72920","28290","71920","2746","6699","4987","706","2621"]
,[ " ","1429","447","928","763","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","35","28","50","18"," "," "," "," "," "," ","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5"," "," ","1","195","3288","54","415","327"," "," "," "," "," "," ","711","856","5086","20167"," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","76","90","190","127","141","115","125","105","124","73020","81740","72020","72420","28290","71920","2745","6770","5105","712","2621"]
,[ " "," ","447","928"," "," "," "," "," "," "," "," ","1417","4520","1982","1412","2216","1330","1154","242","152","103"," ","34","28","35","18","3139922","59985","139977","159976","159958","2089930"," "," "," "," "," ","19"," "," "," "," "," ","2","2","2","5","5","2","1","122","3288","54","20","280"," "," "," "," "," "," ","711"," "," "," "," ","483650","222900","240100","228600","481050"," "," "," "," "," ","43","54","64","75","88","251","127","147","132","143","120","236"," ","84870","72920","73320","32120","73420","2731","6658","4985","683","2612"]
,[ " "," ","447"," "," "," "," "," "," "," "," "," ","2214","6107","2434","2198","3713","1330","1263","242","179","103","34","39","28","41","18"," ","49984"," "," "," "," ","26","69","44","15","26","34"," "," "," "," "," "," "," "," "," "," "," "," ","28","3288","54","411","268"," "," "," "," "," "," ","711","856","5099","17589","155384","483650","301650","407850","377100","433950"," "," "," "," "," ","43","43","34","38","39","227","127","163"," ","141"," "," ","77620","81740","78970","78890","28290","80530","2644","6577","4816","775","2641"]
,[ " ","1429","447","928","763","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1535","299","210","103","18","34","28","35","18","3139922","49984","79973","159974","159954","2059930","26","35","30","15","26","18"," "," "," "," "," ","2","5"," "," "," "," "," ","134","3288","54","20","292"," "," "," "," "," "," ","711","856"," "," "," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","64","76","89","190","127","141","115","125","105","124","76480","82010","71820","72920","28350","71920","2770","6770","4991","745","2621"]
,[ "746","1429","447","928","763","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","34","28","35","18"," "," "," "," "," "," ","26","35","30","15","26","18"," "," "," "," "," ","2","2"," "," "," "," "," ","35","64","54","355","208"," "," "," "," "," "," ","711","856","5086","17569"," ","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","61","69","73","190","127","141","115","125","105","124","75860","81740","75810","77300","28290","73320","2237"," ","3014","327","2170"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," ","1417","4520","1982","1355","2216","1330","1154","242","152","103"," ","34","28","35","18","3139922","59985","139977","159975","159958","2089930","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","3288","54","402","297"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","832170"," "," "," "," "," ","43","54","64","76","89","190","127","141","115","125","105","190"," ","84870","72920","73320","32120","73420","2660","6584","4985","633","2562"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," ","1417","4520","1982","1355","2216","1330","1154","242","152","103"," ","34","28","35","18","3139922","59985","139977","159976","159958","2089930","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","3288","54","402","297"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","832170"," "," "," "," "," ","43","54","64","76","88","190","127","141","115","125","105","190"," ","84870","72920","73320","32120","73420","2660","6584","4985","656","2570"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," ","1417","4614","1982","1377","2216","1330","1154","242","152","103"," ","34","28","35","18","3139922","49984","139975","159975","159957","2059930","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","3288","54","402","299"," "," "," "," "," "," ","711","907","7116"," "," ","483650","301650","407850","389100","832170"," "," "," "," "," ","43","54","64","76","90","190","127","141","115","125","105","143"," ","84840","72820","73320","32120","73420","2647","6602","4867","631","2593"]
,[ " "," ","447"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103","18","34","28","35","18"," "," "," "," "," "," ","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","3288","54","402","327"," "," "," "," "," "," ","711","856","5086","17570","160136","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","62","76","87","190","127","141","143","128","186"," "," ","81780","72860"," ","28290","73170","761","1417","1043","216","1021"]
,[ " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","1330","1156","242","152","103","18","34","28","35","18"," "," "," ","99971"," "," ","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","3288","54","402","327"," "," "," "," "," "," ","711","856","5086","17570","155337","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","63","75","85","190","127","141"," "," "," "," ","73720"," "," ","73520","28770","73620","757","1464","1027","216","1029"]
,[ " "," ","447","928"," "," "," "," "," "," "," "," ","1191"," ","2203","1276","3516","1330","1154","242","152","103","18","34","28","35","18"," ","49984","79973","99971","119950"," ","26","35","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2","1","195","293","54","402","302"," "," "," "," "," "," ","896","856","9006","47482","461202","483650","301650","407850","389100","834150"," "," "," "," "," ","43","54","59","73","84","190","130","141","135","128","140","229","76950","81930","79620","83070","29150","76720","749","3263","1510","262","1144"]
,[ " "," "," ","928"," "," "," "," "," "," "," "," ","2190"," ","2354","2174"," ","1330","1154","242","152","103","18","34","28","35","18","3139922","59985","139977","159976","159958","2089930","26"," "," "," ","26"," "," "," "," "," "," ","2","2","2","5","5"," "," ","195","3288","54","23","297"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","832890"," "," "," "," "," ","43","54","64","75","88","218","127","141","115","125","105","221"," ","84870","72920","73320","32120","73420","2685","6622","4985","683","2570"]
,[ " ","1429"," ","928"," "," "," "," "," "," "," "," ","2190"," ","2354","2174"," ","1330","1154","242","152","103","18","34","28","35","18","3139922","59985","139977","159976","159958","2089930","26"," "," "," ","26"," "," "," "," "," "," ","2","2","2","5","5"," "," ","195","3288","54","23","297"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","832890"," "," "," "," "," ","43","54","64","75","88","218","127","141","115","125","105","222"," ","84870","72920","73320","32120","73420","2706","6622","4985","683","2570"]
,[ " "," ","447","928"," ","481"," "," "," "," "," "," "," "," "," "," "," ","2942"," "," "," "," "," "," "," "," "," ","4159921","49984","79973","169976","119949","2929926"," "," "," "," "," "," "," "," "," "," "," "," ","2"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","711","856","5087","33856"," "," "," "," "," "," "," "," "," "," "," ","43","54","64","76"," ","190","127","141","115","125","105","149","83980"," ","1191840","1187660"," ","190460","2231","3674","3407","512","2028"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," "," "," "," "," "," ","3524","1869","450","1599","646"," ","34"," ","35","18"," "," "," "," "," "," ","26","35","30","15","26","18"," "," "," "," "," ","2","2"," "," ","6"," "," ","48","3288","54","415","287"," "," "," "," "," "," ","711"," ","5089","17900","155357","483650","301650","407850","389100","834150"," "," "," "," "," ","43","52","57","70","82","203","127","141","115","125","178","219","73030","81740","72430","73450","28290","74200","1510","3333","1734","282","1261"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," ","1417"," ","2060","1452"," ","1330","1154","242","152","103"," "," "," "," ","18"," "," "," "," "," ","2119930","26"," ","30","15","26","18"," "," "," "," "," ","2","2","2","5","5","2"," ","195","3288","54","287","296"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","834150"," "," "," "," "," ","2","3"," "," "," ","190","127","141","115","125","105","189"," "," "," "," "," "," ","3076","7098","5442","1022","2768"]
,[ " ","1429","447","928"," "," "," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103"," "," "," "," ","18","399924","49984"," ","109978"," ","369931","26"," "," ","15","26","18"," "," "," "," "," "," "," "," "," "," "," "," ","180","3288","54","408","325"," "," "," "," "," "," "," ","856"," "," "," ","483650","301650","407850","389100","829030"," "," "," "," "," "," "," "," "," "," ","190"," "," "," "," "," "," "," "," "," "," "," "," ","2710","5156","4559","913","2469"]
,[ " ","1429","447","928"," ","481"," "," "," "," "," "," "," "," "," "," "," ","1330","1154","242","152","103"," "," "," "," ","18"," "," "," "," "," ","2119930","26"," ","30","15","26","18"," "," "," "," "," ","2","2","2","5"," "," "," ","181","3288","54","17","294"," "," "," "," "," "," ","711"," "," "," "," ","483650","301650","407850","389100","831450"," "," "," "," "," ","2","3"," "," "," ","190","127","141","115","125","105","189"," "," "," "," "," "," ","3076","7098","5442","1022","2768"]

];
var scores = [
   [
// bprolog-fd vs bprolog-fd
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,2,0,0,0,0,2,2,0,0,2,0,2
      ,0,2,0,0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,2,2,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs cbc-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,2,2,2,0,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2,0
      ]

// bprolog-fd vs choco-fd
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,0,1,0,1,2,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs choco-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,2,2,0,2,2,0,0,0,0,0,0,0,0,2,0,2
      ]

// bprolog-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,2
      ,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,0
      ,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,2,0,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs cplex-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0,0,0,2,2,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs g12_fd-fd
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,0,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,1,0,1,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs g12_fd-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2,2
      ]

// bprolog-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0
      ]

// bprolog-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ]

// bprolog-fd vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs gurobi-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,2,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,0,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs gurobi-par
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,0,2,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs izplus-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,1,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs jacop-fd
     ,[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs minisatid-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,2,2,2,0,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0
      ,1,1,2,2,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-fd vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-fd vs or_tools-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2,0
      ]

// bprolog-fd vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]
]
  ,[
// bprolog-free vs bprolog-fd
      [2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0,2,0
      ,2,0,0,2,0,0,2,2,2,2,2,2,0,2,2,2,0,2,2,0,2,0,2,2,2
      ,0,0,0,0,2,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs cbc-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,2,2,2
      ,2,0,0,0,2,2,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,2,0,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0
      ]

// bprolog-free vs choco-fd
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,0
      ,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,0,2,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,2,0,2,0,0,2,2
      ,2,2,0,0,2,2,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs choco-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,2,0,0,2,2,2,2,1,1,2,2,2,2,0,0,0,0,2,0,1,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,0,2
      ]

// bprolog-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2
      ,2,0,0,2,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0
      ,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs cplex-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs cplex-par
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs fzn2smt-free
     ,[2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,2,2,2
      ,2,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_cpx-fd
     ,[0,0,0,0,2,0,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,0,0,0,0,0,0,2,1
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_cpx-free
     ,[2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_fd-fd
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,2,2,0,0,2,2,0,0,2
      ,2,0,0,2,0,0,2,2,2,2,1,1,0,2,2,2,0,0,2,0,2,0,0,2,1
      ,2,2,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_fd-free
     ,[2,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,2,2,2,2,2,0,0,2,0,0,0,0,0,2,0,2,2,2
      ,2,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_lazyfd-fd
     ,[2,0,2,0,2,0,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,2,0,1,0,0,2,2,0,0,0,0,0,0,0,2,2
      ,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs g12_lazyfd-free
     ,[0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0
      ]

// bprolog-free vs gecode-fd
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,0,0,0,0,0,2,1
      ,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs gecode-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs gecode-par
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs gurobi-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,0,0,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0
      ,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs gurobi-par
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,0,0,2,0
      ,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs izplus-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,1,2,2,2,2,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs jacop-fd
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,0,0,0,0,0,2,2
      ,2,2,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs jacop-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,1,0,2,2,2,0,0,0,0,0,0,0,2,1
      ,2,2,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs minisatid-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,0,2,2,2,2,2,2
      ,2,2,0,2,2,0,1,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,2,0,0,2,2,2,2,2,2,2,2,1,2,0,2,2,0,2,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0
      ]

// bprolog-free vs mistral-free
     ,[2,2,0,2,2,2,0,0,2,0,0,2,0,0,0,0,0,2,0,2,2,2,2,0,2
      ,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,0,0,0,0,0,0,2,2,0,0,0,2,0,2,0,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// bprolog-free vs or_tools-fd
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,0,0,2,2,2,2,0,0,0,0,2,0,0,2,2,0,2,0,2,2,2,0,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,2,0,2,2,2,0,0,0,0,0,0,0,2,1
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs or_tools-free
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2
      ,2,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,2,1
      ,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// bprolog-free vs or_tools-par
     ,[2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,0,0,2,2,2,2,0,0,0,0,2,0,0,2,2,0,2,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,1,2,0,2,2,2,0,0,0,0,0,0,0,2,2
      ,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]
]
  ,[
// cbc-free vs bprolog-fd
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs cbc-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cbc-free vs choco-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs choco-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cbc-free vs cplex-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cbc-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_fd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_fd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs gurobi-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cbc-free vs gurobi-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cbc-free vs izplus-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0
      ]

// cbc-free vs jacop-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs jacop-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs minisatid-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs or_tools-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// cbc-free vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]
]
  ,[
// choco-fd vs bprolog-fd
      [0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,2,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,0,1,2,2,0,0,0,0,0,2,2,2,0,2,2,2,2
      ,0,0,0,2,1,2,1,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ]

// choco-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,2,2,2,0,0,2,0,2,0,2,2,0,2,2,0,0,2,0,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,0,2,0,2,2,0,0
      ,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0
      ]

// choco-fd vs cbc-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,2,2,2,0,0,2,2,2,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,2,2,2,0,2,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,2,0
      ]

// choco-fd vs choco-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// choco-fd vs choco-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,1,0,2,0,0,0,2,0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,0,2,2,2,2,2,1,0,0,1,1,1,2,0,0,0,0,0,0,0,0,2,2,2,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,2,0,2
      ]

// choco-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1
      ]

// choco-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,0,0,0,0,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// choco-fd vs cplex-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,1,0,2,2,2,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0
      ]

// choco-fd vs cplex-par
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,1,0,2,2,2,0,0,2,0,1,0,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0
      ]

// choco-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,2,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,1,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2
      ]

// choco-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// choco-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// choco-fd vs g12_fd-fd
     ,[0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1
      ,1,2,1,1,1,1,1,1,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,2,0
      ,0,0,2,2,1,2,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2
      ]

// choco-fd vs g12_fd-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,2,0,2,0,2,2,2,2,0,2,2,0,2,2,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,0,0,1,0,1,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,2,2
      ]

// choco-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,0
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// choco-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,0,2,0,0,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// choco-fd vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1
      ,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2
      ]

// choco-fd vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1
      ,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2
      ]

// choco-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1
      ,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,2,0,1,2
      ]

// choco-fd vs gurobi-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,1
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ]

// choco-fd vs gurobi-par
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0
      ]

// choco-fd vs izplus-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,1
      ,1,2,2,0,0,0,0,2,0,1,1,0,0,0,0,0,2,2,2,0,0,0,2,1,0
      ,0,0,2,2,0,0,1,1,0,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0
      ]

// choco-fd vs jacop-fd
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,0,2,2,2,2,2,0,0,0,0,0,0,2,2,0,1,0
      ,0,0,0,2,0,0,1,1,0,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,1,2,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2
      ]

// choco-fd vs jacop-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,0,2,2,2,2,2,0,0,0,0,0,0,2,2,0,1,0
      ,0,0,0,2,0,0,1,1,0,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,1,2,1,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2
      ]

// choco-fd vs minisatid-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,2,2,2,0,0,2,0,2,0,2,2,2,2,2,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,2,2,2,0,2,2,2,2
      ,0,0,2,2,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0
      ]

// choco-fd vs mistral-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,1,0,2,2,2,2,2,2,0,1,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0
      ]

// choco-fd vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2
      ,2,0,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,1,0,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ]

// choco-fd vs or_tools-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,0,0,2
      ,2,0,0,0,2,0,2,0,0,2,2,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,2,0
      ]

// choco-fd vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,0,0,0,0,2
      ,2,2,2,2,2,2,2,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,2,0
      ,0,0,0,2,2,0,2,1,0,1,1,2,2,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// choco-free vs bprolog-fd
      [0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,2,2,1,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]

// choco-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,0,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,0,2,2,2,0,0,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]

// choco-free vs cbc-free
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,2,0
      ]

// choco-free vs choco-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,1,2,0,2,2,2,0,2,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,2,1,1,1,0,2,2,2,0,2,2,2,2,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs choco-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// choco-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,0,2,0
      ]

// choco-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// choco-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ]

// choco-free vs cplex-par
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,0,2,2,1,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0
      ]

// choco-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1
      ,2,0,2,0,0,2,0,2,0,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,2,0,2
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]

// choco-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,2,0
      ]

// choco-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0
      ]

// choco-free vs g12_fd-fd
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,2,2,2,0,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,2,2,2,0,2,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs g12_fd-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,2,2,2,0,2,2,2,2,0,2,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,1,1,2,2,0,0,0,0,0,0,0,2,2,0,2,2,2
      ,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,0
      ]

// choco-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,2,0,0,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0
      ]

// choco-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,2,2,2,0,2,0,0,0,2,2,2,0,0,0,2,1,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,2,2,2,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,2,2,2,0,2,0,0,0,2,2,2,0,0,0,2,1,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,2,2,2,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,1,1,1,1,0,0,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs gurobi-free
     ,[0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1
      ,1,0,2,2,2,2,2,2,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,1,0,0,0,0,0,0
      ]

// choco-free vs gurobi-par
     ,[0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,2,2,2,0,2,2,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0
      ]

// choco-free vs izplus-free
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1
      ,1,2,2,0,2,1,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0
      ]

// choco-free vs jacop-fd
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,0,2,0,2,0,2,2,2,0,0,0,2,1,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,2,2,2,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,0,2,0,2,0,2,2,2,0,0,0,2,1,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,2,1,1,1,1,0,2,2,2,0,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,0,2,0
      ]

// choco-free vs minisatid-free
     ,[0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,2,0
      ]

// choco-free vs mistral-free
     ,[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1,2
      ,1,0,2,2,2,2,2,2,0,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,1,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0
      ]

// choco-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,1,1,2,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]

// choco-free vs or_tools-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,2,2,2,0,0,2,0,2,0,0,0,0,2,1,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,2,0,0,2,2,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]

// choco-free vs or_tools-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,1,1,2,0,2,2,2,0,0,0,2,0,0,0,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0
      ]
]
  ,[
// chuffed-fd vs bprolog-fd
      [2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,0,2,0,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0,2,2,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-fd vs bprolog-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,0,2,2,0,2,0,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,2,2,2,2,2,0,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs cbc-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// chuffed-fd vs choco-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,1
      ]

// chuffed-fd vs choco-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,2,0,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,2,0,2
      ]

// chuffed-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// chuffed-fd vs chuffed-free
     ,[0,2,0,1,0,2,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,2
      ,2,1,2,1,0,0,0,0,2,2,0,1,2,1,0,0,0,1,1,0,0,2,2,2,0
      ,2,0,0,0,0,0,0,2,0,0,0,0,1,2,2,0,0,2,0,0,0,0,0,2,2
      ,0,0,2,2,0,0,0,0,2,0,2,1,0,0,2,0,1,1,0,1,0,0,0,0,0
      ]

// chuffed-fd vs cplex-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,0,2,2,2,2,1,2
      ,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2
      ,0,0,0,0,0,0,2,2,2,2,2,0,1,1,2,0,0,2,0,0,0,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs cplex-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,0,2,2,2,2,1,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2
      ,0,0,0,0,0,0,2,2,2,2,2,0,2,1,2,0,0,2,0,0,0,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs fzn2smt-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,0,2,0,0,2,2,2,2,2
      ,2,2,2,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,0,2,0,2,2,2,0,0,2,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-fd vs g12_cpx-fd
     ,[1,1,2,1,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,2,1,0,1,2,1,0,2,1,2,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,1,2,0,0,2,0,0,0,2,0,2,2
      ,2,2,2,2,2,2,2,1,2,0,2,2,2,2,1,0,1,1,0,1,2,2,2,2,2
      ]

// chuffed-fd vs g12_cpx-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,2,2,2
      ,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,1,0,0,0,2,2,2,0,0,1,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,1,1,1,2,2,2,2,0,0,2,0,0,1,2,2,2,2,2
      ]

// chuffed-fd vs g12_fd-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2
      ]

// chuffed-fd vs g12_fd-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,0,2,2
      ]

// chuffed-fd vs g12_lazyfd-fd
     ,[2,1,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,2,2,2,2,1,1,2
      ,2,2,2,2,2,1,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,0,0,2,1,2,2
      ,2,2,2,2,2,2,2,1,2,0,2,1,2,2,2,1,1,1,2,1,2,2,2,2,2
      ]

// chuffed-fd vs g12_lazyfd-free
     ,[1,2,0,2,2,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,1,2,0,0,0,0,2,1,2,0,0,2,0,0,0,2,2,2,2
      ,0,0,2,2,2,2,2,0,2,1,2,1,2,2,2,0,2,2,2,2,0,2,0,0,0
      ]

// chuffed-fd vs gecode-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,0,0,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,2
      ]

// chuffed-fd vs gecode-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,0,0,2,0,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2
      ]

// chuffed-fd vs gecode-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,0,0,2,1,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,2
      ]

// chuffed-fd vs gurobi-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,0,2,2,2,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0
      ,0,0,0,0,0,0,2,2,2,2,2,0,2,1,2,0,0,2,0,0,0,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs gurobi-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,0,0,0,0,2,1,2
      ,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,2,2,2,2,2,0,2,1,2,0,0,2,0,0,0,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs izplus-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2,0,2,2,2,2,1,2
      ,2,2,2,2,2,0,0,2,1,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs jacop-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,2,2,2,1,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2
      ]

// chuffed-fd vs jacop-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,1,2,2,2,0,0,2,0,2,2,2,1,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2
      ]

// chuffed-fd vs minisatid-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs mistral-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0,0,0
      ]

// chuffed-fd vs or_tools-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,2,1,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-fd vs or_tools-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,2,2
      ,2,2,0,2,2,0,2,0,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0
      ]

// chuffed-fd vs or_tools-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// chuffed-free vs bprolog-fd
      [2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,0,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs bprolog-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs cbc-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// chuffed-free vs choco-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs choco-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,1,2,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs chuffed-fd
     ,[2,0,2,1,2,0,0,2,2,2,0,0,1,0,0,1,0,2,2,2,2,2,1,1,0
      ,0,1,0,1,2,2,2,2,0,0,2,1,0,1,2,2,2,1,1,2,2,0,0,0,2
      ,0,0,0,0,0,0,2,0,2,2,2,2,1,0,0,2,2,0,2,2,2,2,2,0,0
      ,2,2,0,0,2,2,2,2,0,2,0,1,2,2,0,2,1,1,2,1,2,2,2,2,2
      ]

// chuffed-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// chuffed-free vs cplex-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,1,0,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-free vs cplex-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,1,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-free vs fzn2smt-free
     ,[2,2,2,2,2,2,0,0,0,1,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs g12_cpx-fd
     ,[2,0,2,1,2,1,0,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,1,0
      ,0,1,0,1,2,2,2,2,0,2,2,1,1,1,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,1,2,1
      ,2,2,2,2,2,2,2,2,1,1,2,2,2,2,0,2,1,1,0,1,2,2,2,2,2
      ]

// chuffed-free vs g12_cpx-free
     ,[2,2,2,2,2,2,0,2,0,1,0,0,2,0,0,2,0,0,0,0,0,0,2,2,2
      ,2,1,2,2,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,1,2,2,2,2,2,2,1,2,2,2,0,2,2,2,1,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,2,0,0,1,2,2,2,2,2
      ]

// chuffed-free vs g12_fd-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs g12_fd-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,1,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2
      ]

// chuffed-free vs g12_lazyfd-fd
     ,[2,0,2,2,2,1,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,1,1,1
      ,0,2,2,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,1,1,2,1,2,2,1,2,1,1,2,1,2,2,2,2,2
      ]

// chuffed-free vs g12_lazyfd-free
     ,[2,2,1,2,2,2,0,2,2,1,0,0,2,0,0,2,0,2,2,2,0,2,2,1,2
      ,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,1,1,0,0,0,2,0,2,0,2,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,1,1,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs gecode-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs gecode-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs gecode-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs gurobi-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-free vs gurobi-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// chuffed-free vs izplus-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,2,2,2,2,1,2,2,0,2,2,1,1,1,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1,2,1,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0
      ]

// chuffed-free vs jacop-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,0,0,0,0,2,2,2,1,0,0
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs jacop-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,0,0,0,0,2,2,2,1,0,0
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs minisatid-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs mistral-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,1,2
      ,1,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,1,2,0,0,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,2,0
      ]

// chuffed-free vs or_tools-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs or_tools-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,0,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// chuffed-free vs or_tools-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,2,0,0,2,0,0,0,0,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// cplex-free vs bprolog-fd
      [0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs bprolog-free
     ,[0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs cbc-free
     ,[0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs choco-fd
     ,[0,0,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,1,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,0,0,2,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs choco-free
     ,[0,2,2,2,0,2,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,2
      ]

// cplex-free vs chuffed-fd
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,0,0,0,0,1,0
      ,0,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,2,1,1,0,2,2,0,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs chuffed-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,1,2,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cplex-free vs cplex-par
     ,[0,2,2,2,0,2,0,2,2,2,1,2,0,0,0,0,0,0,0,1,0,1,0,1,1
      ,1,2,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,1,2,0,2,1,1,1,1,1,2,2,1,0,1,2,0,0,0,0,0,0,1,0
      ,2,2,0,2,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,2,0,2,0,2,0
      ]

// cplex-free vs fzn2smt-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1
      ,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,2
      ]

// cplex-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,1,2,2,0,0,0,2,0,2,2,1,2,2,2,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs g12_cpx-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs g12_fd-fd
     ,[0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs g12_fd-free
     ,[0,2,0,2,0,2,2,2,2,0,2,2,0,0,0,0,0,0,2,0,2,0,2,2,1
      ,2,2,0,0,0,2,2,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,2,2
      ,2,2,0,2,0,0,0,2,0,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2
      ]

// cplex-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,1,2,2,2,1,0,1,0
      ,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,2,2,2,0,0,0,2,0,2,2,2,2,2,2,0,0,0,0,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,1,2,2,0,0,0,0,0,0,2,1,2,0,2,2,1,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs gecode-fd
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs gecode-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,0,0,2,0,0,0
      ,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs gecode-par
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,0,0,2,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs gurobi-free
     ,[0,2,2,2,0,2,2,0,1,0,1,2,0,0,0,0,0,0,1,0,1,0,0,1,1
      ,1,2,0,0,0,2,2,0,2,2,0,1,2,2,0,0,0,0,0,2,2,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,1,1,2,2,1,2,0,0,2,2,0,2,0,0,1,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,2,1,0
      ]

// cplex-free vs gurobi-par
     ,[0,2,2,2,0,2,0,0,1,0,0,1,0,0,0,0,0,0,2,0,0,0,0,1,0
      ,0,2,0,0,0,0,2,0,2,0,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,1,1,1,2,1,2,0,0,2,2,0,2,0,2,1,0
      ,2,2,0,0,0,0,0,0,2,0,2,2,2,0,0,2,0,0,0,0,2,0,0,1,0
      ]

// cplex-free vs izplus-free
     ,[0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,1,2,1,1
      ,1,2,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0
      ,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2
      ,0,2,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,1,2,2,2,2
      ]

// cplex-free vs jacop-fd
     ,[0,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs jacop-free
     ,[0,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-free vs minisatid-free
     ,[0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs mistral-free
     ,[0,2,0,0,0,2,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,1,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,2,0,2,2,0,0,0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2
      ,2,2,0,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-free vs or_tools-fd
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs or_tools-free
     ,[0,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0
      ,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-free vs or_tools-par
     ,[0,0,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2
      ]
]
  ,[
// cplex-par vs bprolog-fd
      [0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,2,0,2,0,2,2,2
      ,2,2,0,0,0,2,2,0,0,2,2,2,0,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs bprolog-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs cbc-free
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs choco-fd
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,1,2,0,0,0,2,2,0,2,1,2,2,2,2,0,0,0,0,0,2,2,2,0,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,2,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs choco-free
     ,[0,0,0,0,0,2,2,0,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,2,0,0,1,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2
      ]

// cplex-par vs chuffed-fd
     ,[0,0,0,0,0,0,2,0,2,0,2,2,0,0,0,0,0,0,2,0,0,0,0,1,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,2,0,1,0,2,0,0,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs chuffed-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs cplex-free
     ,[0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,2,2,1,2,1,2,1,1
      ,1,0,0,0,0,2,2,0,2,0,2,1,2,2,0,0,0,0,0,2,2,2,2,2,0
      ,2,1,1,0,2,0,1,1,1,1,1,0,0,1,2,1,0,2,2,2,2,2,2,1,2
      ,0,0,2,0,2,2,0,2,2,2,0,0,0,0,2,2,0,0,2,0,2,0,2,0,2
      ]

// cplex-par vs cplex-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// cplex-par vs fzn2smt-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1
      ,2,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs g12_cpx-fd
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,0,0,2,2,0,0,0,2,0,2,1,1,2,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs g12_cpx-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,2,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs g12_fd-fd
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs g12_fd-free
     ,[0,0,0,0,0,2,2,0,2,0,2,2,0,0,0,0,0,0,2,0,2,0,2,2,1
      ,2,2,0,0,0,2,2,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,0,1,0,2,0,2,2,2,2,2,2,2,2,2,0,1,2,2,2,2,0,2,2
      ,2,2,1,2,2,2,0,2,2,2,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2
      ]

// cplex-par vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,1,0,1,0
      ,0,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,0,2,2,2,0,0,0,2,0,2,1,2,2,2,0,0,0,0,0,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs g12_lazyfd-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,0,2,2,0,0,0,0,0,0,2,1,2,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs gecode-fd
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,1,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,0,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs gecode-free
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,2,1,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,0,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs gecode-par
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,2,2,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,1,2,0,0,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs gurobi-free
     ,[0,0,2,0,0,2,2,0,0,0,1,1,0,0,0,0,0,0,2,0,2,0,0,1,1
      ,1,1,0,0,0,2,2,0,2,0,2,1,2,2,0,0,0,0,0,2,2,2,2,2,0
      ,0,0,0,2,1,0,0,0,0,1,1,0,2,1,2,0,0,2,2,2,2,2,2,1,2
      ,0,2,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,2,0,2,0,0
      ]

// cplex-par vs gurobi-par
     ,[0,0,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0
      ,0,1,0,0,0,0,2,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,1,0,0,0,0,1,1,0,1,1,2,0,0,2,2,2,2,2,2,1,2
      ,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,2,0,2,0,0,0,2
      ]

// cplex-par vs izplus-free
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,2,1,2,1,2,1,1
      ,1,2,0,0,0,2,2,0,0,1,2,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2
      ,0,2,1,0,0,0,0,2,2,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs jacop-fd
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,2,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs jacop-free
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,2,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// cplex-par vs minisatid-free
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,1,0,0,0,0,2,2,2,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs mistral-free
     ,[0,0,0,0,0,2,2,0,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,0,0,0,0,2,2,0,0,1,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,0,2,0,2,2,0,0,0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2
      ,2,2,1,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// cplex-par vs or_tools-fd
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,0,2,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs or_tools-free
     ,[0,0,2,0,0,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,0
      ,2,2,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]

// cplex-par vs or_tools-par
     ,[0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,2,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,0,2,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,0,2,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2
      ]
]
  ,[
// fzn2smt-free vs bprolog-fd
      [2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,0,0,2,2,2,0,2,0,2,2,2,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// fzn2smt-free vs bprolog-free
     ,[0,2,2,2,0,0,0,2,2,2,0,2,0,0,0,0,0,2,2,0,2,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// fzn2smt-free vs cbc-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// fzn2smt-free vs choco-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,0,2,0,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2,2,0,2,0
      ,2,2,0,0,1,0,0,2,2,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs choco-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,2,0,2,2,0,2,0,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,2,0
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2
      ]

// fzn2smt-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,2,2,2,0,2,0,0,0,0,0,0,2,2,0,0,0,0,0
      ,0,0,0,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,0,0,0,2,0,2,0,0,0,0,0,0,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs chuffed-free
     ,[0,0,0,0,0,0,0,2,2,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs cplex-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,0,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs cplex-par
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,1,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_cpx-fd
     ,[0,0,1,0,2,0,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,0,2,1,2,2,2,2,0,0,0,0,0,0,0,2,0,2,0,0,0
      ,2,2,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_cpx-free
     ,[2,2,2,2,0,0,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,0,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2,0,2,2,1
      ,2,2,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_fd-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2,2,0,2,0
      ,2,2,0,0,1,0,0,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_fd-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,0,1
      ,2,2,2,1,2,2,2,2,2,2,2,0,2,2,0,2,0,0,2,0,0,0,0,0,0
      ,0,2,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,1,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_lazyfd-fd
     ,[2,0,2,0,2,0,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,1,0,2,2,2,2,0,0,2,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,0,1,2,0,1,1,1,2,2,2,0,0,0,0,0,2,2,2,2,2,0,2,2
      ,2,2,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,2,2,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,2,2,2,2,2,2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,1,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ]

// fzn2smt-free vs gecode-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,2,2,2,0,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,0,2,0,0,0,0,1,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs gecode-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,0,2,0,0,0,0,1,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs gecode-par
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,2,2,2,0,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,0,0,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,0,0,2,0,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs gurobi-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs gurobi-par
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,0,0,0,2,0,0
      ,0,1,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs izplus-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,2,2,2,2,0,2,2,0,2,2,0,0,0,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,1,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs jacop-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,0,2,2,2,2,0,2,0
      ,2,2,0,0,1,0,0,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs jacop-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,0,2,2,2,2,0,2,0
      ,2,2,0,0,1,0,0,2,2,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0
      ]

// fzn2smt-free vs minisatid-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,0,0,0,0
      ,0,2,0,2,2,0,2,2,2,2,2,2,1,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// fzn2smt-free vs mistral-free
     ,[2,2,0,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,0,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,2,0,0,0,0,0,0
      ,0,2,0,0,0,0,2,1,0,2,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// fzn2smt-free vs or_tools-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,0,1,2,2,2,0,1,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,1,0,1,1
      ]

// fzn2smt-free vs or_tools-free
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,2,2,2,2,0,0,2,2,2,0,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// fzn2smt-free vs or_tools-par
     ,[2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,0,0,0,0,2,2,2,2,0,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,1,0,1,1
      ]
]
  ,[
// g12_cpx-fd vs bprolog-fd
      [2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-fd vs bprolog-free
     ,[2,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,0,2,1,2,2,2,0,0,2,2,2,2,2,2,0,1
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs cbc-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_cpx-fd vs choco-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,2,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,2,2,2,1,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs choco-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,0,2,0,2,2,2,2,2,2,0,2,0,0,0,2,2,0,2,2,0
      ,0,2,2,2,2,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,2,0,2
      ]

// g12_cpx-fd vs chuffed-fd
     ,[1,1,0,1,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,0,1,1
      ,0,1,2,1,0,1,2,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,1,0,1,0,0,0,0,2,2,2,0,2,0,0
      ,0,0,0,0,0,0,0,1,0,2,0,0,0,0,1,2,1,1,2,1,0,0,0,0,0
      ]

// g12_cpx-fd vs chuffed-free
     ,[0,2,0,1,0,1,0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,1,2
      ,2,1,2,1,0,0,0,0,2,0,0,1,1,1,0,0,0,0,0,0,0,0,0,2,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,1,0,1
      ,0,0,0,0,0,0,0,0,1,1,0,0,0,0,2,0,1,1,2,1,0,0,0,0,0
      ]

// g12_cpx-fd vs cplex-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,1,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,2,2,0
      ,0,0,2,1,0,0,2,2,2,0,2,0,0,1,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs cplex-par
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,0,0,2,2,2,0,2,0,1,1,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs fzn2smt-free
     ,[2,2,1,2,0,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,1,0,0,0,2,2,2,2,2,2,2,0,2,0,0,2,2,2,0,2,2,0
      ,0,2,2,2,0,2,0,1,0,0,0,0,2,2,2,0,0,2,2,0,2,0,2,2,2
      ,0,0,2,2,2,2,2,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_cpx-fd vs g12_cpx-free
     ,[2,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,1,2,2
      ,2,1,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,2,2,0,0,1,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,0,0,0,2,2,2,0,2,2,2
      ,2,2,2,2,2,2,2,1,0,2,0,2,2,2,0,0,2,0,0,1,0,2,2,2,1
      ]

// g12_cpx-fd vs g12_fd-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,1,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,1,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs g12_fd-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,1,2,2,2,2,2,2,2,1,2,2,0,2,0,0,2,2,2,0,2,2,0
      ,0,2,0,2,0,2,2,2,2,1,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,0,2,2
      ]

// g12_cpx-fd vs g12_lazyfd-fd
     ,[2,1,2,2,2,1,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,0,1,2
      ,2,2,2,2,2,1,2,1,2,2,2,1,1,2,0,0,2,0,2,2,2,0,2,2,0
      ,0,2,2,2,1,2,0,1,0,1,0,1,1,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,0,2,2,2,2,2,1,1,1,0,0,0,0,2,2,1,1,2,1,2,2,2,2,1
      ]

// g12_cpx-fd vs g12_lazyfd-free
     ,[1,2,0,2,0,2,0,0,0,0,0,0,2,0,2,2,2,2,2,0,0,2,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0,0,0,0,2,2,2,0,2,2,0
      ,0,2,2,1,0,2,0,0,0,0,0,0,2,1,1,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,0,1,2,0,0,2,0,2,1,2,2,2,2,0,2,0,0,0
      ]

// g12_cpx-fd vs gecode-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,1,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,1,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs gecode-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,1,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,1,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs gecode-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,1,0,0,0,0,0,2,1,2
      ,2,2,2,2,2,2,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs gurobi-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,0,0,2,2,2,0,2,0,2,1,1,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs gurobi-par
     ,[2,2,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,0,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,0,0,2,2,2,0,2,0,1,1,1,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs izplus-free
     ,[2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,0,0,2,1,2,2,1,1,1,0,2,2,2,2,0,0,0,1,0,0
      ,0,2,2,2,0,2,2,2,2,1,2,1,2,2,2,0,0,1,0,0,0,0,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs jacop-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,0,2,2,2,0,0,1
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs jacop-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,0,2,2,2,0,0,1
      ,0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,1,2,1,2,2,2,0,0,2,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs minisatid-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,2,2,2,0,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs mistral-free
     ,[2,2,0,2,2,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,2,1,2,2,2,2,2,2,2,2,2,1,2,2,0,2,0,0,2,2,2,0,2,1,0
      ,0,2,0,2,0,2,2,1,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-fd vs or_tools-fd
     ,[2,2,2,2,2,2,0,0,0,2,0,0,1,0,2,2,2,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,1,0,0,0,0,0,0
      ,0,2,0,2,0,2,2,2,2,1,2,2,2,2,2,0,0,0,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-fd vs or_tools-free
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,2,0,2,0,1,2,2,2,0,2,0,2,0,0,2,2,2,0,2,2,0
      ,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,0,1,2,2,2,2,2,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_cpx-fd vs or_tools-par
     ,[2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,2,2,2,0,0,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,0,0,0,0,2,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// g12_cpx-free vs bprolog-fd
      [0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,1,2,2,2,2,2,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-free vs bprolog-free
     ,[0,2,2,2,0,0,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs cbc-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_cpx-free vs choco-fd
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs choco-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2
      ]

// g12_cpx-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,0,1,2,2,2,0,0,0,2,0,1,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,1,1,1,0,0,0,0,2,2,0,2,2,1,0,0,0,0,0
      ]

// g12_cpx-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,2,1,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,1,0,0,0,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,2,2,1,0,0,0,0,0
      ]

// g12_cpx-free vs cplex-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,0
      ,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs cplex-par
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs fzn2smt-free
     ,[0,0,0,0,2,2,0,0,1,1,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,0,2,2,0,0,2,0,0,1
      ,0,0,2,2,2,2,2,1,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-free vs g12_cpx-fd
     ,[0,0,0,0,2,0,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,1,0,0
      ,0,1,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,0,0,2,2,1,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,2,0,2,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,1,2,0,2,0,0,0,2,2,0,2,2,1,2,0,0,0,1
      ]

// g12_cpx-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_cpx-free vs g12_fd-fd
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs g12_fd-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,0,0,0,0,0,0,2,2,2,1,2,2,2,2,0,0,2,2,2,2,2,0,0
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,0,0,2,2,2,2,2,0,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2
      ]

// g12_cpx-free vs g12_lazyfd-fd
     ,[0,0,2,0,2,0,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,0,1,0,2,1,1,2,2,2,2,2,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,2,0,2,2,2,2,2,0,2,2
      ,0,0,0,0,2,2,2,1,2,0,0,0,0,0,2,2,0,2,2,1,2,1,0,2,1
      ]

// g12_cpx-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,2,1,0,2,0,0,0,0,0,2,2,2,2,2,2,0,0
      ,0,2,0,0,0,0,0,0,1,0,1,2,1,2,0,0,0,2,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,0,0,0,0,0,1,0,1,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,2,2,2,0,2,1,0,0,0,0,2,2,2,2,2,2,0,2,0,0,0
      ]

// g12_cpx-free vs gecode-fd
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,1,0,0,0,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs gecode-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,0,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs gecode-par
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs gurobi-free
     ,[0,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,1,0,1,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs gurobi-par
     ,[0,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs izplus-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,2,0,0,0,0,0,0,0,2,2,1,1,1,2,2,2,2,2,0,0,2,1,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs jacop-fd
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs jacop-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs minisatid-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs mistral-free
     ,[0,2,0,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,1,0,0,0,0,0,0,2,2,2,1,2,2,2,2,0,1,2,2,2,2,2,0,0
      ,2,2,0,2,1,2,2,2,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_cpx-free vs or_tools-fd
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,2,2,2,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_cpx-free vs or_tools-free
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,2,2,2,2,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_cpx-free vs or_tools-par
     ,[0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// g12_fd-fd vs bprolog-fd
      [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,2,1,2,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// g12_fd-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,2,2,0,0,2,2,0
      ,0,2,2,0,2,2,0,0,0,0,1,1,2,0,0,0,0,2,0,2,0,2,2,0,1
      ,0,0,2,2,0,0,2,2,0,0,0,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_fd-fd vs cbc-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,2,0,0,2,2,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// g12_fd-fd vs choco-fd
     ,[0,0,2,2,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,0,2,1
      ,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,1,2,1,1,2,1,1,1,2,0,0,0,0,2,1,1,2,1,2,0,2
      ,0,0,0,0,1,0,1,2,2,2,2,2,2,2,0,2,1,1,1,1,0,0,0,0,0
      ]

// g12_fd-fd vs choco-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,0,1,1,1,1,2,0,0,0,0,0,0,0,0,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// g12_fd-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0
      ]

// g12_fd-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_fd-fd vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// g12_fd-fd vs cplex-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,2,2
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// g12_fd-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,1,2,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// g12_fd-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// g12_fd-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,2,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// g12_fd-fd vs g12_fd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_fd-fd vs g12_fd-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,2,2,2,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,1,1,1,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,2,0,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// g12_fd-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// g12_fd-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// g12_fd-fd vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1
      ,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0
      ]

// g12_fd-fd vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1
      ,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0
      ]

// g12_fd-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,1,0,0,0,0,0,0,1,1
      ,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0
      ]

// g12_fd-fd vs gurobi-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,0,2,0,0,0,2,0,2,2,0,0,0,2,0,0,0,0,0,0,0
      ]

// g12_fd-fd vs gurobi-par
     ,[0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,0,0,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// g12_fd-fd vs izplus-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,1,1
      ,1,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,0,0,2,0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,0,2,0,2,0,0,0,2,2,0,2,0,0,0,0,0
      ]

// g12_fd-fd vs jacop-fd
     ,[0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0
      ]

// g12_fd-fd vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0
      ]

// g12_fd-fd vs minisatid-free
     ,[0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_fd-fd vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,2
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,2,0,0,0,0,2,0,2,0,0,0,0,0
      ]

// g12_fd-fd vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,1,2,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// g12_fd-fd vs or_tools-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,1
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// g12_fd-fd vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,0,0,0,2,0,2,1,2,1,1,2,2,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// g12_fd-free vs bprolog-fd
      [0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,0,2,0,0,0,2,2,2
      ,2,2,0,2,0,0,0,0,0,2,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,2,1,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,0,0,2,2,2,2,2,2,2,2,2,0,0
      ]

// g12_fd-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,0,0,0,2,2,2
      ,2,2,0,2,0,0,0,0,2,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,0,0,0,0,0,2,2,0,2,2,2,2,2,0,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_fd-free vs cbc-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,0,0,0,0,2,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0
      ,0,0,2,2,2,2,2,2,2,2,0,2,0,0,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_fd-free vs choco-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,2,2,0,2,0,0,0,0,0,2,2,1
      ,0,2,0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,1,2,1,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,0,2,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs choco-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1
      ,0,0,0,2,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,0,1,1,0,0,2,2,2,2,2,2,2,0,0,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,2,0,2,0,0,2,2,2,2,2,0,0,0,2,0,2
      ]

// g12_fd-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0
      ]

// g12_fd-free vs cplex-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,2,0,2,0,0,1
      ,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0
      ,0,0,2,0,2,2,2,0,2,0,0,2,0,0,2,2,2,2,2,0,0,0,0,0,0
      ]

// g12_fd-free vs cplex-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,2,0,2,0,0,1
      ,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,1,2,0,2,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,2,0,0
      ,0,0,1,0,0,0,2,0,0,0,0,2,0,0,0,2,2,2,2,0,0,0,0,0,0
      ]

// g12_fd-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,1
      ,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,1,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_fd-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,0,0,0,0,1,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,2,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,2,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0
      ]

// g12_fd-free vs g12_fd-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,0,0,0,0,2,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,0,2,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs g12_fd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_fd-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,0,0,1,0,0,0,1,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0
      ]

// g12_fd-free vs gecode-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs gecode-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs gecode-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1
      ,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,0,1,1,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs gurobi-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,1
      ,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,2,2,0,0,0,0,0,0
      ]

// g12_fd-free vs gurobi-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,1,2,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,2,2,0,2,0,0,0,0,0,0
      ]

// g12_fd-free vs izplus-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,2,0,2,0,0,1
      ,0,2,0,2,0,0,0,0,0,0,0,1,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,2,2,2,2,2,0,0,0,0,0,2,0,0
      ,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0
      ]

// g12_fd-free vs jacop-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,0,0,0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,1,1,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,0
      ]

// g12_fd-free vs minisatid-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,0,0,0,0,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2,2,0,0
      ,0,0,1,0,0,0,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_fd-free vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2
      ,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,0,0,0,0,0,0,2,0,2,0,0,2,2,0,0,2,0,0
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0
      ]

// g12_fd-free vs or_tools-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2
      ,2,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,2,1,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_fd-free vs or_tools-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,0,0,0,0,0,2,2,2
      ,2,2,0,2,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,2,2,2,0,0,2,2,2,2,2,0,0,2,0,0,2,0,0
      ,0,0,2,2,2,2,2,0,2,2,0,2,0,0,2,2,2,2,2,2,2,0,0,2,0
      ]

// g12_fd-free vs or_tools-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,0,0,0,0,0,2,2,2
      ,2,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,1,2,1,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// g12_lazyfd-fd vs bprolog-fd
      [0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,0,2
      ]

// g12_lazyfd-fd vs bprolog-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,0,2,1,2,2,0,0,0,2,2,2,2,2,2,0,0
      ,0,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs cbc-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,1,2,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_lazyfd-fd vs choco-fd
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,2,2,2,1,2,2,2,2,1,2,1,2,2,0,0,0,2,2,2,2,2,2,2,0
      ,0,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs choco-free
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,2,2,2,2,2,0,2,0,2,2,2,2,2,2,0,2,0,0,0,2,2,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,1,2,1,2,2,0,0,0,2,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,2,0,2
      ]

// g12_lazyfd-fd vs chuffed-fd
     ,[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0
      ,0,0,0,0,0,1,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,0,1,0,0
      ,0,0,0,0,0,0,0,1,0,2,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0
      ]

// g12_lazyfd-fd vs chuffed-free
     ,[0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1
      ,2,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0
      ]

// g12_lazyfd-fd vs cplex-free
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,2,1,2
      ,2,0,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs cplex-par
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2
      ,2,1,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,2,2,2,0,2,0,1,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs fzn2smt-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,1,2,0,0,0,0,2,2,0,2,2,2,2,0,2,0,0,2,2,2,0,0,0,0
      ,0,2,2,1,0,2,1,1,1,0,0,0,2,2,0,0,0,0,0,0,0,0,2,0,0
      ,0,0,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_lazyfd-fd vs g12_cpx-fd
     ,[0,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0
      ,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,1,0,2,1,2,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,1,1,1,2,2,2,2,0,0,1,1,0,1,0,0,0,0,1
      ]

// g12_lazyfd-fd vs g12_cpx-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,0,2,2,2,2,2,2,1,2,0,1,1,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,2,0,0
      ,0,2,2,2,0,0,0,1,0,2,2,2,2,2,0,0,2,0,0,1,0,1,2,0,1
      ]

// g12_lazyfd-fd vs g12_fd-fd
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,1,2,2,2,2,1,2,1,2,2,0,0,0,2,2,2,2,2,2,2,0
      ,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs g12_fd-free
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,0,2,2,2,2,2,2,2,1,2,2,0,2,0,0,2,2,2,0,0,0,0
      ,0,2,0,0,0,2,2,2,2,1,2,2,2,1,0,0,0,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,0,2,2
      ]

// g12_lazyfd-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_lazyfd-fd vs g12_lazyfd-free
     ,[0,2,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,1,2,2,2,2,2,2,1,0,0,2,1,1,0,0,0,0,2,0,0,0,0,0,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,0,2,0,0
      ,0,0,2,2,2,2,2,0,1,2,1,1,2,2,0,0,2,2,0,2,0,2,0,0,0
      ]

// g12_lazyfd-fd vs gecode-fd
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,1,2,1,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,0,2,0,2,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs gecode-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,1,2,1,2,2,0,0,0,0,0,2,2,2,0,0,0
      ,0,2,0,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs gecode-par
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,1,2,2,2,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,1,0,0,2,2,2,1,2,1,2,2,0,0,0,0,0,2,2,2,1,0,0
      ,0,2,0,0,0,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs gurobi-free
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,2,2,2,0,2,0,2,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs gurobi-par
     ,[0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,0,1,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,2,2,2,0,2,0,1,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs izplus-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2
      ,2,2,2,0,2,0,0,2,0,2,2,1,1,0,0,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,0,0,2,2,2,1,2,1,2,2,0,0,0,0,0,0,0,0,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs jacop-fd
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0
      ,0,0,1,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,1,2,1,2,2,0,0,0,0,2,2,2,2,1,1,0
      ,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs jacop-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0
      ,0,0,1,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,1,2,1,2,2,0,0,0,0,2,2,2,2,1,1,0
      ,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs minisatid-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,2,2,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs mistral-free
     ,[0,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,2,0,2,2,2,2,2,2,2,2,2,1,2,2,0,2,0,0,2,0,0,0,0,0,0
      ,0,2,0,0,0,2,2,1,0,0,0,0,2,2,0,0,0,0,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// g12_lazyfd-fd vs or_tools-fd
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,1,2,2,2,2,0,0,0,0,0,2,2,2,1,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// g12_lazyfd-fd vs or_tools-free
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,2,0,2,0,0,2,2,2,0,2,0,2,0,0,2,2,2,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_lazyfd-fd vs or_tools-par
     ,[0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,1,2,2,2,2,0,0,0,0,2,2,2,2,2,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// g12_lazyfd-free vs bprolog-fd
      [2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,1,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs bprolog-free
     ,[2,2,2,2,0,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2
      ]

// g12_lazyfd-free vs cbc-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// g12_lazyfd-free vs choco-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,1
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs choco-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,0
      ,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,2,2,2
      ]

// g12_lazyfd-free vs chuffed-fd
     ,[1,0,2,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,1,0,2,2,2,2,0,1,0,2,0,0,2,2,2,0,0,0,0
      ,2,2,0,0,0,0,0,2,0,1,0,1,0,0,0,2,0,0,0,0,2,0,2,2,2
      ]

// g12_lazyfd-free vs chuffed-free
     ,[0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0
      ,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,1,1,2,2,2,0,2,0,2,0,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,0,1,1,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0
      ]

// g12_lazyfd-free vs cplex-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,1,0,0,2,2,2,2,2,2,0,1,0,2,0,0,1,2,0,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-free vs cplex-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,0,1,0,2,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-free vs fzn2smt-free
     ,[2,2,2,2,2,2,0,0,0,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,1,0,0,0,0,0,0,2,0,2,1,2,2,2,2,2,2,2,2,2,0,0,0,0
      ,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,2,2
      ,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_cpx-fd
     ,[1,0,2,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,1,2,0,2,2,2,2,2,2,0,1,1,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,2,1,0,2,2,0,2,0,1,0,0,0,0,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_cpx-free
     ,[2,2,2,2,2,2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2
      ,2,0,0,0,0,0,0,0,1,2,1,0,1,0,2,2,2,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,1,2,1,2,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,2,0,1,2,2,2,2,0,0,0,0,0,0,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_fd-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_fd-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,0,2,2,2,0,0,0,0
      ,0,2,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,1,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_lazyfd-fd
     ,[2,0,2,1,2,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,0,1,0
      ,0,1,0,0,0,0,0,0,1,2,2,0,1,1,2,2,2,2,0,2,2,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,2,0,2,2
      ,2,2,0,0,0,0,0,2,1,0,1,1,0,0,2,2,0,0,2,0,2,0,2,2,2
      ]

// g12_lazyfd-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// g12_lazyfd-free vs gecode-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs gecode-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs gecode-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,1,1,2,0,1,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs gurobi-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,1,1,1,2,0,0,2,0,2,2,2,2,2
      ,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0
      ]

// g12_lazyfd-free vs gurobi-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,0,1,1,2,0,1,2,0,2,2,2,2,2
      ,2,2,0,2,0,0,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,0,0,0,0
      ]

// g12_lazyfd-free vs izplus-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,2,0,0,0,0,0,0,0,2,2,0,1,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// g12_lazyfd-free vs jacop-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs jacop-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs minisatid-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0
      ]

// g12_lazyfd-free vs mistral-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,0,2,2,0,0,0,0,0
      ,0,0,0,2,0,0,2,2,1,2,1,0,2,2,2,2,0,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,0,0,2,2,2,2,2,2,2,0,1,0,0,2,2,0,0,0,0,0
      ]

// g12_lazyfd-free vs or_tools-fd
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs or_tools-free
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,0,2,2,2,0,0,0,0
      ,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2
      ]

// g12_lazyfd-free vs or_tools-par
     ,[2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,0,2,1
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2
      ]
]
  ,[
// gecode-fd vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,1,2,2,1,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,0,2,2,0,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-fd vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// gecode-fd vs choco-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,1
      ,1,2,1,1,1,2,1,1,2,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,1,2,1,1,1,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,2,0,2,1,1,1,1,1,1,0,0,0
      ]

// gecode-fd vs choco-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,0,0,0,2,0,2,2,2,0,0,0,0,0,2,0,1,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,0,1,1,1,1,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// gecode-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,0,2,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,0
      ]

// gecode-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-fd vs cplex-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-fd vs cplex-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,1,0,0,0,0,0,0,2,2,2,2,0,0,2,2,2
      ,2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,2,0,0,0,0,2,1,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// gecode-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,1,2,2,2,0,2,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-fd vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,1,1,2,1,2,2,2,2,2,0,1,1
      ,1,2,1,1,1,2,1,1,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,1,1,1,1,1,2,0,0,0,0,2,2,2,2,2,2,2,1
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,2
      ]

// gecode-fd vs g12_fd-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,2,2,2,2,2,2,2,0,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,1,1,1,2,2,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// gecode-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,1,0,1,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// gecode-fd vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-fd vs gecode-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,1,0,1,1
      ,1,2,1,1,1,2,1,1,2,1,1,2,2,2,0,0,2,2,1,2,2,2,2,2,2
      ,2,2,2,2,1,1,1,1,1,1,1,1,2,0,0,0,0,1,1,1,1,1,1,2,0
      ,0,0,2,2,2,1,2,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,2,2
      ]

// gecode-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,1,1,0,0,0,0,0,1,1
      ,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,1,0,0,0,1,1,1,1,0,0,0,0,0,2,2,0,0,1,2,0,0
      ,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,2,0,0,2
      ]

// gecode-fd vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,2,0
      ,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ]

// gecode-fd vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,2,2,2,0,2,2,1,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-fd vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,1,1
      ,1,2,2,0,0,0,0,2,0,1,1,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,1,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// gecode-fd vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,2,1,1,2,2,2,2,2,2,0,0,2,2,1,2,2,2,2,2,2
      ,2,2,2,2,2,1,1,1,1,1,1,1,2,0,0,0,0,1,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,2
      ]

// gecode-fd vs jacop-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,2,1,1,2,2,2,2,2,2,0,0,2,2,1,2,2,2,2,2,2
      ,2,2,2,2,2,1,1,1,1,1,1,1,2,0,0,0,0,1,2,2,2,0,2,2,1
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,2
      ]

// gecode-fd vs minisatid-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,0,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-fd vs mistral-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,2
      ,1,0,2,2,2,2,2,2,0,1,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,2,0,0,0,0,0
      ]

// gecode-fd vs or_tools-fd
     ,[0,0,2,0,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,1,2,1,1,2,1,0,0,0,0,0,1,0,0,0,2,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-fd vs or_tools-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,0,0,2,0,2,0,0,2,2,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,1
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,0
      ]

// gecode-fd vs or_tools-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,1,2,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// gecode-free vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,0,2,2,0,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-free vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// gecode-free vs choco-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,1
      ,1,2,1,1,1,1,1,1,2,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,1,2,1,1,1,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,1,2,2,2,2,2,2,2,0,2,1,1,1,1,1,1,0,0,0
      ]

// gecode-free vs choco-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,0,0,0,2,0,2,2,2,0,0,0,0,0,2,0,1,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,0,1,1,1,1,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// gecode-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,0,2,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0
      ]

// gecode-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-free vs cplex-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,2,0,2,2,2
      ,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-free vs cplex-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,0,1,0,0,0,0,0,0,2,2,2,2,0,0,2,2,2
      ,2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,2,0,0,0,0,2,1,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// gecode-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,2,0,2,0,2,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-free vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,1,1,2,1,2,2,2,2,2,0,1,1
      ,1,2,1,1,1,1,1,1,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,1,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,2
      ]

// gecode-free vs g12_fd-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,2,2,2,2,2,2,2,0,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,1,1,1,2,2,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// gecode-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,1,0,1,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// gecode-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1
      ,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0
      ,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,2
      ,0,0,0,0,0,1,0,2,2,2,2,2,2,1,0,1,1,1,1,1,1,1,1,0,0
      ]

// gecode-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,1,0,0,0,0,0,0,1,1
      ,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,1,0,0,0,1,1,1,1,0,0,0,0,0,2,2,0,0,1,2,0,1
      ,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,2,0,0,2
      ]

// gecode-free vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,2,0
      ,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ]

// gecode-free vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,2,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-free vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,1,1
      ,1,2,2,0,0,0,0,2,0,1,1,0,0,0,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,1,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// gecode-free vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,2,2,2,2,2,2,0,0,1,2,1,2,2,2,2,2,2
      ,2,2,2,2,2,1,1,1,1,1,1,1,2,0,0,0,0,1,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,1,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,1
      ]

// gecode-free vs jacop-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,1,1,1,1,1,2,2,2,2,2,2,0,0,1,2,1,2,2,2,2,2,2
      ,2,2,2,2,2,1,1,1,1,1,1,1,2,0,0,0,0,1,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,1,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,2,1
      ]

// gecode-free vs minisatid-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,0,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-free vs mistral-free
     ,[0,2,0,0,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,2
      ,1,0,2,2,2,2,2,2,0,1,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,2,0,0,0,0,0
      ]

// gecode-free vs or_tools-fd
     ,[0,0,0,0,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,1,2,1,1,2,0,0,0,0,0,0,1,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-free vs or_tools-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,0,0,0,2,0,2,0,0,2,2,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,0
      ]

// gecode-free vs or_tools-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,1,2,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// gecode-par vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-par vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,2,2,2,2,2,0,2
      ,0,0,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-par vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// gecode-par vs choco-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,1
      ,1,2,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,0,2,1,0
      ]

// gecode-par vs choco-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,0,0,0,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,0,1,1,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// gecode-par vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,0,1,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0
      ]

// gecode-par vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-par vs cplex-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,2,0,2,2,0,0,0,0,0,0,0,0,0,2,2,2,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-par vs cplex-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,0,0,2,2,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,1,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-par vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,0,0,0,2,2,0,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,1,2,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,2,0,2,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// gecode-par vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1,2,2,2,2,2,0,1,0
      ,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-par vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,0
      ,2,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-par vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,0,1,2,1,2,2,2,2,2,0,1,1
      ,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,2,2,2,2
      ]

// gecode-par vs g12_fd-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,1
      ,2,0,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,2,1,1,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// gecode-par vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,1,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,1,2,2,0,0,0,1,0,1,0,0,2,0,0,2,2,0,0,0,1,2,2
      ,0,0,2,2,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gecode-par vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,1,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,1,1,0,2,1,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// gecode-par vs gecode-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,0,1,0,1,1,2,2,2,2,0,1,1
      ,1,2,1,2,2,1,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,1,2,2,2,1,1,1,1,2,2,2,0,0,0,0,2,2,1,0,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,0,2,2,0
      ]

// gecode-par vs gecode-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,0,1,0,1,2,2,2,2,2,0,1,1
      ,1,2,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,1,2,2,2,1,1,1,1,2,2,2,0,0,0,0,2,2,1,0,2,1
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,0,2,2,0
      ]

// gecode-par vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gecode-par vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,1
      ,1,0,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,2,2,2
      ,0,0,2,2,2,1,2,0,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ]

// gecode-par vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0
      ,0,0,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,2,0,1,0,1,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// gecode-par vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,0,1,1
      ,1,2,2,0,0,0,0,2,0,1,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,1,0,2,2,1,1,1,1,2,0,2,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// gecode-par vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,0,0,0,2,2,2,0,1,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,2,2,2,0
      ]

// gecode-par vs jacop-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,0,0,0,2,2,2,0,1,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,1,1,2,2,2,2,0
      ]

// gecode-par vs minisatid-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// gecode-par vs mistral-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,1,2
      ,1,0,2,2,2,2,2,2,2,1,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,2,0,0,0,0,0
      ]

// gecode-par vs or_tools-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,2,2,1,1,2,2,2,2,0,0,0,0,2,2,0,1,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// gecode-par vs or_tools-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,0,0,2,0,2,0,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,0,0,2,2,2,2,2,2,2,0,2,0,0,0,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,0
      ]

// gecode-par vs or_tools-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,0,0,0,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// gurobi-free vs bprolog-fd
      [0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,2,0,2,2,2,0,2,2,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs bprolog-free
     ,[0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,2
      ,0,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,0,2,2,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs cbc-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs choco-fd
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,1,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs choco-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,1,1
      ,1,2,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0,1,2,2,2,2,2,2
      ]

// gurobi-free vs chuffed-fd
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,0,0,0,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,2,2,2,2,0,0,0,0,0,2,0,1,0,2,2,0,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2
      ]

// gurobi-free vs chuffed-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-free vs cplex-free
     ,[0,0,0,0,0,0,0,2,1,2,1,0,0,0,0,0,0,2,1,2,1,2,2,1,1
      ,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,2,2,2,2
      ,2,2,2,0,2,2,2,2,2,1,1,0,0,1,0,2,2,0,0,2,0,2,2,1,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,0,0,0,2,2,0,2,2,0,2,0,1,2
      ]

// gurobi-free vs cplex-par
     ,[0,0,0,0,0,0,0,2,2,2,1,1,0,0,0,0,0,2,0,2,0,2,2,1,1
      ,1,1,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2
      ,2,2,2,0,1,2,2,2,2,1,1,2,0,1,0,2,2,0,0,0,0,0,0,1,0
      ,2,0,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,0,2,2,0,2,0,2,2
      ]

// gurobi-free vs fzn2smt-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,2,2,0,0,0,2,0,2,0,1,1,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-free vs g12_cpx-free
     ,[0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,0,0,0,1,2,1,2,2,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-free vs g12_fd-fd
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,2,0,2,2,2,0,2,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs g12_fd-free
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,2,2,2,2,2,1
      ,2,2,0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,2,0,0,2,2,2,2,2,2
      ]

// gurobi-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0,1,0
      ,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,0,0,0,2,0,2,0,2,2,2,2,0,0,0,0,2,0,0,0
      ,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2
      ]

// gurobi-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,1,1,1,0,2,2,0,2,0,0,0,0,0
      ,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2
      ]

// gurobi-free vs gecode-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs gecode-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs gecode-par
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1
      ,1,2,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2,0,0,0
      ,2,2,0,0,0,1,0,2,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs gurobi-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gurobi-free vs gurobi-par
     ,[0,0,2,0,0,0,0,0,1,2,0,0,0,0,0,0,0,2,2,0,0,0,0,1,0
      ,0,1,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,0,0,1,0,2,2,2,1,1,0,0,1,1,1,0,2,2,0,2,2,2,1,2
      ,1,0,0,1,0,2,2,0,2,0,2,2,2,0,0,2,2,0,2,2,0,2,0,1,2
      ]

// gurobi-free vs izplus-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,1,2,1,2,2,1,1
      ,1,2,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2
      ,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2
      ,0,2,2,1,2,2,2,2,2,2,0,1,0,0,0,2,2,0,2,2,0,2,2,2,2
      ]

// gurobi-free vs jacop-fd
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,1,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,2,0,2,2,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs jacop-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,1,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,2,0,2,2,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs minisatid-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,2,1,0,1,2,2,2,2,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs mistral-free
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,1,0,2,2,0,0,0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2
      ]

// gurobi-free vs or_tools-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,0,2,2,2,0,0,0,0,0,0,0,2,0,0,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs or_tools-free
     ,[0,0,2,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2
      ]

// gurobi-free vs or_tools-par
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,0,0,0,2,2,0,2,2,2,0,0,0,0,0,0,0,2,0,2,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,2,2
      ]
]
  ,[
// gurobi-par vs bprolog-fd
      [0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0,0,0,2,2,0,0,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,2,0,2,2,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs bprolog-free
     ,[0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,2,2,0,2,2,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,1,2,2,0,2
      ,0,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs cbc-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs choco-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,2,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs choco-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,2,2,0,0,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2
      ]

// gurobi-par vs chuffed-fd
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,2,2,2,0,1,0
      ,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2
      ,2,2,2,2,2,2,0,0,0,0,0,2,0,1,0,2,2,0,2,2,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-par vs chuffed-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-par vs cplex-free
     ,[0,0,0,0,0,0,2,2,1,2,2,1,0,0,0,0,0,2,0,2,2,2,2,1,2
      ,2,0,0,0,0,2,0,0,0,2,2,0,1,1,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,2,2,2,2,2,1,1,1,0,1,0,2,2,0,0,2,0,2,0,1,2
      ,0,0,2,2,2,2,2,2,0,2,0,0,0,0,2,0,0,2,2,2,0,2,2,1,2
      ]

// gurobi-par vs cplex-par
     ,[0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,2,0,2,2,2,2,1,2
      ,2,1,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,1,1,2,2,2,2,1,1,2,1,1,0,2,2,0,0,0,0,0,0,1,0
      ,2,0,2,2,2,2,2,2,0,2,0,0,0,0,2,0,0,2,0,2,0,2,2,2,0
      ]

// gurobi-par vs fzn2smt-free
     ,[0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2
      ,2,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs g12_cpx-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,2,2,0,0,0,2,0,2,1,1,1,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-par vs g12_cpx-free
     ,[0,0,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2,2,0,0,0,0,0,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-par vs g12_fd-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,0,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,2,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs g12_fd-free
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,1,0,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2
      ]

// gurobi-par vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,0,1,0
      ,2,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,0,0,0,2,0,2,1,2,2,2,2,0,0,0,0,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// gurobi-par vs g12_lazyfd-free
     ,[0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,2,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,2,1,1,0,2,1,0,2,0,0,0,0,0
      ,0,0,2,0,2,2,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,2,2,2,2
      ]

// gurobi-par vs gecode-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,0,0,0,2,0,0,1,2,2,2,2,2,0,0,0,0,0,0,2,2,0,0,2
      ,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs gecode-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,0,0,2
      ,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs gecode-par
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,2
      ,2,2,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,2,1,2,1,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs gurobi-free
     ,[0,0,0,0,0,0,2,2,1,0,2,2,0,0,0,0,0,0,0,2,2,2,2,1,2
      ,2,1,0,0,0,2,0,0,0,2,0,0,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,1,2,2,1,2,0,0,0,1,1,2,2,1,1,1,2,0,0,2,0,0,0,1,0
      ,1,2,2,1,2,0,0,2,0,2,0,0,0,0,2,0,0,2,0,0,2,0,2,1,0
      ]

// gurobi-par vs gurobi-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// gurobi-par vs izplus-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,0,2,2,2,2,1,2
      ,2,2,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,2
      ,0,2,2,1,2,2,2,2,2,2,0,0,0,0,2,0,0,2,2,2,0,2,2,2,2
      ]

// gurobi-par vs jacop-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,0,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs jacop-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,0,0,0,1,0,2,0,2,0,0,0,0,2,0,0,0,2,0,2,2,2,2,2
      ]

// gurobi-par vs minisatid-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ,0,0,2,1,0,0,2,2,2,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs mistral-free
     ,[0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,0,2,2,2,2,2,2,1,2
      ,2,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,0,2,2,0,0,0,0,0,2,2,2,2,2,0,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ]

// gurobi-par vs or_tools-fd
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,2,0,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs or_tools-free
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2
      ,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]

// gurobi-par vs or_tools-par
     ,[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,0,0,0,2,0,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2
      ]
]
  ,[
// izplus-free vs bprolog-fd
      [0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,2,0,0,0,2,2,2
      ,2,2,0,2,2,2,2,0,2,2,2,2,1,2,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0
      ,0,0,0,0,0,1,0,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,2,0,0,0,2,2,2
      ,2,2,0,2,0,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,1,0,0,0,0,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs cbc-free
     ,[0,0,2,2,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,0,0,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0
      ,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2
      ]

// izplus-free vs choco-fd
     ,[0,0,2,2,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0,0,0,0,2,2,1
      ,1,0,0,2,2,2,2,0,2,1,1,2,2,2,0,0,0,0,0,2,2,2,0,1,2
      ,2,2,0,0,2,2,1,1,2,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs choco-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,1,1,1
      ,1,0,0,2,0,1,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,1,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,0,2,2,2,2,2,2
      ]

// izplus-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,2,0,0,0,0,1,0
      ,0,0,0,0,0,2,2,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,1,0,0,0,2,2,0,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,1,0
      ,1,0,0,0,0,1,0,0,2,0,0,1,1,1,0,0,0,0,0,0,0,2,0,2,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,1,1,0,1,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2
      ]

// izplus-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,1,1,1,1,0,1,1
      ,1,0,0,2,2,0,0,0,2,0,2,2,2,2,0,0,0,0,0,2,0,0,2,2,2
      ,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,2,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,1,0,0,0,0
      ]

// izplus-free vs cplex-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,1,0,1,0,1,1
      ,1,0,0,2,2,0,0,0,2,1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,2
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0
      ,2,0,1,2,2,2,2,0,0,0,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// izplus-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,2,1
      ,2,0,0,0,0,2,0,0,2,0,0,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,1,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,0,0,0,0,2,2,0,1,0,0,1,1,1,0,0,0,0,0,2,2,2,1,2,2
      ,2,0,0,0,2,0,0,0,0,1,0,1,0,0,0,2,2,1,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,2,0
      ,2,0,0,2,2,2,2,0,2,0,0,1,1,1,0,0,0,0,0,2,2,0,1,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs g12_fd-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,1,1
      ,1,2,0,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,2,2,2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,2,0,2,0,2,0,2,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs g12_fd-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,0,2,0,2,0,2,2,1
      ,2,0,0,0,2,2,2,0,2,2,2,1,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,0,2,0,1,1,1,2,2,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,2,0,1,2,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2
      ]

// izplus-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,1,0,1,0
      ,0,0,0,2,0,2,2,0,2,0,0,1,1,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,2,2,0,0,0,1,0,1,0,0,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,1,0
      ,1,0,0,2,2,2,2,0,2,0,0,2,1,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,1,1
      ,1,0,0,2,2,2,2,0,2,1,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,1,2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,1,1
      ,1,0,0,2,2,2,2,0,2,1,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,1,2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,1,1
      ,1,0,0,2,2,2,2,0,2,1,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,1,2,0,0,1,1,1,1,0,2,0,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs gurobi-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,0,1,0,1,0,0,1,1
      ,1,0,0,2,2,2,2,0,2,0,0,2,2,2,0,0,0,0,0,2,2,0,0,1,0
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,2,0,0,1,0,0,0,0,0,0,2,1,2,2,2,0,0,2,0,0,2,0,0,0,0
      ]

// izplus-free vs gurobi-par
     ,[0,0,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,0,2,0,0,0,0,1,0
      ,0,0,0,2,2,0,2,0,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0
      ,2,0,0,1,0,0,0,0,0,0,2,2,2,2,0,2,2,0,0,0,2,0,0,0,0
      ]

// izplus-free vs izplus-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// izplus-free vs jacop-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,1,2
      ,2,1,0,2,2,2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,0,1,2
      ,2,1,0,2,2,2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// izplus-free vs minisatid-free
     ,[0,0,1,1,0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2
      ,2,2,0,2,1,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,2,2,2,2,0,1,0,0,2,2,2,2,2,2,2,0,0
      ,0,0,1,1,0,0,2,2,0,1,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,1,2
      ,1,0,0,2,2,2,2,0,2,1,0,1,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,2,0,0
      ,2,0,1,2,2,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// izplus-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,2,0,0,0,0,0,2,2,2
      ,2,0,0,2,2,2,2,0,2,2,0,2,2,2,0,0,0,0,0,0,2,0,0,0,0
      ,2,0,0,0,2,2,2,1,2,1,1,2,0,2,2,2,2,0,2,2,2,2,0,0,0
      ,2,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs or_tools-free
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0,0,0,0,2,2,2
      ,2,0,0,1,2,2,2,0,1,2,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2
      ,2,2,0,2,0,0,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,0,0,0
      ,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// izplus-free vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,0,0,0,0,0,2,2,2
      ,2,0,0,2,2,2,2,0,2,2,0,2,2,2,0,0,0,0,0,2,2,2,0,2,2
      ,2,2,0,2,2,2,2,1,2,1,1,2,0,2,2,2,2,2,2,2,2,2,0,0,0
      ,2,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// jacop-fd vs bprolog-fd
      [0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// jacop-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,2,2,2,2,2,0,0
      ,0,0,2,2,0,0,2,2,0,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// jacop-fd vs cbc-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,2,2,2,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// jacop-fd vs choco-fd
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,2,0,0,0,0,0,0,0,2,2,2,2,0,0,2,1,0
      ,0,2,2,0,2,2,1,1,2,1,1,1,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,0,1,2,2,2,2,2,2,2,0,2,1,1,1,1,0,0,0,0,0
      ]

// jacop-fd vs choco-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,2,0,2,0,0,0,0,0,0,0,2,0,1,2,2,2,2,2,0
      ,0,2,2,2,2,2,1,0,1,1,1,1,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// jacop-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,1,2,1
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0
      ]

// jacop-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,0,0,0,1,2,2
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// jacop-fd vs cplex-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,1,2,2,2,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-fd vs cplex-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,2
      ,0,0,2,2,1,2,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// jacop-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,2,1
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,0,2,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,2,2,2
      ,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-fd vs g12_fd-fd
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,1,1,1,1,1,1,0,0,0,0,0,2,2,2,2,2,2,2,0
      ,0,0,2,2,1,1,1,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,1,2
      ]

// jacop-fd vs g12_fd-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,2,2,2,0,0,0,2,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,2,0,1,1,1,2,2,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,0,2,2,2,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// jacop-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,1,2,2
      ,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,2,2,0,2,2,0,0,0,1,0,1,0,0,0,0,0,2,0,0,0,0,1,1,2
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// jacop-fd vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0
      ,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0
      ]

// jacop-fd vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0
      ,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1
      ]

// jacop-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,2,0,0,0,2,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,2
      ]

// jacop-fd vs gurobi-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,1,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,0,2,0,0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ]

// jacop-fd vs gurobi-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,0,2,2,2
      ,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,2,0,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-fd vs izplus-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,2,1,0
      ,0,1,2,0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// jacop-fd vs jacop-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// jacop-fd vs jacop-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,2,2,2,1,1,1
      ,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,1,1,1,2,1,2,0,1,0
      ,0,1,0,2,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,2,2,1,1,1,0
      ,0,0,1,0,1,1,1,1,0,0,0,0,2,2,0,1,1,1,1,1,2,1,1,1,1
      ]

// jacop-fd vs minisatid-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,2,2,0,0,0,2,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,0,2,0,2,2,2,2,2,0,0,2,2,2,2,2,0,0,0,0,0
      ]

// jacop-fd vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,2,0,2,0,0,0,0,0
      ]

// jacop-fd vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,1,2,1,1,2,0,0,0,0,0,0,0,0,0,0,1,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// jacop-fd vs or_tools-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,0,2,2,2
      ,2,2,0,0,2,0,2,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,0
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,0
      ]

// jacop-fd vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,2,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,2,2,2,2,2,2,1,2,1,1,2,0,0,0,0,0,1,0,0,0,2,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// jacop-free vs bprolog-fd
      [0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2
      ]

// jacop-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,1,2,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,0,2,2,0,0,2,2,0,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0
      ]

// jacop-free vs cbc-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,2,2,2,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0
      ]

// jacop-free vs choco-fd
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,2,0,0,0,0,0,0,0,2,2,2,2,0,0,2,1,0
      ,0,2,2,0,2,2,1,1,2,1,1,1,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,1,0,1,2,2,2,2,2,2,2,0,2,1,1,1,1,0,0,0,0,0
      ]

// jacop-free vs choco-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,2,0,2,0,0,0,0,0,0,0,2,0,1,2,2,2,2,2,0
      ,0,2,2,2,2,2,1,0,1,1,1,1,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,0,2,0,2
      ]

// jacop-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,2,1,2,1
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0
      ]

// jacop-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,0,0,0,1,2,2
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// jacop-free vs cplex-free
     ,[0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,1,2,2,2,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-free vs cplex-par
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,2
      ,0,0,2,2,1,2,2,0,0,0,0,0,0,0,0,2,2,2,0,2,2,2,2,2,2
      ]

// jacop-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,2,1
      ,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,0,2,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,2,2,2
      ,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,0,0,2,2,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-free vs g12_fd-fd
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,1,1,1,1,1,1,0,0,0,0,0,2,2,2,2,2,2,2,1
      ,0,0,2,2,1,1,1,2,2,2,2,2,2,2,0,1,1,1,1,1,2,2,1,1,2
      ]

// jacop-free vs g12_fd-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,2,2,2,2,2,0,0,0,2,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,2,0,1,1,1,2,2,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,2,2,2,2,2,2,0,2,2,2,2,2,0,0,2,2,0,2,0,0,0,2,2
      ]

// jacop-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,1,2,2
      ,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0
      ,0,2,2,0,2,2,0,0,0,1,0,1,0,0,0,0,0,2,0,0,0,0,1,1,2
      ,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// jacop-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,0,0
      ]

// jacop-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0
      ,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,2,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0
      ]

// jacop-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0
      ,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1
      ]

// jacop-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,2,0,0,0,2,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,2
      ]

// jacop-free vs gurobi-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,1,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,0,2,0,0,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ]

// jacop-free vs gurobi-par
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,0,2,2,2
      ,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,2,2,2,1,2,0,2,0,2,2,2,2,0,2,2,2,0,2,0,0,0,0,0
      ]

// jacop-free vs izplus-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,2,1,0
      ,0,1,2,0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,2,0,2,0,0,0,0,0
      ]

// jacop-free vs jacop-fd
     ,[0,2,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1
      ,1,1,1,1,1,1,1,1,0,0,0,0,2,0,0,0,1,1,1,0,1,0,2,1,0
      ,0,1,2,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,2
      ,0,0,1,2,1,1,1,1,2,2,2,2,0,0,0,1,1,1,1,1,0,1,1,1,1
      ]

// jacop-free vs jacop-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// jacop-free vs minisatid-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,2,2,0,0,2,0,2,2,0,0,0,2,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,1,0,2,0,2,2,2,2,2,0,0,2,2,2,2,2,0,0,0,0,0
      ]

// jacop-free vs mistral-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,2,2,2
      ,2,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,2,0,2,0,0,0,0,0
      ]

// jacop-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,1,2,1,1,2,0,0,0,0,0,0,0,0,0,0,1,0,1
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]

// jacop-free vs or_tools-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,0,2,2,2
      ,2,2,0,0,2,0,2,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,0
      ,0,2,2,2,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,1
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,0
      ]

// jacop-free vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,2,0,0,0,2,2,2
      ,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,0
      ,0,2,2,2,2,2,2,1,2,1,1,2,0,0,0,0,0,1,0,0,0,2,2,0,2
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// minisatid-free vs bprolog-fd
      [0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,1,1,0,0,1,2,0,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2
      ]

// minisatid-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,0,2,1,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,2,0,0,0,2,2,2,2,0,2,2,0,2,1,2,2,2,2
      ]

// minisatid-free vs cbc-free
     ,[0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,0,2,0,0,0,2,0
      ]

// minisatid-free vs choco-fd
     ,[0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,1,0,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs choco-free
     ,[0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2
      ]

// minisatid-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// minisatid-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ]

// minisatid-free vs cplex-par
     ,[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,1,2,2,2,0,0,0,0,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ]

// minisatid-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_fd-fd
     ,[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,2,0,2,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_fd-free
     ,[0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,2,2,2,2,0,0,0,0,0,0,2,2,0,0,2,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0
      ,2,2,1,2,2,2,0,2,0,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2
      ]

// minisatid-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,1,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,1,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs gurobi-free
     ,[0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,1,2,1,0,0,0,0,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ]

// minisatid-free vs gurobi-par
     ,[0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,2,2,0,1,2,2,0,0,0,0,2,2,2,2,0,0,2,0,0,0,0,0,0,0,0
      ]

// minisatid-free vs izplus-free
     ,[0,0,1,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,1,0,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,1,1,2,2,0,0,2,1,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// minisatid-free vs jacop-fd
     ,[0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,2,0,2,0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs jacop-free
     ,[0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,2,2,0,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,0,0,1,2,0,2,0,0,0,0,0,2,2,0,0,0,0,0,2,2,2,2,2
      ]

// minisatid-free vs minisatid-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// minisatid-free vs mistral-free
     ,[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0
      ,2,2,1,2,2,2,0,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// minisatid-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,2,0,2,2,2,2,2,2
      ]

// minisatid-free vs or_tools-free
     ,[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2
      ]

// minisatid-free vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0
      ,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,2,2,0,2,2,2,2,2,2
      ]
]
  ,[
// mistral-free vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs bprolog-free
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,2,2,0,2,0,2,0,0,0
      ,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,0,2,0
      ,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,0
      ]

// mistral-free vs choco-fd
     ,[0,0,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,1,2,0,0,0,0,0,0,2,1,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs choco-free
     ,[0,1,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,2,2,2,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,2,2,2,0,2,2,0,0,0,0,2,2,0,0,2,0
      ,0,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,0,0,1,2,0,0,0
      ,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2
      ]

// mistral-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,2,2,2
      ]

// mistral-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,0,2,2,2,2,2,0,0,1,0,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,2
      ]

// mistral-free vs cplex-free
     ,[0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,1,0,0,0,0,0,0,2,0,2,2,2,2,2,0,2,2,0,0,0,0,0,2,0
      ,0,0,2,0,2,0,0,2,2,2,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// mistral-free vs cplex-par
     ,[0,2,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,1,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,0,0,2,2,2,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,1,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// mistral-free vs fzn2smt-free
     ,[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,2,2,0,0,2,0
      ,0,0,2,2,2,2,0,1,2,0,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs g12_cpx-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,1,0,0,0,0,0,0,0,0,0,1,0,0,2,0,2,2,0,0,0,0,0,1,0
      ,0,0,2,0,2,0,0,1,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,2,2,2,2,2
      ]

// mistral-free vs g12_cpx-free
     ,[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,1,0,0,0,0,0,2,0
      ,0,0,2,0,1,0,0,0,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// mistral-free vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,0,2,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs g12_fd-free
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,2,1,2,2,2,0,0,0,0,2,2,0,0,2,0
      ,0,2,2,0,2,2,0,2,2,2,2,2,2,0,2,0,2,2,0,0,2,2,0,0,0
      ,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2
      ]

// mistral-free vs g12_lazyfd-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,2,0,0,0,0,0,0,0,0,0,1,0,0,2,0,2,2,0,2,2,0,0,2,0
      ,0,0,2,2,2,0,0,1,2,2,2,2,0,0,2,2,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,2,2
      ]

// mistral-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,2,0
      ,0,2,2,0,2,2,0,0,1,0,1,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,2,2,0,0,0,0,0,0,0,2,1,2,2,0,0,2,2,2,2,2
      ]

// mistral-free vs gecode-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,1,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs gecode-free
     ,[0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,1,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs gecode-par
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,0,1,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,2,0,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,1,2,0,0,2,2,2,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0
      ]

// mistral-free vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,0,2,0,0,0,0,0,0,2,0,2,2,2,2,2,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,0,0,2,2,2,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0
      ]

// mistral-free vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0
      ,1,2,0,0,0,0,0,0,0,1,2,1,0,0,2,0,2,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,1,0,0,0,0,0,2,2,2,2,0,2,2,2,2,2,2,2,0,0,0,0,0
      ]

// mistral-free vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,2,2,0,2,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs jacop-free
     ,[0,0,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,2,2,0,2,2,2,2,0,2,0,2,2,2,2,2
      ]

// mistral-free vs minisatid-free
     ,[0,2,2,2,0,1,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,0,2,0
      ,0,2,2,2,2,2,0,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,0,0,0
      ,0,0,1,0,0,0,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs mistral-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// mistral-free vs or_tools-fd
     ,[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,0,2,2,2,2,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs or_tools-free
     ,[0,0,2,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,0,2,2,2,0,2,2,0,0,0,0,2,2,0,0,2,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
      ]

// mistral-free vs or_tools-par
     ,[0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ,2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,2,0
      ,0,0,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,2,0,0,0
      ,0,0,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2
      ]
]
  ,[
// or_tools-fd vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,2,0,1,2,0,1,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,0,2,2,0,0,2,0,2,0,0,0,2,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,0,2,0,0,0,0,2,2,2,2,2,2,0,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,2,0,2,2,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,0
      ]

// or_tools-fd vs choco-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,0,2,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,0,2,0,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,1,0,1,1,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs choco-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,0,0,1,1,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2
      ]

// or_tools-fd vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,0,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs cplex-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,0,0,2,2,2
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs cplex-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,0,0,2,2,2
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,1,0,0,0,2,1,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,1,2,1,1
      ]

// or_tools-fd vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,2,2,2,2,2,2
      ,0,0,2,0,2,0,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,2,0,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,1,0,1,1,0,2,0,0,0,0,2,2,2,2,2,2,2,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs g12_fd-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,2,0,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,0,0,0,2,0,1,0,1,2,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,2,0,2,2,0,0,0,1,0,0,0,0,0,0,0,2,2,0,0,0,1,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0
      ]

// or_tools-fd vs gecode-fd
     ,[0,2,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,2,1,2,2,2,0,2,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs gecode-free
     ,[0,2,2,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,2,0,0,0,0,2,1,2,2,2,0,2,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,2,0,0,2,1,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,2,0,2,2,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,0,2,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,0,2,2,2,2
      ,0,2,2,2,0,0,0,1,0,1,1,0,2,0,0,0,0,2,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,0,2,2,2,2,0,0,1,0,1,1,0,2,0,0,0,0,2,2,2,2,2,1,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs jacop-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2
      ,0,2,2,2,2,0,0,1,0,1,1,0,2,0,0,0,0,2,2,2,2,2,1,2,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs minisatid-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,2,2,2,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,2,0,2,2,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs mistral-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs or_tools-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,2,2,2,2,2,2,2
      ,0,2,2,2,0,0,0,2,0,2,2,0,2,0,0,0,0,2,2,2,2,2,2,2,1
      ,0,0,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-fd vs or_tools-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,1,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2
      ,0,2,2,2,2,2,0,1,0,1,1,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,1,1,0,0,0,2,2,2,2,2,2,1,0,0,0,0,0,0,1,1,1,1,1
      ]
]
  ,[
// or_tools-free vs bprolog-fd
      [0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,0,2,2,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// or_tools-free vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,1
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs cbc-free
     ,[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0
      ]

// or_tools-free vs choco-fd
     ,[0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,2,2,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,0,0,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs choco-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,1,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,2,2,0,0,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ]

// or_tools-free vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,0,0,2,0,2,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs cplex-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs cplex-par
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,0,0,0,0,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// or_tools-free vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,0,0,2,0,2,1,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// or_tools-free vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// or_tools-free vs g12_fd-fd
     ,[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,2,0,0,1
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// or_tools-free vs g12_fd-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,0,0,2,0,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,0,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2
      ]

// or_tools-free vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ]

// or_tools-free vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs gurobi-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs gurobi-par
     ,[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0
      ,0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs izplus-free
     ,[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,1,0,0,0,2,1,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,2,2,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs jacop-fd
     ,[0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs jacop-free
     ,[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2
      ]

// or_tools-free vs minisatid-free
     ,[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,1,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs mistral-free
     ,[0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,2,2,0,2,0,2,2,0,0,0,2,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,2,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]

// or_tools-free vs or_tools-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-free vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,2,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,2,0,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,2
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2
      ]
]
  ,[
// or_tools-par vs bprolog-fd
      [0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,2,0,1,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs bprolog-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,0,2,2,0,0,2,0,2,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,1,0,2,0,0,0,0,2,2,2,2,2,2,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs cbc-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,0,0
      ,0,2,2,2,2,2,0,2,0,2,2,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,0
      ]

// or_tools-par vs choco-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0
      ,0,2,2,0,0,2,0,1,0,1,1,0,0,0,0,0,0,2,2,2,2,2,1,2,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs choco-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0
      ,0,2,2,2,2,2,0,0,0,1,1,0,2,0,0,0,0,2,2,0,2,2,2,2,1
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2
      ]

// or_tools-par vs chuffed-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs chuffed-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs cplex-free
     ,[0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs cplex-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs fzn2smt-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,0,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,1,2,1,1
      ]

// or_tools-par vs g12_cpx-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,0,0
      ,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs g12_cpx-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,0,2,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs g12_fd-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,2,0,0,0,0,0,0,2,0,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0
      ,0,2,2,2,0,2,0,1,0,1,1,0,0,0,0,0,0,2,2,2,2,2,0,2,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs g12_fd-free
     ,[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,2,0,2,0,2,2,0,0,2,0,2,2,2,2,2,0,0
      ,0,2,0,0,0,2,0,1,0,1,2,0,2,0,0,0,0,2,2,0,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs g12_lazyfd-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,2,2,2,0,0
      ,0,2,2,0,0,2,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs g12_lazyfd-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0
      ,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,0,1
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0
      ]

// or_tools-par vs gecode-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs gecode-free
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs gecode-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs gurobi-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,2,2,0,2,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs gurobi-par
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,0,0,0
      ,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs izplus-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,2,0,0
      ,0,0,2,0,0,0,0,1,0,1,1,0,2,0,0,0,0,0,0,0,0,0,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs jacop-fd
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,2,0,0,0,0,1,2,2,2,0,0,2,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs jacop-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,2,2,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,2,0,0,0,0,1,2,2,2,0,0,2,0
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs minisatid-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,2,0,0,0,0,0,2,2,0,2,2,2,2,0,0,2,0,2,2,2,2,2,0,0
      ,0,2,2,2,2,2,0,2,0,2,2,0,2,0,0,0,0,2,2,2,2,2,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs mistral-free
     ,[0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,0,0
      ,0,2,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,2,2,0,2,2,2
      ,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs or_tools-fd
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1
      ]

// or_tools-par vs or_tools-free
     ,[0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,2,2,2,2,2,0,0
      ,0,2,0,2,0,0,0,2,0,2,2,0,2,0,0,0,0,0,2,2,2,2,2,2,0
      ,0,0,2,2,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0
      ]

// or_tools-par vs or_tools-par
     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
]
];
// bprolog-fd: 1154
// bprolog-free: 2251
// cbc-free: 395
// choco-fd: 1737
// choco-free: 1506
// chuffed-fd: 3853
// chuffed-free: 4306
// cplex-free: 2489
// cplex-par: 2526
// fzn2smt-free: 2775
// g12_cpx-fd: 3761
// g12_cpx-free: 3501
// g12_fd-fd: 2084
// g12_fd-free: 1775
// g12_lazyfd-fd: 2873
// g12_lazyfd-free: 3189
// gecode-fd: 2997
// gecode-free: 2916
// gecode-par: 3502
// gurobi-free: 2661
// gurobi-par: 2775
// izplus-free: 2516
// jacop-fd: 2219
// jacop-free: 2244
// minisatid-free: 1201
// mistral-free: 2145
// or_tools-fd: 1872
// or_tools-free: 1266
// or_tools-par: 1365
