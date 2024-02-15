import { useEffect, useState } from 'react'
import clsx from 'clsx'

const rosters = [
  [
    { name: 'Aimee', schedule: [null, 'Night', 'Evening', 'Day', 'Evening'] },
    {
      name: 'Beula',
      schedule: ['Evening', 'Day', 'Evening', 'Night', 'Evening'],
    },
    { name: 'Ciara', schedule: ['Day', 'Evening', null, 'Night', null] },
    { name: 'Darby', schedule: ['Evening', 'Evening', 'Night', null, null] },
    { name: 'Ernst', schedule: [null, 'Night', 'Evening', 'Evening', 'Day'] },
    { name: 'Green', schedule: ['Evening', 'Evening', null, 'Day', 'Night'] },
    { name: 'Jesse', schedule: ['Day', null, 'Day', 'Day', 'Night'] },
    { name: 'Katie', schedule: ['Day', null, 'Day', 'Evening', 'Day'] },
    { name: 'Lloyd', schedule: ['Day', 'Day', 'Night', null, 'Evening'] },
    { name: 'Mable', schedule: ['Night', null, 'Day', 'Day', 'Evening'] },
    { name: 'Nevin', schedule: ['Evening', 'Day', 'Day', 'Evening', 'Day'] },
    { name: 'Paula', schedule: ['Night', 'Evening', 'Evening', null, 'Day'] },
  ],
  [
    { name: 'Aimee', schedule: [null, 'Night', 'Evening', 'Evening', null] },
    { name: 'Beula', schedule: ['Evening', null, 'Night', null, 'Day'] },
    { name: 'Ciara', schedule: ['Evening', 'Day', 'Evening', null, 'Night'] },
    { name: 'Darby', schedule: ['Day', 'Day', 'Evening', 'Day', null] },
    { name: 'Ernst', schedule: ['Night', 'Evening', 'Day', 'Evening', null] },
    { name: 'Green', schedule: ['Day', 'Evening', 'Day', 'Night', 'Evening'] },
    { name: 'Jesse', schedule: [null, 'Evening', 'Day', 'Day', 'Night'] },
    { name: 'Katie', schedule: [null, 'Night', null, 'Day', 'Day'] },
    {
      name: 'Lloyd',
      schedule: ['Night', 'Evening', 'Evening', 'Evening', 'Day'],
    },
    { name: 'Mable', schedule: ['Day', 'Day', null, 'Night', 'Evening'] },
    { name: 'Nevin', schedule: [null, null, 'Night', 'Evening', 'Evening'] },
    { name: 'Paula', schedule: ['Evening', null, 'Day', 'Day', null] },
  ],
  [
    { name: 'Aimee', schedule: ['Day', 'Evening', 'Night', 'Evening', 'Day'] },
    { name: 'Beula', schedule: ['Evening', 'Day', 'Day', 'Day', 'Night'] },
    { name: 'Ciara', schedule: ['Day', 'Day', 'Evening', 'Day', 'Night'] },
    { name: 'Darby', schedule: [null, null, 'Evening', 'Day', 'Day'] },
    { name: 'Ernst', schedule: ['Evening', null, 'Day', 'Night', null] },
    { name: 'Green', schedule: ['Night', null, 'Evening', 'Evening', 'Day'] },
    { name: 'Jesse', schedule: [null, 'Day', 'Evening', 'Night', 'Evening'] },
    { name: 'Katie', schedule: [null, 'Evening', 'Day', 'Day', 'Day'] },
    {
      name: 'Lloyd',
      schedule: ['Evening', null, 'Night', 'Evening', 'Evening'],
    },
    {
      name: 'Mable',
      schedule: ['Night', 'Evening', 'Day', 'Evening', 'Evening'],
    },
    { name: 'Nevin', schedule: [null, 'Night', null, null, null] },
    { name: 'Paula', schedule: ['Day', 'Night', null, null, 'Evening'] },
  ],
  [
    { name: 'Aimee', schedule: [null, 'Day', null, null, 'Night'] },
    { name: 'Beula', schedule: ['Night', 'Evening', 'Day', 'Day', 'Day'] },
    { name: 'Ciara', schedule: [null, 'Day', 'Night', null, null] },
    {
      name: 'Darby',
      schedule: ['Evening', 'Evening', 'Day', 'Night', 'Evening'],
    },
    {
      name: 'Ernst',
      schedule: ['Night', 'Evening', 'Evening', 'Day', 'Evening'],
    },
    { name: 'Green', schedule: ['Day', 'Day', 'Night', 'Evening', 'Evening'] },
    { name: 'Jesse', schedule: ['Evening', 'Night', null, 'Day', 'Day'] },
    { name: 'Katie', schedule: [null, null, 'Day', 'Night', null] },
    { name: 'Lloyd', schedule: ['Day', 'Evening', null, 'Evening', 'Night'] },
    { name: 'Mable', schedule: ['Day', 'Night', 'Evening', 'Evening', 'Day'] },
    {
      name: 'Nevin',
      schedule: ['Evening', 'Day', 'Evening', 'Day', 'Evening'],
    },
    { name: 'Paula', schedule: ['Evening', null, 'Evening', 'Evening', 'Day'] },
  ],
]

const bgColors = {
  Day: 'bg-sky-200',
  Evening: 'bg-amber-200',
  Night: 'bg-indigo-950 text-gray-100',
}

export function Rostering() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < rosters.length - 1 ? prev + 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      <table className="mb-6 text-sm text-gray-600">
        <thead>
          <tr>
            <td className="w-20"></td>
            <td className="w-20 text-center">Mon</td>
            <td className="w-20 text-center">Tue</td>
            <td className="w-20 text-center">Wed</td>
            <td className="w-20 text-center">Thu</td>
            <td className="w-20 text-center">Fri</td>
          </tr>
        </thead>
        <tbody>
          {rosters[current].map((p) => (
            <tr key={p.name}>
              <td className="text-center">{p.name}</td>
              {p.schedule.map((s, i) => (
                <td key={i}>
                  <div
                    className={clsx(
                      'rounded text-center transition-colors duration-300',
                      bgColors[s] || '',
                    )}
                  >
                    {s || ''}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
