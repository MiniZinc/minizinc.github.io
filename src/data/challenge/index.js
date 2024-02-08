import { probs, years } from './problems'

export { medals } from './medals'

/**
 * List of all MiniZinc Challenge problems
 */
export const problems = Object.keys(probs)
  .sort((a, b) => a.localeCompare(b))
  .map((p) => ({
    name: p,
    ...probs[p],
    years: Object.keys(years)
      .sort()
      .filter((y) => years[y].indexOf(p) !== -1),
  }))

/**
 * Mapping from year to list of problems
 */
export const problemsByYear = Object.keys(years).reduce(
  (ys, y) => ({
    ...ys,
    [y]: years[y].sort().map((p) => ({ ...probs[p], name: p })),
  }),
  {},
)

/**
 * List of globals used (array of objects containing `global`, `years`, and `problems`)
 */
export const globals = ((problems) => {
  const result = {}
  for (const p of problems) {
    for (const g of p.globals) {
      result[g] = result[g] || { years: new Set(), problems: new Set() }
      for (const y of p.years) {
        result[g].years.add(y)
      }
      result[g].problems.add(p.name)
    }
  }
  for (const data of Object.values(result)) {
    data.years = [...data.years].sort()
    data.problems = [...data.problems].sort((a, b) => a.localeCompare(b))
  }
  return Object.keys(result)
    .sort((a, b) => a.localeCompare(b))
    .map((g) => ({ ...result[g], global: g }))
})(problems)

/**
 * The current MiniZinc Challenge year
 */
export const current = 2024
