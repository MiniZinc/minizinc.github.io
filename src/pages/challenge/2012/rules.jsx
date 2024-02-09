import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2012 Rules</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2012 -- Rules</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2012', '/challenge/2012'],
                'Rules',
              ]}
            />
            <p>
              These are the official rules for the MiniZinc Challenge 2012.
              Version 1.0. <br /> These rules were last updated on 9 February
              2012.
            </p>
            <h3>Entrants</h3>
            <p>
              The MiniZinc Challenge 2012 will test solvers on problems written
              in MiniZinc 1.5.
              <br /> Let <i>name</i> be the name of the solver system in what
              follows.
            </p>
            <p>
              An entrant in the challenge is a constraint solver submitted in
              either source code or binary format.
              <br /> Constraint solvers that have several variants, for example
              that can alternatively use copying or trailing, may submit one
              entry per variant although the organizers reserve the right to
              reject such variations if they not sufficiently interesting, (e.g.
              multiple copies of the same solver with differing parameters).
            </p>
            <p>
              Binary format submissions must be compatible with the competition{' '}
              <Link href="/challenge/2012/rules#execenv">
                hardware and operating system
              </Link>
              .<br />
            </p>
            <p>
              Each entrant must provide a gzipped tarball containing the
              following:
            </p>
            <ol>
              <li>
                <p>
                  a README file explaining how to (compile and) install the
                  solver.
                </p>
              </li>
              <li>
                <p>
                  a text file named DESCRIPTION, that contains a short (1-2
                  pages) description of the system. This should include a list
                  of all authors of the system and their present institutional
                  affiliations. It should also describe any algorithms or data
                  structures that are not standardly used in such systems.
                  <br /> System descriptions will be posted on the{' '}
                  <Link href="/challenge/2012">
                    MiniZinc Challenge 2012 website
                  </Link>
                  .
                </p>
              </li>
              <li>
                <p>
                  fzn_<i>name</i> -- an executable file that invokes a FlatZinc
                  solver handling FlatZinc version 1.5 or XML-FlatZinc version
                  1.5
                  <br /> This executable will be invoked from the command line
                  as follows:
                </p>
                <p style={{ 'margin-left': '2%', 'margin-top': '1em' }}>
                  <b>
                    fzn_<i>name</i>
                  </b>{' '}
                  [&lt;options&gt;] file.fzn
                </p>
                <p></p>
                <p>
                  The argument <i>file.fzn</i> is the name of a FlatZinc 1.5
                  model instance to evaluate.
                  <br /> The executable must support the following command line
                  options:
                </p>
                <ol>
                  <li>
                    <i>-a</i>
                    <br /> This causes the solver to search for, and output all
                    solutions.
                    <br /> When this option is not given the solver should
                    search for, and output the first solution.
                    <br /> This option will be used only for checking
                    conformance to search annotations.
                    <br /> All competition instances will only look for the
                    first or first optimal solution.{' '}
                  </li>
                  <li>
                    <i>-f</i>
                    <br /> When invoked with this option the solver is free to
                    ignore any specified search strategy.{' '}
                  </li>
                  <li>
                    <i>-p &lt;n&gt;</i>
                    <br /> When invoked with this option the solver is free to
                    use multiple threads and/or cores during search. The
                    argument <i>n</i> specifies the number of cores that are
                    available.{' '}
                  </li>
                </ol>
              </li>
              <li>
                <p>
                  a directory named <i>globals</i> containing any
                  solver-specific definitions of the global constraints in the
                  MiniZinc library.
                  <br /> This directory may also contain a file named{' '}
                  <i>redefinitions.mzn</i> that contains redefinitions of
                  FlatZinc built-ins required by the solver.
                </p>
              </li>
              <li>
                {' '}
                any other shell scripts, executables, Java archives etc required
                by the solver. You may assume that the directory containing
                these files will be in the PATH.{' '}
              </li>
            </ol>
            <p>
              Installation and execution of solvers must not require root
              access.
              <br /> Binaries should be statically linked.
            </p>
            <p>
              The organizers will make reasonable efforts to install each
              system, including communication with the submitters of the system
              in case of difficulties. Nevertheless, the organizers reserve the
              right to reject an entrant if its compilation or installation
              process proves overly difficult.
            </p>
            <p>
              The results will be announced at CP2012. Entrants are encouraged
              to physically attend CP2012, but are not required to in order to
              participate or win.
            </p>
            <p>There will be three competition CLASSES:</p>
            <ul>
              <li>
                <dfn>FD search</dfn>: solvers in this class must follow the
                search strategy defined in the problem, they will be
                disqualified if there is evidence that they do not follow the
                search strategy.{' '}
              </li>
              <li>
                <dfn>Free search</dfn>: solvers in this class are free to ignore
                the search strategy. All FD search solvers will be automatically
                entered in this class too.{' '}
              </li>
              <li>
                <dfn>Parallel search</dfn>: solvers in this class are free to
                use multiple threads or cores to solve the problem. All entrants
                in the free search class will be automatically entered in this
                class too.{' '}
              </li>
            </ul>
            <p>
              The README file included in the entry must specify which
              competition CLASS(es) the entry is to be entered in.
            </p>
            <h3>Problem Format</h3>
            <p>
              The problem format will be{' '}
              <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                MiniZinc 1.5
              </Link>
              .<br /> There will be some restrictions on the problems tested in
              MiniZinc challenge.
            </p>
            <ol>
              <li>
                No floats may be involved in any model. This is to avoid
                accuracy differences and simplify entry requirements.{' '}
              </li>
              <li>
                No variable sets of integers may be used in any model. This is
                to simplify entry requirements. Not even implicit var sets of
                int, e.g. this is forbidden:{' '}
                <pre>
                  <code>
                    {' '}
                    array[1..3] of set of 1..3: a = [&#123;1,2&#125;,
                    &#123;3&#125;, &#123;1,3&#125;]; var 1..3: i; constraint
                    card(a[i]) &gt; 1;{' '}
                  </code>
                </pre>
              </li>
              <li>
                Each solve item must be annotated with a search strategy, such
                that fixing all the variables appearing in the search strategy
                would allow a value propagation solver to check a solution. e.g.{' '}
                <pre>
                  <code>
                    {' '}
                    var 1..5: x; var 1..5: y; var 1..5: z; constraint x &lt;= y
                    /\ y &lt;= z; solve :: int_search([x, y, z], input_order,
                    indomain, complete) satisfy;{' '}
                  </code>
                </pre>{' '}
                is correct but not{' '}
                <pre>
                  <code>
                    {' '}
                    solve :: int_search([x,z], input_order, indomain, complete)
                    satisfy;{' '}
                  </code>
                </pre>{' '}
                even though most FD solvers would know the second was
                satisfiable.{' '}
              </li>
              <li>
                {' '}
                Search annotations will be restricted to <b>
                  bool_search
                </b>, <b>int_search</b> and <b>seq_search</b>.<br /> For{' '}
                <b>bool_search</b> and <b>int_search</b> only the following
                parameters (where applicable) will be used:{' '}
                <ul>
                  <li>
                    variable choice:{' '}
                    <ul>
                      <li>input_order </li>
                      <li>first_fail (variable with smallest domain size) </li>
                      <li>
                        anti_first_fail (variable with largest domain size){' '}
                      </li>
                      <li>smallest (variable with smallest minimal value) </li>
                      <li>largest (variable with largest maximum value) </li>
                    </ul>
                  </li>
                  <li>
                    value choice: [examples for domain &#123;1,3,4,18&#125;]{' '}
                    <ul>
                      <li>indomain_min (x &lt;= 1; x &gt; 1) </li>
                      <li>indomain_max (x &gt;= 18; x &lt; 18) </li>
                      <li>indomain_median (x = 3 ; x != 3) </li>
                      <li>
                        indomain_split (x &lt;= (1+18)/2 ; x &gt; (1+18)/2 ){' '}
                      </li>
                      <li>
                        indomain_reverse_split (x &gt; (1+18)/2 ; x &lt;=
                        (1+18)/2 ){' '}
                      </li>
                    </ul>
                  </li>
                  <li>
                    search style{' '}
                    <ul>
                      <li> complete </li>
                    </ul>
                  </li>
                </ul>{' '}
                Note that for variable choices ties are broken by taking the
                earliest variable in the given array. Also note that the
                decision is reassessed at each choice.{' '}
                <pre>
                  <code>
                    {' '}
                    var 1..5: x; var 1..10: y; constraint x &gt; 1 -&gt; y &gt;
                    7; constraint x = 1 -&gt; y &lt; 3; solve :: int_search([x,
                    y], first_fail, indomain_min, complete) maximize y;{' '}
                  </code>
                </pre>{' '}
                will first label <code>x = 1</code> and find maximum value{' '}
                <code>y = 2</code> eventually on backtracking to the choice{' '}
                <code>x = 1</code>, then setting <code>x &gt;= 2</code> in most
                FD solvers will have domains for <code>x :: 2..5</code> and{' '}
                <code>y :: 8..10</code> and this time <code>y</code> will be
                selected as the next variable to label. A full specification of
                the available choices is given in the{' '}
                <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                  FlatZinc 1.5 specification
                </Link>
                .{' '}
              </li>
            </ol>
            <h3>Output Requirements</h3>
            <p>
              Output from entries must conform to the{' '}
              <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                FlatZinc 1.5 specification
              </Link>
              . For optimization problems, if the time limit is exceeded before
              the final solution is printed then the last complete approximate
              solution printed will be considered to be the solution for that
              entry. Note that is important that entries flush the output stream
              after printing each approximate solution.
            </p>
            <h3 id="execenv">Execution Environment</h3>
            <p>
              During the MiniZinc Challenge 2012 all programs will run on
              machines with the following specification:
            </p>
            <ul>
              <li>Operating System: Ubuntu 10.10 </li>
              <li>Processor(s): i7 860 Quad Core 2.80GHz </li>
              <li>Memory: 4 Gb </li>
              <li>C compilers: gcc 4.4 </li>
              <li>Java: Java 1.6 </li>
              <li>Shells: bash 4.1, tcsh 6.17, zsh 4.3, </li>
            </ul>
            <p>
              If your system requires other compilers or tools please contact us
              and we will try to make them available.
            </p>
            <p>
              The above machines support both 32- and 64-bit environments.
              Binaries may be compiled for either.
            </p>
            <p>
              Except in the Parallel search class, only a single core of one
              processor will be used for each entrant.
            </p>
            <h3>Benchmark Selection</h3>
            <p>
              The benchmarks for MiniZinc Challenge 2012 (as well as for the
              qualification rounds) will be selected by the judges to try to
              examine some of the breadth of characteristics of FD solvers:
            </p>
            <ul>
              <li> propagation speed </li>
              <li> search speed </li>
              <li> global constraints </li>
              <li> satisfaction </li>
              <li> optimization </li>
            </ul>
            <p>
              To obtain benchmarks of suitable difficulty we will select only
              such instances that can be solved by at least one of the
              participating solvers in a sensible time-frame. For the
              qualification rounds no such restriction applies.
            </p>
            <p>
              In order to collect good benchmarks each entrant is{' '}
              <font color="red">strongly encouraged</font> to submit one or two
              MiniZinc 1.5 models, making use of only the global constraints
              included in the MiniZinc 1.5 library, as well as some (preferably
              20) instance files for each model. The instances should range from
              easy (about a minute) to hard (about 15 minutes) if possible.
              <br /> Note that the model must conform to the problem format
              restrictions above.
            </p>
            <p>Submitted benchmarks must be placed in the public domain.</p>
            <h3>Initial Submission Round</h3>
            <p>
              There will be an initial submission round, which will provide the
              organizers with an opportunity to provide feedback on
              entries&apos; compatibility with the competition hardware,
              compliance with the FlatZinc specification and any other matters
              that may arise. Submission in the initial round is not required in
              order to qualify for the final round, but it is{' '}
              <strong>strongly</strong> encouraged.
            </p>
            <h3>The Challenge</h3>
            <p>
              The challenge will require solvers to process 100 MiniZinc models
              with a run-time limit of 15 minutes (process time) per problem.
              <br /> The MiniZinc to FlatZinc conversion time will not be
              included in this, but the organizers reserve the right to penalize
              entries that use massively complicated globals definitions in
              order to reduce solving time. The conversion time from FlatZinc to
              XML-FlatZinc will also not be included.
            </p>
            <h3>Assessment</h3>
            <p>
              Each solver <i>s</i> is run on problem <i>p</i> and the following
              information is collected.
            </p>
            <ul>
              <li>
                <i>timeUsed(p,s)</i> - the <i>wall clock</i> time used by the
                solver, or <i>timeLimit(p)</i> if it was still running at the
                timeLimit (quantized to seconds).{' '}
              </li>
              <li>
                <i>solved(p,s)</i> - true if a correct solution is returned, or
                correct unsatisfiability is detected{' '}
              </li>
              <li>
                <i>quality(p,s)</i> - the objective value of the best solution
                found by the solver (that is the last solution fully output
                before the time limit) assuming maximization{' '}
              </li>
              <li>
                <i>optimal(p,s)</i> - whether the objective value is proved
                optimal by the solver.{' '}
              </li>
            </ul>
            <h4>Scoring Procedure</h4> The scoring procedure is based on the{' '}
            <Link href="http://en.wikipedia.org/wiki/Borda_count">
              Borda count
            </Link>{' '}
            voting system. Each benchmark instance is treated like a voter who
            ranks the solvers. Each solver scores points equal to the number of
            solvers that they beat in the ranking (more or less). A solver{' '}
            <i>s</i> scores points on problem <i>p</i> by comparing its
            performance with each other solver <i>s&apos;</i> on problem{' '}
            <i>p</i>.{' '}
            <ul>
              <li>
                {' '}
                If <i>s</i> gives a better answer than <i>s&apos;</i> it scores
                1 point.{' '}
              </li>
              <li>
                {' '}
                If <i>s</i> gives an indistinguishable answer from{' '}
                <i>s&apos;</i> then it scores 0.5 points.{' '}
              </li>
              <li>
                {' '}
                If <i>s</i> gives a worse answer than <i>s&apos;</i> it scores 0
                point.{' '}
              </li>
            </ul>{' '}
            The exception is that if <i>solved(p,s)</i> is false, that is,{' '}
            <i>s</i> fails to find any solution or prove unsatisfiability for
            problem <i>p</i> it always scores 0 points (even if <i>s&apos;</i>{' '}
            also similarly fails). <h4>SATISFACTION PROBLEM</h4> A solver{' '}
            <i>s</i> is <b>better</b> than solver <i>s&apos;</i> on satisfaction
            problem <i>p</i> iff{' '}
            <ul>
              <li>
                <i> solved(p,s) &amp;&amp; not solved(p,s&apos;) </i>, or{' '}
              </li>
              <li>
                <i>
                  {' '}
                  solved(p,s) &amp;&amp; timeUsed(p,s) &lt; timeUsed(p,s&apos;)
                </i>
              </li>
            </ul>{' '}
            A solver <i>s</i> is <b>indistinguishable</b> from solver{' '}
            <i>s&apos;</i> on satisfaction problem <i>p</i> iff{' '}
            <ul>
              <li>
                <i>
                  {' '}
                  solved(p,s) &amp;&amp; solved(p,s&apos;) &amp;&amp;
                  timeUsed(p,s) == timeUsed(p,s&apos;)
                </i>
              </li>
            </ul>
            <h4>OPTIMIZATION PROBLEM</h4> A solver <i>s</i> is <b>better</b>{' '}
            than solver <i>s&apos;</i> on optimization problem <i>p</i> iff{' '}
            <ul>
              <li>
                <i> solved(p,s) &amp;&amp; not solved(p,s&apos;)</i>, or{' '}
              </li>
              <li>
                <i> optimal(p,s) &amp;&amp; not optimal(p,s&apos;)</i>, or{' '}
              </li>
              <li>
                <i> quality(p,s) &gt; quality(p,s&apos;)</i>, or{' '}
              </li>
              <li>
                <i>
                  {' '}
                  optimal(p,s) &amp;&amp; optimal(p,s&apos;) &amp;&amp;
                  timeUsed(p,s) &lt; timeUsed(p,s){' '}
                </i>
              </li>
            </ul>{' '}
            A solver <i>s</i> is <b>indistinguishable</b> from solver{' '}
            <i>s&apos;</i> on optimization problem <i>p</i> iff{' '}
            <ul>
              <li>
                <i>
                  {' '}
                  solved(p,s) &amp;&amp; solved(p,s&apos;) &amp;&amp; not
                  optimal(p,s) &amp;&amp; not optimal(p,s&apos;) &amp;&amp;
                  quality(p,s) == quality(p,s&apos;)
                </i>
              </li>
              <li>
                <i>
                  {' '}
                  optimal(p,s) &amp;&amp; optimal(p,s&apos;) &amp;&amp;
                  timeUsed(p,s) == timeUsed(p,s&apos;){' '}
                </i>
              </li>
            </ul>
            <h4>CLASSES</h4>
            <p>
              The scoring calculations will be done once for each class: FD
              search, Free search, and Parallel search.
            </p>
            <p>
              The organizers may well run entrants in the FD search class on a
              series of smaller problems to test that they indeed are following
              the given search strategy. These problems will not accrue points,
              but may disqualify an entry from the FD search class.
            </p>
            <h3>Prizes</h3>
            <p>
              The solvers will be ranked on total points awarded. There will be
              prizes for the three solvers with the highest scores in each of
              the classes: FD search, Free search, and Parallel search. The
              organizers may also award prizes to the best solvers on a
              particular category of problems.
            </p>
            <h3>Restrictions</h3>
            <p>
              The organizers reserve the right to enter their own systems--or
              other systems of interest--to the competition, but these will not
              be eligible for prizes, but still will modify the scoring results.
            </p>
            <hr />
            <p>
              Return to the{' '}
              <Link href="/challenge/2012">MiniZinc Challenge 2012</Link> home
              page.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
