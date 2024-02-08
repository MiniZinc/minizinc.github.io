import { Container } from '@/components/Container'
import { problems, globals, problemsByYear } from '@/data/challenge'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export function AllGlobals() {
  const minYear = Math.min(...Object.keys(problemsByYear))
  const maxYear = Math.max(...Object.keys(problemsByYear))
  return (
    <Container>
      <section id="problems" aria-labelledby="problems-title" className="py-6">
        <h2
          id="problems-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Problems
        </h2>
        <Breadcrumbs
          items={[['MiniZinc Challenge', '/challenge'], 'Problems and Globals']}
        />
        <p className="mt-4">
          This table contains all problems used for the MiniZinc Challenge{' '}
          {minYear}–{maxYear}. (RC stands for redundant constraints and SBC for
          symmetry breaking constraints.)
        </p>
        <table className="mt-4 table-auto">
          <thead>
            <tr className="border-b">
              <th className="p-2">Problem</th>
              <th className="p-2">Type</th>
              <th className="p-2">Kind</th>
              <th className="p-2" title="Redundant constraints">
                RC
              </th>
              <th className="p-2" title="Symmetry breaking constraints">
                SBC
              </th>
              <th className="p-2">Years</th>
              <th className="p-2">MiniZinc Globals</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, i) => (
              <tr
                key={problem.name}
                id={`problem-${problem.name}`}
                className={`border-b ${i % 2 == 0 ? 'bg-neutral-100' : ''}`}
              >
                <td className="p-2">{problem.name}</td>
                <td className="p-2">{problem.type}</td>
                <td className="p-2">{problem.kind}</td>
                <td className="p-2">{problem.rc ? '✓' : ''}</td>
                <td className="p-2">{problem.sbc ? '✓' : ''}</td>
                <td className="p-2">
                  {problem.years.map((y, i) => (
                    <>
                      {i > 0 ? ', ' : ''}
                      <Link key={y} href={`/challenge${y}`}>
                        {y}
                      </Link>
                    </>
                  ))}
                </td>
                <td className="p-2">
                  {problem.globals.map((g, i) => (
                    <>
                      {i > 0 ? ', ' : ''}
                      <Link key={g} href={`#global-${g}`}>
                        {g}
                      </Link>
                    </>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section id="globals" aria-labelledby="globals-title" className="py-6">
        <h2
          id="globals-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Globals
        </h2>
        <p className="mt-4">
          This table contains all global constraints used for the MiniZinc
          Challenge {minYear}–{maxYear}.
        </p>
        <table className="mt-4 table-auto">
          <thead>
            <tr className="border-b">
              <th>Global</th>
              <th>Years</th>
              <th>Problems</th>
            </tr>
          </thead>
          <tbody>
            {globals.map((global, i) => (
              <tr
                key={global.global}
                id={`global-${global.global}`}
                className={`border-b ${i % 2 == 0 ? 'bg-neutral-100' : ''}`}
              >
                <td className="p-2">{global.global}</td>
                <td className="p-2">
                  {global.years.map((y, i) => (
                    <>
                      {i > 0 ? ', ' : ''}
                      <Link key={y} href={`/challenge/${y}`}>
                        {y}
                      </Link>
                    </>
                  ))}
                </td>
                <td className="p-2">
                  {global.problems.map((p, i) => (
                    <>
                      {i > 0 ? ', ' : ''}
                      <Link key={p} href={`#problem-${p}`}>
                        {p}
                      </Link>
                    </>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  )
}
