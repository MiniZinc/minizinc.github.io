import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Globals } from '@/components/challenge/Globals'
import { Link } from '@/components/Link'
import { Results } from '@/components/challenge/Results'
import { info } from '@/data/challenge/info'
import Head from 'next/head'

export default function ResultsPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2024 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2024 Results</h2>

            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2024', '/challenge/2024'],
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
                <Link href="http://choco-solver.org">Choco-solver (CP)</Link> (
                <Link href="description_choco-solver__cp_.txt">
                  description
                </Link>
                ).
              </li>
              <li>
                <Link href="http://choco-solver.org">
                  Choco-solver (CP-SAT)
                </Link>{' '}
                (
                <Link href="description_choco-solver__cp-sat_.txt">
                  description
                </Link>
                ).
              </li>
              <li>
                <Link href="https://uu.diva-portal.org/smash/record.jsf?pid=diva2:1876143">
                  Gecode/Dexter
                </Link>{' '}
                (<Link href="description_gecode_dexter.txt">description</Link>).
              </li>
              <li>
                <Link href="http://www.constraint.org/en/izc_download/">
                  iZplus
                </Link>{' '}
                (<Link href="description_izplus.txt">description</Link>).
              </li>
              <li>
                <Link href="https://github.com/radsz/jacop">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>).
              </li>
              <li>
                <Link href="http://optimathsat.disi.unitn.it">
                  OptiMathSAT INT
                </Link>{' '}
                (<Link href="description_optimathsat.txt">description</Link>).
              </li>
              <li>
                <Link href="http://optimathsat.disi.unitn.it">
                  OptiMathSAT INT-SMT2
                </Link>{' '}
                (<Link href="description_optimathsat.txt">description</Link>).
              </li>
              <li>
                <Link href="http://optimathsat.disi.unitn.it">
                  OptiMathSAT BV
                </Link>{' '}
                (<Link href="description_optimathsat.txt">description</Link>).
              </li>
              <li>
                <Link href="https://developers.google.com/optimization/">
                  OR-Tools CP-SAT
                </Link>{' '}
                (<Link href="description_or-tools_cp-sat.txt">description</Link>
                ).
              </li>
              <li>
                <Link href="https://developers.google.com/optimization/">
                  OR-Tools CP-SAT LS
                </Link>{' '}
                (
                <Link href="description_or-tools_cp-sat_ls.txt">
                  description
                </Link>
                ).
              </li>
              <li>
                <Link href="http://picat-lang.org">PicatSAT</Link> (
                <Link href="description_picatsat.txt">description</Link>).
              </li>
              <li>
                <Link href="https://github.com/ConSol-Lab/pumpkin">
                  Pumpkin
                </Link>{' '}
                (<Link href="description_pumpkin.txt">description</Link>).
              </li>
              <li>
                <Link href="https://sicstus.sics.se">SICStus Prolog</Link> (
                <Link href="description_sicstus_prolog.txt">description</Link>).
              </li>
              <li>
                <Link href="https://github.com/informarte/yuck">Yuck</Link> (
                <Link href="description_yuck.txt">description</Link>).
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
                2.10.11.
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
                11.0.3.
              </li>
              <li>
                MZN/HiGHS (
                <Link href="description_mzn-highs.txt">description</Link>
                ). Translates to MILP, uses{' '}
                <Link href="https://highs.dev/">HiGHS</Link> version 1.7.2.
              </li>
              <li>
                MZN/SCIP (
                <Link href="description_mzn-scip.txt">description</Link>).
                Translates to MILP, uses{' '}
                <Link href="https://www.scipopt.org/">SCIP</Link> version 9.1.0.
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2024/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
            </p>

            <Results year="2024" />

            <h3>Global constraint per model</h3>

            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC, respectively, indicate whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2024} />
            <hr />

            <p>
              The files on this page are for MiniZinc version{' '}
              {info[2024].minizinc}.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
