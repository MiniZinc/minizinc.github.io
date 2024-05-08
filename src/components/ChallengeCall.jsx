import { Link } from '@/components/Link'
import { Container } from '@/components/Container'
import { current } from '@/data/challenge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import clsx from 'clsx'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export function ChallengeCall({ className, stage, ...props }) {
  if (!stage) {
    return <></>
  }
  const stages = {
    problem: (
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
    solver: (
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
    results: (
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

  return (
    <section
      id="merchandise"
      className={clsx(className, 'bg-emerald-500 py-4 text-center text-white text-sm sm:text-base')}
      {...props}
    >
      <Container>
        <div className="flex items-center justify-center gap-2">
          <span className="hidden sm:block">
            <FontAwesomeIcon icon={faPuzzlePiece} />
          </span>
          {stages[stage]}
        </div>
      </Container>
    </section>
  )
}
