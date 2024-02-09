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
        <title>MiniZinc - Challenge 2017</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2017</h2>
            <Breadcrumbs
              className="not-prose"
              items={[['MiniZinc Challenge', '/challenge'], 'Challenge 2017']}
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
              Entrants to the challenge provide a FlatZinc or MiniZinc solver
              and global constraint definitions specialized for their solver.
              Each solver is run on 100 MiniZinc model instances. For FlatZinc
              solvers, we run the translator <tt>mzn2fzn</tt> on the MiniZinc
              model and instance using the provided global constraint
              definitions to create a FlatZinc file. The FlatZinc file is input
              to the provided FlatZinc solver. For MiniZinc solvers, the
              MiniZinc model and instance are input to the provided solver.
              Points are awarded for solving problems, speed of solution, and
              goodness of solutions (for optimization problems).
            </p>
            <h3>Announcements</h3>
            <p></p>
            <ul>
              <li>
                <b>2017-08-30</b> Announcement of the results available{' '}
                <Link href="/challenge/2017/results">here</Link>.{' '}
              </li>
              {/* <li><b>2017-08-03</b> Final submission deadline is now <strong>Thu, 6 August 2017</strong>.</li><li><b>2017-07-10</b> Upgrade of MiniZinc distribution to 2.0.4 on the competition VMs. Updated the rules accordingly.</li><li><b>2017-07-11</b> Announcement of MiniZinc Challenge Judges. </li> */}
              <li>
                <b>2017-06-02</b> Official Call for Participation for the
                MiniZinc Challenge has been made.{' '}
              </li>
              <li>
                <b>2017-06-02</b> MiniZinc problem submission deadline was
                extended till 10 June 2017
              </li>
              <li>
                <b>2017-03-06</b> Initial{' '}
                <Link href="/challenge/2017/call_for_problems">
                  Call for MiniZinc Problems
                </Link>{' '}
                has been made.{' '}
              </li>
            </ul>
            <h3>Dates</h3>
            <ul>
              <li>
                Registration opens: <strong>Mon, 1 May 2017</strong>.{' '}
              </li>
              <li>
                Problem submission deadline:{' '}
                <strong>
                  <del>Sun, 21 May 2017</del>Sat, 10 June 2017
                </strong>
                .{' '}
              </li>
              <li>
                Initial submission round begins:{' '}
                <strong>Sat, 1 July 2017</strong>.{' '}
              </li>
              <li>
                Initial submission round ends:{' '}
                <strong>Sat, 15 July 2017</strong>.{' '}
              </li>
              <li>
                Final submissions: <strong>Sat, 29 July 2017</strong>.{' '}
              </li>
              <li>
                Announcement of results at{' '}
                <Link href="http://cp2017.a4cp.org">
                  <abbr>CP2017</abbr>
                </Link>
                : Room 204, <strong>17:40pm, Wed, 30 August</strong> (Melbourne,
                Australia).{' '}
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
              <kbd>[MZNC17] registration</kbd>
            </pre>
            <p>to</p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo; <kbd>minizinc.org</kbd>
            </pre>
            <p>
              In the body of the email please include an email address at which
              we can contact you and the name of your solver.
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
              <strong>Sun, 22 May 2017</strong>. The call for problem submission
              is available{' '}
              <Link href="/challenge/2017/call_for_problems">here</Link>. Please
              feel free to distribute it.
            </p>
            <h3>Rules</h3>
            <p>
              The rules for the MiniZinc Challenge 2017 are available{' '}
              <Link href="/challenge/2017/rules">here</Link>.<br /> If we need
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
              This is the tenth time this challenge is run, and there are many
              possibilities for comparing CP solvers. The rules try to make a
              sensible set of choices for the comparison. We would welcome any
              comments or suggestions regarding the running of this challenge.
            </p>
            <p>
              We can be contacted with the subject starting with [MZNC17] at:
            </p>
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
              .
            </p>
            <h3>Links</h3>
            <p>
              The <Link href="/">MiniZinc</Link> page includes a list of
              resources related to MiniZinc and FlatZinc.
            </p>
            <p>
              The{' '}
              <Link href="/downloads#releases-title">
                MiniZinc 2.0 Distribution
              </Link>{' '}
              includes a MiniZinc-to-FlatZinc converter and a large suite of
              MiniZinc examples and benchmarks.
            </p>
            <p>
              The <Link href="/challenge/2016">MiniZinc Challenge 2016</Link>{' '}
              webpage, include the results from the previous year.
            </p>
            <p>
              The <Link href="/challenge">MiniZinc Challenges 2008-2016</Link>{' '}
              webpage, include the results from each MiniZinc Challenge.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
