import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge 2008</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2008</h2>
            <Breadcrumbs
              className="not-prose"
              items={[['MiniZinc Challenge', '/challenge'], 'Challenge 2008']}
            />
            <h3>The Challenge</h3>
            <p>
              The aim of the challenge is to start to compare various constraint
              solving technology on the same problems sets. The focus is on
              finite domain propagation solvers. An auxiliary aim is to build up
              a library of interesting problem models, which can be used to
              compare solvers and solving technologies.
            </p>
            <p>
              Entrants to the challenge provide a FlatZinc solver and a copy of
              globals.mzn specialized for their solver. Each solver is run on
              100 MiniZinc model(+instance)s. We run the translator{' '}
              <tt>mzn2fzn</tt> on the MiniZinc model and instance using the
              provided globals.mzn file to create a FlatZinc file. The FlatZinc
              file is input to the provided solver. Points are awarded for
              solving problems, speed of solution, and goodness of solutions
              (for optimization problems).
            </p>
            <p>
              We realise the time lines are shortish for the challenge and in
              this first instance things may be quite fluid.
            </p>
            <h3>Announcements</h3>
            <ul>
              <li>
                The results of the{' '}
                <Link href="/challenge/2008/results">
                  MiniZinc Challenge 2008
                </Link>{' '}
                have been announced.
              </li>
              <li>
                <b>2008-07-03</b>: the deadline for the first qualification
                round has been extended to <strong>8 July 2008</strong>.{' '}
              </li>
              <li>
                <b>2008-06-25</b>: version 0.8.1 of the G12 MiniZinc
                distribution has been released. The new version includes a fix
                for the incorrect definition of the <i>regular</i> constraint in
                <i>globals.mzn</i>.{' '}
              </li>
              <li>
                <b>2008-06-16</b>: the challenge rules have been updated to make
                it clearer what modifications are allowed to be made to{' '}
                <i>globals.mzn</i> by entries.{' '}
              </li>
            </ul>
            <h3>Dates</h3>
            <ul>
              <li>
                Registration opens: <strong>4 June 2008</strong>.{' '}
              </li>
              <li>
                First qualification round: <strong>8 July 2008</strong>.{' '}
              </li>
              <li>
                Problem submission deadline: <strong>18 July 2008</strong>.{' '}
              </li>
              <li>
                Second qualification round: <strong>25 July 2008</strong>.{' '}
              </li>
              <li>
                Final submissions: <strong>20 August 2008</strong>.{' '}
              </li>
              <li>
                Announcement of results at <abbr>CP2008</abbr>:{' '}
                <strong>14 September 2008</strong>.{' '}
              </li>
            </ul>
            <h3>Registration</h3>
            <p>
              Entrants must register their intention to enter the contest{' '}
              <em>before</em> the first qualification round. Feel free to
              register and later withdraw.
            </p>
            <p>To register send an email with the following subject line</p>
            <pre>
              <kbd>[MZNC08] registration</kbd>
            </pre>
            <p>to</p>
            <pre>
              <kbd>mzn-challenge08</kbd> &lsquo;at&rsquo;{' '}
              <kbd>csse.unimelb.edu.au</kbd>
            </pre>
            <p>
              In the body of the email please include an email address at which
              we can contact you.
            </p>
            <h3>Submission</h3>
            <p>
              We will provide submission details via email to the address
              provided above.
            </p>
            <h3>Problem Submission</h3>
            <p>
              We strongly encourage all entrants to submit 1 or 2 MiniZinc
              models satisfying the contest requirements, together with
              instances for these models. They can be submitted as tarballs to
            </p>
            <pre>
              <kbd>mzn-challenge08</kbd> &lsquo;at&rsquo;{' '}
              <kbd>csse.unimelb.edu.au</kbd>
            </pre>
            <p>
              The sooner they are submitted the better, the deadline is 18th
              July 2008.
            </p>
            <h3>Rules</h3>
            <p>
              The rules for the MiniZinc Challenge 2008 are available{' '}
              <Link href="/challenge/2008/rules">here</Link>. If we need to make
              changes to the rules, all registered entrants will be informed by
              email.
            </p>
            <h3>Judges</h3>
            <p></p>
            <ul>
              <li> Jimmy H.M. Lee. Chinese University of Hong Kong. </li>
              <li>
                <em>More to be announced</em>
              </li>
            </ul>
            <p></p>
            <h3>Feedback</h3>
            <p>
              This is the first time this challenge has been run, and there are
              many possibilities for comparing CP solvers. The rules tries to
              make a sensible set of choices for the comparison. We would
              welcome any comments or suggestions regarding the running of this
              challenge.
            </p>
            <p>We can be contacted at:</p>
            <pre>
              <kbd>mzn-challenge08</kbd> &lsquo;at&rsquo;{' '}
              <kbd>csse.unimelb.edu.au</kbd>
            </pre>
            <h3>Mailing list</h3>
            <p>
              The G12 users mailing list is intended for general discussion of
              MiniZinc and FlatZinc. If you would like to join then send a mail
              with <kbd>subscribe</kbd> in the body to
            </p>
            <pre>
              <kbd>g12-users-request</kbd> &lsquo;at&rsquo;{' '}
              <kbd>csse.unimelb.edu.au</kbd>
            </pre>
            <p>After subscribing you can then send mail to</p>
            <pre>
              <kbd>g12-users</kbd> &lsquo;at&rsquo;{' '}
              <kbd>csse.unimelb.edu.au</kbd>
            </pre>
            <h3>Links</h3>
            <p>
              The <Link href="/">G12 MiniZinc</Link> page includes a list of
              resources related to MiniZinc and FlatZinc.
            </p>
            <p>
              The{' '}
              <a href="https://web.archive.org/web/20220308033715/https://www.minizinc.org/g12distrib.html">
                G12 MiniZinc Distribution
              </a>{' '}
              includes a MiniZinc-to-FlatZinc converter and a large suite of
              MiniZinc examples and benchmarks.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
