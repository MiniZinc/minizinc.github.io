import { Container } from '@/components/Container'
import { Bundles } from '@/components/downloads/Bundles'
import { documentation } from '@/utils/links'
import { latest } from '@/data/version'
import { Link } from '@/components/Link'

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
          <Link href={documentation('installation.html')}>documentation</Link>.
        </p>
        <div className="my-4">
          <Bundles />
        </div>
        <p className="mb-6 leading-7">
          Both the compiler tool chain and the IDE are available as free and
          open source software.
          <br />
          Have a look at our <Link href="/license">
            License Information
          </Link>{' '}
          page for the details.
        </p>
      </section>
    </Container>
  )
}
