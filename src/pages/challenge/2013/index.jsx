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
        <title>MiniZinc - Challenge 2013</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2013</h2>
            <Breadcrumbs
              className="not-prose"
              items={[['MiniZinc Challenge', '/challenge'], 'Challenge 2013']}
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
              Entrants to the challenge provide a FlatZinc solver and global
              constraint definitions specialized for their solver. Each solver
              is run on 100 MiniZinc model instances. We run the translator{' '}
              <tt>mzn2fzn</tt> on the MiniZinc model and instance using the
              provided global constraint definitions to create a FlatZinc file.
              The FlatZinc file is input to the provided solver. Points are
              awarded for solving problems, speed of solution, and goodness of
              solutions (for optimization problems).
            </p>
            <h3>Announcements</h3>
            <p></p>
            <ul>
              <li>
                <b>2014-09-19</b> A minor bug in the scoring script was fixed
                and the results of the{' '}
                <Link href="/challenge/2013/results">
                  MiniZinc Challenge 2013
                </Link>{' '}
                have been updated correspondingly.
              </li>
              <li>
                <b>2013-09-17</b> The results of the{' '}
                <Link href="/challenge/2013/results">
                  MiniZinc Challenge 2013
                </Link>{' '}
                have been announced.
              </li>
              {/* <li><b>2012-08-01</b>: information about entry submission has been mailed to registered entrants.<br> */}
            </ul>
            <h3>Dates</h3>
            <ul>
              <li>
                Registration opens: <strong>Wed, 1 May 2013</strong>.{' '}
              </li>
              <li>
                Problem submission deadline: <strong>Fri, 14 June 2013</strong>.{' '}
              </li>
              <li>
                Initial submission round begins:{' '}
                <strong>Mon, 1 July 2013</strong>.{' '}
              </li>
              <li>
                Initial submission round ends:{' '}
                <strong>Fri, 19 July 2013</strong>.{' '}
              </li>
              <li>
                Final submissions: <strong>Fri, 2 August 2013</strong>.{' '}
              </li>
              <li>
                Announcement of results at <abbr>CP2013</abbr>:{' '}
                <strong>17-20 September 2013</strong>.{' '}
              </li>
            </ul>
            <h3>Registration</h3>
            <p>
              Entrants must register their intention to enter the contest{' '}
              <em>before</em> the first submission round.
              <br /> The first submission round is an opportunity for us to
              provide feedback concerning your entry; it does not count towards
              the final result.
              <br /> Feel free to register and later withdraw.
            </p>
            <p>To register send an email with the following subject line</p>
            <pre>
              <kbd>[MZNC13] registration</kbd>
            </pre>
            <p>to</p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo; <kbd>minizinc.org</kbd>
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
              We strongly encourage all entrants to submit one or two MiniZinc
              models satisfying the contest requirements, together with
              instances for these models. They can be submitted as tarballs to:
            </p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo; <kbd>minizinc.org</kbd>
            </pre>
            <p>
              The sooner they are submitted the better, the deadline is{' '}
              <strong>14 June 2013</strong>. The call for problem submission is
              available{' '}
              <Link href="/challenge/2013/call_for_problems">here</Link>. Please
              feel free to distribute it.
            </p>
            <h3>Rules</h3>
            <p>
              The rules for the MiniZinc Challenge 2013 are available{' '}
              <Link href="/challenge/2013/rules">here</Link>.<br /> If we need
              to make changes to the rules, all registered entrants will be
              informed by email.
            </p>
            <h3>Judges</h3>
            <p>
              The judges will be responsible for selecting the tested instances,
              vetting the results, and ruling on any questions that arise during
              the competition.
            </p>
            <ul>
              <li> Jimmy H.M. Lee. Chinese University of Hong Kong. </li>
              <li>
                {' '}
                Barry O&apos;Sullivan, Cork Constraint Computation Center.{' '}
              </li>
              <li> Roland Yap, National University of Singapore. </li>
            </ul>
            <p></p>
            <h3>Feedback</h3>
            <p>
              This is the sixth time this challenge is run, and there are many
              possibilities for comparing CP solvers. The rules try to make a
              sensible set of choices for the comparison. We would welcome any
              comments or suggestions regarding the running of this challenge.
            </p>
            <p>We can be contacted at:</p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo; <kbd>minizinc.org</kbd>
            </pre>
            <h3>MiniZinc forums</h3>
            <p>
              The{' '}
              <Link href="https://groups.google.com/forum/#!forum/minizinc">
                MiniZinc forum
              </Link>{' '}
              is for beginners, users, and developers to discuss MiniZinc. If
              you would like to join then sign up for the{' '}
              <Link href="https://groups.google.com/forum/#!forum/minizinc">
                MiniZinc forums
              </Link>
              .{' '}
              {/* <h3>Mailing list</h3><p>The G12 users mailing list is intended for general discussion of MiniZinc and FlatZinc.<br> If you would like to join then send a mail with <kbd>subscribe</kbd> in the body to: <pre><kbd>minizinc-users-request</kbd> &lsquo;at&rsquo; <kbd>unimelb.edu.au</kbd></pre><p>After subscribing you can then send mail to: <pre><kbd>minizinc-users</kbd> &lsquo;at&rsquo; <kbd>unimelb.edu.au</kbd></pre> */}
            </p>
            <h3>Links</h3>
            <p>
              The <Link href="/">G12 MiniZinc</Link> page includes a list of
              resources related to MiniZinc and FlatZinc.
            </p>
            <p>
              The{' '}
              <Link href="http://web.archive.org/web/20220308033715/https://www.minizinc.org/g12distrib.html">
                G12 MiniZinc Distribution
              </Link>{' '}
              includes a MiniZinc-to-FlatZinc converter and a large suite of
              MiniZinc examples and benchmarks.
            </p>
            <p>
              The <Link href="/challenge/2012">MiniZinc Challenge 2012</Link>{' '}
              webpage, include the results from that year.
            </p>
            <p>
              The <Link href="/challenge/2011">MiniZinc Challenge 2011</Link>{' '}
              webpage, include the results from that year.
            </p>
            <p>
              The <Link href="/challenge/2010">MiniZinc Challenge 2010</Link>{' '}
              webpage, include the results from that year.
            </p>
            <p>
              The <Link href="/challenge/2009">MiniZinc Challenge 2009</Link>{' '}
              webpage, include the results from that year.
            </p>
            <p>
              The <Link href="/challenge/2008">MiniZinc Challenge 2008</Link>{' '}
              webpage, including the results from that year.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
