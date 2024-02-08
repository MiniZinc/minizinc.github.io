import { Link } from '@/components/Link'
import { Container } from '@/components/Container'

export function License() {
  return (
    <Container className="mb-6">
      <section
        id="minizinc-license"
        aria-labelledby="minizinc-license-title"
        className="py-6"
      >
        <h2
          id="minizinc-license-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          MiniZinc is Free and Open Source Software
        </h2>
        <p className="mt-4 leading-7">
          The core tools of MiniZinc, i.e., the MiniZinc compiler and the
          MiniZinc IDE, are distributed under the{' '}
          <Link href="/">Mozilla Public License version 2.0</Link>. This license
          is classified as{' '}
          <Link href="http://www.opensource.org/licenses/MPL-2.0">
            open source
          </Link>{' '}
          and{' '}
          <Link href="http://www.gnu.org/licenses/license-list.html#MPL-2.0">
            free software
          </Link>
          .
        </p>
        <p className="mt-4 leading-7">
          The Mozilla project maintains a{' '}
          <Link href="https://www.mozilla.org/en-US/MPL/2.0/FAQ/">
            useful FAQ about the Mozilla license
          </Link>
          . In particular, the FAQ explains your obligations if you want to use
          the MiniZinc source code or binaries we provide, or re-distribute the
          binaries, or distribute binaries that you created from the MiniZinc
          source code.
        </p>
      </section>

      <section
        id="third-party-license"
        aria-labelledby="third-party-title"
        className="py-6"
      >
        <h2
          id="third-party-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Third-party software
        </h2>

        <p className="mt-4 leading-7">
          The official MiniZinc binary packages contain several pieces of
          software in addition to the MiniZinc compiler and IDE. These are
          distributed under the following licenses:
        </p>
        <ul className="mx-8 mt-2 list-disc leading-relaxed">
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://www.qt.io/product/framework">
                Qt Framework
              </Link>
            </span>
            <p className="leading-7">
              The MiniZinc IDE is developed using the Qt toolkit, which is
              available under{' '}
              <Link href="https://www.qt.io/licensing/open-source-lgpl-obligations">
                several licenses including the LGPL
              </Link>
              . In the MiniZinc binary distributions, the MiniZinc IDE links
              against the dynamic libraries provided by the Qt framework. You
              can therefore replace those Qt libraries with your own version, as
              required by the LGPL. If you intend to re-distribute the MiniZinc
              IDE in a setting where you cannot comply with the terms of the
              LGPL, you may have to get a commercial license for Qt, or use
              MiniZinc without the IDE.
            </p>
          </li>
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://www.gecode.org">Gecode</Link>
            </span>
            <p className="leading-7">
              The source code for the Gecode solver is available from{' '}
              <Link href="https://github.com/gecode/gecode">GitHub</Link> under
              the{' '}
              <Link href="https://www.gecode.org/license.html">
                MIT license
              </Link>
              . In the MiniZinc binary distribution, Gecode is included as a
              stand-alone binary <code>fzn-gecode</code> (or{' '}
              <code>fzn-gecode.exe</code>), and statically linked as part of the
              MiniZinc compiler (<code>minizinc</code>). The distributed Gecode
              binary is compiled with support for Gecode Gist, and as such also
              links against the Qt framework (see above), with the same
              licensing implications.
            </p>
          </li>
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://github.com/chuffed/chuffed">Chuffed</Link>
            </span>
            <p className="leading-7">
              The source code for the Chuffed solver is available from{' '}
              <Link href="https://github.com/chuffed/chuffed">GitHub</Link>{' '}
              under the MIT license. In the MiniZinc binary distribution,
              Chuffed is included as a stand-alone binary{' '}
              <code>fzn-chuffed</code> (or <code>fzn-chuffed.exe</code>).
            </p>
          </li>
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://developers.google.com/optimization">
                OR-Tools CP-SAT
              </Link>
            </span>
            <p className="leading-7">
              The source code for the OR-Tools CP-SAT solver is available from{' '}
              <Link href="https://github.com/google/or-tools">GitHub</Link>{' '}
              under the Apache 2.0 license. In the MiniZinc binary distribution,
              CP-SAT is included as a stand-alone binary <code>fzn-cp-sat</code>{' '}
              (or <code>fzn-cp-sat.exe</code>).
            </p>
          </li>
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://github.com/coin-or/Cbc">COIN-OR CBC</Link>
            </span>
            <p className="leading-7">
              The source code for the COIN-OR branch and cut solver is available
              from <Link href="https://github.com/coin-or/Cbc">GitHub</Link>{' '}
              under the Eclipse Public License 1.0. In the MiniZinc binary
              distribution, CBC is statically linked into the MiniZinc compiler
              (<code>minizinc</code>).
            </p>
          </li>
          <li className="my-2">
            <span className="font-bold">
              <Link href="https://highs.dev">HiGHS</Link>
            </span>
            <p className="leading-7">
              The source code for the HiGHS solver is available from{' '}
              <Link href="https://github.com/ERGO-Code/HiGHS">GitHub</Link>{' '}
              under the MIT License. In the MiniZinc binary distribution, the
              MiniZinc compiler (<code>minizinc</code>) dynamically links to
              HiGHS at runtime.
            </p>
          </li>
        </ul>
        <p className="mt-2 leading-7">
          All open-source licenses above permit linking to and distributing
          binary versions of the software.
        </p>
      </section>
      <section
        id="minizinc-doc-license"
        aria-labelledby="minizinc-doc-license-title"
        className="py-6"
      >
        <h2
          id="minizinc-doc-license-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          MiniZinc Documentation
        </h2>
        <p className="mt-4 leading-7">
          The source code for the MiniZinc documentation is available from{' '}
          <Link href="https://github.com/MiniZinc/libminizinc/tree/master/docs">
            GitHub
          </Link>
          . The source code and the documentation itself is available under the
          terms of the{' '}
          <Link href="https://creativecommons.org/licenses/by-nd/4.0/">
            Creative Commons Attribution-NoDerivatives 4.0 International (CC
            BY-ND 4.0)
          </Link>{' '}
          license.
        </p>
      </section>
    </Container>
  )
}
