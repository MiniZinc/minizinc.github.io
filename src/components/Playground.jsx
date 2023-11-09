import { Component } from 'react'
import { Container } from '@/components/Container'
import { SelectField } from './Fields'
import AustraliaProject from '@/data/australia.json'
import NQueensProject from '@/data/nqueens.json'

const examples = [AustraliaProject, NQueensProject]
const alphabet =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export class Playground extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = Array(6)
      .fill(0)
      .map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
      .join('')
    window[`playground-${id}`] = this
    if (!this.script) {
      this.script = document.createElement('script')
      this.script.type = 'module'
      this.script.innerHTML = `
        import Playground from 'https://cdn.jsdelivr.net/gh/minizinc/minizinc-playground@library/dist/minizinc-playground.js';
        window['playground-${id}'].initPlayground(Playground);
        delete window['playground-${id}'];
      `
      this.instance.appendChild(this.script)
    }
  }

  initPlayground(SveltePlayground) {
    if (!this.svelteComponent) {
      const mediaQuery = matchMedia('(max-width: 768px)')
      this.svelteComponent = new SveltePlayground({
        target: this.target,
        props: {
          project: examples[0].project,
          splitterDirection: mediaQuery.matches ? 'vertical' : 'horizontal',
          splitterSize: 50,
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
        if (this.svelteComponent) {
          this.svelteComponent.$set({
            splitterDirection: e.matches ? 'vertical' : 'horizontal',
          })
        }
      }
      mediaQuery.addEventListener('change', mediaQueryChange)
      this.destroyMediaQuery = () =>
        mediaQuery.removeEventListener('change', mediaQuery)
    }
    this.script.remove()
    this.script = null
  }

  mediaChange(e) {
    if (this.svelteComponent) {
      this.svelteComponent.$set({
        splitterDirection: e.matches ? 'vertical' : 'horizontal',
      })
    }
  }

  setProject(project) {
    if (this.svelteComponent) {
      this.svelteComponent.$set({ project })
    }
  }

  change(e) {
    this.setProject(examples[e.target.value].project)
  }

  componentWillUnmount() {
    if (this.svelteComponent) {
      this.destroyMediaQuery()
      this.svelteComponent.$destroy()
      this.svelteComponent = null
    }
  }

  render() {
    return (
      <section
        id="playground"
        aria-labelledby="playground-title"
        className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
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
          <div className="mt-8">
            <SelectField
              id="playground-example"
              className="col-span-full"
              onChange={Playground.prototype.change.bind(this)}
            >
              {examples.map((x, i) => (
                <option key={i} value={i}>
                  {x.name}
                </option>
              ))}
            </SelectField>
          </div>
          <div className="mt-8" ref={(el) => (this.instance = el)}>
            <div
              ref={(el) => (this.target = el)}
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
}
