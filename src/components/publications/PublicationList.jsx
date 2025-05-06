import clsx from 'clsx'
import { Link } from '@/components/Link'
import { Abstract } from '@/components/publications/Abstract'
import { useState } from 'react'

function TitleAndAbstract({ publication }) {
  const [active, setActive] = useState(null)
  if (publication.abstract) {
    return (
      <>
        <div className="flex items-center gap-2">
          <div
            className="hover:cursor-pointer hover:underline"
            onClick={() => setActive(!active)}
          >
            <span className="font-bold">{publication.title}</span>.
          </div>
          <div
            className="bg-primary hover:bg-primary-light rounded-md px-1.5 py-0.5 text-xs text-white no-underline hover:cursor-pointer"
            onClick={() => setActive(!active)}
          >
            {active ? 'Hide' : 'Abstract'}
          </div>
        </div>
        {active === null ? (
          ''
        ) : (
          <Abstract
            className={active ? '' : 'hidden'}
            index={publication.index}
          />
        )}
      </>
    )
  }
  return (
    <div>
      <span className="font-bold">{publication.title}</span>.
    </div>
  )
}

function doiLink(pub) {
  if (pub.id && pub.id.startsWith('10.')) {
    const href = `https://doi.org/${pub.id}`
    return (
      <div className="text-sm">
        <Link href={href} target="_blank">
          {href}
        </Link>
      </div>
    )
  }
  return ''
}

function venue(pub) {
  const journal = (
    pub.journal ||
    pub.journalOther ||
    pub.journalShort ||
    ''
  ).trim()
  const subtitle = (pub.subtitle || '').trim() || journal
  if (subtitle !== journal) {
    return [subtitle, journal].filter((x) => x.length > 0).join(', ')
  }
  return subtitle || 'Unknown'
}

export function PublicationList({ publications }) {
  if (publications.length === 0) {
    return <p className="text-gray-800">No publications found.</p>
  }
  return (
    <ul className="text-gray-800">
      {publications.map((pub, index) => (
        <li
          className={clsx(
            'border-r border-b border-l border-gray-200 p-4',
            index === 0 ? 'border-t' : '',
          )}
          key={pub.id || pub.title}
        >
          <div>
            {pub.authors
              .map((author, i) =>
                i > 0 && i === pub.authors.length - 1
                  ? `and ${author}`
                  : author,
              )
              .join(', ')}
            . {pub.year ? `${pub.year}.` : ''}
          </div>
          <TitleAndAbstract publication={pub} />
          <div className="text-sm">
            <span className="italic">{venue(pub)}</span>
            {[
              pub.volume ? ` ${pub.volume}` : '',
              pub.issue ? `(${pub.issue})` : '',
            ].join('')}
            {pub.pages ? `: ${pub.pages}.` : ''}
            {pub.publisher ? ` ${pub.publisher}.` : ''}
          </div>
          {doiLink(pub)}
        </li>
      ))}
    </ul>
  )
}
