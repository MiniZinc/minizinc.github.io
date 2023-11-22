export function changelog(version) {
  const versionDash = version.replace(/\./g, '-')
  return `https://www.minizinc.org/doc-${version}/en/changelog.html#version-${versionDash}`
}

export function documentation(version, page = '') {
  const suffix = page ? page.replace(/^\/+/, '') : ''
  return `https://www.minizinc.org/doc-${version}/en/${suffix}`
}

export function bundles(version) {
  return {
    linux: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${version}/MiniZincIDE-${version}-bundle-linux-x86_64.tgz`,
    appImage: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${version}/MiniZincIDE-${version}-x86_64.AppImage`,
    snap: 'https://snapcraft.io/minizinc',
    windows: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${version}/MiniZincIDE-${version}-bundled-setup-win64.exe`,
    macOS: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${version}/MiniZincIDE-${version}-bundled.dmg`,
  }
}

export function githubRelease(version) {
  return `https://github.com/MiniZinc/MiniZincIDE/releases/tag/${version}`
}
