import Image from 'next/image'

import { Link } from '@/components/Link'
import { Container } from '@/components/Container'
import MonashLogo from '@/images/logos/monash.svg'
import OptimaLogo from '@/images/logos/optima.svg'
import { SiteMap } from '@/components/sitemap/SiteMap'
import {
  faGoogle,
  faXTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import getConfig from 'next/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { publicRuntimeConfig } = getConfig()
export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col gap-y-6 py-6 sm:gap-y-12 sm:py-12">
          <div className="flex flex-col items-stretch justify-between gap-y-6 sm:flex-row sm:gap-y-12 lg:items-start">
            <div className="grow">
              <SiteMap />
            </div>
            <div>
              <div className="flex gap-4 text-gray-600">
                <Link
                  href="https://twitter.com/MiniZinc"
                  color="plain"
                  className="hover:text-gray-800"
                  title="Follow @MiniZinc on X"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <Link
                  href="https://www.facebook.com/minizinclanguage"
                  color="plain"
                  className="hover:text-gray-800"
                  title="Connect with MiniZinc on Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  href="https://groups.google.com/forum/#!forum/minizinc"
                  color="plain"
                  className="hover:text-gray-800"
                  title="MiniZinc Google Group"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
                <Link
                  href="https://stackoverflow.com/questions/tagged/minizinc"
                  color="plain"
                  className="hover:text-gray-800"
                  title="MiniZinc on StackOverflow"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </Link>
                <Link
                  href="https://github.com/minizinc"
                  color="plain"
                  className="hover:text-gray-800"
                  title="MiniZinc on GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4">
            <Link href="https://www.monash.edu" title="Monash University">
              <Image src={MonashLogo} alt="Monash University" height={110} />
            </Link>
            <Link href="https://optima.org.au" title="OPTIMA">
              <Image src={OptimaLogo} alt="OPTIMA" height={80} />
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-800">
              © {publicRuntimeConfig.copyrightYear} MiniZinc Team
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
