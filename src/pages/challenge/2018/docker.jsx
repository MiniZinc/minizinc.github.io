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
        <title>MiniZinc - Challenge 2018 Docker Image Preparation</title>
      </Head>
      <Header />
      <main>
        <Container>
          <article className="prose prose-minizinc max-w-none py-6">
            <h2 id="introduction">
              <span className="header-section-number">1</span> Introduction
            </h2>
            <Breadcrumbs
              className="not-prose"
              items={[
                ['MiniZinc Challenge', '/challenge'],
                ['Challenge 2018', '/challenge/2018'],
                'Docker Image Preparation',
              ]}
            />
            <p>
              This document lists the steps for setting up a solver submission
              for the MiniZinc Challenge 2018.
            </p>
            <p>
              This year we provide a docker image{' '}
              <Link href="https://www.docker.com">www.docker.com</Link> that the
              participants have to extend with their solver to take part in this
              year challenge.
            </p>
            <p>
              In comparison to virtual machines as used in the previous
              challenges, docker provides a couple advantages. Here is a list of
              few of them.
            </p>
            <ul>
              <li>No predefined disc space limitation.</li>
              <li>No OS installation from scratch.</li>
              <li>
                Different clusters, e.g., Amazon Web Services (AWS), support
                docker.
              </li>
              <li>
                Only the difference between the provided image and the extended
                image needs to be uploaded.
              </li>
              <li>
                Easy to extend the image by a configuration file that can be
                re-used for future challenges.
              </li>
              <li>A clean state for solver run.</li>
              <li>Higher automatisation of the execution of solvers.</li>
            </ul>
            <h2 id="brief-overview-of-the-concept-of-docker">
              <span className="header-section-number">2</span> Brief Overview of
              the Concept of Docker
            </h2>
            <p>
              There are two main concepts{' '}
              <strong>
                <em>docker image</em>
              </strong>{' '}
              and{' '}
              <strong>
                <em>docker container</em>
              </strong>
              . Intuitively, a docker image is a OS that cannot change its state
              and cannot run directly, but can be shared with other through
              docker hub. Opposed to an image, a docker container is an instance
              of an image that can be changed and run as it would be your local
              machine. Multiple containers of the same docker image can be
              created and run independently. The current state of a docker
              container can be stored as a docker image and then shared with
              others. The stored image is the image that the container was
              created from plus the changes made during its executing.
            </p>
            <h2 id="installation-of-docker">
              <span className="header-section-number">3</span> Installation of
              Docker
            </h2>
            <p>
              Docker CE (Community Edition) is available for different operation
              system including Ubuntu, Mac OS X, and Windows. For example, go to{' '}
              <Link href="https://docs.docker.com/docker-for-mac/install/">
                Docker For MacOS
              </Link>{' '}
              for Mac OS X,{' '}
              <Link href="https://docs.docker.com/docker-for-windows/install/">
                Docker For Windows
              </Link>{' '}
              for Windows, and{' '}
              <Link href="https://docs.docker.com/install/linux/docker-ce/ubuntu/">
                Docker For Ubuntu
              </Link>{' '}
              for Ubuntu. Read through all instructions and requirements on the
              webpage before you start the installation. Follow the installation
              steps provided on that page. You can test your installation by
              executing following command.
            </p>
            <pre>
              <code>docker run hello-world</code>
            </pre>
            <h2 id="registration-to-docker-hub">
              <span className="header-section-number">4</span> Registration to
              Docker Hub
            </h2>
            <p>
              For the submission process, you need to create an account to{' '}
              <Link href="https://hub.docker.com">Docker Hub</Link>, in which
              you upload your submission (docker image). Docker hub provides you
              the facility to store your image in a repository with a tag. Note
              that you can create one private repository for free, which you can
              share with the MiniZinc Challenge Team. Note too that a repository
              is created via the web pages.
            </p>
            <h2 id="minizinc-challenge-2018-docker-image">
              <span className="header-section-number">5</span> MiniZinc
              Challenge 2018 Docker Image
            </h2>
            <p>
              The docker image was created via configuration file called
              Dockerfile (
              <Link href="Dockerfile">download MiniZinc Dockerfile here</Link>)
              and is available at the repository <code>minizinc/mznc2018</code>{' '}
              with the current tag <code>1.0</code>. Pull the repository via
              command line by this command.
            </p>
            <pre>
              <code>docker pull minizinc/mznc2018:1.0</code>
            </pre>
            <p>
              The image contains a minimal installation of Ubuntu 16.04 and
              MiniZinc 2.1.17, which is installed in the MiniZinc directory{' '}
              <code>/minizinc</code>. In that directory, there are the same
              three shell scripts <code>mzn-exec-fd</code> (for the FD class),{' '}
              <code>mzn-exec-free</code> (for the FREE class), and{' '}
              <code>mzn-exec-par</code> (for the PAR class) from the previous
              MiniZinc Challenges. If you sumit a MiniZinc solver then you need
              to modify them accordingly. If you submit a FlatZinc solver then
              you may need to add, modify, or remove parameters that are used
              for calling your FlatZinc solver. In the case of a FlatZinc
              solver, there must an executable at{' '}
              <code>/entry_data/fzn-exec</code> and the solver&apos;s MiniZinc
              library must be located in the folder{' '}
              <code>/entry_data/mzn-lib</code>. You should install your solver
              in the directory <code>/entry_data</code>.
            </p>
            <p>
              If you want to inspect the image via a bash shell then create a
              container, interactively run the container, and delete the
              container after execution via this command.
            </p>
            <pre>
              <code>docker run -it --rm minizinc/mznc2018:1.0 /bin/bash</code>
            </pre>
            <h2 id="preparation-of-the-solver-submission">
              <span className="header-section-number">6</span> Preparation of
              the Solver Submission
            </h2>
            <p>
              There are two ways to prepare a solver submission. One way is to
              use a configuration file (dockerfile), which directly creates the
              docker image with the solver installed and the other way is to
              create an instance, install the solver via command line, and then
              store the instance state as a docker image. The first way is
              preferred, because it can be re-used (with one or two
              modification) for a future submission and the creation is
              automatically via one docker command.
            </p>
            <h3 id="dockerfile">
              <span className="header-section-number">6.1</span> Dockerfile
            </h3>
            <p>
              There are two ways to build an image from a dockerfile. The first
              way is to specify a folder that includes the dockerfile named{' '}
              <code>Dockerfile</code> and any other files required for creation
              the image and the second way is to use standard in (stdin). In
              both cases, the starting point is a dockerfile. For example, we
              use dockerfiles to create the MiniZinc submission for Chuffed (
              <Link href="Dockerfile_Chuffed">
                download Chuffed dockerfile here
              </Link>
              ) and Gecode (
              <Link href="Dockerfile_Gecode">
                download Gecode dockerfile here
              </Link>
              ).
            </p>
            <h4 id="creation-of-a-dockerfile">
              <span className="header-section-number">6.1.1</span> Creation of a
              Dockerfile
            </h4>
            <p>
              Dockerfiles contain a sequence of statements where{' '}
              <code>FROM</code>, <code>ADD</code>, <code>RUN</code>,{' '}
              <code>COPY</code>, and <code>ENV</code> are the most important
              ones and briefly describe here. Please look at the dockerfiles
              that are linked above for the MiniZinc Challenge, Chuffed, and
              Gecode image. They contain many examples for these statements.
            </p>
            <pre>
              <code>
                FROM &lt;repository&gt;:&lt;tag&gt; [AS &lt;build stage
                name&gt;]
              </code>
            </pre>
            <p>
              The statement <code>FROM</code> specifies from which repository
              and tag an image is created from, and starts a new build stage.
              For example, ubuntu:16.04 for the Ubuntu 16.04 LTS image. For
              multi-stage builds, you want to specify a build stage name that
              you can refer to in later build stages. The last stage is the
              image that will be created. All other statements will modify the
              build from the latest <code>FROM</code> statement. The last stage
              statement must be <code>FROM minizinc/mznc2018:1.0</code>.
            </p>
            <pre>
              <code>ADD &lt;Source File&gt; &lt;Target File&gt;</code>
            </pre>
            <p>
              The statement adds a file from local directory (when image is
              built via folder option) or from Internet and stores it in the
              build as specified in <em>Target File</em>.
            </p>
            <pre>
              <code>
                COPY --from=&lt;build stage name&gt; &lt;Source Path/File&gt;
                &lt;Target Path/File&gt;
              </code>
            </pre>
            <p>
              The statement copies a path or files across from a previous build
              stage specified in <em>build stage name</em> to the current build
              stage.
            </p>
            <pre>
              <code>RUN &lt;Command&gt;</code>
            </pre>
            <p>
              The statement executes any command available in the build. Long
              lines can be broken up by ending a line with this character{' '}
              <code>\</code>.
            </p>
            <pre>
              <code>ENV &lt;Environment Command&gt;</code>
            </pre>
            <p>The statement sets up an environment variable in the build.</p>
            <h4 id="via-folder">
              <span className="header-section-number">6.1.2</span> Via Folder
            </h4>
            <p>
              Build an image from a docker file with a context (folder must
              contain a file named <code>Dockerfile</code>). In this way, you
              can add files in the context to your build. Choose an appropriate
              repository name and tag.
            </p>
            <pre>
              <code>
                docker build -t &lt;repository name&gt;:&lt;tag&gt; &lt;path
                Dockerfile&gt;
              </code>
            </pre>
            <h4 id="via-standard-in">
              <span className="header-section-number">6.1.3</span> Via Standard
              In
            </h4>
            <p>
              Use this command in a terminal in Mac OS X or Linux distributions.
              You can freely chose the name of your dockerfile. Choose an
              appropriate repository name and tag.
            </p>
            <pre>
              <code>
                docker build -t &lt;repository name&gt;:&lt;tag&gt; - &lt;
                &lt;dockerfile&gt;
              </code>
            </pre>
            <p>Use this command in a Powershell in Windows OS.</p>
            <pre>
              <code>
                Get-Content &lt;dockerfile&gt; | docker build -t &lt;repository
                name&gt;:&lt;tag&gt; -
              </code>
            </pre>
            <h3 id="docker-container">
              <span className="header-section-number">6.2</span> Docker
              Container
            </h3>
            <p>
              Creating the image via a docker container might be a more familiar
              way, because you prepare your submission by using a bash terminal
              for installation of the solver as you may have done for the
              previous MiniZinc challenges. If you chose this way then we
              strongly suggest that you record your command in a dockerfile, so
              that you can create the image from a dockerfile next time and save
              a lot of time.
            </p>
            <ol style={{ listStyleType: 'decimal' }}>
              <li>
                <p>
                  Create and run a container from the MiniZinc Challenge image
                  by this command. This command also names the container{' '}
                  <code>solver</code>.
                </p>
                <pre>
                  <code>
                    docker run -it --name solver minizinc/mznc2018:1.0 /bin/bash
                  </code>
                </pre>
                <p>
                  The container should be running now and you should have access
                  to it via the command line. You can test it by the command{' '}
                  <code>ls</code>, which should result in the listing of all
                  files and paths in the root directory <code>/</code> of the
                  container.
                </p>
              </li>
              <li>
                <p>
                  Install your solver as you would normally do in Ubuntu. Modify
                  the files <code>mzn-exec-fd</code>, <code>mzn-exec-free</code>
                  , and <code>mzn-exec-par</code> if needed.
                </p>
              </li>
              <li>
                <p>
                  Create a docker image from your container <code>solver</code>{' '}
                  by running this command. Choose an apriorate repository name
                  and tag.
                </p>
                <pre>
                  <code>
                    docker commit solver &lt;repository name&gt;:&lt;tag&gt;
                  </code>
                </pre>
              </li>
            </ol>
            <p>
              Note that you can interrupt the installation (Step 2) at anytime
              by, for example, exiting the bash terminal of the container. On
              your local machine, use this command for listing all running
              containers
            </p>
            <pre>
              <code>docker container ls</code>
            </pre>
            <p>or this command for all constainers</p>
            <pre>
              <code>docker container ls --all</code>
            </pre>
            <p>
              Your container <code>solver</code> should appear in the list. If
              the container is not running start the container in interactive
              mode by
            </p>
            <pre>
              <code>docker container start -i solver</code>
            </pre>
            <p>If the container is running then access it by</p>
            <pre>
              <code>docker exec -it solver /bin/bash</code>
            </pre>
            <p>
              If you want to stop a running container outside from the container
              use this command.
            </p>
            <pre>
              <code>docker container stop solver</code>
            </pre>
            <h3 id="testing-your-submission">
              <span className="header-section-number">6.3</span> Testing your
              Submission
            </h3>
            <p>
              The folder <code>/minizinc</code> in the MiniZinc image contains a
              very simple MiniZinc model (<code>/minizinc/test.mzn</code>) and
              one DataZinc file (<code>/minizinc/2.dzn</code>). To test that
              your solver is correctly setup for the MiniZinc Challenge execute
              following commands for the search classes you enter.
            </p>
            <table>
              <thead>
                <tr className="header">
                  <th align="left">Class</th>
                  <th align="left">Command</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td align="left">FD</td>
                  <td align="left">
                    <code>
                      docker run --rm &lt;repository&gt;:&lt;tag&gt; solver
                      /minizinc/test.mzn /minizinc/2.dzn
                    </code>
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">FREE</td>
                  <td align="left">
                    <code>
                      docker run --rm &lt;repository&gt;:&lt;tag&gt; solver
                      --free-search /minizinc/test.mzn /minizinc/2.dzn
                    </code>
                  </td>
                </tr>
                <tr className="odd">
                  <td align="left">PAR</td>
                  <td align="left">
                    <code>
                      docker run --rm &lt;repository&gt;:&lt;tag&gt; solver -p 2
                      /minizinc/test.mzn /minizinc/2.dzn
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              A successful test should return following output on the screen.
            </p>
            <pre>
              <code>x = 2; ----------</code>
            </pre>
            <h2 id="uploading-and-solver-submission">
              <span className="header-section-number">7</span> Uploading and
              Solver Submission
            </h2>
            <p>
              You have finalised your solver docker image and have an account on{' '}
              <Link href="https://hub.docker.com">Docker Hub</Link>. Following
              steps need to be performed.
            </p>
            <ol style={{ listStyleType: 'decimal' }}>
              <li>
                <p>
                  You may have to rename your image to match your username at
                  Docker Hub. Use the following command to do so if using the
                  image id
                </p>
                <pre>
                  <code>
                    docker tag &lt;image id&gt; &lt;username&gt;/&lt;target
                    image&gt;:&lt;tag&gt;
                  </code>
                </pre>
                <p>if using the image id of your solver docker image, or</p>
                <pre>
                  <code>
                    docker tag &lt;repository&gt;:&lt;tag&gt;
                    &lt;username&gt;/&lt;name&gt;:&lt;tag&gt;
                  </code>
                </pre>
                <p>if using the repository name and tag.</p>
              </li>
              <li>
                <p>
                  Login into your account via command line if not already logged
                  in.
                </p>
                <pre>
                  <code>docker login</code>
                </pre>
              </li>
              <li>
                <p>Push/upload your images to your account.</p>
                <pre>
                  <code>
                    docker push &lt;username&gt;/&lt;name&gt;:&lt;tag&gt;
                  </code>
                </pre>
              </li>
              <li>
                <p>
                  If you want to make your repository private then go to{' '}
                  <Link href="https://hub.docker.com">Docker Hub</Link>, sign in
                  your account, click on your repository, click on settings, and
                  then on the button <code>Make Private</code>.
                </p>
              </li>
              <li>
                <p>Logout via command line.</p>
                <pre>
                  <code>docker logout</code>
                </pre>
              </li>
              <li>
                Send an email to the MiniZinc Challenge Team including{' '}
                <ul>
                  <li>the name of your solver,</li>
                  <li>the repository and the tag of your solver submission,</li>
                  <li>
                    an attached file containing the description of your solver,
                  </li>
                  <li>
                    the filled in form{' '}
                    <Link href="EntryClasses.txt">Entry Clases</Link>, and
                  </li>
                  <li>
                    the filled in form{' '}
                    <Link href="Consent_3rdPartyUsage.txt">
                      3rd Party Consent
                    </Link>
                    .
                  </li>
                </ul>
              </li>
            </ol>
            <h2 id="docker-cheat-sheet">
              <span className="header-section-number">8</span> Docker Cheat
              Sheet
            </h2>
            <p>
              Docker has an abundance of command-line commands, which are
              extensively describe in the{' '}
              <Link href="https://docs.docker.com/engine/reference/commandline/docker/">
                Online Reference Manual
              </Link>
              . A short cheat sheet can be found{' '}
              <Link href="https://www.docker.com/sites/default/files/Docker_CheatSheet_08.09.2016_0.pdf">
                here
              </Link>{' '}
              or a longer one at{' '}
              <Link href="https://github.com/wsargent/docker-cheat-sheet">
                here
              </Link>
              . Below is our cheat sheet. Note that{' '}
              <code>&lt;image id&gt;</code> always can be replaced by{' '}
              <code>&lt;repository&gt;:&lt;tag&gt;</code>.
            </p>
            <table>
              <thead>
                <tr className="header">
                  <th align="left">Command</th>
                  <th align="left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td align="left">
                    <code>docker version</code>
                  </td>
                  <td align="left">
                    Show version number of docker installation.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker info</code>
                  </td>
                  <td align="left">Show system-wide information.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker login</code>
                  </td>
                  <td align="left">Login in docker hub.</td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker logout</code>
                  </td>
                  <td align="left">Logout from docker hub.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker images</code>
                  </td>
                  <td align="left">List all images on the local machine.</td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker pull &lt;repository&gt;:&lt;tag&gt;</code>
                  </td>
                  <td align="left">Pull a docker image from docker hub.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker push &lt;repository&gt;:&lt;tag&gt;</code>
                  </td>
                  <td align="left">Push a docker image to docker hub.</td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>
                      docker image history [--no-trunc] &lt;image id&gt;
                    </code>
                  </td>
                  <td align="left">
                    List the build history of the docker image.
                  </td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>
                      docker build -t &lt;repository&gt;:&lt;tag&gt;
                      &lt;Path&gt;
                    </code>
                  </td>
                  <td align="left">
                    Create an image from a dockerfile called{' '}
                    <code>Dockerfile</code> located at the path{' '}
                    <code>&lt;Path&gt;</code>.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>
                      docker build -t &lt;repository&gt;:&lt;tag&gt; - &lt;
                      &lt;dockerfile&gt;
                    </code>
                  </td>
                  <td align="left">
                    Create an image from a dockerfile on Mac OS X or Linux
                    distribution.
                  </td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>Get-Content &lt;dockerfile&gt;</code>
                    <code>|</code>
                    <code>docker build -t &lt;name&gt;:&lt;tag&gt; -</code>
                  </td>
                  <td align="left">
                    Create an image from a dockerfile using PowerShell on
                    Windows OS.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>
                      docker tag &lt;image id&gt; &lt;target
                      image&gt;:&lt;tag&gt;
                    </code>
                  </td>
                  <td align="left">
                    Rename a local image to the image name, e.g., to the image
                    name of your repository.
                  </td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>
                      docker commit &lt;container id&gt;
                      &lt;repository&gt;:&lt;tag&gt;
                    </code>
                  </td>
                  <td align="left">
                    Create image from the current state of a container.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker image rm &lt;image id&gt;</code>
                  </td>
                  <td align="left">Remove docker image.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker run -it &lt;image id&gt; /bin/bash</code>
                  </td>
                  <td align="left">
                    Creating a docker container from a image and running the
                    container in an interactive mode using a shell terminal.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>
                      docker run -it --name &lt;name&gt; &lt;image id&gt;
                      /bin/bash
                    </code>
                  </td>
                  <td align="left">
                    Same as above, but giving the container a name.
                  </td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>
                      docker run --rm &lt;image id&gt; &lt;command&gt;
                      &lt;command args&gt;
                    </code>
                  </td>
                  <td align="left">
                    Creating a container, running the command{' '}
                    <code>command</code> inside the container with the arguments{' '}
                    <code>command args</code>, and deleting the container upon
                    completion.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker rm &lt;container id&gt;</code>
                  </td>
                  <td align="left">Delete a docker container.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker container ls</code>
                  </td>
                  <td align="left">
                    List all docker containers that are running.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker container ls --all</code>
                  </td>
                  <td align="left">List all docker containers.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker container ls -aq</code>
                  </td>
                  <td align="left">
                    List all docker containers in quiet mode.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker container start -i &lt;container id&gt;</code>
                  </td>
                  <td align="left">Start a docker container.</td>
                </tr>
                <tr className="odd">
                  <td align="left">
                    <code>docker exec -it &lt;container id&gt; /bin/bash</code>
                  </td>
                  <td align="left">
                    Access a running docker container in an interactive mode
                    using a shell terminal.
                  </td>
                </tr>
                <tr className="even">
                  <td align="left">
                    <code>docker container stop &lt;container id&gt;</code>
                  </td>
                  <td align="left">Stop a running docker container</td>
                </tr>
              </tbody>
            </table>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
