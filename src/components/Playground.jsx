import { useEffect, useId, useState } from 'react'
import { Container } from '@/components/Container'
import { SelectField } from '@/components/Fields'
import AustraliaProject from '@/data/examples/australia.json'
import NQueensProject from '@/data/examples/nqueens.json'
import PackingProject from '@/data/examples/packing.json'
import SudokuProject from '@/data/examples/sudoku.json'
import { Link } from '@/components/Link'
import clsx from 'clsx'

const examples = [
  AustraliaProject,
  NQueensProject,
  PackingProject,
  SudokuProject,
]

export function Playground({ className, ...props }) {
  const id = useId()
  const [playground, setPlayground] = useState(null)
  const [target, setTarget] = useState(null)
  const [svelteComponent, setSvelteComponent] = useState(null)
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    setProjectIndex(Math.floor(examples.length * Math.random()))
    window[`playground-${id}`] = (p) => setPlayground({ playground: p })
    const script = document.createElement('script')
    script.id = `playground-script-${id}`
    script.type = 'module'
    script.innerHTML = `
        import Playground from 'https://cdn.jsdelivr.net/gh/minizinc/minizinc-playground@library/dist/minizinc-playground.js';
        if ('playground-${id}' in window) {
          window['playground-${id}'](Playground);
          delete window['playground-${id}'];
          document.getElementById('playground-script-${id}').remove();
        }
      `
    document.body.appendChild(script)
  }, [id])

  useEffect(() => {
    if (!playground || !target) {
      return
    }

    const mediaQuery = matchMedia('(max-width: 768px)')
    const component = new playground.playground({
      target,
      props: {
        project: { files: [] },
        autoFocus: false,
        splitterDirection: mediaQuery.matches ? 'vertical' : 'horizontal',
        splitterSize: 60,
        showShareButton: false,
        showDownloadButton: false,
        compilationEnabled: false,
        showVersionSwitcher: false,
        canSwitchOrientation: false,
        autoClearOutput: true,
        showClearOutput: false,
        showAutoClearOutput: false,
        showOutputSectionToggles: false,
        showOutputRightControls: false,
        canEditTabs: false,
        externalPlaygroundURL: 'https://play.minizinc.dev/',
        theme: 'light',
      },
    })

    const mediaQueryChange = (e) => {
      component.$set({
        splitterDirection: e.matches ? 'vertical' : 'horizontal',
      })
    }
    mediaQuery.addEventListener('change', mediaQueryChange)
    setSvelteComponent({ component })
    return () => {
      mediaQuery.removeEventListener('change', mediaQuery)
      component.$destroy()
    }
  }, [playground, target])

  useEffect(() => {
    if (svelteComponent) {
      svelteComponent.component.$set({
        project: examples[projectIndex].project,
      })
    }
  }, [svelteComponent, projectIndex])

  return (
    <section
      id="playground"
      aria-labelledby="playground-title"
      className={clsx(className, 'py-20 sm:py-32')}
      {...props}
    >
      <style jsx>{`
        @import url('https://cdn.jsdelivr.net/gh/minizinc/minizinc-playground@library/dist/style.css');
      `}</style>
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
            onChange={(e) => setProjectIndex(e.target.value)}
            value={projectIndex}
          >
            {examples.map((x, i) => (
              <option key={i} value={i}>
                {x.name}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="mt-8">
          <div
            ref={(el) => setTarget(el)}
            style={{
              height: '540px',
              boxShadow: '0 0 1rem 1rem rgba(0, 0, 0, 0.08)',
            }}
          />
        </div>
      </Container>
    </section>
  )
}
