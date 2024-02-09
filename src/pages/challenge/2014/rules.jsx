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
        <title>MiniZinc - Challenge 2014 Rules</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2014 -- Rules</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2014', '/challenge/2014'],
                'Rules',
              ]}
            />
            <p>
              These are the official rules for the MiniZinc Challenge 2014.
              Version 1.0. <br /> These rules were last updated on 8 July 2014.
            </p>
            <h3>Entrants</h3>
            <p>
              The MiniZinc Challenge 2014 will test solvers on problems written
              in MiniZinc 1.6.
              <br /> Let <i>name</i> be the name of the solver system in what
              follows.
            </p>
            <p>
              An entrant in the challenge is a constraint solver that is
              installed in a virtual machine (VM) provided by the organizers.
              The download link will be provided after registration. <br />{' '}
              Constraint solvers that have several variants, for example that
              can alternatively use copying or trailing, may submit one entry
              per variant although the organizers reserve the right to reject
              such variations if they not sufficiently interesting, (e.g.
              multiple copies of the same solver with differing parameters).
            </p>
            <p>
              Each entrant must provide a gzipped tarball containing the
              following:
            </p>
            <ol>
              <li>
                <p>
                  A text file named CLASSES specifying which competition
                  CLASS(es) the entry is to be entered in.
                </p>
              </li>
              <li>
                <p>
                  A text file named DESCRIPTION, that contains a short (1-2
                  pages) description of the system. This should include a list
                  of all authors of the system and their present institutional
                  affiliations. It should also describe any algorithms or data
                  structures that are not standardly used in such systems.
                  <br /> System descriptions will be posted on the{' '}
                  <Link href="/challenge/2014">
                    MiniZinc Challenge 2014 website
                  </Link>
                  .
                </p>
              </li>
              <li>
                <p>
                  The provided VM with the installed solver that can be run by
                  the provided scripts inside the VM, i.e.,
                </p>
                <ol>
                  <li>
                    <p>
                      fzn-exec - an executable file in the VM folder
                      /home/user/entry_data that invokes a FlatZinc solver
                      handling FlatZinc version 1.6. If your FlatZinc solver{' '}
                      <strong>only</strong> handles XML-FlatZinc version 1.6,
                      please contact the organizers.
                      <br /> This executable will be invoked from the command
                      line/scripts as follows:
                    </p>
                    <p style={{ 'margin-left': '2%', 'margin-top': '1em' }}>
                      <b>fzn-exec</b> [&lt;options&gt;] file.fzn
                    </p>
                    <p></p>
                    <p>
                      The argument <i>file.fzn</i> is the name of a FlatZinc 1.6
                      model instance to evaluate.
                      <br /> The executable should support the following command
                      line options:
                    </p>
                    <ol>
                      <li>
                        <i>-a</i>
                        <br />
                        <ul>
                          <li>
                            <b>Satisfaction problems</b>
                            <br /> This causes the solver to search for, and
                            output all solutions.
                            <br /> When this option is not given the solver
                            should search for, and output the first solution.{' '}
                          </li>
                          <li>
                            <b>Optimisation problems</b>
                            <br /> This causes the solver to search for the
                            first optimal solution, and output all found
                            intermediate solutions and the first optimal
                            solution.
                            <br /> When this option is not given the solver
                            should search for, and output the first optimal
                            solution.{' '}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <i>-f</i>
                        <br /> When invoked with this option the solver is free
                        to ignore any specified search strategy.{' '}
                      </li>
                      <li>
                        <i>-p &lt;n&gt;</i>
                        <br /> When invoked with this option the solver is free
                        to use multiple threads and/or cores during search. The
                        argument <i>n</i> specifies the number of cores that are
                        available.{' '}
                      </li>
                    </ol>
                    <p>Execution of solvers must not require root access.</p>
                  </li>
                  <li>
                    <p>
                      Any solver-specific definitions of the global constraints
                      in the MiniZinc library in the VM directory{' '}
                      <i>/home/user/entry_data/mzn-lib</i>.<br /> This directory
                      may also contain a file named <i>redefinitions.mzn</i>{' '}
                      that contains redefinitions of FlatZinc built-ins required
                      by the solver.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
            <p>
              The gzipped tar-ball must be made accessible for download for the
              organizer and the submitter must send an email to the organizer
              describing how to download the modified VM.
              <br />
            </p>
            <p>
              The organizers will make reasonable efforts to run each system,
              including communication with the submitters of the system in case
              of difficulties. Nevertheless, the organizers reserve the right to
              reject an entrant if its process proves overly difficult.
            </p>
            <p>
              The results will be announced at{' '}
              <Link href="http://cp2014.a4cp.org">CP2014</Link>. Entrants are
              encouraged to physically attend CP2014, but are not required to in
              order to participate or win.
            </p>
            <p>There will be four competition CLASSES:</p>
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
                class too, but they will be run in a single threaded mode.{' '}
              </li>
              <li>
                <dfn>Open class</dfn>: This class allows the usage of portfolio
                solvers. Solvers in this class are free to use multiple threads
                or cores to solve the problem. All entrants in the parallel
                search class will be automatically entered in this class too.{' '}
              </li>
            </ul>
            <p>
              The CLASSES file included in the entry must specify which
              competition CLASS(es) the entry is to be entered in.
            </p>
            <h3>Problem Format</h3>
            <p>
              The problem format will be{' '}
              <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                MiniZinc 1.6
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
                    indomain_min, complete) satisfy;{' '}
                  </code>
                </pre>{' '}
                is correct but not{' '}
                <pre>
                  <code>
                    {' '}
                    solve :: int_search([x,z], input_order, indomain_min,
                    complete) satisfy;{' '}
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
                    var 1..5: x; var 1..10: objective; constraint x &gt; 1 -&gt;
                    objective &gt; 7; constraint x = 1 -&gt; objective &lt; 3;
                    solve :: int_search([x, objective], first_fail,
                    indomain_min, complete) maximize objective;{' '}
                  </code>
                </pre>{' '}
                will first label <code>x = 1</code> and find maximum value{' '}
                <code>objective = 2</code> eventually on backtracking to the
                choice <code>x = 1</code>, then setting <code>x &gt;= 2</code>{' '}
                in most FD solvers will have domains for <code>x :: 2..5</code>{' '}
                and <code>objective :: 8..10</code> and this time{' '}
                <code>objective</code> will be selected as the next variable to
                label. A full specification of the available choices is given in
                the{' '}
                <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                  FlatZinc 1.6 specification
                </Link>
                .{' '}
              </li>
              <li>
                {' '}
                The objective variable must be called <b>objective</b> in
                optimisation problems, e.g. see previous example.{' '}
              </li>
            </ol>
            <h3>Output Requirements</h3>
            <p>
              Output from entries must conform to the{' '}
              <Link href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                FlatZinc 1.6 specification
              </Link>
              . For optimization problems, if the time limit is exceeded before
              the final solution is printed then the last complete approximate
              solution printed will be considered to be the solution for that
              entry. Note that is important that entries flush the output stream
              after printing each approximate solution.
            </p>
            <h3>Execution Environment</h3>
            <p>
              During the MiniZinc Challenge 2014 all VMs will run on machines
              with the following specification:
            </p>
            <ul>
              <li>Operating System: Ubuntu 14.04 LTS </li>
              <li>Processor(s): i7 3770 @ 3.40GHz (8 logical cores) </li>
              <li>Memory: 16 Gb </li>
              <li>VirtualBox 4.3.12 </li>
            </ul>
            <p>
              Except in the Parallel search and Open class, only a single core
              of one processor will be used for each entrant.
            </p>
            <h3>Benchmark Selection</h3>
            <p>
              The benchmarks for MiniZinc Challenge 2014 (as well as for the
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
              MiniZinc 1.6 models, making use of only the global constraints
              included in the MiniZinc 1.6 library, as well as some (preferably
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
                If <i>s</i> and <i>s&apos;</i> gives indistinguishable answers
                then scoring is based on execution time comparison (see below).{' '}
              </li>
              <li>
                {' '}
                If <i>s</i> gives a worse answer than <i>s&apos;</i> it scores 0
                point.{' '}
              </li>
            </ul>{' '}
            In the case on indistinguishable answers between <i>s</i> and{' '}
            <i>s&apos;</i>, <i>s</i> scores{' '}
            <i> timeUsed(p,s&apos;) / (timeUsed(p,s&apos;) + timeUsed(p,s)) </i>
            , 0.5 if both finished in 0s. The exception is that if{' '}
            <i>solved(p,s)</i> is false, that is, <i>s</i> fails to find any
            solution or prove unsatisfiability for problem <i>p</i> it always
            scores 0 points (even if <i>s&apos;</i> also similarly fails).{' '}
            <h4>SATISFACTION PROBLEM</h4> A solver <i>s</i> answer is{' '}
            <b>better</b> than solver <i>s&apos;</i> answer on satisfaction
            problem <i>p</i> iff{' '}
            <ul>
              <li>
                <i> solved(p,s) &amp;&amp; not solved(p,s&apos;) </i>
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
            </ul>
            <h4>CLASSES</h4>
            <p>
              The scoring calculations will be done once for each class: FD
              search, Free search, Parallel search, and Open class.
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
              prizes for the four solvers with the highest scores in each of the
              classes: FD search, Free search, Parallel search, and Open class.
              The organizers may also award prizes to the best solvers on a
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
              <Link href="/challenge/2014">MiniZinc Challenge 2014</Link> home
              page.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
