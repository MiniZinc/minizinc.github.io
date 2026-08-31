import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { latest, requirement } from '@/data/version'
import { bundles } from '@/utils/links'

const downloadLinks = bundles(latest.version)

const packages = [
  {
    name: 'Windows',
    description: `${requirement.windows} or later.`,
    links: [
      { label: 'Download for x64', url: downloadLinks.windows },
      { label: 'Download for 64-bit ARM', url: downloadLinks.windowsARM },
    ],
  },
  {
    name: 'macOS',
    description: `${requirement.macOS} or later.`,
    links: [
      { label: 'Download for Apple Silicon', url: downloadLinks.macOS },
      { label: 'Download for Intel-based Macs', url: downloadLinks.macOSIntel },
    ],
  },
  {
    name: 'Linux',
    description: `64-bit Linux (tested on ${requirement.linux}).`,
    links: [
      { label: 'Download AppImage', url: downloadLinks.appImage },
      { label: 'View on the Snap store', url: downloadLinks.snap },
      { label: 'Download tarball', url: downloadLinks.linux },
    ],
  },
  {
    name: 'Command line tools',
    description:
      'The MiniZinc compiler and command line tools without the IDE.',

    links: [
      { label: 'Download on GitHub', url: downloadLinks.commandLineTools },
    ],
  },
  {
    name: 'Development builds',
    description: 'Try upcoming bugfixes and features.',
    links: [
      { label: 'MiniZincIDE packages', url: downloadLinks.edgeIDE },
      { label: 'Command line tools', url: downloadLinks.edgeCommandLineTools },
    ],
  },
  {
    name: 'Source code',
    description: 'Source code is available from the GitHub repositories.',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/minizinc',
      },
    ],
  },
]

export function Bundles() {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
    >
      {packages.map((bundle, index) => (
        <li
          key={bundle.name}
          className="flex flex-col rounded-2xl border border-gray-200"
        >
          <div className="p-8">
            <h3 className="font-semibold text-gray-900">{bundle.name}</h3>
            <p className="mt-2 mb-2 text-sm text-gray-700">
              {bundle.description}
            </p>
            {bundle.links.map(({ url, label }) => (
              <Link
                color="plain"
                href={url}
                key={url}
                className="grow text-sky-600 hover:text-sky-700 hover:underline"
              >
                <div className="flex items-center gap-x-2 text-sm">
                  <FontAwesomeIcon icon={faDownload} className="text-black" />
                  <span>{label || url.split('/').pop()}</span>
                </div>
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
