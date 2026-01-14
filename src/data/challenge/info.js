import { Link } from '@/components/Link'

export const info = {
  2025: (() => {
    const problemSubmissionDeadline = 'Fri, 6 June 2025'
    return {
      announcements: [
        <>
          <strong>2026-01-14</strong> Amendment made to the results to fix an
          issue with undetected incorrect optimality claims. Thanks to Alessio
          Pellegrino for reporting.
        </>,
        <>
          <strong>2025-09-15</strong> Announcements of the results are{' '}
          <Link href="/challenge/2025/results">here</Link>.
        </>,
        <>
          <strong>2025-05-16</strong> The tie-breaking procedure for incomplete
          scoring has been updated in the{' '}
          <Link href="/challenge/2025/rules#incomplete-scoring-procedure">
            rules
          </Link>
          .
        </>,
        <>
          <strong>2025-05-16</strong> Problem submission deadline extended.
        </>,
        <>
          <strong>2025-02-11</strong> Official{' '}
          <Link href="/challenge/2025/call_for_problems">
            Call for Problems
          </Link>{' '}
          for the MiniZinc Challenge.
        </>,
      ],
      problemSubmissionDeadline,
      minizinc: '2.9.3',
      dates: [
        <>
          Registration opens: <strong>Now</strong>.
        </>,
        <>
          Problem submission deadline: <s>Fri, 16 May 2025</s>{' '}
          <strong>{problemSubmissionDeadline}</strong>.
        </>,
        <>
          Solver submission begins: <strong>Mon, 26 May 2025</strong>.
        </>,
        <>
          Solver submission deadline: <strong>Fri, 11 July 2025</strong>.
        </>,
        <>
          Announcement of results at{' '}
          <Link href="https://cp2025.a4cp.org/">CP2025</Link>:{' '}
          <strong>10 - 15 August 2025</strong> (Glasgow, Scotland).
        </>,
      ],
    }
  })(),
  2024: (() => {
    const problemSubmissionDeadline = 'Fri, 28 June 2024'
    return {
      announcements: [
        <>
          <strong>2026-01-14</strong> Amendment made to the results to fix an
          issue with undetected incorrect optimality claims. Thanks to Alessio
          Pellegrino for reporting.
        </>,
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

/// Get ordinal representation of challenge year
export function nthYear(year) {
  const n = year - 2008 + 1
  const s = n % 100
  if (s > 3 && s < 21) {
    return (
      <>
        {n}
        <sup>th</sup>
      </>
    )
  }
  switch (s % 10) {
    case 1: {
      return (
        <>
          {n}
          <sup>st</sup>
        </>
      )
    }
    case 2: {
      return (
        <>
          {n}
          <sup>nd</sup>
        </>
      )
    }
    case 3: {
      return (
        <>
          {n}
          <sup>rd</sup>
        </>
      )
    }
  }
  return (
    <>
      {n}
      <sup>th</sup>
    </>
  )
}
