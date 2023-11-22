export function authorsMatches(authors, name) {
  const targetParts = name
    .toLowerCase()
    .split(/[^a-z0-9-]+/)
    .filter((x) => x.length > 0)
  for (const author of authors) {
    const nameParts = [...targetParts]
    const authorParts = author
      .toLowerCase()
      .split(/[^a-z0-9-]+/)
      .filter((x) => x.length > 0)
    if (nameParts.pop() !== authorParts.pop()) {
      continue
    }
    while (nameParts.length > 0 && authorParts.length > 0) {
      const a = nameParts[0]
      const b = authorParts[0]
      const matches =
        a === b || ((a.length === 1 || b.length === 1) && a[0] === b[0])
      if (!matches) {
        break
      }
      nameParts.shift()
      authorParts.shift()
    }
    while (nameParts.length > 0 && authorParts.length > 0) {
      const a = nameParts[nameParts.length - 1]
      const b = authorParts[authorParts.length - 1]
      const matches =
        a === b || ((a.length === 1 || b.length === 1) && a[0] === b[0])
      if (!matches) {
        break
      }
      nameParts.pop()
      authorParts.pop()
    }
    if (nameParts.length === 0 || authorParts.length === 0) {
      return true
    }
  }
  return false
}
