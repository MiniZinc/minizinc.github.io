import { Container } from '@/components/Container'
import { faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { Resources } from '@/components/resources/Resources'

const resources = [
  {
    name: 'MiniZinc Python',
    url: 'https://python.minizinc.dev',
    description: 'Access all MiniZinc functionality directly from Python.',
    action: 'Get started',
    icon: faPython,
  },
  {
    name: `MiniZinc JavaScript`,
    url: 'https://js.minizinc.dev',
    description:
      'Use MiniZinc completely within your web browser, or server-side using NodeJS.',
    action: 'Get started',
    icon: faJs,
  },
]

export function Integrations() {
  return (
    <section
      id="integrations"
      aria-labelledby="integrations-title"
      className="mt-6 mb-12"
    >
      <Container>
        <h2
          id="integrations-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Integrations
        </h2>
        <p className="my-6">
          MiniZinc can be used from your favourite programming language through
          our official language integrations.
        </p>
        <Resources resources={resources} />
      </Container>
    </section>
  )
}
