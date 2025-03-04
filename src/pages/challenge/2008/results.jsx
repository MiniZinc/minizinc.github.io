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
        <title>MiniZinc - Challenge 2008 Results</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <table border="1">
              <thead>
                <tr>
                  <th>MiniZinc model</th>
                  <th>Instance</th>
                  <th>eclipse_fd</th>
                  <th>[score]</th>
                  <th>eclipse_ic</th>
                  <th>[score]</th>
                  <th>g12_fd</th>
                  <th>[score]</th>
                  <th>gecode</th>
                  <th>[score]</th>
                </tr>
              </thead>
              <tbody>
                <tr bgcolor="lightgrey">
                  <td rowspan="11">
                    <Link href="./probs/debruijn_binary/debruijn_binary.mzn">
                      debruijn_binary.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/debruijn_binary/02_03.dzn">
                      02_03.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.23s</td>
                  <td bgcolor="powderblue">52.8</td>
                  <td>0.54s</td>
                  <td bgcolor="powderblue">47.2</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/02_07.dzn">
                      02_07.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>1.73s</td>
                  <td bgcolor="powderblue">45.8</td>
                  <td>0.94s</td>
                  <td bgcolor="powderblue">54.2</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/02_08.dzn">
                      02_08.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>7.47s</td>
                  <td bgcolor="powderblue">34.1</td>
                  <td>0.89s</td>
                  <td bgcolor="powderblue">65.9</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/02_09.dzn">
                      02_09.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>34.18s</td>
                  <td bgcolor="powderblue">28.6</td>
                  <td>1.73s</td>
                  <td bgcolor="powderblue">71.4</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/02_10.dzn">
                      02_10.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>167.43s</td>
                  <td bgcolor="powderblue">27.8</td>
                  <td>9.09s</td>
                  <td bgcolor="powderblue">72.2</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/03_06.dzn">
                      03_06.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>39.09s</td>
                  <td bgcolor="powderblue">18.1</td>
                  <td>4.49s</td>
                  <td bgcolor="powderblue">27.0</td>
                  <td>0.49s</td>
                  <td bgcolor="powderblue">54.9</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/03_07.dzn">
                      03_07.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>2.98s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/03_08.dzn">
                      03_08.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/04_06.dzn">
                      04_06.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/04_07.dzn">
                      04_07.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/debruijn_binary/04_08.dzn">
                      04_08.dzn
                    </Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td rowspan="10">
                    <Link href="./probs/nmseq/nmseq.mzn">nmseq.mzn</Link>
                  </td>
                  <td>
                    <Link href="./probs/nmseq/020.dzn">020.dzn</Link>
                  </td>
                  <td>0.65s</td>
                  <td bgcolor="powderblue">31.2</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.99s</td>
                  <td bgcolor="powderblue">28.7</td>
                  <td>0.03s</td>
                  <td bgcolor="powderblue">40.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/040.dzn">040.dzn</Link>
                  </td>
                  <td>7.89s</td>
                  <td bgcolor="powderblue">21.5</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>2.85s</td>
                  <td bgcolor="powderblue">27.9</td>
                  <td>0.27s</td>
                  <td bgcolor="powderblue">50.6</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/060.dzn">060.dzn</Link>
                  </td>
                  <td>48.61s</td>
                  <td bgcolor="powderblue">27.2</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>1.27s</td>
                  <td bgcolor="powderblue">72.8</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/080.dzn">080.dzn</Link>
                  </td>
                  <td>182.41s</td>
                  <td bgcolor="powderblue">18.0</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>47.27s</td>
                  <td bgcolor="powderblue">21.7</td>
                  <td>4.51s</td>
                  <td bgcolor="powderblue">60.4</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/100.dzn">100.dzn</Link>
                  </td>
                  <td>473.98s</td>
                  <td bgcolor="powderblue">26.6</td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>14.51s</td>
                  <td bgcolor="powderblue">73.4</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/150.dzn">150.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>102.79s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/200.dzn">200.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>330.92s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/300.dzn">300.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/400.dzn">400.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/nmseq/500.dzn">500.dzn</Link>
                  </td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td rowspan="7">
                    <Link href="./probs/pentominoes-int/pentominoes-int.mzn">
                      pentominoes-int.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/pentominoes-int/01.dzn">01.dzn</Link>
                  </td>
                  <td>0.28s</td>
                  <td bgcolor="powderblue">25.7</td>
                  <td>0.50s</td>
                  <td bgcolor="powderblue">23.8</td>
                  <td>0.96s</td>
                  <td bgcolor="powderblue">21.1</td>
                  <td>0.00s</td>
                  <td bgcolor="powderblue">29.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/02.dzn">02.dzn</Link>
                  </td>
                  <td>17.02s</td>
                  <td bgcolor="powderblue">19.6</td>
                  <td>429.18s</td>
                  <td bgcolor="powderblue">16.8</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.14s</td>
                  <td bgcolor="powderblue">63.6</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/03.dzn">03.dzn</Link>
                  </td>
                  <td>1.98s</td>
                  <td bgcolor="powderblue">21.4</td>
                  <td>4.27s</td>
                  <td bgcolor="powderblue">17.5</td>
                  <td>1.73s</td>
                  <td bgcolor="powderblue">22.2</td>
                  <td>0.01s</td>
                  <td bgcolor="powderblue">38.8</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/04.dzn">04.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Out of Memory</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>186.19s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/05.dzn">05.dzn</Link>
                  </td>
                  <td>296.44s</td>
                  <td bgcolor="powderblue">25.8</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>4.00s</td>
                  <td bgcolor="powderblue">74.2</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/06.dzn">06.dzn</Link>
                  </td>
                  <td>13.38s</td>
                  <td bgcolor="powderblue">20.6</td>
                  <td>200.04s</td>
                  <td bgcolor="powderblue">16.9</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.23s</td>
                  <td bgcolor="powderblue">62.5</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/pentominoes-int/07.dzn">07.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>37.33s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td rowspan="10">
                    <Link href="./probs/quasigroup7/quasigroup7.mzn">
                      quasigroup7.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/quasigroup7/05.dzn">05.dzn</Link>
                  </td>
                  <td>0.82s</td>
                  <td bgcolor="powderblue">22.8</td>
                  <td>1.23s</td>
                  <td bgcolor="powderblue">20.9</td>
                  <td>0.52s</td>
                  <td bgcolor="powderblue">24.9</td>
                  <td>0.00s</td>
                  <td bgcolor="powderblue">31.3</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/06.dzn">06.dzn</Link>
                  </td>
                  <td>7.40s</td>
                  <td bgcolor="powderblue">15.8</td>
                  <td>11.22s</td>
                  <td bgcolor="powderblue">14.7</td>
                  <td>0.57s</td>
                  <td bgcolor="powderblue">29.9</td>
                  <td>0.01s</td>
                  <td bgcolor="powderblue">39.6</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/07.dzn">07.dzn</Link>
                  </td>
                  <td>140.48s</td>
                  <td bgcolor="powderblue">12.7</td>
                  <td>206.94s</td>
                  <td bgcolor="powderblue">12.7</td>
                  <td>0.60s</td>
                  <td bgcolor="powderblue">33.7</td>
                  <td>0.19s</td>
                  <td bgcolor="powderblue">40.9</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/08.dzn">08.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>1.01s</td>
                  <td bgcolor="powderblue">59.4</td>
                  <td>3.42s</td>
                  <td bgcolor="powderblue">40.6</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/09.dzn">09.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.60s</td>
                  <td bgcolor="powderblue">50.3</td>
                  <td>0.64s</td>
                  <td bgcolor="powderblue">49.7</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/10.dzn">10.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/11.dzn">11.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/12.dzn">12.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/13.dzn">13.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/quasigroup7/14.dzn">14.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td rowspan="9">
                    <Link href="./probs/radiation/radiation.mzn">
                      radiation.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/radiation/01.dzn">01.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>22.15s</td>
                  <td bgcolor="powderblue">22.6</td>
                  <td>5.45s</td>
                  <td bgcolor="powderblue">38.0</td>
                  <td>5.05s</td>
                  <td bgcolor="powderblue">39.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/02.dzn">02.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>811.47s</td>
                  <td bgcolor="powderblue">100.0</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/03.dzn">03.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>233.47s</td>
                  <td bgcolor="powderblue">56.2</td>
                  <td>386.68s</td>
                  <td bgcolor="powderblue">43.8</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/04.dzn">04.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>26.73s</td>
                  <td bgcolor="powderblue">21.8</td>
                  <td>6.51s</td>
                  <td bgcolor="powderblue">35.8</td>
                  <td>4.59s</td>
                  <td bgcolor="powderblue">42.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/05.dzn">05.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>1.17s</td>
                  <td bgcolor="powderblue">29.0</td>
                  <td>1.00s</td>
                  <td bgcolor="powderblue">30.0</td>
                  <td>0.10s</td>
                  <td bgcolor="powderblue">41.0</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/06.dzn">06.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>11.77s</td>
                  <td bgcolor="powderblue">24.0</td>
                  <td>3.40s</td>
                  <td bgcolor="powderblue">38.0</td>
                  <td>3.41s</td>
                  <td bgcolor="powderblue">38.0</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/07.dzn">07.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>21.40s</td>
                  <td bgcolor="powderblue">21.8</td>
                  <td>5.58s</td>
                  <td bgcolor="powderblue">34.3</td>
                  <td>3.26s</td>
                  <td bgcolor="powderblue">43.9</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/08.dzn">08.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>75.13s</td>
                  <td bgcolor="powderblue">22.6</td>
                  <td>17.50s</td>
                  <td bgcolor="powderblue">40.9</td>
                  <td>21.53s</td>
                  <td bgcolor="powderblue">36.6</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/radiation/09.dzn">09.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>567.81s</td>
                  <td bgcolor="powderblue">100.0</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td rowspan="10">
                    <Link href="./probs/rcpsp/rcpsp.mzn">rcpsp.mzn</Link>
                  </td>
                  <td>
                    <Link href="./probs/rcpsp/00.dzn">00.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/01.dzn">01.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/02.dzn">02.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>9.22s</td>
                  <td bgcolor="powderblue">100.0</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/03.dzn">03.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/04.dzn">04.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/05.dzn">05.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/06.dzn">06.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/07.dzn">07.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/08.dzn">08.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/rcpsp/09.dzn">09.dzn</Link>
                  </td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Abort</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td rowspan="3">
                    <Link href="./probs/search_stress/search_stress.mzn">
                      search_stress.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/search_stress/04_04.dzn">
                      04_04.dzn
                    </Link>
                  </td>
                  <td>0.32s</td>
                  <td bgcolor="powderblue">24.7</td>
                  <td>0.38s</td>
                  <td bgcolor="powderblue">24.1</td>
                  <td>0.56s</td>
                  <td bgcolor="powderblue">22.8</td>
                  <td>0.01s</td>
                  <td bgcolor="powderblue">28.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/search_stress/08_04.dzn">
                      08_04.dzn
                    </Link>
                  </td>
                  <td>143.7s</td>
                  <td bgcolor="powderblue">16.7</td>
                  <td>208.6s</td>
                  <td bgcolor="powderblue">15.4</td>
                  <td>32.6s</td>
                  <td bgcolor="powderblue">30.5</td>
                  <td>23.3s</td>
                  <td bgcolor="powderblue">37.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/search_stress/08_08.dzn">
                      08_08.dzn
                    </Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                </tr>
                <tr bgcolor="white">
                  <td rowspan="10">
                    <Link href="./probs/shortest_path/shortest_path.mzn">
                      shortest_path.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/shortest_path/00.dzn">00.dzn</Link>
                  </td>
                  <td>2.24s</td>
                  <td bgcolor="powderblue">27.3</td>
                  <td>3.36s</td>
                  <td bgcolor="powderblue">24.6</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.10s</td>
                  <td bgcolor="powderblue">48.1</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/01.dzn">01.dzn</Link>
                  </td>
                  <td>2.96s</td>
                  <td bgcolor="powderblue">21.6</td>
                  <td>4.29s</td>
                  <td bgcolor="powderblue">19.3</td>
                  <td>19.76s</td>
                  <td bgcolor="powderblue">14.2</td>
                  <td>0.11s</td>
                  <td bgcolor="powderblue">44.9</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/02.dzn">02.dzn</Link>
                  </td>
                  <td>3.93s</td>
                  <td bgcolor="powderblue">18.3</td>
                  <td>1.86s</td>
                  <td bgcolor="powderblue">22.6</td>
                  <td>3.88s</td>
                  <td bgcolor="powderblue">18.4</td>
                  <td>0.02s</td>
                  <td bgcolor="powderblue">40.7</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/03.dzn">03.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>892.84s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/04.dzn">04.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>1.70s</td>
                  <td bgcolor="powderblue">74.8</td>
                  <td>861.53s</td>
                  <td bgcolor="powderblue">25.2</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/05.dzn">05.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>243.45s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/06.dzn">06.dzn</Link>
                  </td>
                  <td>0.92s</td>
                  <td bgcolor="powderblue">23.7</td>
                  <td>1.12s</td>
                  <td bgcolor="powderblue">22.7</td>
                  <td>1.86s</td>
                  <td bgcolor="powderblue">20.0</td>
                  <td>0.02s</td>
                  <td bgcolor="powderblue">33.6</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/07.dzn">07.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>38.79s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/08.dzn">08.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>34.44s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/shortest_path/09.dzn">09.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>790.36s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td rowspan="10">
                    <Link href="./probs/slow_convergence/slow_convergence.mzn">
                      slow_convergence.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/slow_convergence/0100.dzn">
                      0100.dzn
                    </Link>
                  </td>
                  <td>0.32s</td>
                  <td bgcolor="powderblue">25.2</td>
                  <td>0.37s</td>
                  <td bgcolor="powderblue">24.7</td>
                  <td>0.90s</td>
                  <td bgcolor="powderblue">21.3</td>
                  <td>0.02s</td>
                  <td bgcolor="powderblue">28.9</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0200.dzn">
                      0200.dzn
                    </Link>
                  </td>
                  <td>0.26s</td>
                  <td bgcolor="powderblue">25.3</td>
                  <td>0.25s</td>
                  <td bgcolor="powderblue">25.4</td>
                  <td>0.90s</td>
                  <td bgcolor="powderblue">21.0</td>
                  <td>0.01s</td>
                  <td bgcolor="powderblue">28.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0300.dzn">
                      0300.dzn
                    </Link>
                  </td>
                  <td>1.44s</td>
                  <td bgcolor="powderblue">23.3</td>
                  <td>1.96s</td>
                  <td bgcolor="powderblue">21.4</td>
                  <td>1.73s</td>
                  <td bgcolor="powderblue">22.1</td>
                  <td>0.27s</td>
                  <td bgcolor="powderblue">33.2</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0400.dzn">
                      0400.dzn
                    </Link>
                  </td>
                  <td>2.48s</td>
                  <td bgcolor="powderblue">23.0</td>
                  <td>3.33s</td>
                  <td bgcolor="powderblue">20.9</td>
                  <td>3.83s</td>
                  <td bgcolor="powderblue">20.0</td>
                  <td>0.54s</td>
                  <td bgcolor="powderblue">36.1</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0500.dzn">
                      0500.dzn
                    </Link>
                  </td>
                  <td>3.99s</td>
                  <td bgcolor="powderblue">22.4</td>
                  <td>5.15s</td>
                  <td bgcolor="powderblue">20.6</td>
                  <td>6.39s</td>
                  <td bgcolor="powderblue">19.2</td>
                  <td>0.96s</td>
                  <td bgcolor="powderblue">37.8</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0600.dzn">
                      0600.dzn
                    </Link>
                  </td>
                  <td>5.72s</td>
                  <td bgcolor="powderblue">22.3</td>
                  <td>7.47s</td>
                  <td bgcolor="powderblue">20.3</td>
                  <td>9.96s</td>
                  <td bgcolor="powderblue">18.5</td>
                  <td>1.50s</td>
                  <td bgcolor="powderblue">38.9</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0700.dzn">
                      0700.dzn
                    </Link>
                  </td>
                  <td>7.96s</td>
                  <td bgcolor="powderblue">27.4</td>
                  <td>10.19s</td>
                  <td bgcolor="powderblue">25.2</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>2.12s</td>
                  <td bgcolor="powderblue">47.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0800.dzn">
                      0800.dzn
                    </Link>
                  </td>
                  <td>10.16s</td>
                  <td bgcolor="powderblue">22.2</td>
                  <td>12.79s</td>
                  <td bgcolor="powderblue">20.4</td>
                  <td>19.01s</td>
                  <td bgcolor="powderblue">17.9</td>
                  <td>3.04s</td>
                  <td bgcolor="powderblue">39.4</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/0900.dzn">
                      0900.dzn
                    </Link>
                  </td>
                  <td>13.22s</td>
                  <td bgcolor="powderblue">27.5</td>
                  <td>16.86s</td>
                  <td bgcolor="powderblue">25.3</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>4.08s</td>
                  <td bgcolor="powderblue">47.1</td>
                </tr>
                <tr bgcolor="lightgrey">
                  <td>
                    <Link href="./probs/slow_convergence/1000.dzn">
                      1000.dzn
                    </Link>
                  </td>
                  <td>16.60s</td>
                  <td bgcolor="powderblue">22.2</td>
                  <td>20.96s</td>
                  <td bgcolor="powderblue">20.3</td>
                  <td>30.65s</td>
                  <td bgcolor="powderblue">17.9</td>
                  <td>5.33s</td>
                  <td bgcolor="powderblue">39.6</td>
                </tr>
                <tr bgcolor="white">
                  <td rowspan="10">
                    <Link href="./probs/trucking/trucking.mzn">
                      trucking.mzn
                    </Link>
                  </td>
                  <td>
                    <Link href="./probs/trucking/01.dzn">01.dzn</Link>
                  </td>
                  <td>0.33s</td>
                  <td bgcolor="powderblue">25.0</td>
                  <td>0.48s</td>
                  <td bgcolor="powderblue">23.7</td>
                  <td>0.65s</td>
                  <td bgcolor="powderblue">22.6</td>
                  <td>0.02s</td>
                  <td bgcolor="powderblue">28.8</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/02.dzn">02.dzn</Link>
                  </td>
                  <td>0.31s</td>
                  <td bgcolor="powderblue">24.9</td>
                  <td>0.42s</td>
                  <td bgcolor="powderblue">23.9</td>
                  <td>0.61s</td>
                  <td bgcolor="powderblue">22.6</td>
                  <td>0.01s</td>
                  <td bgcolor="powderblue">28.6</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/03.dzn">03.dzn</Link>
                  </td>
                  <td>0.32s</td>
                  <td bgcolor="powderblue">32.3</td>
                  <td>0.47s</td>
                  <td bgcolor="powderblue">30.7</td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>0.02s</td>
                  <td bgcolor="powderblue">36.9</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/04.dzn">04.dzn</Link>
                  </td>
                  <td>1.42s</td>
                  <td bgcolor="powderblue">23.5</td>
                  <td>2.95s</td>
                  <td bgcolor="powderblue">19.2</td>
                  <td>1.82s</td>
                  <td bgcolor="powderblue">22.0</td>
                  <td>0.17s</td>
                  <td bgcolor="powderblue">35.3</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/05.dzn">05.dzn</Link>
                  </td>
                  <td>14.28s</td>
                  <td bgcolor="powderblue">19.5</td>
                  <td>33.33s</td>
                  <td bgcolor="powderblue">15.6</td>
                  <td>17.24s</td>
                  <td bgcolor="powderblue">18.4</td>
                  <td>2.14s</td>
                  <td bgcolor="powderblue">46.5</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/11.dzn">11.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>896.96s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/12.dzn">12.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>894.85s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/13.dzn">13.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>868.75s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/14.dzn">14.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>877.71s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
                <tr bgcolor="white">
                  <td>
                    <Link href="./probs/trucking/15.dzn">15.dzn</Link>
                  </td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>Time Out</td>
                  <td bgcolor="powderblue"></td>
                  <td>840.88s</td>
                  <td bgcolor="powderblue">100.0</td>
                </tr>
              </tbody>
            </table>
            <table border="1">
              <thead>
                <tr>
                  <th>Contestant</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>eclipse_fd</td>
                  <td bgcolor="powderblue"> 787.3</td>
                </tr>
                <tr>
                  <td>eclipse_ic</td>
                  <td bgcolor="powderblue"> 938.8</td>
                </tr>
                <tr>
                  <td>g12_fd</td>
                  <td bgcolor="powderblue">1655.1</td>
                </tr>
                <tr>
                  <td>gecode</td>
                  <td bgcolor="powderblue">3418.8</td>
                </tr>
              </tbody>
            </table>
            <p>
              These results are based on Eclipse version 5.10, an up-to-date
              release of Gecode,and the 05-09-2008 trunk version of G12.
            </p>
            <p>
              Due to the mechanism used by the g12_fd benchmarks, some time-outs
              reported for G12 are actually out-of-memory failures.
            </p>
            <p>
              Note that the Eclipse aborts are due to &lsquo;instantiation
              faults&rsquo; which we believe may be due to a minor bug in the
              Eclipse implementation of FlatZinc.
            </p>
            <p>
              The gecode aborts on the rcpsp problems are caused by trying to
              print out the value of non-ground variables.
            </p>
            <p>
              Since all submitted solvers either prove optimality or have no
              competitors (except in one case), scoring is the same for both
              optimisation problems and satisfaction problems. 50 points are
              shared equally among the solvers finding a solution to a
              particular test. A further 50 points are shared according to how
              quickly a solver found the solution relative to the others (full
              details are available on the Challenge web page).
            </p>
            <p>
              On the shortest_path problem 04.dzn, g12_fd claims to have found
              the optimal result; gecodef also gets a result which it does not
              claim is optimal, which is an order of magnitude worse. The g12_fd
              result was tested by feeding it into the gecode solver which
              confirmed its feasibility.
            </p>
            <p>
              The files on this page are for MiniZinc version 0.8. Versions of
              these files for the current version of MiniZinc are available as
              part of the{' '}
              <a href="https://web.archive.org/web/20220308033715/https://www.minizinc.org/g12distrib.html">
                G12 MiniZinc distribution
              </a>
              .
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
