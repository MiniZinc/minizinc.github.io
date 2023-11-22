import { people } from '@/data/people'
import Image from 'next/image'
import { Link } from '@/components/Link'
import { Container } from '@/components/Container'
import { PublicationList } from './publications/PublicationList'

export function Person({ person, publications }) {
  return (
    <Container>
      <div className="flex gap-x-6">
        <div className="shrink-0">
          <Image
            className="flex items-center justify-center rounded-full text-center shadow-lg"
            src={person.img}
            alt={person.name}
            width={150}
            height={150}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium">{person.name}</h4>
          {person.email ? (
            <Link
              href={`mailto:${person.email}`}
              title={`Contact ${person.name}`}
              className="text-sm"
            >
              {person.email}
            </Link>
          ) : (
            ''
          )}
          <div className="text-sm">{person.affiliation}</div>
          <p className="mt-2 max-w-prose text-sm">{person.description}</p>
        </div>
      </div>
      <section
        id="publications"
        aria-labelledby="publications-title"
        className="mb-6"
      >
        <h3
          id="publications"
          className="py-6 text-xl font-medium tracking-tight text-gray-900"
        >
          Publications on MiniZinc by {person.name}
        </h3>
        <PublicationList publications={publications} />
      </section>
    </Container>
  )
}
