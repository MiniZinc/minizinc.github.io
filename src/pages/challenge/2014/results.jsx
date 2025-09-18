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
        <title>MiniZinc - Challenge 2014 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
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
                G12/LazyFD. A Mercury FD solver using lazy clause
                generation.{' '}
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
            <Results year={2014} />
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
