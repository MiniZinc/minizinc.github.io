var 0..711: item1; 
var 0..711: item2;
var 0..711: item3;
var 0..711: item4;

constraint item1 + item2 + item3 + item4 == 711;
constraint item1 * item2 * item3 * item4 == 711 * 100 * 100 * 100;
  
% symmetry breaking
constraint item1 <= item2 /\ item2 <= item3 /\ item3 <= item4;
  
solve satisfy;

output ["{", show(item1), ",", show(item2), ",", show(item3), ",",
	 show(item4),"}\n"];
