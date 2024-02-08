import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2018 Call for Participation</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            {' '}
            <h2>
              Call for Problem Participation to the MiniZinc Challenge 2018
            </h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2018', '/challenge/2018'],
                'Call for Participation',
              ]}
            />{' '}
            =====================================================================
            <br />
            <h4>CALL FOR PARTICIPATION</h4>
            <p>
              <strong>The MiniZinc Challenge 2018</strong>
              <br />
              <Link href="http://www.minizinc.org/challenge/2018">
                http://www.minizinc.org/challenge/2018
              </Link>
            </p>
            <h4>Important Dates</h4>
            <ul>
              <li>REGISTRATION opens: Now.</li>
              <li>Initial submission round begins: Sun, 15 July 2018.</li>
              <li>Initial submission round ends: Sat, 21 July 2018.</li>
              <li>FINAL SUBMISSION: Sat, 28 July 2018.</li>
            </ul>
            <p>Announcement of results at CP 2018: 28 - 31 August 2018.</p>{' '}
            =====================================================================
            <br />
            <p>
              The aim of the MiniZinc Challenge is to start to compare various
              constraint solving technology on the same problems sets. The focus
              is on finite domain propagation solvers. An auxiliary aim is to
              build up a library of interesting problem models, which can be
              used to compare solvers and solving technologies.
            </p>
            <p>
              Entrants to the challenge provide a FlatZinc solver and global
              constraint definitions specialized for their solver. Each solver
              is run on 100 MiniZinc model instances. We run either (A) the
              translator mzn2fzn on the MiniZinc model and instance using the
              provided global constraint definitions to create a FlatZinc file,
              which is taken as input to the provided solver or (B) the provided
              solver directly on MiniZinc model and instance. Points are awarded
              for solving problems, speed of solution, and goodness of solutions
              (for optimization problems).
            </p>
            <p>
              To register for the challenge send an email with the following
              subject line
            </p>
            <pre>[MZNC18] registration </pre> to{' '}
            <pre>mzn-challenge &lsquo;at&rsquo; lists.csiro.au </pre>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
