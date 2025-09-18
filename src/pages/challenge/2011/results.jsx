import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

import { Globals } from '@/components/challenge/Globals'
import { Results } from '@/components/challenge/Results'

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
            <Results year={2011}>
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
            </Results>
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
