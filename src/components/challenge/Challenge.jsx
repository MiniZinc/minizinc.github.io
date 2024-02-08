import { Container } from '@/components/Container'
import { Link } from '@/components/Link'

export function Challenge() {
  return (
    <section id="challenge" aria-labelledby="challenge-title" className="py-6">
      <Container>
        <h2
          id="challenge-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          The MiniZinc Challenge
        </h2>
        <p className="mt-4 leading-7">
          The MiniZinc Challenge is an annual competition of constraint
          programming solvers on a variety of benchmarks. It has been held every
          year since 2008, with the winners being announced at the annual{' '}
          <Link href="http://www.a4cp.org/events/cp-conference-series">
            International Conference on Principles and Practice of Constraint
            Programming
          </Link>
          .
        </p>
        <p className="mt-4 leading-7">
          If you use benchmarks from the MiniZinc Challenge in your publication
          or you want to have reference for the challenge, please refer to at
          least one of following publications.
        </p>

        <ul className="ml-4 mt-4 list-inside list-disc leading-relaxed">
          <li>
            Peter J. Stuckey, T. Feydy, A. Schutt, G. Tack, J. Fischer (2014).
            The MiniZinc Challenge 2008-2013. AI Magazine 35 (2), 55-60.
          </li>

          <li>
            Peter J. Stuckey, R. Becket, J. Fischer (2010). Philosophy of the
            MiniZinc challenge. Constraints 15 (3), 307-316.
          </li>
        </ul>

        <p className="mt-4 leading-7">
          A list of all problems and MiniZinc globals used in previous
          challenges is available <Link href="/challenge/globals">here</Link>.
        </p>
      </Container>
    </section>
  )
}
