import { Container } from '@/components/Container'
import { faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Image from 'next/image'
import { Link } from '@/components/Link'
import { former, lead, members } from '@/data/people'
import { authorsMatches } from '@/utils/publications'

function Members({ className, people, ...props }) {
  return (
    <ul
      role="list"
      className={clsx(
        'mx-auto my-10 grid grid-cols-1 gap-10 text-sm md:gap-y-10 lg:grid-cols-2',
        className,
      )}
      {...props}
    >
      {people.map((person) => (
        <li key={person.name}>
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
              <div className="flex items-baseline gap-x-2">
                <h4 className="text-lg font-medium">{person.name}</h4>
                {person.email ? (
                  <Link
                    href={`mailto:${person.email}`}
                    title={`Contact ${person.name}`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                ) : (
                  ''
                )}
                {person.hasPublications ? (
                  <Link
                    href={`/people/${person.slug}`}
                    title={`View publications`}
                  >
                    <FontAwesomeIcon icon={faBook} />
                  </Link>
                ) : (
                  ''
                )}
              </div>
              <div>{person.affiliation}</div>
              <p className="mt-2">{person.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function Team({ authors }) {
  const authorMap = authors.reduce((obj, author) => {
    const lastName = author.split(' ').pop()
    return {
      ...obj,
      [lastName]: author,
    }
  }, {})
  const hasPubs = (person) => {
    const lastName = person.name.split(' ').pop()
    return {
      ...person,
      hasPublications:
        lastName in authorMap &&
        authorsMatches([authorMap[lastName]], person.name),
    }
  }
  const teamLead = lead.map(hasPubs)
  const teamMembers = members.map(hasPubs)
  const teamFormer = former.map(hasPubs)
  return (
    <section id="team" aria-labelledby="team-title">
      <Container>
        <h2
          id="team-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          The MiniZinc Team
        </h2>
        <hr className="mt-2" />
        <h3 className="mt-10 text-2xl font-medium tracking-tight text-gray-900">
          Team leaders
        </h3>
        <Members people={teamLead} />

        <h3 className="text-2xl font-medium tracking-tight text-gray-900">
          Current members
        </h3>
        <Members people={teamMembers} />

        <h3 className="text-2xl font-medium tracking-tight text-gray-900">
          Former members
        </h3>
        <Members people={teamFormer} />
      </Container>
    </section>
  )
}
