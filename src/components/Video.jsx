import { Container } from '@/components/Container'
import clsx from 'clsx'

export function Video({ className }) {
  return (
    <section id="minizinc-video" className={clsx(className, 'py-20 sm:py-32')}>
      <Container>
        <div className="relative h-0 w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K1tH2otAtMw?si=3Tjn8oz46p1miB2J"
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
