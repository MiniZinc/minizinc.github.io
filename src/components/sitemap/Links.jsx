import { useState } from 'react'
import { Link } from '@/components/Link'
import { AnimatePresence, motion } from 'framer-motion'

export function Links({ category }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="grow">
      <h4 className="text-gray-500">{category.label}</h4>
      <ul className="mt-2 flex flex-col gap-y-1">
        {category.children.map(([label, href], index) => (
          <li key={label}>
            <Link
              href={href}
              color="plain"
              className="relative -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-gray-100"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
