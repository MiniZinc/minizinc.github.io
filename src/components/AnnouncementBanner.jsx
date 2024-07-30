import { Container } from '@/components/Container'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/components/Link'

import clsx from 'clsx'

export function AnnouncementBanner({ className, ...props }) {
  const announcement = {
    icon: faAward,
    className: 'bg-orange-500',
    contents: (
      <span>
        MiniZinc has been announced as a finalist for the{' '}
        <Link
          className="text-gray-100 underline hover:text-white"
          color="plain"
          href="https://australian.museum/get-involved/eureka-prizes/2024-eureka-prizes-finalists/#research-software"
        >
          2024 Eureka Prize for Excellence in Research Software
        </Link>
        !
      </span>
    ),
  }
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
