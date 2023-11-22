const releaseList = [
  ['2.8.0', '16 November 2023'],
  ['2.7.6', '20 June 2023'],
  ['2.7.5', '7 June 2023'],
  ['2.7.4', '11 May 2023'],
  ['2.7.3', '20 April 2023'],
  ['2.7.2', '5 April 2023'],
  ['2.7.1', '31 March 2023'],
  ['2.7.0', '23 February 2023'],
]

export const releases = releaseList.map(([version, date]) => ({
  version,
  date,
}))

export const requirement = {
  windows: 'Windows 10',
  linux: 'Ubuntu 20.04',
  macOS: 'macOS 11',
}

export const latest = releases[0]
