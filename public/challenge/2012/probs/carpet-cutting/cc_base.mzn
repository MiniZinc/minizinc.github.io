%-----------------------------------------------------------------------------%
% vim: ts=4 sw=4 et wm=0 tw=0
%-----------------------------------------------------------------------------%
% 
% This file contains a model for a carpet cutting problem in which carpet
% shapes must be cut from a carpet roll minimising the wastage, i.e., the
% needed length of the carpet roll.
%         _____________________
%        |                   (_)
%        |                   | |
%        |                   | |
%  Width |                   | |
%        |                   | |
%        |                   | |
%        |___________________(_)
%
%                Length
%
% The carpet cutting problem is a two-dimensional cutting and packing problem
% in which carpet shapes are cut from a rectangular carpet roll with fixed roll
% width and a sufficiently long roll length. The goal is to find a non-overlap-
% ping placement of all carpet shapes on the carpet roll, so that the waste is
% minimised while meeting all additional constraints. Here, the objective is to
% minimise the carpet roll length.
%
% Here, we distinguise between carpet shapes covering rooms and stairs:
% 
% Room carpets:
% They are rectilinear polygons that are made up of non-overlapping rectangles
% A rotation may be allowed by 90, 180, or 270 degree before they are placed
% on the roll.
%
% Stair carpets:
% They are rectangles covering a certain number of steps. In contrast to room
% carpets, they are allowed to be cut in several pieces provided that the par-
% tition of these carpets satisfy additional constraints. The joint of these
% carpets introduced by the cut between two adjacent pieces, can be hidden bet-
% ween the tread and the riser of the stairs once they are laid.
%
%-----------------------------------------------------------------------------%
% Including files

include "globals.mzn";    % Global constraints

%------------------------------------------------------------------------------%
% Parameters

    % Carpet roll
int: roll_wid;      % Roll width
int: max_roll_len;  % Maximal roll length

    % Orientations: 1 - 0, 2 - 90, 3 - 180, and 4 - 270
set of int: Ori = 1..4;

    % Room carpets
int: n_rm;                                  % Number of room carpets
set of int: Rooms = 1..n_rm;                % Identifiers of room carpets
array [Rooms] of set of int: rm_rec_ids;    % Identifiers of rectangles belonging to each room carpet
array [Rooms] of set of Ori: rm_ori;        % Allowed rotation for each room carpet
array [Rooms] of int:        rm_max_len;    % Maximal length in orientation 1 (0 degree)
array [Rooms] of int:        rm_max_wid;    % Maximal width in orientation 1  (0 degree)

    % Rectangles of the room carpets
int: n_rm_rec;                              % Number of rectangles of room carpets
set of int: RmRecs = 1..n_rm_rec;           % Identifiers of these rectangles
array [RmRecs] of int:      rm_rec_len;     % Length in orientation 1 (0 degree)
array [RmRecs] of int:      rm_rec_wid;     % Length in orientation 1 (0 degree)
array [RmRecs, Ori] of int: rm_rec_os_x;    % Offset of the x-origin of the rectangles to their room carpet for each orientation
array [RmRecs, Ori] of int: rm_rec_os_y;    % Offset of the y-origin of the rectangles to their room carpet for each orientation

array [Rooms] of int: rm_area =
    [ sum(j in rm_rec_ids[i])(rm_rec_len[j] * rm_rec_wid[j]) | i in Rooms ];
array [Rooms] of int: rm_pos =
    [ sum(j in Rooms where (j != i /\ rm_area[j] > rm_area[i]) 
         \/ (j < i /\ rm_area[j] = rm_area[i]))(1) + 1
    | i in Rooms ];
array [Rooms] of int: rm_sort = [ j | i, j in Rooms where rm_pos[j] = i ];

    % Stair carpets
    %
int: n_st;                                  % Number of stair carpets
set of int: Stairs = 1..n_st;               % Identifier of stair carpets
array [Stairs] of int: st_len;              % Length of the stair carpets
array [Stairs] of int: st_wid;              % Width of the stair carpets
array [Stairs] of int: st_no_steps;         % Number of steps that each stair carpet covers
array [Stairs] of int: st_min_steps;        % Minimal number of steps in each part of a partition of stair carpet
array [Stairs] of int: st_max_breaks;       % Maximal number of cuts for each stair carpet
array [Stairs] of int: st_rec_id_offset =
    [ sum(j in Stairs where j < i)(st_no_steps[j]) | i in Stairs ];
array [Stairs] of set of int: st_rec_ids = 
    [(st_rec_id_offset[i] + 1)..(st_rec_id_offset[i] + st_no_steps[i])
    | i in Stairs ];


    % Rectangles of the stair carpets
    %
int: n_st_rec = sum(i in Stairs)(st_no_steps[i]);
set of int: StRecs = 1..n_st_rec;
array [StRecs] of int: st_rec_len = 
    [ st_len[i] div st_no_steps[i] | i in Stairs, j in st_rec_ids[i] ];
array [StRecs] of int: st_rec_wid = 
    [ st_wid[i] | i in Stairs, j in st_rec_ids[i] ];


    % Derived parameters for the carpet roll
    %
int: TotalArea = sum(i in RmRecs)( rm_rec_len[i] * rm_rec_wid[i] )
                + sum(i in Stairs)( st_len[i] * st_wid[i] );
int: MinRollLen = (TotalArea div roll_wid)
        + if TotalArea mod roll_wid > 0 then 1 else 0 endif;
int: TotalLen = sum(i in Rooms)(max(rm_max_len[i], rm_max_wid[i]))
                + sum(i in Stairs)(st_len[i]);
int: MaxRollLen = min(max_roll_len, TotalLen);

    % Domains for the origin of carpets
set of int: DomX = 0..MaxRollLen;
set of int: DomY = 0..roll_wid;

    % Derived parameters for rectangles of room carpets
int: MinRmRecSize = min(i in RmRecs)(min(rm_rec_len[i], rm_rec_wid[i]));
int: MaxRmRecSize = max(i in RmRecs)(max(rm_rec_len[i], rm_rec_wid[i]));

%------------------------------------------------------------------------------%
% Variables

    % Roll length
var MinRollLen..MaxRollLen: RollLen;

    % Room carpets
array [Rooms] of var DomX: rm_x;
array [Rooms] of var DomY: rm_y;
array [Rooms] of var Ori:  rm_vori;
array [Rooms] of var bool: rm_ori_0_or_180;
array [Rooms] of var bool: rm_ori_0_or_90;

    % Rectangles of the room carpets
array [RmRecs] of var DomX: rm_rec_x;
array [RmRecs] of var DomY: rm_rec_y;
array [RmRecs] of var MinRmRecSize..MaxRmRecSize: rm_rec_vlen =
    [ rm_rec_wid[i] + (rm_rec_len[i] - rm_rec_wid[i]) * bool2int(rm_ori_0_or_180[j])
    | i in RmRecs, j in Rooms where i in rm_rec_ids[j] ];
array [RmRecs] of var MinRmRecSize..MaxRmRecSize: rm_rec_vwid =
    [ rm_rec_len[i] + (rm_rec_wid[i] - rm_rec_len[i]) * bool2int(rm_ori_0_or_180[j])
    | i in RmRecs, j in Rooms where i in rm_rec_ids[j] ];

    % Rectangles of the stair carpets
array [StRecs] of var DomX: st_rec_x;
array [StRecs] of var DomY: st_rec_y;


%------------------------------------------------------------------------------%
% Constraints for room carpets

    % Carpet roll
constraint
    forall(i in Rooms)(
        rm_x[i] + rm_max_wid[i] + 
            (rm_max_len[i] - rm_max_wid[i]) * bool2int(rm_ori_0_or_180[i]) 
            <= RollLen
    /\  rm_y[i] + rm_max_len[i] + 
            (rm_max_wid[i] - rm_max_len[i]) * bool2int(rm_ori_0_or_180[i]) 
            <= roll_wid
    /\  forall(j in rm_rec_ids[i])(
            rm_rec_x[j] + rm_rec_vlen[j] <= RollLen
        /\  rm_rec_y[j] + rm_rec_vwid[j] <= roll_wid
        )
    );

    % Orientations
constraint
    forall(i in Rooms)(
        rm_vori[i] in rm_ori[i]
    /\  (rm_ori_0_or_90[i]  <-> (rm_vori[i] in {1, 2}))
    /\  (rm_ori_0_or_180[i] <-> (rm_vori[i] in {1, 3}))
    );

    % Origin offsets
constraint
    forall(i in Rooms, j in rm_rec_ids[i])(
        (rm_rec_x[j] = rm_x[i] + rm_rec_os_x[j, rm_vori[i]])
    /\  (rm_rec_y[j] = rm_y[i] + rm_rec_os_y[j, rm_vori[i]])
    );

%------------------------------------------------------------------------------%
% Constraints for stair carpets

    % Carpet roll
constraint
    forall(i in Stairs, j in st_rec_ids[i])(
        st_rec_x[j] + st_rec_len[j] <= RollLen
    /\  st_rec_y[j] + st_rec_wid[j] <= roll_wid
    );

    % Symmetry breaking constraints between steps of a stair carpet
constraint
    forall(i in Stairs, j1 in st_rec_ids[i] where (j1 + 1) in st_rec_ids[i])(
        let {
            int: j2 = j1 + 1
        } in (
            st_rec_y[j1] <= st_rec_y[j2]
        /\  (   st_rec_y[j1] >= st_rec_y[j2]
            ->  st_rec_x[j1] + st_rec_len[j1] <= st_rec_x[j2]
            )
        )
    );

    % Minimal steps and maximal breaks constraints
constraint
    forall(i in Stairs)(
        let {
            int: os = st_rec_id_offset[i],
            set of int: J = 1..st_no_steps[i],
            array [J] of var bool: last_part
        } in (
            % Memorising the last step in each part of the partition of the
            % stair carpet
            last_part[st_no_steps[i]] = true
        /\  forall(j in J where j != st_no_steps[i])(
                last_part[j] <-> (
                        st_rec_y[j + os] < st_rec_y[j + os + 1]
                    \/  st_rec_x[j + os] + st_rec_len[j] < st_rec_x[j + os + 1]
                )
            )
            % If one step is placed near to the right border of the carpet roll,
            % so that no space is left for another step then this step must be
            % the last one in a part.
        /\  forall(j in J)(
                (st_rec_x[j + os] + 2 * st_rec_len[j + os] > RollLen) -> last_part[j]
            )
            % Maximal breaks constraints
            %
        /\  sum(j in J)(bool2int(last_part[j])) <= st_max_breaks[i] + 1
            % Minimal steps constraints
            %
        /\  if st_min_steps[i] > 1 then
                forall(j in 1..(st_min_steps[i]-1))(
                    last_part[j] = false
                )
            /\  forall(j in J where j >= st_min_steps[i])(
                    forall(k in (j - st_min_steps[i] + 1)..(j - 1))(
                        last_part[j] -> not(last_part[k])
                    )
                )
            else
                true
            endif
        )
    );


%------------------------------------------------------------------------------%
% Cumulative constraints for each dimension

        % Roll length
constraint
    cumulative(
        rm_rec_x ++ st_rec_x,
        rm_rec_vlen ++ st_rec_len,
        rm_rec_vwid ++ st_rec_wid,
        roll_wid
    );

        % Roll width
constraint
    cumulative(
        rm_rec_y ++ st_rec_y,
        rm_rec_vwid ++ st_rec_wid,
        rm_rec_vlen ++ st_rec_len,
        RollLen
    );


%-------------------------------------------------------------------------------%
% Non-overlapping constraint

constraint
    diffn(
        rm_rec_x ++ st_rec_x,
        rm_rec_y ++ st_rec_y,
        rm_rec_vlen ++ st_rec_len,
        rm_rec_vwid ++ st_rec_wid
    );

%------------------------------------------------------------------------------%
% Solve item

solve
    :: search1
    minimize RollLen;


%------------------------------------------------------------------------------%
% Search annotations

ann: fix_ori_0_or_180 = 
    bool_search(rm_ori_0_or_180, input_order, indomain_max,  complete);

ann: fix_ori_0_or_90 = 
    bool_search(rm_ori_0_or_90, input_order, indomain_max,  complete);

ann: fix_yx = int_search(
        [ [rm_y[rm_sort[i]], rm_x[rm_sort[i]]][p] | i in Rooms, p in 1..2]
        ++ [ [st_rec_x[i], st_rec_y[i]][p] | i in StRecs, p in 1..2],
        input_order, indomain_min, complete );

ann: fix_rl = int_search([RollLen], input_order, indomain_min, complete);

ann: search1 = seq_search([
        fix_ori_0_or_180,
        fix_ori_0_or_90,
        fix_yx,
        fix_rl
    ]);

output [
    "RolLen    = ", show(RollLen), "\n",
    "rm_vori   = ", show(rm_vori), "\n",
    "rm_x      = ", show(rm_x), "\n",
    "rm_y      = ", show(rm_y), "\n",
    "rm_rec_x  = ", show(rm_rec_x), "\n",
    "rm_rec_y  = ", show(rm_rec_y), "\n",
    "st_rec_x  = ", show(st_rec_x), "\n",
    "st_rec_y  = ", show(st_rec_y), "\n",
    "objective = ", show(RollLen), "\n"
];
