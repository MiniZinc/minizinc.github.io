import { Container } from '@/components/Container'
import { Link } from '@/components/Link'
import {
  faGraduationCap,
  faMagnifyingGlass,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { Resources } from '@/components/resources/Resources'

const resources = [
  {
    name: 'Basic Modeling for Discrete Optimization',
    url: 'https://www.coursera.org/learn/basic-modeling',
    description:
      'Learn an entirely new way to think about solving challenging problems by stating the problem using MiniZinc, and letting the tool chain do the rest.',
    action: 'Enrol in the course',
    icon: faUserGraduate,
  },
  {
    name: 'Advanced Modeling for Discrete Optimization',
    url: 'https://www.coursera.org/learn/advanced-modeling',
    description:
      'This course explores debugging, writing predicates, and tackling advanced scheduling and packing problems.',
    action: 'Enrol in the course',
    icon: faGraduationCap,
  },
  {
    name: 'Solving Algorithms for Discrete Optimization',
    url: 'https://www.coursera.org/learn/solving-algorithms-discrete-optimization',
    description:
      'Learn more about the solving technologies used to solve challenging problems, and how MiniZinc models are transformed to be executable by the underlying solver.',
    action: 'Enrol in the course',
    icon: faMagnifyingGlass,
  },
]

export function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="my-6">
      <Container>
        <h2
          id="courses-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Courses
        </h2>
        <p className="my-6">
          MiniZinc has an extensive online course available on{' '}
          <Link href="https://www.coursera.org">Coursera</Link> for free.
        </p>
        <Resources resources={resources} />
      </Container>
    </section>
  )
}
