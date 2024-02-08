import { Container } from '@/components/Container'
import { Bundles } from '@/components/downloads/Bundles'
import { bundles as bundleLinks } from '@/utils/links'
import { latest, requirement } from '@/data/version'
import { Link } from '@/components/Link'

const downloadLinks = bundleLinks(latest.version)

const bundles = [
  {
    name: 'Windows',
    description: `${requirement.windows} or later, 64-bit processor.`,
    url: downloadLinks.windows,
  },
  {
    name: 'macOS',
    description: `${requirement.macOS} or later, universal binary.`,
    url: downloadLinks.macOS,
  },
  {
    name: 'Linux AppImage',
    description: `AppImage for 64-bit Linux (tested on ${requirement.linux}).`,
    url: downloadLinks.appImage,
  },
  {
    name: 'Linux Snap package',
    description: 'Snap package for 64-bit Linux.',
    label: 'View on the Snap store',
    url: downloadLinks.snap,
  },
  {
    name: 'Linux binary archive',
    description: `Binary archive for 64-bit Linux (tested on ${requirement.linux}).`,
    url: downloadLinks.linux,
  },
  {
    name: 'Source code',
    description: 'Source code is available from the GitHub repositories.',
    label: 'View on GitHub',
    url: 'https://github.com/minizinc',
  },
]

export function Downloads() {
  return (
    <Container>
      <section id="downloads" aria-labelledby="downloads-title">
        <h2
          id="downloads-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Downloads
        </h2>
        <hr className="mt-2" />
        <p className="my-6 leading-7">
          Official binary packages are provided for Windows, macOS and Linux.
          <br />
          These contain MiniZinc {latest.version}, the MiniZinc IDE{' '}
          {latest.version}, as well as several state of the art solvers.
          <br />
          For detailed installation instructions, see the{' '}
          <Link href="https://www.minizinc.org/doc-latest/en/installation.html">
            documentation
          </Link>
          .
        </p>
        <div className="my-4">
          <Bundles bundles={bundles} />
        </div>
        <p className="mb-6 max-w-prose leading-7">
          Both the compiler tool chain and the IDE are available as free and
          open source software. Have a look at our{' '}
          <Link href="/license">License Information</Link> page for the details.
        </p>
      </section>
    </Container>
  )
}
