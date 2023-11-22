import clsx from 'clsx'
import { Link } from '@/components/Link'

function titleAndAbstract(pub) {
  if (pub.abstract) {
    return (
      <details>
        <summary className="hover:cursor-pointer hover:underline">
          <span className="font-bold">{pub.title}</span>.
        </summary>
        <blockquote className="max-w-prose p-4 pt-1 text-justify">
          {pub.abstract}
        </blockquote>
      </details>
    )
  }
  return (
    <div>
      <span className="font-bold">{pub.title}</span>.
    </div>
  )
}

function doiLink(pub) {
  if (pub.id && pub.id.startsWith('10.')) {
    const href = `https://doi.org/${pub.id}`
    return (
      <div className="text-sm">
        <Link href={href}>{href}</Link>
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
            'border-b border-l border-r border-gray-200 p-4',
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
          {titleAndAbstract(pub)}
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
