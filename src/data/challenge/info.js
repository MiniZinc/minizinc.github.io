import { Link } from '@/components/Link'

export const info = {
  2024: (() => {
    const problemSubmissionDeadline = 'Fri, 7 June 2024'
    return {
      announcements: [
        <>
          <strong>2024-02-12</strong> Official{' '}
          <Link href="/challenge/2024/call_for_problems">
            Call for Problems
          </Link>{' '}
          for the MiniZinc Challenge.
        </>,
      ],
      problemSubmissionDeadline,
      minizinc: '2.8.3',
      dates: [
        <>
          Registration opens: <strong>Now</strong>.
        </>,
        <>
          Problem submission deadline:{' '}
          <strong>{problemSubmissionDeadline}</strong>.
        </>,
        <>
          Solver submission begins: <strong>Mon, 17 June 2024</strong>.
        </>,
        <>
          Solver submission deadline: <strong>Fri, 2 August 2024</strong>.
        </>,
        <>
          Announcement of results at{' '}
          <Link href="https://cp2024.a4cp.org/">CP2024</Link>:{' '}
          <strong>2 - 6 September 2024</strong> (Girona, Catalonia).
        </>,
      ],
    }
  })(),
}