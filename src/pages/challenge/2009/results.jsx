import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'
import { Button } from '@/components/Button'
import { Scripts } from '@/components/challenge/Scripts'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2009 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2009 Results</h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2009', '/challenge/2009'],
                'Results',
              ]}
            />
            <h3>Entrants</h3> There were two entrants this year:{' '}
            <ul>
              <li>Gecode</li>
              <li>SICStus</li>
            </ul>
            <p>
              In addition, the challenge organisers entered the following three
              FlatZinc implementations:
            </p>
            <ul>
              <li>ECLiPSe</li>
              <li>G12/FD</li>
              <li>G12/LazyFD</li>
            </ul>{' '}
            As per the challenge <Link href="/challenge/2009/rules">rules</Link>
            , these entries are not eligible for prizes, but do modify the
            scoring results. <h3>Description of Results</h3>
            <p>
              Times are in seconds. There are 100 points for each problem
              instance. In the SCB column: S indicates a solution was found; C
              indicates a complete search; and B indicates the best solution to
              an optimisation problem.
            </p>
            <p>
              A run that records a time of less than 900 seconds without
              returning a solution or completing its search indicates that the
              run was aborted for some other reason (e.g., running out of
              memory).
            </p>
            <p>
              Some solvers could not run certain problems (e.g., g12_lazyfd
              could not run fillomino because some model variables are
              unbounded); these scores are marked -N/A-.
            </p>
            <p>
              Some solvers produced incorrect results (a summary is available
              below); these scores are marked -BAD-. unbounded); these scores
              are marked -N/A-.
            </p>
            <ul>
              <li>
                <Link href="#summary">Summary of scores</Link>
              </li>
              <li>
                <Link href="#fd_search">
                  FD search (search strategy is prescribed in spec.)
                </Link>
              </li>
              <li>
                <Link href="#free_search">
                  Free search (search strategy is decided by solver)
                </Link>
              </li>
              <li>
                <Link href="#parallel_search">
                  Parallel search (Gecode parallel search results)
                </Link>
              </li>
              <li>
                <Link href="#erroneous">Erroneous results</Link>
              </li>
              <li>
                <Link href="#globals">
                  Table of global constraints used by model and by solver.
                </Link>
              </li>
            </ul>
            <h3>Summary of Results</h3>
            <h3>fd_search</h3>
            <table rules="none">
              <tbody>
                <tr bgcolor="#e0e0e0">
                  <td>sicstus </td>
                  <td align="right">1651.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>eclipse_ic </td>
                  <td align="right"> 322.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <b>gecode</b>
                  </td>
                  <td align="right">
                    <b>4008.8</b>
                  </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>g12_fd </td>
                  <td align="right">2040.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>g12_lazyfd </td>
                  <td align="right">1376.6 </td>
                </tr>
              </tbody>
            </table>
            <h3>free_search</h3>
            <table rules="none">
              <tbody>
                <tr bgcolor="#e0e0e0">
                  <td>sicstus </td>
                  <td align="right">1841.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <b>gecode</b>
                  </td>
                  <td align="right">
                    <b>4535.5</b>
                  </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>g12_fd </td>
                  <td align="right">1112.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>g12_lazyfd </td>
                  <td align="right">2511.1 </td>
                </tr>
              </tbody>
            </table>
            <h3>Detailed Results</h3>
            <h3>fd_search</h3>
            <table frame="box" rules="cols">
              <thead>
                <tr bgcolor="#d0d0d0">
                  <td>
                    <b>Problem</b>
                  </td>
                  <td>
                    <b>Instance</b>
                  </td>
                  <td>
                    <b>Solver</b>
                  </td>
                  <td>
                    <b>Time (s)</b>
                  </td>
                  <td>
                    <b>SCB</b>
                  </td>
                  <td>
                    <b>Score</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/01.dzn">01</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 74.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">175 </td>
                  <td>S </td>
                  <td align="right"> 25.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/03.dzn">03</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 65.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">230 </td>
                  <td>S </td>
                  <td align="right"> 16.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">32 </td>
                  <td>S </td>
                  <td align="right"> 18.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/05.dzn">05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 74.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">150 </td>
                  <td>S </td>
                  <td align="right"> 25.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/07.dzn">07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 74.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">85 </td>
                  <td>S </td>
                  <td align="right"> 25.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/09.dzn">09</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">33 </td>
                  <td>S </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">171 </td>
                  <td>S </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/13.dzn">13</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 65.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">333 </td>
                  <td>S </td>
                  <td align="right"> 16.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">42 </td>
                  <td>S </td>
                  <td align="right"> 17.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/15.dzn">15</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/17.dzn">17</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">5 </td>
                  <td>SC </td>
                  <td align="right"> 16.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 34.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 34.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">7 </td>
                  <td>SC </td>
                  <td align="right"> 15.2 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/19.dzn">19</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/08.dzn">08</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">8 </td>
                  <td>S </td>
                  <td align="right"> 26.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>S </td>
                  <td align="right"> 38.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">4 </td>
                  <td>S </td>
                  <td align="right"> 34.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">41 </td>
                  <td>S </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">17 </td>
                  <td>S </td>
                  <td align="right"> 44.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">49 </td>
                  <td>S </td>
                  <td align="right"> 26.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/13.dzn">13</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">164 </td>
                  <td>S </td>
                  <td align="right"> 27.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">74 </td>
                  <td>S </td>
                  <td align="right"> 40.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">115 </td>
                  <td>S </td>
                  <td align="right"> 32.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/14.dzn">14</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">485 </td>
                  <td>S </td>
                  <td align="right"> 56.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">823 </td>
                  <td>S </td>
                  <td align="right"> 43.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/15.dzn">15</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">21 </td>
                  <td>S </td>
                  <td align="right"> 29.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">7 </td>
                  <td>S </td>
                  <td align="right"> 52.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">183 </td>
                  <td>S </td>
                  <td align="right"> 18.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/16.dzn">16</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">68 </td>
                  <td>S </td>
                  <td align="right"> 28.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">23 </td>
                  <td>S </td>
                  <td align="right"> 51.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">317 </td>
                  <td>S </td>
                  <td align="right"> 19.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/17.dzn">17</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">37 </td>
                  <td>S </td>
                  <td align="right"> 26.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">10 </td>
                  <td>S </td>
                  <td align="right"> 51.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">67 </td>
                  <td>S </td>
                  <td align="right"> 22.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/18.dzn">18</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">65 </td>
                  <td>S </td>
                  <td align="right"> 29.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">32 </td>
                  <td>S </td>
                  <td align="right"> 42.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">72 </td>
                  <td>S </td>
                  <td align="right"> 28.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/20.dzn">20</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">21 </td>
                  <td>S </td>
                  <td align="right"> 23.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                  <td align="right"> 39.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">7 </td>
                  <td>S </td>
                  <td align="right"> 36.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/21.dzn">21</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">117 </td>
                  <td>S </td>
                  <td align="right"> 28.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">61 </td>
                  <td>S </td>
                  <td align="right"> 38.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">79 </td>
                  <td>S </td>
                  <td align="right"> 33.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_2.dzn">
                      non_awful_2
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_4.dzn">
                      non_awful_4
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_1.dzn">non_fast_1</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">290 </td>
                  <td>S </td>
                  <td align="right"> 13.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>S </td>
                  <td align="right"> 58.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">300 </td>
                  <td>S </td>
                  <td align="right"> 13.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">77 </td>
                  <td>S </td>
                  <td align="right"> 15.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_10.dzn">
                      non_fast_10
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">398 </td>
                  <td>S </td>
                  <td align="right"> 14.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">24 </td>
                  <td>S </td>
                  <td align="right"> 48.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">216 </td>
                  <td>S </td>
                  <td align="right"> 16.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">107 </td>
                  <td>S </td>
                  <td align="right"> 20.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_11.dzn">
                      non_fast_11
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_5.dzn">non_fast_5</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">41 </td>
                  <td>S </td>
                  <td align="right"> 63.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">141 </td>
                  <td>S </td>
                  <td align="right"> 36.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_7.dzn">non_fast_7</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">150 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_9.dzn">non_fast_9</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">858 </td>
                  <td>S </td>
                  <td align="right"> 18.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">30 </td>
                  <td>S </td>
                  <td align="right"> 60.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">283 </td>
                  <td>S </td>
                  <td align="right"> 21.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_2.dzn">non_med_2</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">297 </td>
                  <td>S </td>
                  <td align="right"> 54.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">426 </td>
                  <td>S </td>
                  <td align="right"> 45.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_4.dzn">non_med_4</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">225 </td>
                  <td>S </td>
                  <td align="right"> 58.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">456 </td>
                  <td>S </td>
                  <td align="right"> 41.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/gp50by50_1.dzn">
                      gp50by50_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">142 </td>
                  <td>SCB </td>
                  <td align="right"> 30.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">184 </td>
                  <td>SCB </td>
                  <td align="right"> 23.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">92 </td>
                  <td>SCB </td>
                  <td align="right"> 46.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/nrwsLarger4_1.dzn">
                      nrwsLarger4_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_15_15_1.dzn">
                      problem_15_15_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">315 </td>
                  <td>SCB </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">227 </td>
                  <td>SCB </td>
                  <td align="right"> 37.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">235 </td>
                  <td>SCB </td>
                  <td align="right"> 35.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_20_10_1.dzn">
                      problem_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 19.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">74 </td>
                  <td>SCB </td>
                  <td align="right"> 1.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 47.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 31.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_15_30_1.dzn">
                      wbo_15_30_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">26 </td>
                  <td>SCB </td>
                  <td align="right"> 30.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">21 </td>
                  <td>SCB </td>
                  <td align="right"> 37.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">24 </td>
                  <td>SCB </td>
                  <td align="right"> 32.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_15_1.dzn">
                      wbo_30_15_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">7 </td>
                  <td>SCB </td>
                  <td align="right"> 15.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">111 </td>
                  <td>SCB </td>
                  <td align="right"> 1.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 41.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 41.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_30_1.dzn">
                      wbo_30_30_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 38.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 61.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbop_20_10_1.dzn">
                      wbop_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 17.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">11 </td>
                  <td>SCB </td>
                  <td align="right"> 4.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 26.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 52.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_20_10_1.dzn">
                      wbp_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 14.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">32 </td>
                  <td>SCB </td>
                  <td align="right"> 1.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 42.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 42.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_30_10_1.dzn">
                      wbp_30_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">6 </td>
                  <td>SCB </td>
                  <td align="right"> 19.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">117 </td>
                  <td>SCB </td>
                  <td align="right"> 1.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 45.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">3 </td>
                  <td>SCB </td>
                  <td align="right"> 34.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/03.dzn">03</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 14.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/04.dzn">04</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 14.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/05.dzn">05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 16.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 16.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/06.dzn">06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 31.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 6.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 31.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 31.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/07.dzn">07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 18.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">5 </td>
                  <td>SC </td>
                  <td align="right"> 6.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 37.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 37.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/08.dzn">08</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 29.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 58.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 11.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/09.dzn">09</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 24.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">95 </td>
                  <td>SC </td>
                  <td align="right"> 0.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 49.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 24.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/10.dzn">10</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">21 </td>
                  <td>SCB </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">10 </td>
                  <td>SCB </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td>SC </td>
                  <td align="right"> 20.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 40.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 40.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/12.dzn">12</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0100.dzn">0100</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SC </td>
                  <td align="right"> 19.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">7 </td>
                  <td>SC </td>
                  <td align="right"> 13.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>SC </td>
                  <td align="right"> 16.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 37.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">8 </td>
                  <td>SC </td>
                  <td align="right"> 13.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0200.dzn">0200</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">13 </td>
                  <td>SC </td>
                  <td align="right"> 25.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">47 </td>
                  <td>SC </td>
                  <td align="right"> 16.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">60 </td>
                  <td>SC </td>
                  <td align="right"> 15.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">5 </td>
                  <td>SC </td>
                  <td align="right"> 42.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">31 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0300.dzn">0300</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">37 </td>
                  <td>SC </td>
                  <td align="right"> 24.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">156 </td>
                  <td>SC </td>
                  <td align="right"> 15.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">489 </td>
                  <td>SC </td>
                  <td align="right"> 13.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">13 </td>
                  <td>SC </td>
                  <td align="right"> 46.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">23 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0400.dzn">0400</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">78 </td>
                  <td>SC </td>
                  <td align="right"> 32.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">369 </td>
                  <td>SC </td>
                  <td align="right"> 20.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">41 </td>
                  <td>SC </td>
                  <td align="right"> 47.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">20 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0500.dzn">0500</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">139 </td>
                  <td>SC </td>
                  <td align="right"> 66.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">723 </td>
                  <td>SC </td>
                  <td align="right"> 33.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">243 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">24 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0600.dzn">0600</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">227 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">380 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">24 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0700.dzn">0700</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">347 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">157 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">26 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0800.dzn">0800</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">502 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">136 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">26 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0900.dzn">0900</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">697 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">132 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">31 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/1000.dzn">1000</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">183 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">30 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp05_true.dzn">
                      rpp05_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 15.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp09_false.dzn">
                      rpp09_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 20.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 29.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 29.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 20.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp12_true.dzn">
                      rpp12_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td>S </td>
                  <td align="right"> 19.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 33.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 23.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 23.2 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp14_false.dzn">
                      rpp14_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">3 </td>
                  <td>S </td>
                  <td align="right"> 19.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp15_true.dzn">
                      rpp15_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">17 </td>
                  <td>S </td>
                  <td align="right"> 15.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 40.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">9 </td>
                  <td>S </td>
                  <td align="right"> 18.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">3 </td>
                  <td>S </td>
                  <td align="right"> 26.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp19_false.dzn">
                      rpp19_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">280 </td>
                  <td>S </td>
                  <td align="right"> 53.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">366 </td>
                  <td>S </td>
                  <td align="right"> 46.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp22_true.dzn">
                      rpp22_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp24_false.dzn">
                      rpp24_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp26_true.dzn">
                      rpp26_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp30_false.dzn">
                      rpp30_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">4 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_11.dzn">
                      chicroster_dataset_11
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">13 </td>
                  <td>SCB </td>
                  <td align="right"> 4.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 31.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 31.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 31.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_14.dzn">
                      chicroster_dataset_14
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">14 </td>
                  <td>SCB </td>
                  <td align="right"> 3.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 52.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 26.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 17.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_17.dzn">
                      chicroster_dataset_17
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">17 </td>
                  <td>SCB </td>
                  <td align="right"> 4.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 36.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 36.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 24.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_3.dzn">
                      chicroster_dataset_3
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 9.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 45.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 22.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 22.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_5.dzn">
                      chicroster_dataset_5
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 7.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 46.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 23.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 23.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_7.dzn">
                      chicroster_dataset_7
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">6 </td>
                  <td>SCB </td>
                  <td align="right"> 6.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 23.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 46.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 23.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_8.dzn">
                      chicroster_dataset_8
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">18 </td>
                  <td>SCB </td>
                  <td align="right"> 5.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 36.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 21.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 36.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_13.dzn">
                      chicroster_dataset_large_13
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_15.dzn">
                      chicroster_dataset_large_15
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_19.dzn">
                      chicroster_dataset_large_19
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/02_07.dzn">02_07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/03_06.dzn">03_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 19.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/04_05.dzn">04_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/04_06.dzn">04_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/05_05.dzn">05_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 29.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 29.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">49 </td>
                  <td>SC </td>
                  <td align="right"> 12.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 29.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/05_06.dzn">05_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_04.dzn">06_04</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>SC </td>
                  <td align="right"> 14.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">16 </td>
                  <td>SC </td>
                  <td align="right"> 11.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SC </td>
                  <td align="right"> 18.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 22.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 34.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_05.dzn">06_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">586 </td>
                  <td>SC </td>
                  <td align="right"> 16.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">344 </td>
                  <td>SC </td>
                  <td align="right"> 16.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 66.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_06.dzn">06_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/07_02.dzn">07_02</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 15.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 21.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_5.dzn">
                      still_life_5
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 12.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 12.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_6.dzn">
                      still_life_6
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 15.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 5.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 31.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 31.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 15.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_7.dzn">
                      still_life_7
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 20.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">29 </td>
                  <td>SCB </td>
                  <td align="right"> 4.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 41.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">3 </td>
                  <td>SCB </td>
                  <td align="right"> 31.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">46 </td>
                  <td>SCB </td>
                  <td align="right"> 2.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_9.dzn">
                      still_life_9
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n34-k5.vrp.dzn">A-n34-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 39.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 37.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 23.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n44-k7.vrp.dzn">A-n44-k7.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 43.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 30.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 26.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n55-k9.vrp.dzn">A-n55-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 39.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 36.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 23.9 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n65-k9.vrp.dzn">A-n65-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 21.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 35.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 22.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 20.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n39-k5.vrp.dzn">B-n39-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n50-k8.vrp.dzn">B-n50-k8.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 37.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 37.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 25.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n64-k9.vrp.dzn">B-n64-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 38.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 37.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 23.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n19-k2.vrp.dzn">P-n19-k2.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 18.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 31.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 28.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 21.2 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n45-k5.vrp.dzn">P-n45-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 42.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 31.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 25.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n55-k7.vrp.dzn">P-n55-k7.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>eclipse_ic </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 37.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 37.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 25.3 </td>
                </tr>
              </tbody>
            </table>
            <h3>free_search</h3>
            <table frame="box" rules="cols">
              <thead>
                <tr bgcolor="#d0d0d0">
                  <td>
                    <b>Problem</b>
                  </td>
                  <td>
                    <b>Instance</b>
                  </td>
                  <td>
                    <b>Solver</b>
                  </td>
                  <td>
                    <b>Time (s)</b>
                  </td>
                  <td>
                    <b>SCB</b>
                  </td>
                  <td>
                    <b>Score</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/01.dzn">01</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/03.dzn">03</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/05.dzn">05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/07.dzn">07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/09.dzn">09</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">33 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/13.dzn">13</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/15.dzn">15</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/17.dzn">17</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 49.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 33.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">38 </td>
                  <td>SC </td>
                  <td align="right"> 17.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/19.dzn">19</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/08.dzn">08</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">9 </td>
                  <td>S </td>
                  <td align="right"> 22.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>S </td>
                  <td align="right"> 31.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 46.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">41 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">18 </td>
                  <td>S </td>
                  <td align="right"> 73.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">481 </td>
                  <td>S </td>
                  <td align="right"> 26.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/13.dzn">13</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">164 </td>
                  <td>S </td>
                  <td align="right"> 26.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">75 </td>
                  <td>S </td>
                  <td align="right"> 37.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">77 </td>
                  <td>S </td>
                  <td align="right"> 36.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/14.dzn">14</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">486 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/15.dzn">15</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">21 </td>
                  <td>S </td>
                  <td align="right"> 21.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">7 </td>
                  <td>S </td>
                  <td align="right"> 29.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">2 </td>
                  <td>S </td>
                  <td align="right"> 49.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/16.dzn">16</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">68 </td>
                  <td>S </td>
                  <td align="right"> 23.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">23 </td>
                  <td>S </td>
                  <td align="right"> 36.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">20 </td>
                  <td>S </td>
                  <td align="right"> 39.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/17.dzn">17</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">37 </td>
                  <td>S </td>
                  <td align="right"> 36.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">10 </td>
                  <td>S </td>
                  <td align="right"> 63.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/18.dzn">18</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">64 </td>
                  <td>S </td>
                  <td align="right"> 41.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">32 </td>
                  <td>S </td>
                  <td align="right"> 58.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/20.dzn">20</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">21 </td>
                  <td>S </td>
                  <td align="right"> 38.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">7 </td>
                  <td>S </td>
                  <td align="right"> 61.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/21.dzn">21</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">118 </td>
                  <td>S </td>
                  <td align="right"> 26.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">60 </td>
                  <td>S </td>
                  <td align="right"> 36.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">57 </td>
                  <td>S </td>
                  <td align="right"> 37.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_2.dzn">
                      non_awful_2
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">213 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_4.dzn">
                      non_awful_4
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">159 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_1.dzn">non_fast_1</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">292 </td>
                  <td>S </td>
                  <td align="right"> 17.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>S </td>
                  <td align="right"> 62.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">71 </td>
                  <td>S </td>
                  <td align="right"> 19.9 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_10.dzn">
                      non_fast_10
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">401 </td>
                  <td>S </td>
                  <td align="right"> 27.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">23 </td>
                  <td>S </td>
                  <td align="right"> 72.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_11.dzn">
                      non_fast_11
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                  <td align="right"> 73.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">183 </td>
                  <td>S </td>
                  <td align="right"> 26.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_5.dzn">non_fast_5</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">40 </td>
                  <td>S </td>
                  <td align="right"> 64.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">147 </td>
                  <td>S </td>
                  <td align="right"> 35.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_7.dzn">non_fast_7</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">147 </td>
                  <td>S </td>
                  <td align="right"> 47.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">119 </td>
                  <td>S </td>
                  <td align="right"> 52.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_9.dzn">non_fast_9</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">863 </td>
                  <td>S </td>
                  <td align="right"> 26.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">30 </td>
                  <td>S </td>
                  <td align="right"> 73.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_2.dzn">non_med_2</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">294 </td>
                  <td>S </td>
                  <td align="right"> 39.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">119 </td>
                  <td>S </td>
                  <td align="right"> 60.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_4.dzn">non_med_4</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">226 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/gp50by50_1.dzn">
                      gp50by50_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">140 </td>
                  <td>SCB </td>
                  <td align="right"> 53.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">161 </td>
                  <td>SCB </td>
                  <td align="right"> 46.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/nrwsLarger4_1.dzn">
                      nrwsLarger4_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_15_15_1.dzn">
                      problem_15_15_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">315 </td>
                  <td>SCB </td>
                  <td align="right"> 42.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">229 </td>
                  <td>SCB </td>
                  <td align="right"> 57.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_20_10_1.dzn">
                      problem_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td>SCB </td>
                  <td align="right"> 42.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 57.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_15_30_1.dzn">
                      wbo_15_30_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">27 </td>
                  <td>SCB </td>
                  <td align="right"> 44.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">21 </td>
                  <td>SCB </td>
                  <td align="right"> 56.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_15_1.dzn">
                      wbo_30_15_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">7 </td>
                  <td>SCB </td>
                  <td align="right"> 20.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 80.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_30_1.dzn">
                      wbo_30_30_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 38.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 61.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbop_20_10_1.dzn">
                      wbop_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 40.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 60.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_20_10_1.dzn">
                      wbp_20_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 75.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_30_10_1.dzn">
                      wbp_30_10_1
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">6 </td>
                  <td>SCB </td>
                  <td align="right"> 30.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 70.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/03.dzn">03</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 40.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 20.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 40.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/04.dzn">04</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 49.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 49.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">27 </td>
                  <td>SCB </td>
                  <td align="right"> 1.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/05.dzn">05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/06.dzn">06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 50.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 50.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/07.dzn">07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/08.dzn">08</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/09.dzn">09</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 75.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/10.dzn">10</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">20 </td>
                  <td>SCB </td>
                  <td align="right"> 34.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">10 </td>
                  <td>SCB </td>
                  <td align="right"> 65.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/11.dzn">11</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td>SC </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 66.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/12.dzn">12</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right">-N/A- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0100.dzn">0100</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td>SC </td>
                  <td align="right"> 24.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>SC </td>
                  <td align="right"> 21.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 36.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">8 </td>
                  <td>SC </td>
                  <td align="right"> 17.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0200.dzn">0200</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">13 </td>
                  <td>SC </td>
                  <td align="right"> 29.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">62 </td>
                  <td>SC </td>
                  <td align="right"> 19.4 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">4 </td>
                  <td>SC </td>
                  <td align="right"> 51.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">27 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0300.dzn">0300</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">37 </td>
                  <td>SC </td>
                  <td align="right"> 30.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">501 </td>
                  <td>SC </td>
                  <td align="right"> 17.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">14 </td>
                  <td>SC </td>
                  <td align="right"> 51.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">27 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0400.dzn">0400</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">78 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">40 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">25 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0500.dzn">0500</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">139 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">255 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">33 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0600.dzn">0600</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">226 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">260 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">24 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0700.dzn">0700</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">348 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">161 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">36 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0800.dzn">0800</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">503 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">244 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">28 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0900.dzn">0900</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">697 </td>
                  <td>SC </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">690 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">29 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/1000.dzn">1000</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">217 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">44 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp05_true.dzn">
                      rpp05_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 21.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 30.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 30.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>S </td>
                  <td align="right"> 18.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp09_false.dzn">
                      rpp09_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 33.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp12_true.dzn">
                      rpp12_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 58.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 41.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp14_false.dzn">
                      rpp14_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 50.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 50.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp15_true.dzn">
                      rpp15_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                  <td align="right"> 55.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>S </td>
                  <td align="right"> 45.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp19_false.dzn">
                      rpp19_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">284 </td>
                  <td>S </td>
                  <td align="right"> 25.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">4 </td>
                  <td>S </td>
                  <td align="right"> 74.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp22_true.dzn">
                      rpp22_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">6 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp24_false.dzn">
                      rpp24_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">2 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">6 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp26_true.dzn">
                      rpp26_true
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">8 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp30_false.dzn">
                      rpp30_false
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">3 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">11 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_11.dzn">
                      chicroster_dataset_11
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">12 </td>
                  <td>SCB </td>
                  <td align="right"> 4.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 60.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 30.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">13 </td>
                  <td>SCB </td>
                  <td align="right"> 4.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_14.dzn">
                      chicroster_dataset_14
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">13 </td>
                  <td>SCB </td>
                  <td align="right"> 9.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 64.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 25.9 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_17.dzn">
                      chicroster_dataset_17
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">16 </td>
                  <td>SCB </td>
                  <td align="right"> 5.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 84.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">7 </td>
                  <td>SCB </td>
                  <td align="right"> 10.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_3.dzn">
                      chicroster_dataset_3
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">4 </td>
                  <td>SCB </td>
                  <td align="right"> 16.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 41.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 41.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_5.dzn">
                      chicroster_dataset_5
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 6.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 37.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 37.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                  <td align="right"> 18.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_7.dzn">
                      chicroster_dataset_7
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">6 </td>
                  <td>SCB </td>
                  <td align="right"> 9.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 67.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 22.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_8.dzn">
                      chicroster_dataset_8
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">18 </td>
                  <td>SCB </td>
                  <td align="right"> 8.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>SCB </td>
                  <td align="right"> 39.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 52.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_13.dzn">
                      chicroster_dataset_large_13
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_15.dzn">
                      chicroster_dataset_large_15
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 24.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">64 </td>
                  <td>SCB </td>
                  <td align="right"> 75.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_19.dzn">
                      chicroster_dataset_large_19
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/02_07.dzn">02_07</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/03_06.dzn">03_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/04_05.dzn">04_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/04_06.dzn">04_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">1 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/05_05.dzn">05_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/05_06.dzn">05_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 31.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 31.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">7 </td>
                  <td>SC </td>
                  <td align="right"> 14.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                  <td align="right"> 22.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_04.dzn">06_04</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_05.dzn">06_05</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">590 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">6 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/06_06.dzn">06_06</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">790 </td>
                  <td>C </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>S </td>
                  <td align="right">-BAD- </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/search_stress2/search_stress2.mzn">
                      search_stress2
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/search_stress2/07_02.dzn">07_02</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_5.dzn">
                      still_life_5
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 25.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_6.dzn">
                      still_life_6
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">1 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 46.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                  <td align="right"> 46.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 7.7 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_7.dzn">
                      still_life_7
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">5 </td>
                  <td>SCB </td>
                  <td align="right"> 28.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                  <td align="right"> 56.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">10 </td>
                  <td>SCB </td>
                  <td align="right"> 15.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">395 </td>
                  <td>SCB </td>
                  <td align="right"> 0.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_9.dzn">
                      still_life_9
                    </Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td></td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 100.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n34-k5.vrp.dzn">A-n34-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 28.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 26.7 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 45.1 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n44-k7.vrp.dzn">A-n44-k7.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 28.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 26.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 44.9 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n55-k9.vrp.dzn">A-n55-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 29.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 26.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 44.4 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n65-k9.vrp.dzn">A-n65-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 20.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 21.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 22.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 35.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n39-k5.vrp.dzn">B-n39-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 26.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 28.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 44.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n50-k8.vrp.dzn">B-n50-k8.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 37.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 38.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 23.5 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n64-k9.vrp.dzn">B-n64-k9.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 24.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 29.6 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 28.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 17.3 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n19-k2.vrp.dzn">P-n19-k2.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 20.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 25.5 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 19.8 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 34.6 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n45-k5.vrp.dzn">P-n45-k5.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 41.3 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 33.9 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 24.8 </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n55-k7.vrp.dzn">P-n55-k7.vrp</Link>
                  </td>
                  <td>sicstus </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 0.0 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 27.2 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_fd </td>
                  <td align="right">900 </td>
                  <td>S </td>
                  <td align="right"> 27.1 </td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td></td>
                  <td></td>
                  <td>g12_lazyfd </td>
                  <td align="right">900 </td>
                  <td>SB </td>
                  <td align="right"> 45.8 </td>
                </tr>
              </tbody>
            </table>
            <h3>parallel_search</h3>
            <table frame="box" rules="cols">
              <thead>
                <tr bgcolor="#d0d0d0">
                  <td>
                    <b>Problem</b>
                  </td>
                  <td>
                    <b>Instance</b>
                  </td>
                  <td>
                    <b>Solver</b>
                  </td>
                  <td>
                    <b>Time (s)</b>
                  </td>
                  <td>
                    <b>SCB</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/01.dzn">01</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/03.dzn">03</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/05.dzn">05</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/07.dzn">07</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/09.dzn">09</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">21 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">33</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/11.dzn">11</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">453 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/13.dzn">13</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/15.dzn">15</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">457 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/17.dzn">17</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/black-hole/black-hole.mzn">
                      black-hole
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/black-hole/19.dzn">19</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">463 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/08.dzn">08</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">3</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/11.dzn">11</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">17</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/13.dzn">13</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">9 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">74</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/14.dzn">14</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">188 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">485</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/15.dzn">15</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">7</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/16.dzn">16</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">12 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">23</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/17.dzn">17</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">10</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/18.dzn">18</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">17 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">32</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/20.dzn">20</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">5 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">6</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/fillomino/fillomino.mzn">fillomino</Link>
                  </td>
                  <td>
                    <Link href="probs/fillomino/21.dzn">21</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">33 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">61</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_2.dzn">
                      non_awful_2
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_awful_4.dzn">
                      non_awful_4
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_1.dzn">non_fast_1</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">4</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_10.dzn">
                      non_fast_10
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">24</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_11.dzn">
                      non_fast_11
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">4 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">6</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_5.dzn">non_fast_5</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">6 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">41</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_7.dzn">non_fast_7</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">150</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_fast_9.dzn">non_fast_9</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">16 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">30</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_2.dzn">non_med_2</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">273 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">297</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/nonogram/non.mzn">nonogram</Link>
                  </td>
                  <td>
                    <Link href="probs/nonogram/non_med_4.dzn">non_med_4</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">7 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">225</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/gp50by50_1.dzn">
                      gp50by50_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">165 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">184</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/nrwsLarger4_1.dzn">
                      nrwsLarger4_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">452 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_15_15_1.dzn">
                      problem_15_15_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">121 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">227</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/problem_20_10_1.dzn">
                      problem_20_10_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_15_30_1.dzn">
                      wbo_15_30_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">14 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">21</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_15_1.dzn">
                      wbo_30_15_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">2</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbo_30_30_1.dzn">
                      wbo_30_30_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">456 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbop_20_10_1.dzn">
                      wbop_20_10_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_20_10_1.dzn">
                      wbp_20_10_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/open_stacks/open_stacks_01.mzn">
                      open_stacks
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/open_stacks/wbp_30_10_1.dzn">
                      wbp_30_10_1
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">2</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/03.dzn">03</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/04.dzn">04</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/05.dzn">05</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/06.dzn">06</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/07.dzn">07</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/08.dzn">08</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/09.dzn">09</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/10.dzn">10</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">11 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">10</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/11.dzn">11</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/p1f/p1f.mzn">p1f</Link>
                  </td>
                  <td>
                    <Link href="probs/p1f/12.dzn">12</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">459 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0100.dzn">0100</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">3 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">3</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0200.dzn">0200</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">59 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">60</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0300.dzn">0300</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">506 </td>
                  <td>SC </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">489</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0400.dzn">0400</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0500.dzn">0500</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0600.dzn">0600</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0700.dzn">0700</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0800.dzn">0800</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/0900.dzn">0900</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/prop_stress/prop_stress.mzn">
                      prop_stress
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/prop_stress/1000.dzn">1000</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">900 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp05_true.dzn">
                      rpp05_true
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp09_false.dzn">
                      rpp09_false
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp12_true.dzn">
                      rpp12_true
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp14_false.dzn">
                      rpp14_false
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp15_true.dzn">
                      rpp15_true
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp19_false.dzn">
                      rpp19_false
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">178 </td>
                  <td>S </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">280</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp22_true.dzn">
                      rpp22_true
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">459 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp24_false.dzn">
                      rpp24_false
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">452 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp26_true.dzn">
                      rpp26_true
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">452 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/rectangle-packing/rect_packing.mzn">
                      rectangle-packing
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/rectangle-packing/rpp30_false.dzn">
                      rpp30_false
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">453 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_11.dzn">
                      chicroster_dataset_11
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_14.dzn">
                      chicroster_dataset_14
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_17.dzn">
                      chicroster_dataset_17
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_3.dzn">
                      chicroster_dataset_3
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_5.dzn">
                      chicroster_dataset_5
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_7.dzn">
                      chicroster_dataset_7
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">1</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_8.dzn">
                      chicroster_dataset_8
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">2 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">2</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_13.dzn">
                      chicroster_dataset_large_13
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">459 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_15.dzn">
                      chicroster_dataset_large_15
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">452 </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/roster/roster_model.mzn">roster</Link>
                  </td>
                  <td>
                    <Link href="probs/roster/chicroster_dataset_large_19.dzn">
                      chicroster_dataset_large_19
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">453 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_5.dzn">
                      still_life_5
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_6.dzn">
                      still_life_6
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">0 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">0</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_7.dzn">
                      still_life_7
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">1 </td>
                  <td>SCB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">2</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/still_life/still_life.mzn">
                      still_life
                    </Link>
                  </td>
                  <td>
                    <Link href="probs/still_life/still_life_9.dzn">
                      still_life_9
                    </Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">452 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n34-k5.vrp.dzn">A-n34-k5.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">712 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n44-k7.vrp.dzn">A-n44-k7.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">803 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n55-k9.vrp.dzn">A-n55-k9.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">870 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/A-n65-k9.vrp.dzn">A-n65-k9.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">454 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n39-k5.vrp.dzn">B-n39-k5.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">480 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n50-k8.vrp.dzn">B-n50-k8.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">457 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/B-n64-k9.vrp.dzn">B-n64-k9.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">458 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n19-k2.vrp.dzn">P-n19-k2.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">477 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n45-k5.vrp.dzn">P-n45-k5.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">781 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr bgcolor="#e0e0e0">
                  <td>
                    <Link href="probs/vrp/vrp.mzn">vrp</Link>
                  </td>
                  <td>
                    <Link href="probs/vrp/P-n55-k7.vrp.dzn">P-n55-k7.vrp</Link>
                  </td>
                  <td>gecode </td>
                  <td align="right">464 </td>
                  <td>SB </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>[non-par.]</td>
                  <td alight="right">900</td>
                </tr>
              </tbody>
            </table>
            <h3>Erroneous Results</h3>
            <p>
              g12_lazyfd could not run fillomino, p1f, or open_stacks because
              these models contain unbounded variables.
            </p>
            <p>
              g12_lazyfd incorrectly reports solutions for search_stress2
              problems 06_06, 07_07, 08_08, 10_10, 11_11, 12_12, 14_14, and
              15_15.
            </p>
            <p>
              sicstus incorrectly reports unsatisfiability for black-hole
              problems, except for 17 which is unsatisfiable.
            </p>
            <p>eclipse_ic incorrectly reports unsatisfiability for roster. </p>
            <h3>Global constraints used in each model</h3>
            <p>
              The following table lists the global constraints used by each
              model in this year&apos;s challenge.
            </p>
            <p>
              <table frame="box" rules="cols">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Global constraints used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>black-hole</td>
                    <td>inverse, table</td>
                  </tr>
                  <tr>
                    <td>fillomino</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>nonogram</td>
                    <td>regular</td>
                  </tr>
                  <tr>
                    <td>open-stacks</td>
                    <td>all_different</td>
                  </tr>
                  <tr>
                    <td>p1f</td>
                    <td>all_different, inverse, lex_less</td>
                  </tr>
                  <tr>
                    <td>prop_stress</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>rectangle-packing</td>
                    <td>cumulative</td>
                  </tr>
                  <tr>
                    <td>roster</td>
                    <td>at_least, at_most, exactly</td>
                  </tr>
                  <tr>
                    <td>search_stress2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>still-life</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>vrp</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {/*--------------------------------------------------------------------*/}
            </p>
            <h3>Builtin global constraints per FlatZinc solver</h3>
            <p>
              The following table lists the global constraints that are provided
              as builtins by each solver.
            </p>
            <p>
              <table frame="box" rules="cols">
                <thead>
                  <tr>
                    <th>Solver</th>
                    <th>Builtin global constraints</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ECLiPSe/IC</td>
                    <td>
                      all_different, all_disjoint, at_least, at_most, count,
                      cumulative, disjoint, exactly, link_set_to_booleans,
                      maximum, sort{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>G12/FD</td>
                    <td>all_different, cumulative</td>
                  </tr>
                  <tr>
                    <td>G12/LazyFD</td>
                    <td>all_different</td>
                  </tr>
                  <tr>
                    <td>Gecode</td>
                    <td>
                      all_different, among, at_least, at_most, count,
                      cumulative, disjoint, distribute, exactly, increasing,
                      inverse, lex_lesseq, lex_less, maximum, minimum, nvalue,
                      partition_set, regular, sort, sum_pred, table
                    </td>
                  </tr>
                  <tr>
                    <td>SICStus</td>
                    <td>
                      all_different, at_least, at_most, cumulative, exactly,
                      global_cardinality, inverse, lex_lesseq, lex_less,
                      maximum, nvalue, sort table{' '}
                    </td>
                  </tr>
                </tbody>
              </table>
              {/*--------------------------------------------------------------------*/}
            </p>
            <hr />
            <p>The files on this page are for MiniZinc version 1.0.</p>
            <p>
              Versions of these files for the current version of MiniZinc are
              available as part of the{' '}
              <Link href="http://web.archive.org/web/20220308033715/https://www.minizinc.org/g12distrib.html">
                G12 MiniZinc distribution
              </Link>
              .
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
