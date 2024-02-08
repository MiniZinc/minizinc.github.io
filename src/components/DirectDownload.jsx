import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { bundles } from '@/utils/links'

export function DirectDownload({ children, ...props }) {
  const [platformDownload, setPlatformDownload] = useState(null)
  useEffect(() => {
    // Show specific download button for Windows/macOS
    if (/\bWin64\b/i.test(navigator.userAgent)) {
      setPlatformDownload({
        label: 'Windows 10 or later',
        href: bundles().windows,
      })
    } else if (
      /\bMacintosh\b/i.test(navigator.userAgent) ||
      /\bMac\b/i.test(navigator.userAgent)
    ) {
      setPlatformDownload({
        label: 'macOS 11 or later',
        href: bundles().macOS,
      })
    }
  }, [])
  return (
    <>
      <Button
        href={platformDownload ? platformDownload.href : '/downloads'}
        {...props}
      >
        <span className="inline-flex items-center gap-x-2 px-2 py-1">
          <FontAwesomeIcon icon={faDownload} height="1em" />
          <span>{platformDownload ? platformDownload.label : 'Download'}</span>
        </span>
      </Button>
      {platformDownload ? children : <></>}
    </>
  )
}
