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
        <title>MiniZinc - Challenge 2018 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2018 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2018', '/challenge/2018'],
                'Results',
              ]}
            />
            <p>
              CP 2018 presentation slides of the MiniZinc Challenge 2018 will be
              available here after the announcement. (
              <Link href="./challenge_results2018.pdf">results</Link>). Note
              that the slides do not contain the amendments of the results.
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
                <Link href="https://github.com/concrete-cp/concrete">
                  Concrete
                </Link>{' '}
                (<Link href="description_concrete.txt">description</Link>). A CP
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
                <Link href="https://developers.google.com/optimization/">
                  OR-Tools
                </Link>{' '}
                (<Link href="description_or-tools.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://oscarlib.bitbucket.org/cbls.html">
                  OscaR/CBLS
                </Link>{' '}
                (<Link href="description_oscar.txt">description</Link>). A
                constraint-based local search solver written in Scala.{' '}
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat SAT</Link> (
                <Link href="description_picat-sat.txt">description</Link>).{' '}
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
                <Link href="description_sunny-cp-less.txt">description</Link>).
                A variant of sunny-cp only using Choco, Gecode, HaifaCSP, JaCoP,
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
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
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
                MZN/CPLEX. Translates to MILP (
                <Link href="description_mzn-cplex.txt">description</Link>), uses{' '}
                <Link href="http://www-01.ibm.com/software/commerce/optimization/cplex-optimizer/index.html">
                  IBM ILOG CPLEX Optimizer
                </Link>{' '}
                version 12.6.0.0.{' '}
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
              <Link href="/challenge/2018/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
            </p>
            <p>
              Furthermore, entries in the FD search category (Gecode, JaCoP,
              SICStus Prolog) were automatically included in the free search
              category, while entries in the free search category (Chuffed,
              Concrete, HaifaCSP, OscaR/CBLS, Yuck and promoted FD entries
              except Gecode) were automatically included in the parallel search
              category. Lastly, all entries in the parallel search category and
              promoted entries into that category were automatically included in
              the open search category.
            </p>
            <h3>Amendments of Results - 20 September 2018</h3> Unfortunately,
            there was an issue with the re-implemented solution checker this
            year. The checker considered redundant and symmetry breaking
            constraints in the model for checking the correctness of the
            solvers&apos; solutions leading to false positives. The issue has
            been addressed now and all solutions of each solver were re-checked
            leading to following changes.{' '}
            <ul>
              <li>
                {' '}
                The solvers OscaR/CBLS and Yuck pass all previously-failed tests
                (24 instances each).{' '}
              </li>
              <li>
                {' '}
                The solvers MZN/Cbc and MZN/CPLEX pass three previously-failed
                instances each.{' '}
              </li>
              <li>
                {' '}
                The solver sunny-cp<sup>—</sup> fails one previously-passed
                instance.{' '}
              </li>
            </ul>{' '}
            Due to these changes, there were changes in the rankings, which also
            affected the Bronze medal in the free search category. The solver
            Choco 4 overtook the solver HaifaCSP in this category. The Judges
            were informed and decided to jointly award the Bronze medal to both
            solvers, because the solvers&apos; scores differ only by a small
            margin and the issue with the checker was out of their control. We
            deeply regret and apologise for our mistake and thank to Gustav
            Björdal and Michael Marte, who independently reported us about this
            mistake.
            <Results year={2018}/>
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge. In addition, the columns RC
              and SBC, respectively, indicate whether the model contains
              redundant or/and symmetry breaking constraints.
            </p>
            <Globals year={2018} />
            <hr />
            <p>The files on this page are for MiniZinc version 2.1.7.</p>
            <div id="footer">
              {' '}
              ©<Link href="http://data61.csiro.au">Data61, CSIRO</Link>,
              2018{' '}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
