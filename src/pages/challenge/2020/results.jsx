import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

import { Button } from '@/components/Button'
import { Globals } from '@/components/challenge/Globals'
import { Medals } from '@/components/challenge/Medals'
import { Scripts } from '@/components/challenge/Scripts'
import { medals } from '@/data/challenge'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2020 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <Scripts
              scripts={[
                '/challenge/2020/locations.js',
                '/challenge/2020/results.js',
                '/challenge/2020/plots.js',
                '/challenge/2020/score.js',
                'https://cdn.plot.ly/plotly-latest.min.js',
              ]}
              onReady={() => init()}
            />
            <h2>MiniZinc Challenge 2020 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2020', '/challenge/2020'],
                'Results',
              ]}
            />
            <p>
              CP 2020 presentation slides of the MiniZinc Challenge 2020 will be
              available here.{' '}
              {/* (<Link href="./challenge_results2020.pdf">results</Link>).  */}
            </p>
            <h3>Entrants</h3>
            <p>
              The entrants for this year (with their descriptions, when
              provided):
            </p>
            <ul>
              <li>
                <Link href="http://choco-solver.org">Choco 4</Link> (
                <Link href="description_choco4.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                <Link href="https://github.com/potassco/flatzingo">
                  Flatzingo
                </Link>{' '}
                (<Link href="description_flatzingo.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="https://github.com/ehebrard/Mistral-2.0">
                  Mistral 2.0
                </Link>{' '}
                (<Link href="description_mistral2.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://jacop.osolpro.com">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://optimathsat.disi.unitn.it">OptiMathSAT</Link>{' '}
                (<Link href="description_optimathsat.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="https://developers.google.com/optimization/">
                  OR-Tools
                </Link>{' '}
                (<Link href="description_or_tools.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://oscarlib.bitbucket.org/cbls.html">
                  OscaR/CBLS
                </Link>{' '}
                (<Link href="description_oscar_cbls.txt">description</Link>). A
                constraint-based local search solver written in Scala.{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">PicatSAT</Link> (
                <Link href="description_picat_sat.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="https://sicstus.sics.se">SICStus Prolog</Link> (
                <Link href="description_sicstus_prolog.txt">description</Link>).
                A Prolog development environment with a FD constraint
                programming module.{' '}
              </li>
              <li>
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>
                <sup>—</sup> (
                <Link href="description_sunny_cp.txt">description</Link>). A
                variant of sunny-cp only using Choco, Gecode, HaifaCSP, JaCoP,
                iZplus, MinisatID, Mistral, Opturion CPX, OR-Tools, Picat.{' '}
              </li>
              <li>
                <Link href="https://github.com/informarte/yuck">Yuck</Link> (
                <Link href="description_yuck.txt">description</Link>). A local
                search solver written in Scala.{' '}
              </li>
            </ul>
            <p>
              In addition, the challenge organisers entered the following
              FlatZinc and MiniZinc implementations:
            </p>
            <ul>
              <li>
                <Link href="https://github.com/chuffed/chuffed">Chuffed</Link> (
                <Link href="description_chuffed.txt">description</Link>). A C++
                FD solver using lazy clause generation.{' '}
              </li>
              <li>
                <Link href="https://bitbucket.org/gkgange/geas">Geas</Link> (
                <Link href="description_geas.txt">description</Link>). A C++
                lazy clause generation solver with an OCaml FlatZinc frontend.{' '}
              </li>
              <li>
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                {' '}
                MZN/Cbc. Translates to MILP (
                <Link href="description_mzn-cbc.txt">description</Link>), uses{' '}
                <Link href="https://projects.coin-or.org/Cbc">Cbc</Link> version
                2.10.4.{' '}
              </li>
              <li>
                {' '}
                MZN/CPLEX. Translates to MILP (
                <Link href="description_mzn-cplex.txt">description</Link>), uses{' '}
                <Link href="http://www-01.ibm.com/software/commerce/optimization/cplex-optimizer/index.html">
                  IBM ILOG CPLEX Optimizer
                </Link>{' '}
                version 12.10.0.0.{' '}
              </li>
              <li>
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>{' '}
                (<Link href="description_sunny_cp.txt">description</Link>). A
                multi-threaded CP portfolio solver using 13 different CP and MIP
                solvers incl. Chuffed, G12 solvers, Gecode.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2020/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
            </p>
            <p>
              Furthermore, entries in the FD search category (Gecode, JaCoP,
              SICStus Prolog) were automatically included in the free search
              category, while entries in the free search category (Chuffed,
              OscaR/CBLS and promoted FD entries except Gecode) were
              automatically included in the parallel search category. Lastly,
              all entries in the parallel search category and promoted entries
              into that category were automatically included in the open search
              category.
            </p>
            <p>
              The Choco entry submitted by the final deadline had a bug that
              prevented it from competing in the free and parallel categories.
              We entered an updated version that was provided after the deadline
              and fixed those problems, but we treated it the same as the other
              internal entries: Choco was therefore ineligible to win prizes in
              the free and parallel categories, but its performance modifies the
              scoring results.
            </p>
            <h3>Summary of Results</h3>
            <p>The results for the MiniZinc Challenge 2020 are</p>
            <Medals medals={medals[2020]} />
            <h3>Description of Results</h3>
            <p>All times are given in milliseconds.</p>
            <p>
              A score of 0.0 indicates a worse answer in quality (worse
              objective, no proof of optimality, or no answer for satisfaction
              problems), 1.0 a better solution in quality. When the quality is
              the same, the 1.0 purse is split with respect to time used.
            </p>
            <p>
              If a promoted entry does not recognize an option (or states that
              it is just ignored), times and solutions from the previous
              category are used for scoring. The suffixes <i>-fd</i>,{' '}
              <i>-free</i>, <i>-par</i> or <i>-open</i> (for the parallel
              portfolio solver entered) at the end of the solver names indicate
              which configuration the solvers were run with.
            </p>
            <p>
              The time limit includes both MiniZinc compilation and solving.
            </p>
            <p>
              In the Status column: <br />
            </p>
            <ul>
              <li>
                <b>S</b> indicates that a solution was found,{' '}
              </li>
              <li>
                <b>C</b> indicates that the search was complete,{' '}
              </li>
              <li>
                <b>ERR</b> indicates an incorrect answer or the solver aborted,{' '}
              </li>
              <li>
                <b>ERR</b> indicates that flattening aborted (time-out or
                out-of-memory),{' '}
              </li>
              <li>
                <b>UNK</b> indicates that no answer was returned in the time
                limit.{' '}
              </li>
            </ul>
            <h3>Download all problems</h3> All problems are available in a
            zipped tar-ball <Link href="mznc2020-probs.tar.gz">here</Link>.{' '}
            <h3>Selection:</h3> Select a list of solvers and benchmarks and
            click on &ldquo;Compute Results&rdquo; to score the solvers against
            each other on the selected benchmarks. The entrants for each of the
            fd search, free search and parallel search categories can be
            selected with the corresponding buttons. <p></p>
            <table valign="top">
              <tbody>
                <tr>
                  <td>
                    <table border="2" valign="top">
                      <colgroup>
                        <col valign="top" />
                        <col />
                        <col valign="top" />
                        <col />
                      </colgroup>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td valign="top"> Solver selection: </td>
                          <td valign="top"> Problem selection: </td>
                        </tr>
                        <tr>
                          <td id="solver_selection" valign="top"></td>
                          <td id="problem_selection" valign="top"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top">
                    <p></p>
                    <table border="2">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="compute_results"
                                onClick={() => computeSelected()}
                                type="button"
                                value="Compute Results                  "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="clear_selection"
                                onClick={() => clearAll()}
                                type="button"
                                value="Clear Selection                      "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_all"
                                onClick={() => selectAll()}
                                type="button"
                                value="Select all problems              "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_fd"
                                onClick={() => selectFD()}
                                type="button"
                                value="Add FD category solvers   "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_free"
                                onClick={() => selectFree()}
                                type="button"
                                value="Add Free category solvers"
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_par"
                                onClick={() => selectPar()}
                                type="button"
                                value="Add Par category solvers  "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_port"
                                onClick={() => selectOpen()}
                                type="button"
                                value="Add Open category solvers  "
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input
                                name="select_local"
                                onClick={() => selectLocal()}
                                type="button"
                                value="Add Local category solvers  "
                              />
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top">
                    <table border="2" valign="top">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td valign="top"> Plot settings: </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="plot">
                              <strong>
                                <font color="red">
                                  Note that plotting takes time.
                                </font>
                              </strong>
                              <br />
                              <input id="plot_instance" type="checkbox" />
                              Create plots for each instance
                              <br />
                              {/*                         <input type="checkbox" id="plot_totalscore">Create score plots for the total score</input><br>                         */}
                            </form>{' '}
                            Time axis scale:
                            <br />
                            <form name="plot">
                              <input
                                defaultChecked
                                id="xaxis_default"
                                name="xaxis_type"
                                type="radio"
                                value="-"
                              />
                              Default{' '}
                              <input
                                id="xaxis_linear"
                                name="xaxis_type"
                                type="radio"
                                value="linear"
                              />
                              Linear{' '}
                              <input
                                id="xaxis_log"
                                name="xaxis_type"
                                type="radio"
                                value="log"
                              />
                              Log{' '}
                            </form>{' '}
                            Plot lines shape:
                            <br />
                            <form name="plot">
                              <input
                                defaultChecked
                                id="lineshape_steps"
                                name="lineshape"
                                type="radio"
                                value="steps"
                              />
                              Steps{' '}
                              <input
                                id="lineshape_lines"
                                name="lineshape"
                                type="radio"
                                value="lines"
                              />
                              Lines{' '}
                            </form>
                            {/*                     Time steps for score plots:                     <form name="plot"><input type="radio" name="timestep" id="timestep_all" value=0>all</input><input type="radio" name="timestep" id="timestep_1sec" value=1000 checked>1 s</input><input type="radio" name="timestep" id="timestep_5sec" value=5000>5 s</input><input type="radio" name="timestep" id="timestep_1min" value=60000>1 min</input></form>                     */}
                          </td>
                        </tr>
                        <tr>
                          <td valign="top"> Area scoring settings: </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <input id="area_scoring" type="checkbox" />
                              Normalise
                              <br />
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table cellspacing="15">
              <tbody>
                <tr></tr>
                <tr>
                  <td>
                    <h3> Summary:</h3>
                  </td>
                  <td>
                    <h3> Total per problem:</h3>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <table
                      border="2"
                      cellpading="20"
                      cellspacing="20"
                      id="total_table"
                      name="total_table"
                      rules="groups"
                    >
                      <colgroup></colgroup>
                      <colgroup></colgroup>
                      <colgroup></colgroup>
                      <colgroup></colgroup>
                      <thead>
                        <tr>
                          <td onClick={() => sortTotalTable(0, 'string')}>
                            <b>Solver </b>
                          </td>
                          <td onClick={() => sortTotalTable(1, 'number')}>
                            <b>Score </b>
                          </td>
                          <td onClick={() => sortTotalTable(2, 'number')}>
                            <b>Score Incomplete </b>
                          </td>
                          <td onClick={() => sortTotalTable(3, 'number')}>
                            <b>Score Area </b>
                          </td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </td>
                  <td valign="top">
                    <table
                      border="2"
                      cellpading="20"
                      cellspacing="20"
                      name="problem_table"
                      rules="groups"
                    >
                      <colgroup span="2"></colgroup>
                      <colgroup span="1"></colgroup>
                      <colgroup span="1"></colgroup>
                      <colgroup span="1"></colgroup>
                      <thead>
                        <tr>
                          <td>
                            <b>Problem </b>
                          </td>
                          <td>
                            <b>Solver </b>
                          </td>
                          <td>
                            <b>Score </b>
                          </td>
                          <td>
                            <b>Score Incomplete</b>
                          </td>
                          <td>
                            <b>Score Area</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <h3>Individual results:</h3>
            <table
              border="2"
              cellpading="20"
              cellspacing="20"
              frame="box"
              name="instance_table"
              rules="groups"
            >
              <colgroup span="2"></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <thead>
                <tr>
                  <td>
                    <b> Problem </b>
                  </td>
                  <td>
                    <b> Instance </b>
                  </td>
                  <td>
                    <b> Solver </b>
                  </td>
                  <td>
                    <b> Status </b>
                  </td>
                  <td>
                    <b> Time </b>
                  </td>
                  <td>
                    <b> Objective </b>
                  </td>
                  <td>
                    <b> Score </b>
                  </td>
                  <td>
                    <b> Score Incomplete</b>
                  </td>
                  <td>
                    <b> Score Area</b>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <p></p>
            <h3>Objective plots for each instance:</h3>
            <table
              border="2"
              cellpading="20"
              cellspacing="20"
              frame="box"
              name="objective_plots"
              rules="groups"
            >
              <colgroup span="2"></colgroup>
              <colgroup width="1200"></colgroup>
              <thead>
                <tr>
                  <td>
                    <b> Problem </b>
                  </td>
                  <td>
                    <b> Instance </b>
                  </td>
                  <td>
                    <b> Plot </b>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <p></p>
            <h3>Score development over time:</h3>
            <div id="total_scores"></div>
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC, respectively, indicate whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2020} />
            {/*--------------------------------------------------------------------*/}
            <p></p>
            <hr />
            <p>The files on this page are for MiniZinc version 2.4.3.</p>
            <div id="footer">
              {' '}
              ©<Link href="http://data61.csiro.au">Data61, CSIRO</Link>, 2020{' '}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
