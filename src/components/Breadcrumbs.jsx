import clsx from 'clsx'
import { Link } from './Link'

export function Breadcrumbs({ className, items }) {
  className = clsx('flex items-center my-4', className)
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li className="flex items-center" key={i}>
          {i > 0 ? <span className="px-1 text-gray-400">»</span> : <></>}
          {typeof item === 'string' ? (
            <span>{item}</span>
          ) : (
            <Link href={item[1]}>{item[0]}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}
