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
        <title>MiniZinc - Challenge 2015 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2015 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2015', '/challenge/2015'],
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
                <Link href="http://dtai.cs.kuleuven.be/krr/software/minisatid">
                  MinisatID-MP
                </Link>{' '}
                (<Link href="description_minisatid-mp.txt">description</Link>).
                A variant of MinisatID using a mulit-precision library.{' '}
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
                <Link href="description_opturion-cpx.txt">description</Link>). A
                FD solver using Lazy clause generation.{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">OR-Tools</Link> (
                <Link href="description_or-tools.txt">description</Link>).{' '}
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
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>
                <sup>—</sup> (
                <Link href="description_sunny-cp-minus.txt">description</Link>).
                A variant of sunny-cp only using Opturion CPX, OR-Tools, iZplus,
                Choco 3, Gecode, MinisatID, and HaifaCSP (HCSP).{' '}
              </li>
              <li>
                <Link href="https://de.linkedin.com/pub/michael-marte/6/353/b21">
                  YACS
                </Link>{' '}
                (<Link href="description_yacs.txt">description</Link>). A local
                search solver written in Scala.{' '}
              </li>
            </ul>
            <p>
              In addition, the challenge organisers entered the following
              FlatZinc and MiniZinc implementations:
            </p>
            <ul>
              <li>
                <Link href="https://github.com/geoffchu/chuffed">chuffed</Link>{' '}
                (<Link href="description_chuffed.txt">description</Link>). A C++
                FD solver using lazy clause generation.{' '}
              </li>
              <li>
                {' '}
                MZN/CPLEX. Translates to MIP, uses{' '}
                <Link href="http://www-01.ibm.com/software/commerce/optimization/cplex-optimizer/index.html">
                  CPLEX Optimizer
                </Link>{' '}
                version 12.6.1.{' '}
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
                MZN/Gurobi. Translates to MIP, uses{' '}
                <Link href="http://www.gurobi.com/">Gurobi Optimizer</Link>{' '}
                version 6.0.4.{' '}
              </li>
              <li>
                <Link href="https://github.com/CP-Unibo/sunny-cp">
                  sunny-cp
                </Link>{' '}
                (<Link href="description_sunny-cp.txt">description</Link>). A
                multi-threaded CP portfolio solver using 13 different CP and MIP
                solvers incl. chuffed, G12 solvers, Gecode.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2015/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
              Furthermore, entries in the FD search category (JaCoP) were
              automatically included in the free search category, while entries
              in the free search category (Concrete, chuffed, G12/FD, MinisatID,
              MinisatID-MP, Mistral, Opturion CPX, OscaR/CBLS, Picat CP, Picat
              SAT and promoted FD entries) were automatically included in the
              parallel search category. Lastly, all entries in the parallel
              search category and promoted entries into that category were
              automatically included in the open search category.
            </p>
            <Results year={2015} />
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC respectively indicates whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2015} />
            <hr />
            <p>The files on this page are for MiniZinc version 2.0.4.</p>
            <div id="footer">
              {' '}
              ©<Link href="http://www.nicta.com.au">NICTA</Link>, 2015{' '}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
