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
        <title>MiniZinc - Challenge 2014 Call for Problems</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            {' '}
            <h2>Call for Problem Submission for the MiniZinc Challenge 2014</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2014', '/challenge/2014'],
                'Call for Problems',
              ]}
            />
            <p>
              The MiniZinc Challenge is an annual solver competition in the
              Constraint Programming (CP) community held before the
              International Conference on Principles and Practice of Constraint
              Programming. The MiniZinc Challenge 2014 is seeking interesting
              problem sets on which various constraint solving technologies
              should be compared on this year. Everyone is allowed to submit
              problems regardless of whether they are an entrant in the
              challenge.
            </p>
            <p></p>
            <h3>Important dates and deadlines:</h3>
            <ul>
              <li>Problem submission open: now </li>
              <li>
                Problem submission deadline: <strong>Fri, 6 June 2014</strong>
              </li>
            </ul>
            <h3>Problem submission</h3>
            <ul>
              <li>
                Send an email with the subject line “[MZNC14] benchmark” to
                mzn-challenge &lsquo;at&rsquo; minizinc.org{' '}
              </li>
            </ul>
            <p>
              There are no restrictions on the kind of problems, but ideally
              they should be of interesting nature such as practice-related
              problems and puzzles etc. Problem submissions with real-world
              instances are welcome warmly. Models for the 2014 challenge can
              only use integer and Boolean variables.
            </p>
            <p>
              The problem submitter provides a MiniZinc model of the problem and
              20 instances ranging from easy-to-solve to hard-to-solve for an
              “ordinary” CP system. It is strongly encouraged to make use of the
              global constraint definitions provided in the MiniZinc 1.6
              distribution. Please, follow the links below for submission
              instructions and requirements.
            </p>
            <p>
              <Link href="http://www.minizinc.org/challenge/2014">
                www.minizinc.org/challenge/2014
              </Link>
              <br />
              <Link href="http://www.minizinc.org/challenge/2014/rules">
                www.minizinc.org/challenge/2014/rules
              </Link>
            </p>
            <p></p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
