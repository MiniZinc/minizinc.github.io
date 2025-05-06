import { Container } from '@/components/Container'
import { faArchive, faLink, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { Resources } from '@/components/resources/Resources'

const resources = [
  {
    name: 'Benchmarks',
    url: 'https://github.com/minizinc/minizinc-benchmarks',
    description: 'A collection of MiniZinc benchmarks instances',
    action: 'View benchmarks',
    icon: faArchive,
  },
  {
    name: `Hakan Kjellerstrand's MiniZinc Page`,
    url: 'http://www.hakank.org/minizinc/',
    description:
      'A page with MiniZinc models and global constraint definitions.',
    action: 'View site',
    icon: faLink,
  },
  {
    name: `MiniZinc Workshop 2011`,
    url: 'https://www.minizinc.org/workshop2011/workshop.html',
    description: 'Homepage for the 1st International Workshop on MiniZinc.',
    action: 'View site',
    icon: faToolbox,
  },
]

export function Others() {
  return (
    <section id="others" aria-labelledby="others-title" className="mt-6 mb-12">
      <Container>
        <h2
          id="others-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Other resources
        </h2>
        <p className="my-6">
          There are many other MiniZinc resources which may be of interest.
        </p>
        <Resources resources={resources} />
      </Container>
    </section>
  )
}
