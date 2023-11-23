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
  const publications = []
  for (const key of ['cite', 'minizinc', 'other']) {
    const root = path.join(process.cwd(), 'src/data/publications', key)
    const filenames = await fs.readdir(root)
    publications.push(
      ...(await Promise.all(
        filenames
          .filter((filename) => filename.endsWith('.ris'))
          .map(async (filename) => {
            const filePath = path.join(root, filename)
            const fileContents = await fs.readFile(filePath, 'utf8')
            const items = fileContents
              .split('\n')
              .map((line) => line.trimEnd())
              .filter((line) => line.length > 0)
              .map((line) => [line.substring(0, 2), line.substring(6)])
            items.push(['ER', ''])
            const result = {
              category: key,
              authors: [],
              editors: [],
            }
            let currentTag = null
            let buffer = ''
            for (const [tag, value] of items) {
              if (tag !== '  ') {
                if (currentTag) {
                  if (currentTag === 'AU') {
                    result.authors.push(buffer.split(', ').reverse().join(' '))
                  } else if (currentTag === 'ED') {
                    result.editors.push(buffer.split(', ').reverse().join(' '))
                  } else if (currentTag === 'EP') {
                    result.pages = result.pages
                      ? `${result.pages}—${buffer}`
                      : value
                  } else if (currentTag in map) {
                    result[map[currentTag]] = buffer
                  }
                  buffer = ''
                }
                currentTag = tag
              }
              if (buffer.length > 0 && !buffer.endsWith(' ')) {
                buffer += ' '
              }
              buffer += value
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
  publications.sort((x, y) => y.year.localeCompare(x.year))
  publications.forEach((pub, i) => {
    pub.index = i
  })
  const all = publications.map((pub) => ({
    ...pub,
    abstract: !!pub.abstract,
  }))
  const abstracts = publications.map((pub) => pub.abstract)
  return {
    abstracts,
    publications: {
      all,
      cite: all.filter((pub) => pub.category === 'cite').reverse(),
      minizinc: all.filter((pub) => pub.category === 'minizinc'),
      other: all.filter((pub) => pub.category === 'other'),
    },
  }
}
