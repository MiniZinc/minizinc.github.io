%MIT License

%Copyright (c) 2026 Ida Gjergji, Guido Tack

%Permission is hereby granted, free of charge, to any person obtaining a copy
%of this software and associated documentation files (the "Software"), to deal
%in the Software without restriction, including without limitation the rights
%to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
%copies of the Software, and to permit persons to whom the Software is
%furnished to do so, subject to the following conditions:

%The above copyright notice and this permission notice shall be included in all
%copies or substantial portions of the Software.

%THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
%IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
%FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
%AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
%LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
%OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
%SOFTWARE.

% CP model for the MS-CFLP-CI: the Multi-Source Capacitated Facility Location Problem with Customer Incompatibilities. In this facility location problem, the demand of customers can be satisfied by multiple facilities, the capacity values of the facilities should be respected, and incompatible pairs of customers should not be assigned to the same facility.

% Changes by MiniZinc Challenge Organizers:
% - Add is_open and incomp_fac to search annotation
% - Explicitly mark symmetry breaking and redundant constraints 

include "global_cardinality.mzn";
include "increasing.mzn";
include "disjoint.mzn";

% nr warehouses
int: Warehouses;

% nr stores
int: Stores;

% capacity
array[1..Warehouses] of int: Capacity;

% demand
array[1..Stores] of int: Goods;

% opening cost
array[1..Warehouses] of int: FixedCost;

% shipping cost
array[1..Stores, 1..Warehouses] of int: SupplyCost;

% nr incompatibilities
int: Incompatibilities;

% incompatible pairs
array[1..Incompatibilities, 1..2] of int: IncompatiblePairs;

% define the nr of tokens
int: TOKEN = sum(Goods);

% every token belongs to a customer
array[1..TOKEN] of 1..Stores: token_customer = [ i | i in 1..Stores, t in 1..Goods[i]]; 

% every customer has a set of tokens
array[1..Stores] of set of 1..TOKEN: tokens_of_customers = [ { t | t in 1..TOKEN where token_customer[t] = i }
                                                             | i in 1..Stores ];
  
% every token has a unit supply cost 
array[1..TOKEN, 1..Warehouses] of int: supply_cost = array2d(1..TOKEN, 1..Warehouses, [SupplyCost[token_customer[t],j]  
                                                             | t in 1..TOKEN, j in 1..Warehouses]);

% define which facility delivers each token
array[1..TOKEN] of var 1..Warehouses: token_facility;

% keep track of nr of tokens per facility
array[1..Warehouses] of var 0..TOKEN: open_facility;
constraint forall(j in 1..Warehouses) (open_facility[j] <= Capacity[j]);

% capacity constraint - global cardinality version
constraint global_cardinality(token_facility, 1..Warehouses, open_facility) ::domain;

% incompatibility constraint

% Option 1: set variables and "disjoint" constraints
array[1..Stores] of var set of 1..Warehouses: incomp_fac;
constraint forall (c in 1..Stores, t in tokens_of_customers[c]) (token_facility[t] in incomp_fac[c]);

constraint forall(q in 1..Incompatibilities) (disjoint(incomp_fac[IncompatiblePairs[q,1]], incomp_fac[IncompatiblePairs[q,2]]));

% % Option 2: direct != constraints
% constraint forall(q in 1..Incompatibilities, t1 in tokens_of_customers[IncompatiblePairs[q,1]], t2 in tokens_of_customers[IncompatiblePairs[q,2]] )(token_facility[t1] != token_facility[t2]);


% symmetry breaking
constraint forall(i in 1..Stores)(symmetry_breaking_constraint(increasing(t in tokens_of_customers[i])(token_facility[t])));

% keep track of which warehouses are open
array[1..Warehouses] of var bool: is_open;
constraint forall (j in 1..Warehouses) (open_facility[j] <= Capacity[j] * is_open[j]);

% implied constraint: at least as much open capacity as tokens
constraint redundant_constraint(sum(j in 1..Warehouses)(is_open[j] * Capacity[j]) >= TOKEN);


% cost function
var int: cost1 = sum(j in 1..Warehouses)(is_open[j] * FixedCost[j]);
var int: cost2 = sum(t in 1..TOKEN)(supply_cost[t, token_facility[t]]);

% implied constraint: cost is lower-bounded by minimum cost per token
int: min_possible_cost2 = sum(t in 1..TOKEN)(min(j in 1..Warehouses)(supply_cost[t, j]));
constraint redundant_constraint(cost2 >= min_possible_cost2);

array[1..Stores] of int: nr_incomp = [sum([1 | q in 1..Incompatibilities where IncompatiblePairs[q,1] = i \/ IncompatiblePairs[q,2] = i]) | i in 1..Stores];
array[1..TOKEN] of int: nr_incomp_order = arg_sort([nr_incomp[token_customer[t]] | t in 1..TOKEN]);
var int: objective = cost1 + cost2;
solve:: seq_search([
    int_search([token_facility[t] | t in nr_incomp_order], input_order, indomain_min),
    bool_search(is_open, input_order, indomain_min),
    set_search(incomp_fac, input_order, indomain_min)
]) minimize objective;
