import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'

export function Resources({ resources }) {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 mb-12"
    >
      {resources.map((resource) => (
        <li
          key={resource.name}
          className="flex flex-col rounded-2xl border border-gray-200 p-8"
        >
          <div className="text-primary-dark text-xl">
            <FontAwesomeIcon icon={resource.icon} />
          </div>
          <h3 className="mt-6 font-semibold text-gray-900">
            <Link color="plain" className="hover:underline" href={resource.url}>
              {resource.name}
            </Link>
          </h3>
          <p className="mt-2 text-gray-700">{resource.description}</p>
          <div className="mt-6 grow flex flex-col sm:items-start justify-end">
            <Button
              color="primary"
              href={resource.url}
            >
              {resource.action}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
