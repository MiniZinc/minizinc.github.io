import { useState, useEffect } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { bundles } from '@/utils/links'

function isArmArchitecture(architecture) {
  return /^(?:arm|aarch64)$/i.test(architecture || '')
}

function isX86Architecture(architecture) {
  return /^(?:x86|x86_64|amd64)$/i.test(architecture || '')
}

export function DirectDownload({ children, ...props }) {
  const [platformDownload, setPlatformDownload] = useState(null)
  const [isArchitectureDialogOpen, setIsArchitectureDialogOpen] =
    useState(false)

  useEffect(() => {
    let cancelled = false

    async function detectPlatformDownload() {
      const userAgent = navigator.userAgent
      let platform = navigator.userAgentData?.platform
      let architecture

      // Chromium exposes the CPU architecture through high-entropy Client
      // Hints. Traditional macOS user-agent strings do not distinguish Apple
      // Silicon from Intel Macs, so they do not provide a macOS fallback.
      if (navigator.userAgentData?.getHighEntropyValues) {
        try {
          const hints = await navigator.userAgentData.getHighEntropyValues([
            'architecture',
            'platform',
          ])
          platform = hints.platform || platform
          architecture = hints.architecture
        } catch {
          // Fall back to the information exposed in the user agent below.
        }
      }

      const isWindows = platform === 'Windows' || /\bWindows\b/i.test(userAgent)
      const isMacOS =
        platform === 'macOS' || /\bMacintosh\b|\bMac OS X\b/i.test(userAgent)
      const isArm =
        isArmArchitecture(architecture) ||
        /\b(?:ARM64|AArch64)\b/i.test(userAgent)
      const isX86 =
        isX86Architecture(architecture) ||
        (isWindows && /\b(?:x86_64|x64|amd64)\b/i.test(userAgent))

      if (cancelled) return

      if (isWindows) {
        const label = 'Windows 10 or later'
        if (isArm || isX86) {
          setPlatformDownload({
            label,
            href: isArm ? bundles().windowsARM : bundles().windows,
          })
        } else {
          setPlatformDownload({ label, platform: 'Windows' })
        }
      } else if (isMacOS) {
        const label = 'macOS 11 or later'
        if (isArm || isX86) {
          setPlatformDownload({
            label,
            href: isArm ? bundles().macOS : bundles().macOSIntel,
          })
        } else {
          setPlatformDownload({ label, platform: 'macOS' })
        }
      }
    }

    detectPlatformDownload()

    return () => {
      cancelled = true
    }
  }, [])

  const architectureChoices =
    platformDownload?.platform === 'Windows'
      ? [
          { label: 'Windows x64', href: bundles().windows },
          { label: 'Windows 64-bit ARM', href: bundles().windowsARM },
        ]
      : [
          { label: 'macOS Apple Silicon', href: bundles().macOS },
          { label: 'macOS Intel', href: bundles().macOSIntel },
        ]

  function openArchitectureDialog(event) {
    if (!platformDownload?.platform) return

    event.preventDefault()
    setIsArchitectureDialogOpen(true)
  }

  return (
    <>
      <Button
        {...props}
        href={
          platformDownload?.href ||
          (platformDownload ? undefined : '/downloads')
        }
        onClick={openArchitectureDialog}
      >
        <span className="inline-flex items-center gap-x-2 px-2 py-1">
          <FontAwesomeIcon icon={faDownload} height="1em" />
          <span>{platformDownload ? platformDownload.label : 'Download'}</span>
        </span>
      </Button>
      {platformDownload ? children : <></>}
      <Dialog
        open={isArchitectureDialogOpen}
        onClose={setIsArchitectureDialogOpen}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Choose your {platformDownload?.platform} download
            </DialogTitle>
            <div className="mt-6 grid gap-3">
              {architectureChoices.map((choice) => (
                <Button key={choice.href} href={choice.href} color="primary">
                  {choice.label}
                </Button>
              ))}
              <Button variant="outline" href="/downloads">
                View all downloads
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
