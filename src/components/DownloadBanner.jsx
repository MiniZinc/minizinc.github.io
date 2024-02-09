import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { latest } from '@/data/version'
import { Link } from '@/components/Link'
import { DirectDownload } from '@/components/DirectDownload'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function DownloadBanner() {
  return (
    <section
      id="latest-release"
      aria-labelledby="latest-release-title"
      className="border-b border-t border-gray-200 bg-gray-100 py-6 sm:py-10"
    >
      <Container>
        <h2
          id="download-banner-title"
          className="text-2xl font-medium tracking-tight text-gray-700"
        >
          Install the latest version of MiniZinc
        </h2>
        <div className="mt-4 text-gray-600">
          <p className="text-sm">
            Download and install{' '}
            <Link href="/downloads">MiniZinc {latest.version}</Link> (released{' '}
            {latest.date}).
          </p>
          <p className="text-sm">
            For detailed instructions, see the{' '}
            <Link href="/doc-latest/en/installation.html">documentation</Link>.
          </p>
          <DirectDownload className="mt-6" color="primary">
            <Button className="ml-4" variant="outline" href="/downloads">
              <span className="inline-flex items-center gap-x-2 px-2 py-1">
                <FontAwesomeIcon icon={faDownload} height="1em" />
                <span>All downloads</span>
              </span>
            </Button>
          </DirectDownload>
        </div>
      </Container>
    </section>
  )
}
