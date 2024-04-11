import { Container } from '@/components/Container'
import clsx from 'clsx'

export function Video({ className }) {
  return (
    <section id="minizinc-video" className={clsx(className, 'py-20 sm:py-32')}>
      <Container>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zp32x3mUJRU?si=l0we9PpQbooZiLwa"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  )
}
