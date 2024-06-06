import { latest } from '@/data/version'

export function changelog(version) {
  if (version === 'edge') {
    return `https://docs.minizinc.dev/en/latest/changelog.html#unreleased`
  }
  if (version) {
    const versionDash = (version || latest.version).replace(/\./g, '-')
    return `https://docs.minizinc.dev/en/stable/changelog.html#v${versionDash}`
  }
  return `https://docs.minizinc.dev/en/stable/changelog.html`
}

export function documentation(page = '', version = 'stable', lang = 'en') {
  const suffix = page ? page.replace(/^\/+/, '') : ''
  return `https://docs.minizinc.dev/${lang}/${version}/${suffix}`
}

export function pdfDocumentation(version = 'stable', lang = 'en') {
  return `https://docs.minizinc.dev/_/downloads/${lang}/${version}/pdf/`
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
