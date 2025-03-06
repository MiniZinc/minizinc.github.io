const releaseList = [
	['2.9.2', '6 March 2025'],
  ['2.9.1', '3 March 2025'],
  ['2.9.0', '11 February 2025'],
  ['2.8.7', '2 October 2024'],
  ['2.8.6', '25 September 2024'],
  ['2.8.5', '3 June 2024'],
  ['2.8.4', '10 May 2024'],
  ['2.8.3', '1 February 2024'],
  ['2.8.2', '15 December 2023'],
  ['2.8.1', '27 November 2023'],
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
