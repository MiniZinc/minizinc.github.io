import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2020 Call for Problems</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>Call for Problem Submission for the MiniZinc Challenge 2020</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2020', '/challenge/2020'],
                'Call for Problems',
              ]}
            />
            <p>
              The MiniZinc Challenge is an annual solver competition in the
              Constraint Programming (CP) community held before the
              International Conference on Principles and Practice of Constraint
              Programming. The MiniZinc Challenge 2020 is seeking interesting
              problem sets on which various constraint solving technologies
              should be compared on this year. Everyone is allowed to submit
              problems regardless of whether they are an entrant in the
              challenge.
            </p>
            <p></p>
            <h3>Important dates and deadlines:</h3>
            <ul>
              <li>Problem submission open: now </li>
              <li>Problem submission deadline: Fri, 24 July 2020 </li>
            </ul>
            <h3>Problem submission</h3>
            <ul>
              <li>
                Send an email with the subject line “[MZNC20] benchmark” to
                mzn-challenge &lsquo;at&rsquo; lists.csiro.au{' '}
              </li>
            </ul>
            <p>
              There are no restrictions on the kind of problems, but ideally
              they should be of interesting nature such as practice-related
              problems and puzzles etc. Problem submissions with real-world
              instances are particulary welcome. Models for the 2020 challenge
              can only use integer and Boolean variables.
            </p>
            <p>
              As in the previous years, we anticipate local search entrants in
              this years challenge again. Ideally a MiniZinc model should wrap
              symmetry breaking constraints in a predicate
              &ldquo;symmetry_breaking_constraint&rdquo; defined as
            </p>
            <pre>predicate symmetry_breaking_constraint(var bool: c) = c; </pre>{' '}
            and wrap redundant constraints in a predicate
            &ldquo;redundant_constraint&rdquo; defined similarly as{' '}
            <pre>predicate redundant_constraint(var bool: c) = c; </pre> The aim
            of this wrapping is that local search solvers can &ldquo;turn
            off&rdquo; symmetry breaking and redundant constraints, in order to
            improve solving.{' '}
            <p>
              The problem submitter provides a MiniZinc model of the problem and
              at least 20 instances ranging from easy-to-solve to hard-to-solve
              for an “ordinary” CP system. In addition, there should be at least
              one &ldquo;toy&rdquo; instance for testing purposes. It is
              strongly encouraged to make use of the global constraint
              definitions provided in the MiniZinc 2.4 distribution. If you have
              an instance generator, we are more than happy to receive it.
              Please, follow the links below for submission instructions and
              requirements.
            </p>
            <p>
              <Link href="http://www.minizinc.org/challenge/2020">
                www.minizinc.org/challenge/2020
              </Link>
              <br />
              <Link href="http://www.minizinc.org/challenge/2020/rules">
                www.minizinc.org/challenge/2020/rules
              </Link>
              <br />
            </p>
            <p></p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
