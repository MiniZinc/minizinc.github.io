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
        <title>MiniZinc - Challenge 2017 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2017 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2017', '/challenge/2017'],
                'Results',
              ]}
            />
            <p>
              CP 2017 presentation slides of the MiniZinc Challenge 2017 (
              <Link href="./challenge_results2017.pdf">results</Link>).
            </p>
            <h3>Entrants</h3>
            <p>
              The entrants for this year (with their descriptions, when
              provided):
            </p>
            <ul>
              <li>
                <Link href="http://choco.emn.fr">Choco 4</Link> (
                <Link href="description_choco4.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://choco.emn.fr">Choco 5</Link> (see Choco 4 for
                description). A Java FD solver.{' '}
              </li>
              <li>
                {' '}
                Concrete (
                <Link href="description_concrete.txt">description</Link>). A CP
                system written in Scala.{' '}
              </li>
              <li>
                <Link href="http://ie.technion.ac.il/~ofers/HCSP/index.html">
                  HaifaCSP
                </Link>{' '}
                (<Link href="description_haifacsp.txt">description</Link>). A
                C++ FD solver using SAT solving algorithms.{' '}
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
                <Link href="https://github.com/ehebrard/Mistral-2.0">
                  Mistral 2.0
                </Link>{' '}
                (<Link href="description_mistral.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">
                  OR-Tools CP
                </Link>{' '}
                (<Link href="description_or-tools-cp.txt">description</Link>
                ).{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">
                  OR-Tools LCG
                </Link>{' '}
                (<Link href="description_or-tools-lcg.txt">description</Link>
                ).{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">
                  OR-Tools LCG Core
                </Link>{' '}
                (
                <Link href="description_or-tools-lcg-core.txt">
                  description
                </Link>
                ).{' '}
              </li>
              <li>
                <Link href="http://oscarlib.bitbucket.org/cbls.html">
                  OscaR/CBLS
                </Link>{' '}
                (<Link href="description_oscar.txt">description</Link>). A
                constraint-based local search solver written in Scala.{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat CP</Link> (
                <Link href="description_picat-cp.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat SAT</Link> (
                <Link href="description_picat-sat.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="https://sicstus.sics.se">SICStus Prolog</Link> (
                <Link href="description_sicstus.txt">description</Link>). A
                Prolog development environment with a FD constraint programming
                module.{' '}
              </li>
              <li>
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>
                <sup>—</sup> (see sunny-cp for description). A variant of
                sunny-cp only using Choco, Gecode, HaifaCSP, JaCoP, iZplus,
                MinisatID, Mistral, Opturion CPX, OR-Tools, Picat.{' '}
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
                {' '}
                G12/FD. A Mercury FD solver (the G12 FlatZinc interpreter&apos;s
                default solver).{' '}
              </li>
              <li>
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                {' '}
                LCG-Glucose (
                <Link href="description_lcg-glucose.txt">description</Link>). A
                C++ FD solver using lazy clause generation and it is based on
                Glucose 3.01 with modification along the lines of Chuffed and
                CPX.{' '}
              </li>
              <li>
                {' '}
                MZN/Cbc. Translates to MILP (
                <Link href="description_mzn-cbc.txt">description</Link>), uses{' '}
                <Link href="https://projects.coin-or.org/Cbc">Cbc</Link> version
                2.9.{' '}
              </li>
              <li>
                {' '}
                MZN/Gurobi. Translates to MILP (
                <Link href="description_mzn-gurobi.txt">description</Link>),
                uses <Link href="http://www.gurobi.com/">Gurobi Optimizer</Link>{' '}
                version 7.5.1.{' '}
              </li>
              <li>
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>{' '}
                (<Link href="description_sunny-cp.txt">description</Link>). A
                multi-threaded CP portfolio solver using 13 different CP and MIP
                solvers incl. Chuffed, G12 solvers, Gecode.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2017/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
            </p>
            <p>
              Furthermore, entries in the FD search category (Gecode, JaCoP,
              Picat CP, SICStus Prolog) were automatically included in the free
              search category, while entries in the free search category (Choco
              5, Chuffed, Concrete, G12/FD, HaifaCSP, Mistral, OR-Tools LCG,
              OR-Tools LCG Core, OscaR/CBLS, Picat SAT, Yuck and promoted FD
              entries except Gecode) were automatically included in the parallel
              search category. Lastly, all entries in the parallel search
              category and promoted entries into that category were
              automatically included in the open search category.
            </p>
            <Results year={2017} />
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC, respectively, indicate whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2017} />
            <hr />
            <p>The files on this page are for MiniZinc version 2.1.5.</p>
            <div id="footer">
              {' '}
              ©<Link href="http://data61.csiro.au">Data61, CSIRO</Link>,
              2017{' '}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
