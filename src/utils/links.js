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
    linux: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-x86_64-linux-gnu.tgz`,
    appImage: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-x86_64-linux-gnu.AppImage`,
    snap: 'https://snapcraft.io/minizinc',
    windows: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-x86_64-windows-setup.exe`,
    windowsARM: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-aarch64-windows-setup.exe`,
    macOS: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-aarch64-apple-darwin.dmg`,
    macOSIntel: `https://github.com/MiniZinc/MiniZincIDE/releases/download/${v}/MiniZincIDE-${v}-x86_64-apple-darwin.dmg`,
    commandLineTools: `https://github.com/MiniZinc/libminizinc/releases/tag/${v}`,
    edgeIDE: `https://github.com/MiniZinc/MiniZincIDE/releases/tag/edge`,
    edgeCommandLineTools: `https://github.com/MiniZinc/libminizinc/releases/tag/edge`,
  }
}

export function githubRelease(version) {
  const v = version || latest.version
  return `https://github.com/MiniZinc/MiniZincIDE/releases/tag/${v}`
}
