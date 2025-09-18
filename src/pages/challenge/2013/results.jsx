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
        <title>MiniZinc - Challenge 2013 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2013 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2013', '/challenge/2013'],
                'Results',
              ]}
            />
            <h3>Entrants</h3>
            {/*<p>Presentation of the MiniZinc Challenge 2013 (coming soon) (<Link href="./challenge_results2013.pdf">results</Link>)</p>*/}
            <ul>
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
              <li> Numberjack. A portfolio solver. </li>
              <li>
                <Link href="http://www.opturion.com/cpx.html">
                  Opturion CPX
                </Link>{' '}
                (<Link href="description_opturion_cpx.txt">description</Link>
                ).{' '}
              </li>
              <li>
                <Link href="http://code.google.com/p/or-tools">OR-Tools</Link> (
                <Link href="description_or_tools.txt">description</Link>).{' '}
              </li>
              <li>
                <Link href="picat-lang.org/projects.html">Picat</Link> (
                <Link href="description_picat.txt">description</Link>).{' '}
              </li>
            </ul>
            <Results year={2013} />
            <h3>Global constraint per model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge.
            </p>
            <Globals year={2013} />
            <hr />
            <p>The files on this page are for MiniZinc version 1.6.</p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
