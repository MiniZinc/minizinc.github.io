% MIT License
%
% Copyright (c) 2026 Helmut Simonis, Konstantin Sidorov
%
% Permission is hereby granted, free of charge, to any person obtaining a copy
% of this software and associated documentation files (the "Software"), to deal
% in the Software without restriction, including without limitation the rights
% to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
% copies of the Software, and to permit persons to whom the Software is
% furnished to do so, subject to the following conditions:
%
% The above copyright notice and this permission notice shall be included in all
% copies or substantial portions of the Software.
% 
% THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
% IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
% FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
% AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
% LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
% OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
% SOFTWARE.

% Modifications by MiniZinc Challenge Organizers:
% - Add search annotation

include "globals.mzn";

int:nrDays;
int:nrRooms;
int:nrPatients;
int:nrIncompatible;

array[1..nrRooms,1..nrDays] of int:capacity;
array[1..nrPatients,1..nrRooms] of int:excluded;
array[1..nrPatients,1..nrDays] of int:present;
array[1..nrIncompatible,1..2] of int:incompatible;

array[1..nrPatients] of var 1..nrRooms:x;

constraint forall(i in 1..nrPatients, r in 1..nrRooms where excluded[i,r] = 1)
    (x[i] != r);
constraint forall(j in 1..nrDays)
    (global_cardinality_closed([x[i] |i in 1..nrPatients where present[i,j]=1],
	                    [r | r in 1..nrRooms],
	                    [0|r in 1..nrRooms],
						[capacity[r,j]|r in 1..nrRooms]));
constraint forall(i in 1..nrIncompatible)(x[incompatible[i,1]] != x[incompatible[i,2]]);

solve :: int_search(x, input_order, indomain_min) satisfy;
