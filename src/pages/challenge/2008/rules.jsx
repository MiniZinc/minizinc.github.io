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
        <title>MiniZinc - Challenge 2008 Rules</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2008 -- Rules</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2008', '/challenge/2008'],
                'Rules',
              ]}
            />
            <p>
              These are the official rules for the MiniZinc Challenge 2008.
              Version 1.2 <br /> These rules were last updated on 16 June 2008.
            </p>
            <h3>Entrants</h3>
            <p>
              The MiniZinc Challenge 2008 will test solvers on problems written
              in MiniZinc 0.8.
              <br /> Let <i>name</i> be the name of the solver system in what
              follows.
            </p>
            <p>
              An entrant in the challenge is a constraint solver submitted in
              either source code or binary format.
            </p>
            <p>
              Binary format submissions must be compatible with the competition{' '}
              <Link href="/challenge/2008/rules#execenv">
                hardware and operating system
              </Link>
              .<br /> Entries implemented in Java should provide a Java archive,
              i.e. a .jar file, plus a shell script that invokes the solver.
              Non-Java entries may also be invoked via a shell script.
            </p>
            <p>
              Each entrant must provide a gzipped tarball containing the
              following:
            </p>
            <ol>
              <li>
                {' '}
                a README file explaining how to (compile and) install the
                solver.{' '}
              </li>
              <li>
                {' '}
                a text file named DESCRIPTION, that contains a short (1-2 pages)
                description of the system. This should include a list of all
                authors of the system and their present institutional
                affiliations. It should also describe any algorithms or data
                structures that are not standardly used in such systems. System
                descriptions will be posted on the MiniZinc Challenge 2008
                website.{' '}
              </li>
              <li>
                <i>name</i> -- a FlatZinc solver executable handling FlatZinc
                version 0.8 and other built-in predicates specific to the
                solver.{' '}
              </li>
              <li>
                <i>name</i>.mzn -- a definition of the globals in{' '}
                <i>globals.mzn</i> specialised for the solver <i>name</i>, e.g.
                by re-defining existing predicates as builtin-ins. Entries
                should not add new global constraints or delete existing ones.{' '}
                <br /> The <i>name</i>.mzn file may just be the{' '}
                <i>globals.mzn</i> available from the competition website.{' '}
              </li>
              <li>
                {' '}
                any other shell scripts, executables, Java archives etc required
                by the solver.{' '}
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
              The results will be announced at CP2008. Entrants are encouraged
              to physically attend CP2008, but are not required to in order to
              participate or win.
            </p>
            <p>There will be two competition CLASSES:</p>
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
            </ul>
            <p>
              The README file included in the entry must specify which
              competition CLASS(es) the entry is to be entered in.
            </p>
            <h3>Problem Format</h3>
            <p>
              The problem format will be MiniZinc 0.8.
              <br /> There will be some restrictions on the problems tested in
              this first instance of the MiniZinc Challenge.
            </p>
            <ol>
              <li>
                No floats may be involved in any model. This is to avoid
                accuracy differences and simplify entry requirements.{' '}
              </li>
              <li>
                No variable sets of integers may be used in any model. This is
                to simplify entry requirements. Not even implicit var sets of
                int, e.g.{' '}
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
                    var 1..5:x; var 1..5:y; var 1..5:z; constraint x &lt;= y /\
                    y &lt;= z; solve :: int_search([x,y,z],
                    &#34;input_order&#34;, &#34;indomain&#34;,
                    &#34;complete&#34;) satisfy;{' '}
                  </code>
                </pre>{' '}
                is correct but not{' '}
                <pre>
                  <code>
                    {' '}
                    solve :: int_search([x,z], &#34;input_order&#34;,
                    &#34;indomain&#34;, &#34;complete&#34;) satisfy;{' '}
                  </code>
                </pre>{' '}
                even though most FD solvers would know the second was
                satisfiable.{' '}
              </li>
              <li>
                {' '}
                Search annotations will only use a restricted class of things,
                to simplify entry requirements.{' '}
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
                      <li>largest (variable with largest maximum element) </li>
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
                decision is reassessed at each choice{' '}
                <pre>
                  <code>
                    {' '}
                    var 1..5: x; var 1..10: y; constraint x &gt; 1 -&gt; y &gt;
                    7; constraint x = 1 -&gt; y &lt; 3; solve ::
                    int_search([x,y],&#34;first_fail&#34;,&#34;indomain_min&#34;,&#34;complete&#34;)
                    maximize y;{' '}
                  </code>
                </pre>{' '}
                will first label <code>x = 1</code> and find maximum value{' '}
                <code>y = 2</code> eventually on backtracking to the choice{' '}
                <code>x = 1</code>, then setting <code>x &gt;= 2</code> in most
                FD solvers will have domains for <code>x :: 2..5</code> and{' '}
                <code>y :: 8..10</code> and this time <code>y</code> will be
                selected as the next variable to label. A full specification of
                the available choices is given in the{' '}
                <a href="https://web.archive.org/web/20240113123535/https://www.minizinc.org/specifications.html">
                  FlatZinc 0.8 specification
                </a>
                .{' '}
              </li>
              <li>
                Each model will have an output item, which constructs a MiniZinc
                data file for the original model, giving at least the variables
                appearing in the search annotation.{' '}
                <pre>
                  <code>
                    {' '}
                    var 1..5: x; var 1..5: y; constraint x &lt; y; solve ::
                    int_search([x,y],&#34;input_order&#34;,&#34;indomain&#34;,&#34;complete&#34;)
                    satisfy; output [&#34;x = &#34;,show(x),&#34;\ny =
                    &#34;,show(y),&#34;\n&#34;];{' '}
                  </code>
                </pre>{' '}
                For optimization problems the output will also show the
                objective function of the solution.{' '}
                <pre>
                  <code>
                    {' '}
                    var -5..5: z = x - y; solve ::
                    int_search([x,y],&#34;input_order&#34;,&#34;indomain&#34;,&#34;complete&#34;)
                    maximize z; output [&#34;%% OBJ = &#34;,show(z),&#34;\nx =
                    &#34;,show(x),&#34;\ny = &#34;,show(y),&#34;\n&#34;];{' '}
                  </code>
                </pre>
              </li>
            </ol>
            <h3>Output Requirements</h3>
            <p>The FlatZinc 0.8 executable should output as follows:</p>
            <p>
              For satisfaction the first solution found should be output using
              the output item. Note that in the FD search class, the first
              solution found is important for judging correctness of the search.
              If the problem is proved unsatisfiable then a single line
            </p>
            <pre>
              <samp> No solution found. </samp>
            </pre>
            <p>should be output.</p>
            <p>
              For optimization some non standard output is required. The solver
              is free to output any solution via the output item of the model
              that it finds. It should only output solutions in increasing order
              of optimality. For the FD search class, the solutions must be
              output in the order found by the search procedure. The evaluation
              will use the last output solution. If the problem is proved
              unsatisfiable then a single line
            </p>
            <pre>
              <samp> No solution found </samp>
            </pre>
            <p>
              should be output. If the optimal solution is found, then after it
              is printed using the output item a single line
            </p>
            <pre>
              <samp> Optimal solution found </samp>
            </pre>
            <p>should be output.</p>
            <p>Note that all output must be to the standard output.</p>
            <h3 id="execenv">Execution Environment</h3>
            <p>
              During the Minizinc Challenge 2008 all programs will run on
              machines with the following specification:
            </p>
            <ul>
              <li>Operating System: Debian GNU/Linux 4 </li>
              <li>Processor(s): 3.4Ghz Intel Pentuim D (dual core) </li>
              <li>Memory: 4 Gb </li>
              <li>Cache: 2Mb L2 cache </li>
              <li>C compilers: gcc 3.4.6, 4.1.2, Java 1.5 </li>
              <li>Shells: bash 3.1, tcsh 6.14, zsh 4.3, </li>
            </ul>
            <p>
              If your system requires other compilers or tools please contact us
              and we will try to make them available.
            </p>
            <p>
              The above machines support both 32- and 64-bit environments.
              Binaries may be compiled for either.
            </p>
            <p>Only one core of one processor will be used for each entrant.</p>
            <h3>Benchmark Selection</h3>
            <p>
              The benchmarks for MiniZinc Challenge 2008 (as well as for the
              qualification rounds) will be selected by the organizers to try to
              examine some of the breadth of characteristics of FD solvers.
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
              MiniZinc 0.8 models, making use of only the globals defined in{' '}
              <i>globals.mzn</i> in that distribution, as well as some
              (preferably 10) instance files for each model. The instances
              should range from easy to hard if possible. Note that the model
              must conform to the problem format restrictions above.
            </p>
            <p>Submitted benchmarks must be placed in the public domain.</p>
            <h3>Qualification Rounds</h3>
            <p>
              There will be two qualification rounds. Successful participation
              (i.e. no incorrect results; compliance with I/O format
              requirements; sufficient performance) in at least one of them is
              mandatory to qualify for the MiniZinc Challenge 2008.
            </p>
            <h3>The Challenge</h3>
            <p>
              The challenge will be require solvers to process 100 Minizinc
              models with a run-time limit of 15 minutes (process time) per
              problem. The MiniZinc to FlatZinc conversion time will not be
              included in this, but the organizers reserve the right to penalize
              entries that use massively complicated <i>globals.mzn</i>{' '}
              libraries to reduce solving time.
            </p>
            <h3>Assessment</h3>
            <p>
              Each solver <i>s</i> is run on problem <i>p</i> and the following
              information is collected.
            </p>
            <ul>
              <li>
                <i>timeUsed(p,s)</i> - the time used by the solver, or
                timeLimit(p) if it was still running at the timeLimit.{' '}
              </li>
              <li>
                <i>solved(p,s)</i> - true if a correct solution is returned, or
                correct unsatisfiability is detected{' '}
              </li>
              <li>
                <i>quality(p,s)</i> - the objective value of the best solution
                found by the solver (that is the last solution fully output
                before the time limit){' '}
              </li>
              <li>
                <i>optimal(p,s)</i> - whether the objective value is proved
                optimal by the solver.{' '}
              </li>
            </ul>
            <p>
              Each problem will come with a identical total points purse{' '}
              <i>totalPurse</i> which we assume is 2000 points which will be
              divided among entries as follows (this is adapted from the SAT
              2005 and SAT 2007 contests).
              <br /> If no solver solves the problem then the purse is not
              distributed.
            </p>
            <h4>SATISFACTION PROBLEM</h4>
            <p>
              The <i>totalPurse</i> is split 50/50 into <i>solutionPurse</i> for
              solution purse and <i>speedPurse</i> points for speed purse.
            </p>
            <pre>
              <i>
                {' '}
                solutionPurse = totalPurse / 2 speedPurse = totalPurse / 2{' '}
              </i>
            </pre>
            <p>
              The <i>solutionPurse</i> is divided equally among all solvers
              returning a correct solution within the time limit.
            </p>
            <pre>
              <i>
                {' '}
                solutionAward(p,s) = solutionPurse / number of solvers solving
                problem p{' '}
              </i>
            </pre>
            <p>
              The speed purse is divided as follows. Each solver <i>s</i> is
              given a speed factor for each problem <i>p</i>. Times are in
              seconds.
            </p>
            <pre>
              <i> speedFactor(p,s) = timeLimit(p) / (1 + timeUsed(p,s)) </i>
            </pre>
            <p>
              or 0 if solver <i>s</i> did not solve <i>p</i>.
            </p>
            <pre>
              <i>
                {' '}
                speedAward(p,s) = speedPurse * speedFactor(p,s) /
                sum_s(speedFactor(p,s)){' '}
              </i>
            </pre>
            <h4>OPTIMIZATION PROBLEM</h4>
            <p>
              The purse is dynamically split between solution quality and speed.
            </p>
            <p>
              Let <i>S</i> be the number of solvers solving the problem within
              the time limit.
              <br /> Let <i>O</i> be the number of solvers returning the best
              objective value of any solver.
              <br /> Note that this may not be the optimum, but if one solver
              finds and proves the optimal, then <i>O</i> is only the solvers
              that find and prove an optimal solution.
            </p>
            <p>The total purse is split as follows:</p>
            <pre>
              <i>
                {' '}
                qualityPurse = totalPurse * S / (O + S) speedPurse = totalPurse
                * O / (O + S){' '}
              </i>
            </pre>
            <p>
              Note if every solver find the optimal then the purse is split
              equally. The rationale behind the splitting is that unless proving
              optimality a solver should keep trying until the time limit.
            </p>
            <p>
              The speed purse is split between solvers that return a best
              solution (and prove optimality if at least one such solver did) as
              for satisfaction problems.
            </p>
            <p>
              The <i>qualityPurse</i> is split as follows: Let <i>B(p)</i> be
              the largest best solution found by any solver and <i>W(p)</i> the
              smallest best solution found by any solver.
              <br /> If <i>B(p) = W(p)o</i> the points are split equally amongst
              solvers that found a solution.
              <br /> Otherwise, we interpolate on a line from the best solution{' '}
              <i>B(p)</i> to the <i>W(p) - (B(p) - W(p))</i> that is the
              solution twice the distance from the best to the worst solution.
            </p>
            <pre>
              <i> qualityFactor(p,s) = solution(p,s) - (2 * W(p) - B(p)) </i>
            </pre>
            <p>
              or 0 if the solver <i>s</i> did not solve <i>p</i>
            </p>
            <pre>
              <i>
                {' '}
                qualityAward(p,s) = qualityPurse * qualityFactor /
                sum_s(qualityFactor(p,s)){' '}
              </i>
            </pre>
            <p>
              The rationale behind this splitting is that some of the quality
              points are given for achieving a solution, while the remainder are
              split on relative quality of solution.
            </p>
            <h4>CLASSES</h4>
            <p>
              The scoring calculations will be done once for each class: FD
              search and Free search.
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
              the classes: FD search and Free search. The organizers may also
              award prizes to the best solvers on a particular category of
              problems.
            </p>
            <h3>Restrictions</h3>
            <p>
              Due to limited computational resources, the organizers reserve the
              right not to accept more than one version of a particular solver
              (defined as sharing 50% of the source code). The organizers
              reserve the right to enter their own systems--or other systems of
              interest--to the competition, but these will not be eligible for
              prizes, but still will modify the scoring results.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
