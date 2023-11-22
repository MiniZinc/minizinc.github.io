import { Container } from '@/components/Container'
import { latest } from '@/data/version'
import { Link } from '@/components/Link'
import { DirectDownload } from '@/components/DirectDownload'

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
            <Link href="https://www.minizinc.org/doc-latest/en/installation.html">
              documentation
            </Link>
            .
          </p>
          <DirectDownload className="mt-6" color="primary" />
        </div>
      </Container>
    </section>
  )
}
