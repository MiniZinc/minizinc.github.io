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
        <title>MiniZinc - Challenge 2012 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2012 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2012', '/challenge/2012'],
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
                <Link href="http://choco.emn.fr">Choco</Link> (
                <Link href="description_choco.txt">description</Link>). A Java
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
                <Link href="http://www.gecode.org">Gecode</Link> (
                <Link href="description_gecode.txt">description</Link>). A C++
                FD solver.{' '}
              </li>
              <li>
                <Link href="http://products.ndis.jp/iz/g12distrib.html">
                  izplus
                </Link>{' '}
                (<Link href="description_izplus.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://jacop.osolpro.com">JaCoP</Link> (
                <Link href="description_jacop.txt">description</Link>). A Java
                FD solver.{' '}
              </li>
              <li>
                {' '}
                Mistral 2.0 (
                <Link href="description_mistral.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">OR-Tools</Link> (
                <Link href="description_or_tools.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="http://dtai.cs.kuleuven.be/krr/software/minisatid">
                  MinisatID
                </Link>{' '}
                (<Link href="description_minisatid.txt">description</Link>
                ).{' '}
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
                version 2.7.7.{' '}
              </li>
              <li>
                {' '}
                G12/CPLEX. Translates to MIP, uses{' '}
                <Link href="http://www-01.ibm.com/software/integration/optimization/cplex-optimizer/">
                  CPLEX
                </Link>{' '}
                version 12.4.{' '}
              </li>
              <li>
                {' '}
                G12/Gurobi. Translates to MIP, uses{' '}
                <Link href="http://www.gurobi.com"> Gurobi Optimizer</Link>{' '}
                version 5.0.1.{' '}
              </li>
            </ul>
            <p>
              As per the challenge{' '}
              <Link href="/challenge/2012/rules">rules</Link>, these entries are
              not eligible for prizes, but do modify the scoring results.
              Furthermore, entries in the FD search category were automatically
              included in the free search category, while entries in the free
              search category (including promoted FD entries) were automatically
              included in the parallel search category.
            </p>
            <Results year={2012} />
            {/*--------------------------------------------------------------------*/}
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge.
            </p>
            <Globals year={2012} />
            <p>
              A gzipped tarball containing all of the problems used in this
              year&apos;s MiniZinc challenge is available{' '}
              <Link href="mznc12-problems.tar.gz">here</Link>.{' '}
              {/*--------------------------------------------------------------------*/}
            </p>
            <hr />
            <p>The files on this page are for MiniZinc version 1.5.</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
