import { problemsByYear } from '@/data/challenge'
import clsx from 'clsx'

export function Globals({ className, year }) {
  className = clsx('mt-4 table-auto', className)
  return (
    <table className={className}>
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
          <th className="p-2">MiniZinc Globals</th>
        </tr>
      </thead>
      <tbody>
        {problemsByYear[year].map((problem, i) => (
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
            <td className="p-2">{problem.globals.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
