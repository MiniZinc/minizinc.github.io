set of int: Guests = 1..12;
int: bride = 1; int: groom = 2; int: bestman = 3;
int: bridesmaid = 4; int: bob = 5; int: carol  = 6;
int: ted = 7; int: alice = 8; int: ron = 9;
int: rona = 10; int: ed = 11; int: clara = 12;
array[Guests] of string: name = ["bride","groom","bestman",
   "bridesmaid","bob","carol","ted","alice","ron","rona","ed","clara"];
set of int: Seats = 1..12;

set of int: Hatreds = 1..5;
array[Hatreds] of Guests: h1 = [groom, carol, ed, bride, ted];
array[Hatreds] of Guests: h2 = [clara, bestman, ted, alice, ron];

set of int: Males = {groom, bestman, bob, ted, ron,ed};
set of int: Females = {bride, bridesmaid, carol, alice, rona, clara}; 

array[Guests] of var Seats: pos;

include "alldifferent.mzn";

constraint alldifferent(pos);

constraint forall(g in Males)( pos[g] mod 2 == 1 );
constraint forall(g in Females)( pos[g] mod 2 == 0 );

constraint not (pos[ed] in {1,6,7,12});
constraint abs(pos[bride] - pos[groom]) <= 1 /\ 
           (pos[bride] <= 6 <-> pos[groom] <= 6);

solve maximize sum(h in Hatreds)(
          let {  var Seats: p1 = pos[h1[h]],
                 var Seats: p2 = pos[h2[h]],
                 var 0..1: same = bool2int(p1 <= 6 <-> p2 <= 6) } in   
          same * abs(p1 - p2) + (1-same) * (abs(13 - p1 - p2) + 1));

output [name[g]++" " | s in Seats, g in Guests where fix(pos[g]) == s]
       ++ ["\n"]; 
