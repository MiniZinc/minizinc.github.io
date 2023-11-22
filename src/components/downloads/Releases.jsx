import { Container } from '@/components/Container'
import { latest, releases } from '@/data/version'
import { Link } from '@/components/Link'
import { changelog, githubRelease } from '@/utils/links'
import { ReleaseInfo } from '@/data/release'

export function Releases() {
  return (
    <Container>
      <section id="releases" aria-labelledby="releases-title" className="mb-6">
        <h2
          id="releases-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Releases
        </h2>
        <p className="my-2">
          The latest release of MiniZinc is version {latest.version}, released{' '}
          {latest.date}.
        </p>
        <ul className="mx-2 list-inside list-disc leading-relaxed">
          <ReleaseInfo />
        </ul>
        <p className="mt-2">
          <Link href={changelog()}>See the full changelog</Link>.
        </p>
        <h3 className="mt-6 text-2xl font-medium tracking-tight text-gray-900">
          Previous releases
        </h3>
        <ul className="mx-2 mt-2 list-inside list-disc leading-relaxed">
          {releases
            .filter((x, i) => i > 0)
            .map((release) => (
              <li key={release.version}>
                <Link href={githubRelease(release.version)}>
                  MiniZinc {release.version}
                </Link>{' '}
                (released {release.date},{' '}
                <Link href={changelog(release.version)}>change log</Link>)
              </li>
            ))}
        </ul>
        <p className="mt-2">
          <Link href="https://github.com/MiniZinc/MiniZincIDE/releases">
            View older releases
          </Link>
          .
        </p>
      </section>
    </Container>
  )
}
