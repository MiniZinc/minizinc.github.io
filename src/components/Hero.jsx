import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DirectDownload } from '@/components/DirectDownload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faDownload,
  faPlay,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons'

import { latest } from '@/data/version'
import { Link } from '@/components/Link'
import { changelog } from '@/utils/links'
import { Carousel } from '@/components/Carousel'
import { Seating } from '@/components/showreel/Seating'
import { Rostering } from '@/components/showreel/Rostering'
import { VehicleRouting } from '@/components/showreel/VehicleRouting'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="animate-spin-slow absolute inset-0 h-full w-full"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1491eb" />
            <stop offset="1" stopColor="#1491eb" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="animate-spin-reverse-slower absolute inset-0 h-full w-full"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1491eb" />
            <stop offset="1" stopColor="#1491eb" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div aria-label="MiniZinc" className="overflow-hidden py-20 sm:py-32">
      <Container>
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-8 xl:gap-y-20">
          <div className="relative z-10 mx-auto xl:col-span-6 xl:pt-6">
            <h1 className="text-5xl font-medium tracking-tight text-gray-900">
              MiniZinc
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              MiniZinc is a high-level constraint modelling language that allows
              you to easily express and solve discrete optimisation problems.
            </p>
            <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button color="primary" href="/resources">
                <span className="inline-flex items-center gap-x-2 px-2 py-1">
                  <span>Get started</span>
                  <FontAwesomeIcon icon={faPlay} height="1em" />
                </span>
              </Button>
              <DirectDownload variant="outline" />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Latest release: {latest.version} (
              <Link href={changelog()} className="underline" color="gray">
                changelog
              </Link>
              )
            </p>
            <div className="mt-1 flex flex-col gap-x-2 text-sm text-gray-600 sm:flex-row">
              <span>
                <Link
                  className="inline-flex items-center gap-x-1"
                  color="gray"
                  href="/downloads"
                >
                  <FontAwesomeIcon icon={faDownload} height="1em" />
                  <span className="underline">Packages</span>
                </Link>
              </span>
              <span>
                <Link
                  className="inline-flex items-center gap-x-1"
                  color="gray"
                  href="https://github.com/MiniZinc"
                >
                  <FontAwesomeIcon icon={faGithub} height="1em" />
                  <span className="underline">Source code</span>
                </Link>
              </span>
              <span>
                <Link
                  className="inline-flex items-center gap-x-1"
                  color="gray"
                  href="/license"
                >
                  <FontAwesomeIcon icon={faScaleBalanced} height="1em" />
                  <span className="underline">License information</span>
                </Link>
              </span>
            </div>
            <div>
              <p className="mt-4 text-sm text-gray-600">
                MiniZinc is developed at{' '}
                <Link
                  color="gray"
                  className="underline"
                  href="https://www.monash.edu"
                >
                  Monash University
                </Link>{' '}
                with support from{' '}
                <Link
                  color="gray"
                  className="underline"
                  href="https://optima.org.au"
                >
                  OPTIMA
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 xl:col-span-6 xl:row-span-2 xl:mt-0">
            <BackgroundIllustration className="pointer-events-none absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 flex h-[448px] items-center justify-center px-9 sm:mx-0 xl:absolute xl:-inset-x-10 xl:-top-32 xl:-bottom-32 xl:h-auto xl:px-0">
              <Carousel
                className="w-full"
                style={{ maxWidth: '500px' }}
                autoAdvance={10000}
                slides={[
                  <Seating key="seating" />,
                  <Rostering key="rostering" />,
                  <VehicleRouting key="vrp" />,
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
