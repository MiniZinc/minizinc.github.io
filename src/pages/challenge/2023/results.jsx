import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { Globals } from '@/components/challenge/Globals'
import { Link } from '@/components/Link'
import { Medals } from '@/components/challenge/Medals'
import { Scripts } from '@/components/challenge/Scripts'
import { medals } from '@/data/challenge'
import Head from 'next/head'

export default function ResultsPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2023 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <Scripts
              scripts={[
                '/challenge/2023/results.js',
                '/challenge/plots.js',
                '/challenge/score.js',
                'https://cdn.plot.ly/plotly-latest.min.js',
              ]}
              onReady={() => init()}
            />
            <h2>MiniZinc Challenge 2023 Results</h2>

            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2023', '/challenge/2023'],
                'Results',
              ]}
            />

            <h3>Entrants</h3>

            <p>
              The entrants for this year (with their descriptions, when
              provided):
            </p>

            <ul>
              <li>
                <Link href="http://choco-solver.org">Choco 4</Link> (
                <Link href="description_choco-solver.txt">description</Link>). A
                Java FD solver.
              </li>
              <li>
                <Link href="http://www.constraint.org/en/izc_download/">
                  iZplus
                </Link>{' '}
                (<Link href="description_izplus.txt">description</Link>).
              </li>
              <li>
                <Link href="https://github.com/radsz/jacop">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>). A Java
                FD solver.
              </li>
              <li>
                <Link href="http://optimathsat.disi.unitn.it">OptiMathSAT</Link>{' '}
                (<Link href="description_optimathsat.txt">description</Link>).
              </li>
              <li>
                <Link href="https://developers.google.com/optimization/">
                  OR-Tools
                </Link>{' '}
                (<Link href="description_or-tools_cp-sat.txt">description</Link>
                ).
              </li>
              <li>
                <Link href="http://picat-lang.org">PicatSAT</Link> (
                <Link href="description_picatsat.txt">description</Link>).
              </li>
              <li>
                <Link href="https://sicstus.sics.se">SICStus Prolog</Link> (
                <Link href="description_sicstus.txt">description</Link>). A
                Prolog development environment with a FD constraint programming
                module.
              </li>
              <li>
                <Link href="https://github.com/informarte/yuck">Yuck</Link> (
                <Link href="description_yuck.txt">description</Link>). A local
                search solver written in Scala.
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
                FD solver using lazy clause generation.
              </li>
              <li>
                <Link href="https://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.
              </li>
              <li>
                CpoFzn (<Link href="description_cpofzn.txt">description</Link>).
                Uses{' '}
                <Link href="https://github.com/IBMDecisionOptimization/cpofzn">
                  IBM ILOG CP Optimizer
                </Link>{' '}
                version 22.11.
              </li>
              <li>
                MZN/Cbc (<Link href="description_mzn-cbc.txt">description</Link>
                ). Translates to MILP, uses{' '}
                <Link href="https://projects.coin-or.org/Cbc">Cbc</Link> version
                2.10.10.
              </li>
              <li>
                MZN/CPLEX (
                <Link href="description_mzn-cplex.txt">description</Link>
                ). Translates to MILP, uses{' '}
                <Link href="https://www.ibm.com/analytics/cplex-optimizer">
                  IBM ILOG CPLEX Optimizer
                </Link>{' '}
                version 22.11.
              </li>
              <li>
                MZN/Gurobi (
                <Link href="description_mzn-gurobi.txt">description</Link>
                ). Translates to MILP, uses{' '}
                <Link href="https://www.gurobi.com/">Gurobi</Link> version
                10.0.2.
              </li>
              <li>
                MZN/HiGHS (
                <Link href="description_mzn-highs.txt">description</Link>
                ). Translates to MILP, uses{' '}
                <Link href="https://highs.dev/">HiGHS</Link> version 1.5.1.
              </li>
              <li>
                MZN/SCIP (
                <Link href="description_mzn-scip.txt">description</Link>).
                Translates to MILP, uses{' '}
                <Link href="https://www.scipopt.org/">SCIP</Link> version 8.0.3.
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2023/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
            </p>

            <h3>Summary of Results</h3>

            <p>The results for the MiniZinc Challenge 2023 are</p>
            <Medals medals={medals[2023]} />

            <h3>Description of Results</h3>

            <p>All times are given in milliseconds.</p>

            <p>
              A score of 0.0 indicates a worse answer in quality (worse
              objective, no proof of optimality, or no answer for satisfaction
              problems).
              <br />A score of 1.0 indicates a better solution in quality. When
              the quality is the same, the 1.0 purse is split with respect to
              time used.
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
                <b>S</b> indicates that a solution was found,
              </li>
              <li>
                <b>C</b> indicates that the search was complete,
              </li>
              <li>
                <b>ERR</b> indicates an incorrect answer or the solver aborted,
              </li>
              <li>
                <b>ERR</b> indicates that flattening aborted (time-out or
                out-of-memory),
              </li>
              <li>
                <b>UNK</b> indicates that no answer was returned in the time
                limit.
              </li>
            </ul>

            <h3>Download all problems</h3>

            <p>
              All problems are available in a zipped tar-ball{' '}
              <Link href="mznc2023_probs.tar.gz">here</Link>.
            </p>

            <h3>Selection:</h3>

            <p>
              Select a list of solvers and benchmarks and click on
              &ldquo;Compute Results&rdquo; to score the solvers against each
              other on the selected benchmarks. The entrants for each of the fd
              search, free search and parallel search categories can be selected
              with the corresponding buttons.
            </p>

            <table valign="top">
              <tbody>
                <tr>
                  <td>
                    <table valign="top" border="2">
                      <colgroup>
                        <col valign="top"></col>
                        <col valign="top"></col>
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
                    <table border="2">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="compute_results"
                                className="w-full"
                                color="primary"
                                onClick={() => computeSelected()}
                              >
                                Compute Results
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="clear_selection"
                                className="w-full"
                                variant="outline"
                                onClick={() => clearAll()}
                              >
                                Clear Selection
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="select_all"
                                className="w-full"
                                variant="outline"
                                onClick={() => selectAll()}
                              >
                                Select all problems
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="select_fd"
                                className="w-full"
                                variant="outline"
                                onClick={() => selectFD()}
                              >
                                Add FD category solvers
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="select_free"
                                className="w-full"
                                variant="outline"
                                onClick={() => selectFree()}
                              >
                                Add Free category solvers
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="select_par"
                                className="w-full"
                                variant="outline"
                                onClick={() => selectPar()}
                              >
                                Add Par category solvers
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <Button
                                type="button"
                                name="select_local"
                                className="w-full"
                                variant="outline"
                                onClick={() => selectLocal()}
                              >
                                Add Local category solvers
                              </Button>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top">
                    <table valign="top" border="2">
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
                              <label>
                                <input
                                  className="mr-1"
                                  type="checkbox"
                                  id="plot_instance"
                                />
                                Create plots for each instance
                              </label>
                              <br />
                            </form>
                            Time axis scale:
                            <br />
                            <form name="plot">
                              <label>
                                <input
                                  type="radio"
                                  className="mr-1"
                                  name="xaxis_type"
                                  id="xaxis_default"
                                  value="-"
                                  defaultChecked
                                />
                                Default
                              </label>
                              <label className="ml-2">
                                <input
                                  type="radio"
                                  className="mr-1"
                                  name="xaxis_type"
                                  id="xaxis_linear"
                                  value="linear"
                                />
                                Linear
                              </label>
                              <label className="ml-2">
                                <input
                                  type="radio"
                                  className="mr-1"
                                  name="xaxis_type"
                                  id="xaxis_log"
                                  value="log"
                                />
                                Log
                              </label>
                            </form>
                            Plot lines shape:
                            <br />
                            <form name="plot">
                              <label>
                                <input
                                  type="radio"
                                  className="mr-1"
                                  name="lineshape"
                                  id="lineshape_steps"
                                  value="steps"
                                  defaultChecked
                                />
                                Steps
                              </label>
                              <label className="ml-2">
                                <input
                                  type="radio"
                                  className="mr-1"
                                  name="lineshape"
                                  id="lineshape_lines"
                                  value="lines"
                                />
                                Lines
                              </label>
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top"> Area scoring settings: </td>
                        </tr>
                        <tr>
                          <td>
                            <form name="score">
                              <label>
                                <input
                                  className="mr-1"
                                  type="checkbox"
                                  id="area_scoring"
                                />
                                Normalise
                              </label>
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

            <table cellSpacing="15">
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
                      rules="groups"
                      cellpading="20"
                      name="total_table"
                      id="total_table"
                      cellSpacing="20"
                      border="2"
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
                      rules="groups"
                      cellpading="20"
                      name="problem_table"
                      cellSpacing="20"
                      border="2"
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
            <h3>Individual results:</h3>
            <table
              frame="box"
              rules="groups"
              cellpading="20"
              name="instance_table"
              cellSpacing="20"
              border="2"
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
            <h3>Objective plots for each instance:</h3>
            <table
              frame="box"
              border="2"
              rules="groups"
              cellpading="20"
              cellSpacing="20"
              name="objective_plots"
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
            <h3>Score development over time:</h3>
            <div id="total_scores"></div>

            <h3>Global constraint per model</h3>

            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC, respectively, indicate whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2023} />
            <hr />

            <p>The files on this page are for MiniZinc version 2.7.6.</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
