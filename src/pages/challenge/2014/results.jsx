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
        <title>MiniZinc - Challenge 2014 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <Scripts
              scripts={[
                '/challenge/2014/locations.js',
                '/challenge/2014/results.js',
                '/challenge/2014/score.js',
              ]}
              onReady={() => init()}
            />
            <h2>MiniZinc Challenge 2014 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2014', '/challenge/2014'],
                'Results',
              ]}
            />
            <h3>Entrants</h3>
            {/*<p>Presentation of the MiniZinc Challenge 2014 (coming soon) (<Link href="./challenge_results2014.pdf">results</Link>)</p>*/}
            <p>
              The entrants for this year (with their descriptions, when
              provided):
            </p>
            <ul>
              <li>
                <Link href="http://choco.emn.fr">Choco 3</Link> (
                <Link href="description_choco.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                {' '}
                Concrete (
                <Link href="description_concrete.txt">description</Link>). A CP
                system written in Scala.{' '}
              </li>
              <li>
                <Link href="http://tx.technion.ac.il/~mveksler/HCSP/index.html">
                  HaifaCSP
                </Link>{' '}
                (<Link href="description_hcsp.txt">description</Link>). A C++ FD
                solver using SAT solving algorithms.{' '}
              </li>
              <li>
                <Link href="http://www.constraint.org/ja/izc_download.html">
                  iZplus
                </Link>{' '}
                (<Link href="description_izplus.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://jacop.osolpro.com">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://dtai.cs.kuleuven.be/krr/software/minisatid">
                  MinisatID
                </Link>{' '}
                (<Link href="description_minisatid.txt">description</Link>). A
                solver combining techniques from the fields SAT, SMT, CP, and
                ASP.{' '}
              </li>
              <li>
                <Link href="https://github.com/ehebrard/Mistral-2.0">
                  Mistral 2.0
                </Link>{' '}
                (<Link href="description_mistral.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://www.opturion.com/cpx">Opturion CPX</Link> (
                <Link href="description_opturion_cpx.txt">description</Link>). A
                FD solver using Lazy clause generation.{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">OR-Tools</Link> (
                <Link href="description_or_tools.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat CP</Link> (
                <Link href="description_picat_cp.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat SAT</Link> (
                <Link href="description_picat_sat.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://sicstus.sics.se">SICStus Prolog</Link> (
                <Link href="description_sicstus_prolog.txt">description</Link>).
                A Prolog development environment with a FD constraint
                programming module.{' '}
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
                ). A C++ FD solver using lazy clause generation.{' '}
              </li>
              <li>
                {' '}
                G12/FD. A Mercury FD solver (the G12 FlatZinc interpreter&apos;s
                default solver).{' '}
              </li>
              <li>
                {' '}
                G12/LazyFD. A Mercury FD solver using lazy clause generation.{' '}
              </li>
              <li>
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                {' '}
                sunny-cp (
                <Link href="description_sunny_cp.txt">description</Link>). A
                single-threaded CP portfolio solver using, e.g., Chuffed, G12
                solvers, Gecode, MinisatID.{' '}
              </li>
              <li> sunny-cp-presolve. sunny-cp with pre-solving. </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2014/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
              Furthermore, entries in the FD search category (JaCoP and SICStus
              Prolog) were automatically included in the free search category,
              while entries in the free search category (Concrete, Chuffed,
              G12/FD, G12/LazyFD, HaifaCSP, MinisatID, Mistral, Opturion CPX,
              Picat CP, Picat SAT and promoted FD entries) were automatically
              included in the parallel search category. Lastly, all entries in
              the free search category and promoted entries into that category
              were automatically included in the open search category.
            </p>
            <h3>Summary of Results</h3>
            <p>The results for the MiniZinc Challenge 2014 were</p>
            <Medals medals={medals[2014]} />
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
              portfolio solver entered) at the end of the solvers names indicate
              which configuration the solvers were run with.
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
                <b>S</b> indicates that a solution was found,{' '}
              </li>
              <li>
                <b>C</b> indicates that the search was complete,{' '}
              </li>
              <li>
                <b>INC</b> indicates an incorrect answer{' '}
              </li>
              <li>
                <b>MZN</b> indicates that flattening aborted (time-out or
                out-of-memory){' '}
              </li>
              <li>
                <b>UNK</b> indicates that no answer was returned in the time
                limit or the solver aborted.{' '}
              </li>
            </ul>
            <h3>Download all problems</h3> All problems are available in a
            zipped tar-ball <Link href="mznc2014-probs.tar.gz">here</Link>.{' '}
            <h3>Selection:</h3> Select a list of solvers and benchmarks and
            click on &ldquo;Compute Results&rdquo; to score the solvers against
            each other on the selected benchmarks. The entrants for each of the
            fd search, free search and parallel search categories can be
            selected with the corresponding buttons. <p></p>
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
            <Globals year={2014} />
            <hr />
            <p>The files on this page are for MiniZinc version 1.6.</p>
            <div id="footer">
              ©<Link href="http://www.nicta.com.au">NICTA</Link>, 2014{' '}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
