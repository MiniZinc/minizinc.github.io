import { Container } from '@/components/Container'
import { Link } from '@/components/Link'

export function Issues() {
  return (
    <Container>
      <section id="issues" aria-labelledby="issues-title" className="mb-6">
        <h2
          id="issues-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Reporting issues
        </h2>
        <p className="my-2 max-w-prose leading-7">
          We are grateful for feedback on MiniZinc, including bug reports,
          feature requests and ideas for improvements.
        </p>
        <p className="my-2 max-w-prose leading-7">
          For general discussions about MiniZinc, please use the{' '}
          <Link href="https://groups.google.com/forum/#!forum/minizinc">
            discussion forum
          </Link>
          .
        </p>
        <p className="my-2 max-w-prose leading-7">
          To report an issue, please use the following issue trackers:
        </p>
        <ul className="mx-2 mt-2 list-inside list-disc leading-relaxed">
          <li>
            <Link href="https://github.com/minizinc/libminizinc/issues">
              MiniZinc compiler and documentation issues
            </Link>
          </li>
          <li>
            <Link href="https://github.com/minizinc/MiniZincIDE/issues">
              MiniZinc IDE issues
            </Link>
          </li>
          <li>
            <Link href="https://github.com/minizinc/minizinc.github.io/issues">
              MiniZinc web site issues
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  )
}
