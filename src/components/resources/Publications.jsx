import { Container } from '@/components/Container'
import { Link } from '@/components/Link'
import {
  faBook,
  faGraduationCap,
  faScroll,
} from '@fortawesome/free-solid-svg-icons'
import { Resources } from '@/components/resources/Resources'

const resources = [
  {
    name: 'Research Papers',
    url: '/publications',
    description:
      'Research papers on the design, implementation, and applications of MiniZinc.',
    action: 'View publications',
    icon: faScroll,
  },
  {
    name: 'Building Decision Support Systems using MiniZinc',
    url: 'https://www.springer.com/gp/book/9783030417314',
    description:
      'This book by Mark Wallace introduces readers to the principles of intelligent decision support systems (IDSS) and how to build them with MiniZinc.',
    action: 'Read the book',
    icon: faBook,
  },
]

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-title"
      className="mt-6 mb-12"
    >
      <Container>
        <h2
          id="publications-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Publications
        </h2>
        <p className="my-6">
          We have published a number of papers about the design and
          implementation of MiniZinc, and many other researchers have used
          MiniZinc for their work.
        </p>
        <Resources resources={resources} />
      </Container>
    </section>
  )
}
