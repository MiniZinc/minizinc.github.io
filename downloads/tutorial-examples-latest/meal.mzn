% Planning a balanced meal
include "table.mzn";
int: min_energy;
int: min_protein;
int: max_salt;
int: max_fat;
set of FOODS: desserts;
set of FOODS: mains;
set of FOODS: sides;
set of int: FEATURES = 1..6;
int: name = 1; int: energy = 2; int: protein = 3;
int: salt = 4; int: fat = 5; int: cost = 6;
int: nf; % number of foods
set of int: FOODS = 1..nf;
array[FOODS] of string: n; % food names
array[FOODS,FEATURES] of int: dd; % food database

array[FEATURES] of var int: main;
array[FEATURES] of var int: side;
array[FEATURES] of var int: dessert;
var int: budget;

constraint main[name] in mains;
constraint side[name] in sides;
constraint dessert[name] in desserts;
constraint table(main, dd);
constraint table(side, dd);
constraint table(dessert, dd);
constraint main[energy] + side[energy] + dessert[energy] >=min_energy;
constraint main[protein]+side[protein]+dessert[protein] >=min_protein;
constraint main[salt] + side[salt] + dessert[salt] <= max_salt;
constraint main[fat] + side[fat] + dessert[fat] <= max_fat;
constraint budget = main[cost] + side[cost] + dessert[cost];

solve minimize budget; 

output ["main = ",n[fix(main[name])],", side = ",n[fix(side[name])],
  ", dessert = ",n[fix(dessert[name])],", cost = ",show(budget), "\n"];
