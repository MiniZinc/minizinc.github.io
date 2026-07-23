% Author: Vít Kološ

% Modifications by MiniZinc Challenge Organizers:
% - Changed type of PrefNum to int instead of float
% - Added search annotation

set of int: Parts;
set of int: Segments;
set of int: Fixtures;
set of int: Rules;

type Num = int;
type PrefNum = int;

type PartProps = record(
    Parts: number,
    bool: is_top,
    Num: width,
    int: group_number,
    Num: group_offset,
    bool: edge_left,
    bool: edge_right,
    set of Segments: segments,
);
type SegmentProps = record(
    Segments: number,
    PartProps: part,
    bool: is_first,
    bool: is_last,
    Segments: previous,
);
type FixtureProps = record(
    Fixtures: number,
    Num: width_min,
    Num: width_max,
    bool: is_top,
    bool: has_worktop,
    bool: is_tall,
    bool: allow_edge_left,
    bool: allow_edge_right,
    int: complementary_fixture,
    int: older_sibling,
);
type RuleProps = record(
    bool: is_include,
    set of Fixtures: fixtures,
    int: group,
    Num: section_offset,
    Num: section_width,
);
type Constants = record(
    Num: min_fixture_width,
    int: max_fixture_width,
    int: max_canvas_size,
);
type Preferences = record(
    PrefNum: width_bonus,
    PrefNum: fixture_penalty,
    PrefNum: worktop_discontinuity_penalty,
    PrefNum: tall_discontinuity_penalty,
    PrefNum: vertical_discontinuity_penalty,
    bool: vertical_discontinuity_alternative,
    PrefNum: width_not_same_penalty,
    bool: width_not_same_alternative,
    bool: width_not_same_only_top,
);

array[Parts] of PartProps: parts;
array[Segments] of SegmentProps: segments;
array[Fixtures] of FixtureProps: fixtures;
array[Rules] of RuleProps: rules;
Constants: constants;
Preferences: preferences;

array[Segments,Fixtures] of var bool: pairs;
array[Segments] of var 0..constants.max_fixture_width: widths;
array[Parts] of var 0..constants.max_canvas_size: paddings;

% BASIC RULES

constraint forall (s in Segments) (
    sum (f in Fixtures) (pairs[s,f]) <= 1
);

constraint forall (f in Fixtures) (
    sum (s in Segments) (pairs[s,f]) <= 1
);

predicate present(Fixtures: fixture) =
    exists (s in Segments) (pairs[s,fixture]);

predicate used(Segments: segment) =
    exists (f in Fixtures) (pairs[segment,f]);

% empty segments need to be followed by other empty segments
constraint forall (s in Segments) (
    segments[s].is_first \/ (used(s) -> used(segments[s].previous))
);

% no empty nonzero segments, no zero nonempty segments
constraint forall (s in Segments) (
    ((widths[s] > 0) -> used(s)) /\ (used(s) -> (widths[s] >= constants.min_fixture_width))
);

% WIDTH RULES

% width and position constraint for individual fixtures
constraint forall (s in Segments) (
    forall (f in Fixtures) (
        pairs[s,f] -> (widths[s] >= fixtures[f].width_min
            /\ widths[s] <= fixtures[f].width_max
            /\ fixtures[f].is_top == segments[s].part.is_top)
    )
);

% width constraint for kitchen part
constraint forall (p in Parts) (
    (paddings[p] + sum (s in parts[p].segments) (widths[s])) <= parts[p].width
);

% MULTIPLE SAME FIXTURES RULE
function var int: segmentNumber(Fixtures: fixture) =
    sum (s in Segments) (pairs[s,fixture] * segments[s].number);

constraint forall (f in Fixtures) (
    fixtures[f].older_sibling = 0 \/ segmentNumber(fixtures[f].older_sibling) <= segmentNumber(f)
);

% TALL FIXTURES
function var Num: offsetSegment(Segments: segment) =
    segments[segment].part.group_offset + paddings[segments[segment].part.number]
    + sum (s in segments[segment].part.segments[1]..segment-1) (widths[s]);

function var Num: offsetFixture(Fixtures: fixture) =
    sum (s in Segments) (pairs[s,fixture] * offsetSegment(s));

function var int: group(Fixtures: fixture) =
    sum (s in Segments) (pairs[s,fixture] * segments[s].part.group_number);

function var int: width(Fixtures: fixture) =
    sum (s in Segments) (pairs[s,fixture] * widths[s]);

constraint forall (f in Fixtures) (
    fixtures[f].complementary_fixture = 0 \/ (
        % inequality works better than equal signs
        group(f) <= group(fixtures[f].complementary_fixture)
        /\ offsetFixture(f) <= offsetFixture(fixtures[f].complementary_fixture)
        /\ width(f) <= width(fixtures[f].complementary_fixture)
    )
);

% PLACEMENT RULES
constraint forall (rule in Rules) (
    % include/kitchen
    if rules[rule].is_include /\ rules[rule].group < 0 then
        exists (f in rules[rule].fixtures) (exists (s in Segments) (pairs[s,f]))
    % include/group
    elseif rules[rule].is_include /\ rules[rule].section_width < 0 then
        exists (f in rules[rule].fixtures) (exists (s in Segments where segments[s].part.group_number = rules[rule].group) (pairs[s,f]))
    % include/group_section
    elseif rules[rule].is_include then
        exists (f in rules[rule].fixtures) (exists (s in Segments where segments[s].part.group_number = rules[rule].group)
            (pairs[s,f] /\ offsetSegment(s) >= rules[rule].section_offset
                /\ offsetSegment(s) + widths[s] <= rules[rule].section_offset + rules[rule].section_width))
    % exclude/group
    elseif rules[rule].section_width < 0 then
        forall (f in rules[rule].fixtures) (forall (s in Segments where segments[s].part.group_number = rules[rule].group) (not pairs[s,f]))
    % exclude/group_section
    else
        forall (f in rules[rule].fixtures) (forall (s in Segments where segments[s].part.group_number = rules[rule].group)
            (not pairs[s,f] \/ offsetSegment(s) + widths[s] <= rules[rule].section_offset
                \/ rules[rule].section_offset + rules[rule].section_width <= offsetSegment(s)))
    endif
);

% EDGES
constraint forall (s in Segments) (
    forall (f in Fixtures) (
        ((segments[s].is_first /\ segments[s].part.edge_left /\ not fixtures[f].allow_edge_left) -> not pairs[s,f])
        /\ ((segments[s].is_last /\ segments[s].part.edge_right /\ not fixtures[f].allow_edge_right) -> not pairs[s,f])
    )
);

constraint forall (s in Segments) (
    forall (f in Fixtures) (
        if not segments[s].is_first /\ segments[s].part.edge_right /\ not fixtures[f].allow_edge_right then
            pairs[segments[s].previous,f] -> used(s)
        endif
    )
);

% WORKTOP DISCONTINUITY
predicate hasWorktop(Segments: segment) =
    exists (f in Fixtures) (pairs[segment,f] /\ fixtures[f].has_worktop);

predicate worktopDiscontinuity(Segments: segment) =
    not segments[segment].is_first /\ not segments[segment].part.is_top /\ used(segment) /\ hasWorktop(segment) != hasWorktop(segments[segment].previous);

% TALL DISCONTINUITY
predicate isTall(Segments: segment) =
    exists (f in Fixtures) (pairs[segment,f] /\ fixtures[f].is_tall);

predicate tallDiscontinuity(Segments: segment) =
    not segments[segment].is_first /\ not segments[segment].part.is_top /\ used(segment) /\ isTall(segment) != isTall(segments[segment].previous);

% VERTICAL DISCONTINUITY
predicate verticalDiscontinuitySegment(Segments: segment1, Segments: segment2) =
    segments[segment1].part.is_top != segments[segment2].part.is_top /\ segments[segment1].part.group_number == segments[segment2].part.group_number
    /\ used(segment1) /\ offsetSegment(segment1) > offsetSegment(segment2) /\ offsetSegment(segment1) < offsetSegment(segment2) + widths[segment2];

function var Num: partEndingOffset(Parts: part) =
    parts[part].group_offset + paddings[part] + sum (s in parts[part].segments) (widths[s]);

predicate verticalDiscontinuityPart(Parts: part1, Segments: segment2) =
    parts[part1].is_top != segments[segment2].part.is_top /\ parts[part1].group_number == segments[segment2].part.group_number
    /\ partEndingOffset(part1) > offsetSegment(segment2) /\ partEndingOffset(part1) < offsetSegment(segment2) + widths[segment2];

% WIDTH NOT SAME
predicate widthNotSame(Segments: segment) =
    not segments[segment].is_first /\ (not preferences.width_not_same_only_top \/ segments[segment].part.is_top)
    /\ used(segment) /\ widths[segment] != widths[segments[segment].previous];

% OBJECTIVE
var int: objective = (
    ((sum (s in Segments) (sum (f in Fixtures) (pairs[s,f]))) * -5 * preferences.fixture_penalty)
    + ((sum (s in Segments) (widths[s])) * 1 * preferences.width_bonus)
    + ((sum (s in Segments) (worktopDiscontinuity(s))) * -5 * preferences.worktop_discontinuity_penalty)
    + ((sum (s in Segments) (tallDiscontinuity(s))) * -5 * preferences.tall_discontinuity_penalty)
    + ((sum (s1 in Segments) (sum (s2 in Segments) (verticalDiscontinuitySegment(s1, s2)))) * -4 * preferences.vertical_discontinuity_penalty)
    + ((sum (p1 in Parts) (sum (s2 in Segments) (verticalDiscontinuityPart(p1, s2)))) * -4 * preferences.vertical_discontinuity_penalty)
    + ((sum (s in Segments) (widthNotSame(s))) * -2 * preferences.width_not_same_penalty)
);

solve :: seq_search([
  bool_search(pairs, input_order, indomain_min),
  int_search(widths, smallest, indomain_min),
  int_search(paddings, smallest, indomain_min)
]) maximize objective;
