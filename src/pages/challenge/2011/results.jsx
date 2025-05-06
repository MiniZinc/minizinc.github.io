import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
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
        <title>MiniZinc - Challenge 2011 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <Scripts
              scripts={[
                '/challenge/2011/locations.js',
                '/challenge/2011/results.js',
                '/challenge/2011/score.js',
              ]}
              onReady={() => init()}
            />
            <h2>MiniZinc Challenge 2011 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2011', '/challenge/2011'],
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
                <Link href="http://probp.com">BProlog </Link> (
                <Link href="description_bprolog.txt">description</Link>). A
                CLP(FD) solver.{' '}
              </li>
              <li>
                {' '}
                Bumblebee (
                <Link href="description_bumblebee.pdf">description</Link>).
                Translates to SAT, uses CryptoMiniSAT.{' '}
              </li>
              <li>
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://jacop.osolpro.com">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://ima.udg.edu/Recerca/GrupESLIP.html">
                  Fzn2smt
                </Link>{' '}
                (<Link href="description_fzn2smt.txt">description</Link>).
                Translates to SMT, uses{' '}
                <Link href="http://yices.csl.sri.com/">Yices</Link>.{' '}
              </li>
              <li>
                <Link href="http://scip.zib.de">SCIP</Link>. A CP/MIP
                solver.{' '}
              </li>
            </ul>
            <p>
              In addition, the challenge organisers entered the following
              FlatZinc implementations:
            </p>
            <ul>
              <li>
                {' '}
                Chuffed (<Link href="description_chuffed.txt">description</Link>
                ). A C++ FD solver using Lazy clause generation.{' '}
              </li>
              <li> CPX. A C++ FD Solver using Lazy Clause Generation. </li>
              <li>
                {' '}
                G12/FD. A Mercury FD solver (the G12 FlatZinc interpreter&apos;s
                default solver).{' '}
              </li>
              <li>
                {' '}
                G12/LazyFD. A Mercury FD solver using Lazy Clause
                Generation.{' '}
              </li>
              <li>
                {' '}
                G12/CBC. Translates to MIP, uses{' '}
                <Link href="http://www.coin-or.org/projects/Cbc.xml">
                  Cbc
                </Link>{' '}
                version 2.6.2.{' '}
              </li>
              <li>
                {' '}
                G12/CPLEX. Translates to MIP, uses{' '}
                <Link href="http://www-01.ibm.com/software/integration/optimization/cplex-optimizer/">
                  CPLEX
                </Link>{' '}
                version 12.1.{' '}
              </li>
              <li>
                {' '}
                G12/Gurobi. Translates to MIP, uses{' '}
                <Link href="http://www.gurobi.com"> Gurobi Optimizer</Link>{' '}
                version 4.5.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2011/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
              Furthermore, entries in the FD search category (BProlog, Gecode,
              JaCoP, Chuffed, CPX and G12/FD) were automatically included in the
              free search category, while entries in the free search category
              (Bumblebee, Fzn2smt, SCIP, CBC, CPLEX, Gurobi and promoted FD
              entries) were automatically included in the parallel search
              category.
            </p>
            <h3>Summary of Results</h3>
            <p>The results for the MiniZinc Challenge 2011 were</p>
            <Medals medals={medals[2011]} />
            <p></p>
            <h4> Results Presentation </h4> The slides for the presentation of
            the results at CP2011 are here in{' '}
            <Link href="Challenge2011.pdf">[PDF]</Link>
            <h3>Description of Results</h3>
            <p>All times are given in seconds.</p>
            <p>
              Scores of 0, 1 and 2 are used in the tables rather than 0, 0.5 and
              1.
            </p>
            <p>
              If a promoted entry does not recognize an option (or states that
              it is just ignored), times and solutions from the previous
              category are used for scoring. The suffixes <i>-fd</i>,{' '}
              <i>-free</i> and <i>-par</i> at the end of the solvers names
              indicate which configuration the solvers were run with.
            </p>
            <p>
              mzn2fzn was run with the same time and memory limits as the
              solvers.
            </p>
            <p>
              In the Status column: <br />
            </p>
            <ul>
              <li>
                <b>S</b> and <b>U</b> indicates whether a solution was found (S
                - Solved) or not (U - Unsolved).{' '}
              </li>
              <li>
                <b>C</b> and <b>U</b> indicates whether the search was complete
                (C) or uncomplete (U).{' '}
              </li>
              <li>
                <b>E</b> indicates an error of any kind, or an incorrect answer
                from the solver.{' '}
              </li>
            </ul>
            <p>Incorrect answers:</p>
            <ul>
              <li>
                Bumblebee returns UC (unsatisfiable) for all instances of
                cyclic-rcpsp.
              </li>
              <li>
                Bumblebee returns UC (unsatisfiable) for all instances of
                wwtpp-real, in around 70 seconds for each of them. We have
                decided to count all 5 instances results as an error
                (effectively disqualified bumblebee on that problem).{' '}
              </li>
              <li>
                SCIP completes the search on 8Ships (ship-scheduling) with a
                suboptimal answer.{' '}
              </li>
              <li>
                cpx-par finds a better-than-optimal solution for
                6ShipsMixedUnconst (ship-schedule).{' '}
              </li>
            </ul>
            <p>Errors:</p>
            <ul>
              <li>
                SCIP aborts on the carpet-cutting instances when parsing the
                generated FlatZinc.
                <br /> (We checked the FlatZinc files manually and they are
                valid.){' '}
              </li>
              <li>
                Bumblebee aborts on the vrp, four prize-collecting instances,
                ship-scheduling and table layout with a compiler failed
                error.{' '}
              </li>
              <li>
                Linearisation aborts (CBC, Cplex, Gurobi) on carpet-cutting,
                open stacks and pentominoes.{' '}
              </li>
              <li>
                {' '}
                CBC/Cplex/Gurobi aborts on pattern set mining due to a lack of
                support for the FlatZinc built-in <i>bool_le_reif/3</i>.{' '}
              </li>
              <li>
                SCIP prints out the complete search terminator even for SAT
                instances. It did not affect the scoring.{' '}
              </li>
              <li>Other errors are mostly due to memory exhaustion.</li>
            </ul>
            <h3>Selection:</h3> Select a list of solvers and benchmarks and
            click on &ldquo;Compute Results&rdquo; to score the solvers against
            each other on the selected benchmarks. The entrants for each of the
            fd search, free search and parallel search categories can be
            selected with the corresponding buttons.{' '}
            <p>
              <p></p>
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
                      <p>
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
                          </tbody>
                        </table>
                      </p>
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
                        name="total_table"
                        rules="groups"
                      >
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <thead>
                          <tr>
                            <td>
                              <b>Solver </b>
                            </td>
                            <td>
                              <b>Score </b>
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
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
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
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge.
            </p>
            <Globals year={2011} />
            <hr />
            <p>The files on this page are for MiniZinc version 1.3.</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
