import { Container } from '@/components/Container'
import { current } from '@/data/challenge'
import { Link } from '@/components/Link'
import { info } from '@/data/challenge/info'

export function CurrentChallenge() {
  return (
    <Container>
      <section id="medals" aria-labelledby="medals-title" className="py-6">
        <h3
          id="medals-title"
          className="text-2xl font-medium tracking-tight text-gray-900"
        >
          Current Challenge
        </h3>
        <div className="mt-6">
          <Link
            className="text-xl tracking-tight"
            href={`/challenge/${current}`}
          >
            MiniZinc Challenge {current}
          </Link>
          <h4
            id="announcements"
            className="mt-4 text-xl font-medium tracking-tight text-gray-900"
          >
            Announcements
          </h4>
          <ul className="mt-4 ml-4 list-inside list-disc leading-relaxed">
            {info[current].announcements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h4
            id="dates"
            className="mt-4 text-xl font-medium tracking-tight text-gray-900"
          >
            Dates
          </h4>
          <ul className="mt-4 ml-4 list-inside list-disc leading-relaxed">
            {info[current].dates.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  )
}
