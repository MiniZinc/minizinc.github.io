const entryClasses = [
  { key: 'fd', label: 'Fixed' },
  { key: 'free', label: 'Free' },
  { key: 'par', label: 'Parallel' },
  { key: 'open', label: 'Open' },
  { key: 'local', label: 'Local Search' },
]

export function Medals({ className, medals, ...props }) {
  return (
    <table className={className}>
      <thead>
        <tr className="border-b">
          <th className="px-2 py-1">Category</th>
          <th className="px-2 py-1 text-yellow-500">Gold</th>
          <th className="px-2 py-1 text-gray-500">Silver</th>
          <th className="px-2 py-1 text-orange-800">Bronze</th>
        </tr>
      </thead>
      <tbody>
        {entryClasses
          .filter((c) => c.key in medals)
          .map((c) => (
            <tr key={c.key}>
              <td className="px-2 py-1">{c.label}</td>
              <td className="px-2 py-1 text-yellow-500">
                {medals[c.key][0] || ''}
              </td>
              <td className="px-2 py-1 text-gray-500">
                {medals[c.key][1] || ''}
              </td>
              <td className="px-2 py-1 text-orange-800">
                {medals[c.key][2] || ''}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
