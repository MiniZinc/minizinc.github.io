import { Link } from '@/components/Link'

export const info = {
  2024: (() => {
    const problemSubmissionDeadline = 'Fri, 28 June 2024'
    return {
      announcements: [
        <>
          <strong>2024-09-05</strong> Announcements of the results are{' '}
          <Link href="/challenge/2024/results">here</Link>.
        </>,
        <>
          <strong>2024-07-15</strong> Update the{' '}
          <Link href="/challenge/2024/docker">
            Docker image preparation instructions
          </Link>{' '}
          to fix some minor errors.
        </>,
        <>
          <strong>2024-06-03</strong> Problem submission deadline extended.
        </>,
        <>
          <strong>2024-02-12</strong> Official{' '}
          <Link href="/challenge/2024/call_for_problems">
            Call for Problems
          </Link>{' '}
          for the MiniZinc Challenge.
        </>,
      ],
      problemSubmissionDeadline,
      minizinc: '2.8.5',
      dates: [
        <>
          Registration opens: <strong>Now</strong>.
        </>,
        <>
          Problem submission deadline: <s>Fri, 7 June 2024</s>{' '}
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
