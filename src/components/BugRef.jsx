import { Link } from '@/components/Link'

export function BugRef({ issue }) {
  return (
    <Link href={`https://github.com/minizinc/libminizinc/issues/${issue}`}>
      issue {issue}
    </Link>
  )
}

export function IDEBugRef({ issue }) {
  return (
    <Link href={`https://github.com/minizinc/MiniZincIDE/issues/${issue}`}>
      issue {issue}
    </Link>
  )
}
