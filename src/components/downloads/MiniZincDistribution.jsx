import { Container } from '@/components/Container'
import screenshot from '@/images/ide_code_small.png'
import Image from 'next/image'
import { Link } from '@/components/Link'

export function MiniZincDistribution() {
  return (
    <Container>
      <section
        id="minizinc-distribution"
        aria-labelledby="minizinc-distribution-title"
        className="mb-6"
      >
        <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
          <div>
            <h2
              id="minizinc-distribution-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
            >
              The MiniZinc compiler and IDE
            </h2>
            <p className="my-2 max-w-prose leading-7">
              The compiler is the heart of the MiniZinc tool chain. It
              translates constraint models into FlatZinc, a language that is
              understood by a wide range of solvers.
            </p>
            <p className="my-2 max-w-prose leading-7">
              MiniZinc comes with a simple Integrated Development Environment,
              the MiniZinc IDE, which makes it easy to develop and run
              constraint models.
            </p>
            <h3 className="my-3 text-2xl font-medium tracking-tight text-gray-900">
              Solvers
            </h3>
            <p>A number of solvers are included in the official binary packages:</p>
            <ul className="mx-2 my-2 list-inside list-disc leading-relaxed">
              <li>
                <Link href="https://www.gecode.org">Gecode</Link>
              </li>
              <li>
                <Link href="https://github.com/chuffed/chuffed">Chuffed</Link>
              </li>
              <li>
                <Link href="https://developers.google.com/optimization">
                  Google OR-Tools CP-SAT
                </Link>
              </li>
              <li>
                <Link href="https://highs.dev">HiGHS</Link>
              </li>
              <li>
                <Link href="https://github.com/coin-or/Cbc">COIN-OR CBC</Link>
              </li>
            </ul>
            <p className="mt-2 leading-7">
              MiniZinc can also interface with the following solvers if
              installed:
            </p>
            <ul className="mx-2 my-2 list-inside list-disc leading-relaxed">
              <li>
                <Link href="https://www.gurobi.com">Gurobi</Link>
              </li>
              <li>
                <Link href="https://www.ibm.com/products/ilog-cplex-optimization-studio">
                  IBM ILOG CPLEX
                </Link>
              </li>
              <li>
                <Link href="https://www.scipopt.org">SCIP</Link>
              </li>
              <li>
                <Link href="https://www.fico.com/en/products/fico-xpress-optimization">
                  FICO Xpress
                </Link>
              </li>
            </ul>
            <p className="mt-2 leading-7">
              Additionally, many other compatible solvers can be installed,
              including:
            </p>
            <ul className="mx-2 my-2 list-inside list-disc leading-relaxed">
              <li>
                <Link href="https://choco-solver.org">Choco 4</Link>
              </li>
              <li>
                <Link href="https://github.com/radsz/jacop">JaCoP</Link>
              </li>
              <li>
                <Link href="https://github.com/ehebrard/Mistral-2.0">
                  Mistral-2.0
                </Link>
              </li>
              <li>
                <Link href="http://picat-lang.org">Picat CP/SAT</Link>
              </li>
              <li>
                <Link href="https://sicstus.sics.se">SICStus Prolog</Link>
              </li>
              <li>
                <Link href="https://github.com/informarte/yuck">Yuck</Link>
              </li>
            </ul>
            <p className="my-2 leading-7">
              Note that if you build MiniZinc from source, you will have to install any desired solvers yourself.
            </p>
          </div>
          <div>
            <Image src={screenshot} alt="The MiniZinc IDE" />
          </div>
        </div>
      </section>
    </Container>
  )
}
