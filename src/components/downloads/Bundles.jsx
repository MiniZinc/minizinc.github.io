import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { useState } from 'react'

export function Bundles({ bundles }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
    >
      {bundles.map((bundle, index) => (
        <li
          key={bundle.name}
          className="flex flex-col rounded-2xl border border-gray-200"
        >
          <Link
            color="plain"
            href={bundle.url}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="grow"
          >
            <div className="p-8">
              <h3 className="font-semibold text-gray-900">{bundle.name}</h3>
              <p className="mt-2 text-sm text-gray-700">{bundle.description}</p>
              <div className="mt-2 flex items-center gap-x-2 text-sm">
                <FontAwesomeIcon icon={faDownload} />
                <span
                  className={clsx(
                    'text-sky-600',
                    hoveredIndex === index ? 'text-sky-700 underline' : '',
                  )}
                >
                  {bundle.label || bundle.url.split('/').pop()}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
