import { Container } from '@/components/Container'
import { Link } from '@/components/Link'
import { documentation } from '@/utils/links'
import {
  faBookBookmark,
  faBookOpen,
  faStairs,
} from '@fortawesome/free-solid-svg-icons'
import { Resources } from '@/components/resources/Resources'

const resources = [
  {
    name: 'MiniZinc Tutorial',
    url: `${documentation('part_2_tutorial.html')}`,
    description:
      'A step-by-step introduction to modelling with MiniZinc, from basic syntax and simple modelling techniques to more advanced topics.',
    action: 'Read the tutorial',
    icon: faStairs,
  },
  {
    name: 'MiniZinc User Manual',
    url: `${documentation('part_3_user_manual.html')}`,
    description:
      'Manual for the MiniZinc command line tools, the MiniZinc IDE, and additional tools.',
    action: 'Read the user manual',
    icon: faBookOpen,
  },
  {
    name: 'MiniZinc Reference Manual',
    url: `${documentation('part_4_reference.html')}`,
    description:
      'Standard Library documentation, the specification of the MiniZinc language, and how to interface a solver with MiniZinc.',
    action: 'Read the reference manual',
    icon: faBookBookmark,
  },
]

export function Handbook() {
  return (
    <section
      id="handbook"
      aria-labelledby="handbook-title"
      className="mb-12 mt-6"
    >
      <Container>
        <h2
          id="handbook-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Documentation
        </h2>
        <p className="my-6">
          The <Link href={documentation()}>MiniZinc Handbook</Link> contains all
          the documentation for the MiniZinc language and system.
          <br />
          Also available as a{' '}
          <Link href={documentation('MiniZinc Handbook.pdf')}>
            printable PDF
          </Link>
          .
        </p>
        <Resources resources={resources} />
        <p className="mt-4">
          The tutorial is also available in{' '}
          <Link href={documentation('index.html', 'latest', 'chi')}>
            Chinese
          </Link>
          ! MiniZinc手册
          <Link href={documentation('index.html', 'latest', 'chi')}>
            中文版
          </Link>
          已经提供 (
          <Link href={documentation('MiniZinc Handbook.pdf', 'latest', 'chi')}>
            PDF version
          </Link>
          )
        </p>
      </Container>
    </section>
  )
}
