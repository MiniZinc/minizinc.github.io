import { Link } from '@/components/Link'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import clsx from 'clsx'
import { faImage, faMugHot, faShirt } from '@fortawesome/free-solid-svg-icons'

export function Merchandise({ className, ...props }) {
  return (
    <section id="merchandise" className={clsx(className, 'py-12')} {...props}>
      <Container>
        <div>
          <div className="mb-6 flex justify-center gap-4 text-primary">
            <FontAwesomeIcon size="xl" icon={faImage} />
            <FontAwesomeIcon size="xl" icon={faShirt} />
            <FontAwesomeIcon size="xl" icon={faMugHot} />
          </div>
          <p className="text-center text-gray-800">
            Get your{' '}
            <Link href="https://www.redbubble.com/people/guidodiug/works/32129494-minizinc">
              MiniZinc stickers, mugs, t-shirts
            </Link>{' '}
            etc. (sold at cost price)!
          </p>
        </div>
      </Container>
    </section>
  )
}
