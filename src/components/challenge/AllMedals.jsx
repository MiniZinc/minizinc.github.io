import { Container } from '@/components/Container'
import { medals } from '@/data/challenge'
import { Link } from '@/components/Link'
import { Medals } from './Medals'

export function AllMedals() {
  return (
    <Container>
      <section id="medals" aria-labelledby="medals-title" className="py-6">
        <h3
          id="medals-title"
          className="text-2xl font-medium tracking-tight text-gray-900"
        >
          Medals
        </h3>
        {Object.keys(medals)
          .sort((a, b) => b.localeCompare(a))
          .map((year) => (
            <div className="mt-6" key={year}>
              <h4 className="text-xl tracking-tight">
                <Link href={`/challenge/${year}/results`}>
                  MiniZinc Challenge {year}
                </Link>
              </h4>
              <Medals className="mt-4" medals={medals[year]} />
            </div>
          ))}
      </section>
    </Container>
  )
}
