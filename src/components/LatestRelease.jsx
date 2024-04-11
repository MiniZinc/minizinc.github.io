import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { latest } from '@/data/version'
import { Link } from '@/components/Link'
import { changelog } from '@/utils/links'
import ReleaseInfo from '@/data/release.mdx'
import clsx from 'clsx'

export function LatestRelease({ className, ...props }) {
  return (
    <section
      id="latest-release"
      aria-labelledby="latest-release-title"
      className={clsx(className, 'py-20 sm:py-32')}
      {...props}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="latest-release-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Latest Release
          </h2>
        </div>
        <div className="mx-auto my-8 max-w-4xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-gray-800">
          <h2 className="text-2xl font-medium tracking-tight text-gray-900">
            <Link color="plain" className="hover:underline" href="/downloads">
              MiniZinc {latest.version}
            </Link>
          </h2>
          <p className="my-2">Released {latest.date}</p>
          <ReleaseInfo />
          <p className="mt-2">
            <Link
              color="plain"
              className="underline hover:text-gray-600 active:text-gray-500"
              href={changelog()}
            >
              See the full changelog
            </Link>
            .
          </p>
        </div>
        <div className="max-auto mt-6 text-center">
          <Button variant="outline" href="/downloads/#releases">
            <span className="px-2 py-1">View all releases</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
