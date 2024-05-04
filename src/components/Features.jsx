import { Container } from '@/components/Container'
import {
  faBook,
  faCode,
  faGraduationCap,
  faPlug,
  faScrewdriverWrench,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

const features = [
  {
    name: 'High-level language',
    description:
      'Model constraint satisfaction and optimisation problems using readable, intuitive logical constructs, with full type safety.',
    icon: faCode,
  },
  {
    name: 'Solver independent',
    description:
      'Run the same model using a variety of different solver technologies, without being locked into a particular solver.',
    icon: faShuffle,
  },
  {
    name: 'Pre-defined constraints',
    description:
      'MiniZinc features a large library of pre-defined constraints, making modelling complex relationships simple.',
    icon: faBook,
  },
  {
    name: 'Fully featured development environment',
    description:
      'Use the MiniZinc IDE to write and run models, visualise search and solutions, profile performance and more.',
    icon: faScrewdriverWrench,
  },
  {
    name: 'In-depth learning materials',
    description:
      'MiniZinc has comprehensive documentation, including beginner tutorials, advanced courses, a user manual, and library documentation.',
    icon: faGraduationCap,
  },
  {
    name: 'Integrate MiniZinc into your project',
    description:
      'MiniZinc can be embedded into Python and JavaScript programs, and can even be used entirely from within the browser.',
    icon: faPlug,
  },
]

export function Features({ className, ...props }) {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className={clsx(className, 'py-20 sm:py-32')}
      {...props}
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            id="features-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Why choose MiniZinc?
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
            >
              <div className="text-xl text-primary-dark">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
