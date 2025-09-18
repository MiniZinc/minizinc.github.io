import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

import Script from 'next/script'
import { Globals } from '@/components/challenge/Globals'
import { Medals } from '@/components/challenge/Medals'
import { medals } from '@/data/challenge'

export default function Page() {
  let fns = null
  async function ready() {
    const response = await fetch('/challenge/2010/results.json')
    const json = await response.json()
    fns = challengeResults2010(json.results, json.loc)
  }

  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2010 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <Script src="/challenge/2010/score.js" onReady={() => ready()} />
            <h2>MiniZinc Challenge 2010 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2010', '/challenge/2010'],
                'Results',
              ]}
            />
            <h3> Entrants </h3>
            <p>
              The entrants for this year (with their descriptions, when
              provided):
            </p>
            <ul>
              <li>
                <Link href="http://www.gecode.org">Gecode </Link> (
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
              In addition the challenge organisers entered the following
              FlatZinc implementations:
            </p>
            <ul>
              <li>
                {' '}
                Chuffed (<Link href="description_chuffed.txt">description</Link>
                ). A C++ FD solver using Lazy clause generation.{' '}
              </li>
              <li>
                {' '}
                Fzntini. Translates to SAT, uses{' '}
                <Link href="http://users.cecs.anu.edu.au/~jinbo/tinisat/">
                  TiniSAT
                </Link>
                .{' '}
              </li>
              <li>
                {' '}
                G12/FD. A Mercury FD solver (the G12 FlatZinc interpreter&apos;s
                default solver).{' '}
              </li>
              <li>
                {' '}
                G12/CPLEX. Translates to MIP, uses{' '}
                <Link href="http://www-01.ibm.com/software/integration/optimization/cplex-optimizer/">
                  CPLEX
                </Link>
                12.1.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2010/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
              Furthermore, entries in the FD search category (Gecode, JaCoP,
              Chuffed, G12/FD) were automatically included in the free search
              category, while entries in the free search category (Fzn2smt,
              Fzntini, SCIP, CPLEX and promoted FD entries) were automatically
              included in the parallel search category. In that sense the
              &ldquo;moral victory&rdquo; probably goes to Gecode?
            </p>
            <h3> Summary of Results </h3>{' '}
            <p>The results for the MiniZinc Challenge 2010 were</p>
            <Medals medals={medals[2010]} />
            <p>
              The results for parallel search were a bit surprising since
              Gecode-parallel is better than Gecode-free, and fzn2smt is the
              same in both categories. This results from the fact that
              Chuffed-parallel is worse than Chuffed-free and hence the purse
              scoring system gives points back to fzn2smt.
            </p>
            <h4> Results Presentation </h4> The slides for the presentation of
            the results at CP2010 are here in{' '}
            <Link href="MiniZincChallenge2010-web.pptx">Powerpoint</Link> and{' '}
            <Link href="MiniZincChallenge2010-web.pdf">PDF</Link>
            <p></p>
            <h3> Description of Results </h3>
            <p>Times are in seconds.</p>
            <p>
              If a promoted entry does not recognize an option (or states that
              it is just ignored), times and solutions from the previous
              category are used for scoring. The suffixes _fd, _free, and
              _parallel at the end of the solvers names indicates which actual
              configuration the solvers were run with.
            </p>
            <p>There are 100 points for each problem instance.</p>
            <p>
              mzn2fzn was run with the same time and memory limits as the
              solvers.
            </p>
            <p>
              In the Status column: <br />
            </p>
            <ul>
              <li>
                <b>S</b> indicates a solution was found;{' '}
              </li>
              <li>
                <b>C</b> indicates a complete search;{' '}
              </li>
              <li>
                <b>U</b> indicates an unknown answer (as indicated by the solver
                or a time-out);{' '}
              </li>
              <li>
                <b>FE</b> indicates an error during flattening (time outs,
                memory exhaustion, ...);{' '}
              </li>
              <li>
                <b>E</b> indicates an runtime error while solving the problem;
                <br />
              </li>
              <li>
                <b>I</b> indicates an incorrect answer.{' '}
              </li>
            </ul>
            <p>Incorrect answers:</p>
            <ul>
              <li>
                {' '}
                jacop returns incorrectly unsatisfiable on the ghoulomb
                instances.{' '}
              </li>
              <li>
                {' '}
                jacop returns &ldquo;better than optimal&rdquo; solutions on
                some depot-placement instances.{' '}
              </li>
              <li>
                scip returns immediately and incorrectly unsatisfiable on
                filters (this behavior is observed whenever scip is provided
                with an incorrect fzn file however other solvers were able to
                parse the fzn generated for scip).{' '}
              </li>
            </ul>
            <p>Errors:</p>
            <ul>
              <li>
                {' '}
                cplex and scip abort during flattening on wwtp while trying to
                get bounds on unbounded int variables.{' '}
              </li>
              <li>
                {' '}
                cplex and scip abort during flattening on solbat with a
                segmentation fault.{' '}
              </li>
              <li>
                {' '}
                cplex abort during flattening with time-outs or memory
                exhaustion on ghoulomb and rcpsp_max{' '}
              </li>
              <li>
                {' '}
                fzn2smt_free abort abort on bacp-16, ghoulomb and rcpsp_max with
                an out of memory Java exception.{' '}
              </li>
              <li>
                Unknown answers from fzntini_free on ghoulomb and rcpsp_max
                instances were mostly due to memory alloc errors, probably due
                to memory exhaustion.{' '}
              </li>
            </ul>
            <h3>Selection:</h3> Select a list of solvers and benchmarks and
            click on &ldquo;Compute Results&rdquo; to score the solvers against
            each other on the selected benchmarks. The entrants for each of the
            fd search, free search and parallel search categories can be
            selected with the corresponding buttons.{' '}
            <table valign="top">
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
                  <td id="solver_selection" valign="top"></td>
                  <td valign="top"> Problem selection: </td>
                  <td id="problem_selection" valign="top"></td>
                </tr>
              </tbody>
            </table>
            <table border="2">
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <form name="score">
                      <input
                        name="compute_results"
                        onClick={() => fns.computeSelected()}
                        type="button"
                        value="Compute Results"
                      />
                    </form>
                  </td>
                  <td>
                    <form name="score">
                      <input
                        name="clear_selection"
                        onClick={() => fns.clearAll()}
                        type="button"
                        value="Clear Selection"
                      />
                    </form>
                  </td>
                  <td>
                    <form name="score">
                      <input
                        name="select_all"
                        onClick={() => fns.selectAll()}
                        type="button"
                        value="Select all problems"
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <form name="score">
                      <input
                        name="select_fd"
                        onClick={() => fns.selectFD()}
                        type="button"
                        value="Add FD category solvers"
                      />
                    </form>
                  </td>
                  <td>
                    <form name="score">
                      <input
                        name="select_free"
                        onClick={() => fns.selectFree()}
                        type="button"
                        value="Add Free category solvers"
                      />
                    </form>
                  </td>
                  <td>
                    <form name="score">
                      <input
                        name="select_par"
                        onClick={() => fns.selectPar()}
                        type="button"
                        value="Add Par category solvers"
                      />
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <h3> Summary:</h3>
            <table
              border="2"
              cellpading="20"
              cellSpacing="20"
              name="total_table"
              rules="groups"
            >
              <colgroup></colgroup>
              <colgroup></colgroup>
              <colgroup></colgroup>
              <thead>
                <tr>
                  <td>
                    <b>| Solver </b>
                  </td>
                  <td>
                    <b>| Time </b>
                  </td>
                  <td>
                    <b>| Score </b>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <p></p>
            <h3> Total per problem:</h3>
            <table
              border="2"
              cellpading="20"
              cellSpacing="20"
              name="problem_table"
              rules="groups"
            >
              <colgroup span="2"></colgroup>
              <colgroup span="1"></colgroup>
              <colgroup span="1"></colgroup>
              <thead>
                <tr>
                  <td>
                    <b>| Problem </b>
                  </td>
                  <td>
                    <b>| Solver </b>
                  </td>
                  <td>
                    <b>| Time </b>
                  </td>
                  <td>
                    <b>| Score </b>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <p></p>
            <h3> Individual results:</h3>
            <table
              border="2"
              cellpading="20"
              cellSpacing="20"
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
                    <b>| Problem </b>
                  </td>
                  <td>
                    <b>| Instance </b>
                  </td>
                  <td>
                    <b>| Solver </b>
                  </td>
                  <td>
                    <b>| Status </b>
                  </td>
                  <td>
                    <b>| Time </b>
                  </td>
                  <td>
                    <b>| Objective </b>
                  </td>
                  <td>
                    <b>| Score </b>
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
            <Globals year={2010} />
            <hr />
            <p>The files on this page are for MiniZinc version 1.1.</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
