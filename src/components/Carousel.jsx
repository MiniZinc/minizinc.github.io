import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

export function Carousel({ slides, autoAdvance, ...props }) {
  const [current, setCurrent] = useState(0)
  const container = useRef(null)
  const refs = useRef([])
  const setActive = (i) => {
    container.current.scrollTo({
      left: refs.current[i].offsetLeft,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    refs.current = refs.current.slice(0, slides.length)
  }, [slides])
  useEffect(() => {
    if (autoAdvance) {
      const interval = setInterval(() => {
        if (current < slides.length - 1) {
          setActive(current + 1)
        } else {
          setActive(0)
        }
      }, autoAdvance)
      return () => clearInterval(interval)
    }
  })
  useEffect(() => {
    const containerEl = container.current
    const intersectionObserver = new IntersectionObserver(
      (event) => {
        let max = -1
        let el = null
        for (const e of event) {
          if (e.intersectionRatio > max) {
            max = e.intersectionRatio
            el = e.target
          }
        }
        if (max > 0.9) {
          const i = refs.current.indexOf(el)
          if (i !== -1) {
            setCurrent(i)
          }
        }
      },
      {
        root: containerEl,
        threshold: 1,
      },
    )
    for (const slide of refs.current) {
      intersectionObserver.observe(slide)
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [])

  return (
    <div {...props}>
      <div
        className="hide-scrollbar flex w-full snap-x snap-mandatory flex-nowrap items-center overflow-x-scroll"
        ref={container}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="snap-start"
            style={{ flex: `0 0 100%` }}
            ref={(element) => (refs.current[i] = element)}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 text-xs">
        {slides.map((s, i) => (
          <button key={i} type="button" onClick={() => setActive(i)}>
            <div
              className={clsx(
                'h-3 w-3 rounded-full border border-gray-600 transition-colors',
                current === i ? 'bg-slate-700' : '',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
