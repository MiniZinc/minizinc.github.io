import { Container } from '@/components/Container'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'
import { solverCall } from '@/data/challenge/banners'

import clsx from 'clsx'

export function AnnouncementBanner({ className, ...props }) {
  const announcement = solverCall
  return (
    <section
      id="announcement-banner"
      className={clsx(
        className,
        announcement.className,
        'py-4 text-center text-sm text-white sm:text-base',
      )}
      {...props}
    >
      <Container>
        <div className="flex items-center justify-center gap-2">
          <span className="hidden sm:block">
            <FontAwesomeIcon icon={announcement.icon} />
          </span>
          {announcement.contents}
        </div>
      </Container>
    </section>
  )
}
