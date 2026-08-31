import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'
import { SelectField } from '@/components/Fields'
import AustraliaProject from '@/data/examples/australia.json'
import NQueensProject from '@/data/examples/nqueens.json'
import PackingProject from '@/data/examples/packing.json'
import SudokuProject from '@/data/examples/sudoku.json'
import { Link } from '@/components/Link'
import clsx from 'clsx'

const playgroundOrigin = 'https://play.minizinc.dev/develop'
const embedClientSrc = `${playgroundOrigin}/embed.module.js`
const playgroundOptions = {
  project: { files: [] },
  autoFocus: false,
  splitterDirection: 'horizontal',
  splitterSize: 60,
  autoClearOutput: true,
  showClearOutput: false,
  canEditTabs: false,
  theme: 'light',
}
const playgroundSrc = `${playgroundOrigin}/#embed=${encodeURIComponent(JSON.stringify(playgroundOptions))}`

const examples = [
  AustraliaProject,
  NQueensProject,
  PackingProject,
  SudokuProject,
]

export function Playground({ className, ...props }) {
  const iframe = useRef(null)
  const embed = useRef(null)
  const [ready, setReady] = useState(false)
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    setProjectIndex(Math.floor(examples.length * Math.random()))
  }, [])

  useEffect(() => {
    let cancelled = false

    import(/* webpackIgnore: true */ embedClientSrc)
      .then(({ default: createEmbed }) => {
        if (cancelled) return
        const client = createEmbed(iframe.current)
        embed.current = client
        client.ready
          .then(() => {
            if (!cancelled) setReady(true)
          })
          .catch((error) =>
            console.error('Playground failed to become ready', error),
          )
      })
      .catch((error) =>
        console.error('Failed to load playground client', error),
      )

    return () => {
      cancelled = true
      embed.current?.destroy()
      embed.current = null
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    embed.current
      ?.loadProject(examples[projectIndex].project)
      .catch((error) =>
        console.error('Failed to load playground project', error),
      )
  }, [ready, projectIndex])

  useEffect(() => {
    if (!ready) return

    const mediaQuery = matchMedia('(max-width: 768px)')
    const updateLayout = (matches) => {
      embed.current
        ?.setOptions({
          splitterDirection: matches ? 'vertical' : 'horizontal',
        })
        .catch((error) =>
          console.error('Failed to update playground layout', error),
        )
    }
    updateLayout(mediaQuery.matches)
    const onChange = (event) => updateLayout(event.matches)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [ready])

  return (
    <section
      id="playground"
      aria-labelledby="playground-title"
      className={clsx(className, 'py-12 sm:py-20')}
      {...props}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="playground-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Try MiniZinc
          </h2>
        </div>
        <div className="mt-2">
          <p className="text-center">
            Try one of the examples, or{' '}
            <Link
              color="primary"
              href="https://play.minizinc.dev"
              target="_blank"
            >
              write your own model
            </Link>
            .
          </p>
        </div>
        <div className="mt-8">
          <SelectField
            id="playground-example"
            className="col-span-full"
            onChange={(event) => setProjectIndex(Number(event.target.value))}
            value={projectIndex}
          >
            {examples.map((example, index) => (
              <option key={index} value={index}>
                {example.name}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="mt-8">
          <iframe
            ref={iframe}
            src={playgroundSrc}
            title="MiniZinc Playground"
            width="100%"
            height="540"
            allow="clipboard-write"
            style={{
              display: 'block',
              border: 0,
              boxShadow: '0 0 1rem 1rem rgba(0, 0, 0, 0.08)',
            }}
          />
        </div>
      </Container>
    </section>
  )
}
