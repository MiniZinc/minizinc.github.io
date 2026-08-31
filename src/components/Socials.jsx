import {
  faDiscord,
  faGithub,
  faGoogle,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'
import clsx from 'clsx'

export function Socials({ className, ...props }) {
  return (
    <div className={clsx(className, 'flex gap-4 text-gray-600')} {...props}>
      <Link
        href="https://discord.gg/gVEjAkQNA9"
        color="plain"
        className="hover:text-gray-800"
        title="MiniZinc Discord Server"
      >
        <FontAwesomeIcon icon={faDiscord} height="1em" />
      </Link>
      <Link
        href="https://groups.google.com/forum/#!forum/minizinc"
        color="plain"
        className="hover:text-gray-800"
        title="MiniZinc Google Group"
      >
        <FontAwesomeIcon icon={faGoogle} height="1em" />
      </Link>
      <Link
        href="https://stackoverflow.com/questions/tagged/minizinc"
        color="plain"
        className="hover:text-gray-800"
        title="MiniZinc on StackOverflow"
      >
        <FontAwesomeIcon icon={faStackOverflow} height="1em" />
      </Link>
      <Link
        href="https://github.com/minizinc"
        color="plain"
        className="hover:text-gray-800"
        title="MiniZinc on GitHub"
      >
        <FontAwesomeIcon icon={faGithub} height="1em" />
      </Link>
    </div>
  )
}
