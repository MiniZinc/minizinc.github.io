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
        <title>MiniZinc - Challenge 2018</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2>MiniZinc Challenge 2018</h2>
            <Breadcrumbs
              className="not-prose"
              items={[['MiniZinc Challenge', '/challenge'], 'Challenge 2018']}
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
                <b>2018-09-20</b> Amendments of the results had to been made due
                to an issue with the solution checker. More details are
                available <Link href="/challenge/2018/results">here</Link>.
                Thanks to Gustav Björdal and Michael Marte for reporting.
              </li>
              <li>
                <b>2018-08-28</b> Announcement of the results available{' '}
                <Link href="/challenge/2018/results">here</Link>.{' '}
              </li>
              <li>
                <b>2018-07-30</b> Submission deadline was extended.{' '}
              </li>
              <li>
                <b>2018-06-27</b> Official Call for Participation for the
                MiniZinc Challenge has been made.{' '}
              </li>
              <li>
                <b>2018-03-08</b> Initial{' '}
                <Link href="/challenge/2018/call_for_problems">
                  Call for MiniZinc Problems
                </Link>{' '}
                has been made.{' '}
              </li>
            </ul>
            <h3>Dates</h3>
            <ul>
              <li>
                Registration opens: <strong>Now</strong>.{' '}
              </li>
              <li>
                Problem submission deadline: <del>Sun, 20 May 2018</del>
                <strong>Sun, 27 May 2018</strong>.{' '}
              </li>
              <li>
                Initial submission round begins:{' '}
                <strong>Sun, 15 July 2018</strong>.{' '}
              </li>
              <li>
                Initial submission round ends:{' '}
                <strong>Sat, 21 July 2018</strong>.{' '}
              </li>
              <li>
                Final submissions:{' '}
                <strong>
                  <del>Sat, 28 July 2018</del>Thu, 2 August 2018
                </strong>
                .{' '}
              </li>
              <li>
                Announcement of results at{' '}
                <Link href="http://cp2018.a4cp.org">
                  <abbr>CP2018</abbr>
                </Link>
                : <strong>27 - 31 August</strong> (Lille, France).{' '}
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
              <kbd>[MZNC18] registration</kbd>
            </pre>
            <p>to</p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo;{' '}
              <kbd>lists.csiro.au</kbd>
            </pre>
            <p>
              In the body of the email please include an email address at which
              we can contact you and the name of your solver.
            </p>
            <h3>Submission</h3>
            <p>
              All entrants need to extend the MiniZinc docker image (available
              at{' '}
              <Link href="https://hub.docker.com/r/minizinc/mznc2018/">
                https://hub.docker.com/r/minizinc/mznc2018/
              </Link>
              , tag 1.0) with their solver. A detail information how to do and
              about docker are available{' '}
              <Link href="/challenge/2018/docker">here</Link>. The entrant will
              upload the extended image to Docker Hub and sent the location of
              the extenstion to the MiniZinc organisers. Please read{' '}
              <Link href="/challenge/2018/rules">the rules</Link> before
              submission.
            </p>
            <h3>Problem Submission</h3>
            <p>
              We strongly encourage all entrants to submit one or two MiniZinc
              models satisfying the contest requirements, together with
              instances for these models. They can be submitted as tarballs to:
            </p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo;{' '}
              <kbd>lists.csiro.au</kbd>
            </pre>
            <p>
              The sooner they are submitted the better, the deadline is{' '}
              <strong>Sun, 20 May 2018</strong>. The call for problem submission
              is available{' '}
              <Link href="/challenge/2018/call_for_problems">here</Link>. Please
              feel free to distribute it.
            </p>
            <h3>Rules</h3>
            <p>
              The rules for the MiniZinc Challenge 2018 are available{' '}
              <Link href="/challenge/2018/rules">here</Link>.<br /> If we need
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
                Barry O&apos;Sullivan, University College Cork, Ireland.{' '}
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
              We can be contacted with the subject starting with [MZNC18] at:
            </p>
            <pre>
              <kbd>mzn-challenge</kbd> &lsquo;at&rsquo;{' '}
              <kbd>lists.csiro.au</kbd>
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
              The <Link href="/challenge/2017">MiniZinc Challenge 2017</Link>{' '}
              webpage, include the results from the previous year.
            </p>
            <p>
              The <Link href="/challenge">MiniZinc Challenges 2008-2017</Link>{' '}
              webpage, include the results from each MiniZinc Challenge.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
