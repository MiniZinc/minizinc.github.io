import Image from 'next/image'

import { Container } from '@/components/Container'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'
import DeciZnsLogo from '@/images/logos/decizns.svg'
import clsx from 'clsx'

export function ProfessionalServices({ className, ...props }) {
  return (
    <section
      id="professional-services"
      className={clsx(className, 'py-12 sm:py-20')}
      {...props}
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <Link href="https://decizns.com/" title="deciZns">
            <Image src={DeciZnsLogo} alt="deciZns" height={50} />
          </Link>
        </div>
        <div className="mx-auto my-8 max-w-4xl px-4 sm:px-16 py-2 sm:py-4 text-justify text-gray-800 leading-7">
          <p>
            Need help with MiniZinc? deciZns provides specialist support to
            organisations tackling complex strategic and operational decisions
            using MiniZinc. From modelling and language features to solver
            performance, deciZns has the expertise to help you get to make real
            progress.
          </p>
        </div>
        <div className="max-auto mt-6 text-center">
          <Button color="primary" href="https://decizns.com/">
            <span className="px-2 py-1">Learn about deciZns</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
