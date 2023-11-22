import { promises as fs } from 'fs'
import path from 'path'

export async function loadPublications() {
  const map = {
    TY: 'type',
    TI: 'title',
    T1: 'title',
    BT: 'subtitle',
    T2: 'subtitle',
    SP: 'pages',
    PB: 'publisher',
    ID: 'id',
    DO: 'id',
    PY: 'year',
    JF: 'journal',
    JA: 'journalShort',
    JO: 'journalOther',
    VL: 'volume',
    IS: 'issue',
    AB: 'abstract',
    N2: 'abstract',
  }
  const all = []
  for (const key of ['cite', 'minizinc', 'other']) {
    const root = path.join(process.cwd(), 'src/data/publications', key)
    const filenames = await fs.readdir(root)
    all.push(
      ...(await Promise.all(
        filenames
          .filter((filename) => filename.endsWith('.ris'))
          .map(async (filename) => {
            const filePath = path.join(root, filename)
            const fileContents = await fs.readFile(filePath, 'utf8')
            const items = fileContents
              .split('\n')
              .map((line) => line.trim())
              .filter((line) => line.length > 0)
              .map((line) => [line.substring(0, 2), line.substring(6)])
            const result = {
              category: key,
              authors: [],
              editors: [],
            }
            for (const [tag, value] of items) {
              if (tag === 'AU') {
                result.authors.push(value.split(', ').reverse().join(' '))
              } else if (tag === 'ED') {
                result.editors.push(value.split(', ').reverse().join(' '))
              } else if (tag === 'EP') {
                result.pages = result.pages ? `${result.pages}—${value}` : value
              } else if (tag in map) {
                result[map[tag]] = value
              }
            }
            if (result.year && result.year.length > 4) {
              for (const part of result.year.split(/[^0-9]+/)) {
                if (part.length === 4) {
                  result.year = part
                  break
                }
              }
            }
            return result
          }),
      )),
    )
  }
  all.sort((x, y) => y.year.localeCompare(x.year))
  return {
    all,
    cite: all.filter((pub) => pub.category === 'cite').reverse(),
    minizinc: all.filter((pub) => pub.category === 'minizinc'),
    other: all.filter((pub) => pub.category === 'other'),
  }
}
