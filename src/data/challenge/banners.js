import { Link } from '@/components/Link'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { current } from '@/data/challenge'

export const problemCall = {
  icon: faPuzzlePiece,
  className: 'bg-emerald-500',
  contents: (
    <span>
      Problem submissions for the{' '}
      <Link
        className="text-gray-100 underline hover:text-white"
        color="plain"
        href={`/challenge/${current}`}
      >
        {current} MiniZinc Challenge
      </Link>{' '}
      are currently open! See the{' '}
      <Link
        className="text-gray-100 underline hover:text-white"
        color="plain"
        href={`/challenge/${current}/call_for_problems`}
      >
        call for problems
      </Link>{' '}
      for more information.
    </span>
  ),
}
export const solverCall = {
  icon: faPuzzlePiece,
  className: 'bg-emerald-500',
  contents: (
    <span>
      Solver registrations for the{' '}
      <Link
        className="text-gray-100 underline hover:text-white"
        color="plain"
        href={`/challenge/${current}#registration`}
      >
        {current} MiniZinc Challenge
      </Link>{' '}
      are now open!
    </span>
  ),
}

export const resultsAnnouncement = {
  icon: faPuzzlePiece,
  className: 'bg-emerald-500',
  contents: (
    <span>
      Results for the{' '}
      <Link
        className="text-gray-100 underline hover:text-white"
        color="plain"
        href={`/challenge/${current}/results`}
      >
        {current} MiniZinc Challenge
      </Link>{' '}
      have now been announced!
    </span>
  ),
}
