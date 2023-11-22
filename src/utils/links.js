import { latest } from '@/data/version'

export function changelog(version) {
  const versionDash = (version || latest.version).replace(/\./g, '-')
  return `https://www.minizinc.org/doc-${latest.version}/en/changelog.html#version-${versionDash}`
}

export function documentation(page = '') {
  const suffix = page ? page.replace(/^\/+/, '') : ''
  return `https://www.minizinc.org/doc-${latest.version}/en/${suffix}`
}

export function bundles(version) {
  const v = version || latest.version
  return {
    linux: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-bundle-linux-x86_64.tgz`,
    appImage: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-x86_64.AppImage`,
    snap: 'https://snapcraft.io/minizinc',
    windows: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-bundled-setup-win64.exe`,
    macOS: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-bundled.dmg`,
  }
}

export function githubRelease(version) {
  const v = version || latest.version
  return `https://github.com/MiniZinc/MiniZincIDE/releases/tag/${v}`
}
