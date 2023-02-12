---
layout: default
title: MiniZinc Challenge 2023 - Docker Image Preparation
---

## Prepare a Docker image for the MiniZinc Challenge 2023

### Quick Summary

For those who are familiar with Docker, an image suitable for submission to the MiniZinc Challenge
must comply wih the following requirements:

- Your image must use the base image of `minizinc/mznc2023:latest`
- Running `minizinc` with the default solver (i.e. without the `--solver` option) must run your
  solver. This can be achieved through one of the following:
  - If you have a [solver configuration file](/doc-2.6.4/en/fzn-spec.html#solver-configuration-files)
    (`.msc`) for your solver (recommended), you must add it to the user configuration file as the
    default solver.

    ```docker
    RUN echo '{"mzn_solver_path": ["/path/with/msc/],'        > $HOME/.minizinc/Preferences.json && \
        echo '"tagDefaults": [["", "org.myorg.my_solver"]]}' >> $HOME/.minizinc/Preferences.json
    ```

    Note that MiniZinc solvers using a solver configuration file will have to add `--output-mode`
    and `--output-objective` to the extra flags section of the configuration to declare support for
    these flags.
  - If you do not have a solver configuration file and are submitting a FlatZinc solver, you can
    place its executable at `/entry_data/fzn-exec` and its MiniZinc library at 
    `/entry_data/mzn-lib/`. Alternatively you may modify `/minizinc/mzn-exec-fd`,
    `/minizinc/mzn-exec-free` and `/minizinc/mzn-exec-par` as appropriate for your solver's entry
    classes, to run your solver command.
  - If you do not have a solver configuration file and are submitting a MiniZinc solver, you
    must modify `/minizinc/mzn-exec-fd`, `/minizinc/mzn-exec-free` and `/minizinc/mzn-exec-par` as
    appropriate for your solver's entry classes, to run your solver command.

You can test if your submission functions as required by running the command for the entry class
you are participating in:

{:.table}
Class | Command
---   | ---
FD    | `docker run --rm <repository>:<tag> minizinc fd.mpc /minizinc/test.mzn /minizinc/2.dzn`
FREE  | `docker run --rm <repository>:<tag> minizinc free.mpc /minizinc/test.mzn /minizinc/2.dzn`
PAR   | `docker run --rm <repository>:<tag> minizinc par.mpc /minizinc/test.mzn /minizinc/2.dzn`

Push your image to Docker Hub and complete the web form (which will be made available to
participants at the start of the initial submission round) to submit your entry.

### Solver Submission

In order to submit your solver, you must install it into a
[Docker](https://docs.docker.com/get-started/overview/) image that extends a base operating system
image (Ubuntu 20.04 with MiniZinc installed) which we provide. To do this, you will create a
`Dockerfile` - a set of instructions indicating how to (build and) install your solver on to the
base operating system image.

The submitted image must have your solver set as the default MiniZinc solver.

#### Prerequisites

1. Install Docker Engine by following the instructions [here](https://docs.docker.com/engine/install/).

2. Register an account on [Docker Hub](https://hub.docker.com) to which you will upload your image
   so that the Challenge organisers can access it.
   > If you do not wish to make your image publicly available and are unable to create a private repository,
     contact the MiniZinc Challenge organisers to arrange an alternative image submission method.

### MiniZinc Challenge 2023 Docker Image

The Docker base image, which all entries must extend, was created via a [Dockerfile](dockerfiles/mznc2023/Dockerfile)
and is available at the repository `minizinc/mznc2023` with the tag `latest`.
Pull the repository via command line using this command (you should re-run this command if we
announce that we have made changes to the base image).

```sh
docker pull minizinc/mznc2023:latest
```

The image contains a minimal installation of Ubuntu 20.04 and MiniZinc 2.6.4, which is installed in
the `/usr/local/bin` directory. It is recommended that you create a 
[Solver Configuration File](/doc-2.6.4/en/fzn-spec.html#solver-configuration-files) for your solver,
and set it as the default solver using a
[User Configuration File](/doc-2.6.4/en/command_line.html#user-configuration-files) (the details
of how to do this are in the following section), however the 
method of setting up scripts as in previous years is still available.

If you want to inspect the image via a bash shell, use the following command:

```sh
docker run -it --rm minizinc/mznc2023 /bin/bash
```

### Dockerfile

#### Solver Entry Dockerfile

As an example, we will create a `Dockerfile` in order to submit an entry for
[Chuffed](https://github.com/chuffed/chuffed).

Chuffed is built using GCC and CMake, so our Dockerfile will have to install them in order to
compile Chuffed. However, we do not want to include these tools in the final image. Therefore,
we will create a separate build stage to compile Chuffed in, and then copy just the required files
from this stage into the final image.

The `Dockerfile` will perform the following:
- In an isolated build stage:
  - Install build tools required to fetch and compile Chuffed.
  - Fetch, compile, and install Chuffed.
- Copy the installed solver to the final image (so that the compiler toolchain is not in the final image).
- Ensure Chuffed can be located by MiniZinc and is the default solver.

Create a file called `Dockerfile` and add the following (see comments for explanations):

```docker
# Build Chuffed in an isolated stage called builder.
#
# The FROM statement begins a new stage in the image creation process.
# You specify the base image for following statements to use.
# We're giving this one a name using AS, so that we can refer to it
# and copy files from it later on.
FROM minizinc/mznc2023:latest AS builder

# Install compiler toolchain for Chuffed.
#
# The RUN statement runs the given command in the image.
# Note the use of DEBIAN_FRONTEND=noninteractive to ensure that apt does
# not prompt for user input such as time zones.
RUN apt-get update -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y bison build-essential cmake flex git

# Change directory to /src.
#
# WORKDIR sets the working directory for the following statements
# until the end of the stage (it creates it if it doesn't exist).
WORKDIR /src

# Clone the Chuffed git repository.
RUN git clone https://github.com/chuffed/chuffed . && \
    git checkout develop

# Build Chuffed and install it into /install.
RUN mkdir /install && mkdir build && cd build && \
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/install .. && \
    cmake --build . --config Release && \
    cmake --build . --config Release --target install

# Create our final image using this base.
#
# Since this is the final FROM statement in this Dockerfile,
# the contents of this stage are what constitutes the final image.
FROM minizinc/mznc2023:latest

# Copy the Chuffed installation to /chuffed in the final image.
#
# The COPY statement copies files from the local computer into the
# current stage, or from another stage into this stage.
# We want to copy from the builder stage, so we use --from=builder.
# If we omitted that, we would copy a file from the local computer.
COPY --from=builder /install /chuffed

# Add Chuffed to the MiniZinc search path and set it as the default solver.
#
# See https://www.minizinc.org/doc-2.6.4/en/command_line.html#user-configuration-files
RUN echo '{"mzn_solver_path": ["/chuffed/share/minizinc/solvers"],' > $HOME/.minizinc/Preferences.json && \
    echo '"tagDefaults": [["", "org.chuffed.chuffed"]]}'           >> $HOME/.minizinc/Preferences.json
```

Refer to the [Dockerfile reference](https://docs.docker.com/engine/reference/builder/) for more
information about each of the statements.

You can then build the image with

```sh
docker build -t chuffed:latest .
```

And check that it functions by running

```sh
docker run --rm chuffed:latest minizinc /classes/fd.mpc /minizinc/test.mzn /minizinc/2.dzn
```

With your own image, replace `chuffed:latest` with an appropriate name for your solver in the format
`<repository>:<tag>`.

Since Chuffed installs a solver configuration file (`.msc`) into `share/minizinc/solvers`, we can
add that path to MiniZinc's solver search path and set it as the default solver using the
`$HOME/.minizinc/Preferences.json` file. If your solver does not yet have a solver configuration
file, you can create one by following the instructions in the next section.

#### Other example Dockerfiles

There are a number of other Dockerfiles and solver configuration files which have been created for
the MiniZinc Challenge. They may be used as reference in writing your own.

They are available [here](https://github.com/MiniZinc/minizinc.github.io/tree/master/challenge2023/dockerfiles).

In general, a Dockerfile for the MiniZinc Challenge should have (close to) the following structure:

```docker
FROM minizinc/mznc2023:latest AS builder
RUN apt-get update -y && \
    apt-get install -y <your_build_tools>

WORKDIR /src

# Replace with command to clone your solver repository, or COPY the source from
# the local computer
RUN git clone https://github.com/<your>/<repo> . && \
    git checkout <your_branch>

# Replace with command to build your solver and install it into /install
RUN mkdir /install && \
    <build_your_solver> && \
    <install_your_solver_into_/install>

FROM minizinc/mznc2023:latest

RUN apt-get update -y && \
    apt-get install -y <your_runtime_dependencies>

COPY --from=builder /install /my_solver

RUN echo '{"mzn_solver_path": ["/my_solver/<msc_file_dir>"],' > $HOME/.minizinc/Preferences.json && \
    echo '"tagDefaults": [["", "org.mysolver.mysolver"]]}'   >> $HOME/.minizinc/Preferences.json
```

If your solver is a prebuilt binary, you can skip the initial `builder` stage and simply `COPY` it 
from the local computer (or perhaps use an `ADD` statement to download it from a web address) in the 
final stage. However, there may be binary compatibility/dependency issues, so it is recommended that
you build your solver from source in the Dockerfile to avoid this.

### Using a solver configuration file

A solver configuration file (`.msc`) is a JSON configuration file specifying how to run your solver.
It is the recommended way to add your solver to your image, and it is also the easiest way to
allow your solver to be installed by others for use with MiniZinc.

See the documentation [here](/doc-2.6.4/en/fzn-spec.html#sec-cmdline-conffiles) for more information.

A FlatZinc solver called My Solver which is a binary file `./fzn-mysolver` and a library at
`./mysolver-mznlib` may have the following solver configuration file:

`./my-solver.msc`:
```json
{
  "name" : "My Solver",
  "version": "1.0.0",
  "id": "org.myorg.my_solver",
  "mznlib": "mysolver-mznlib",
  "executable": "fzn-mysolver",
  "stdFlags": ["-a", "-f", "-p"]
}
```
And use the following Dockerfile:

`./Dockerfile`:
```docker
FROM minizinc/mznc2023
# Add solver executable to image
COPY ./fzn-mysolver /my-solver/
# Add solver library to image
COPY ./mysolver-mznlib /my-solver/
# Add solver configuration file to image
COPY ./my-solver.msc /my-solver/
# Add solver to search path and make it the default
RUN echo '{"mzn_solver_path": ["/my-solver"],'            > $HOME/.minizinc/Preferences.json && \
    echo '"tagDefaults": [["", "org.myorg.my_solver"]]}' >> $HOME/.minizinc/Preferences.json
```

The most important parts are the `mznlib` and `executable` items for specifying the location of your
MiniZinc library, and executable, respectively. These are resolved relative to the location of the 
solver configuration. You can also use an absolute path.

A MiniZinc solver called may use a solver configuration file:

```json
{
  "name" : "My Solver",
  "version": "1.0.0",
  "id": "org.myorg.my_solver",
  "executable": "mzn-mysolver",
  "stdFlags": ["-a", "-f", "-p"],
  "extraFlags": [
      ["--output-mode", "", "string", ""],
      ["--output-objective", "", "bool", "false"]
  ],
  "supportsMzn": true
}
```

Note the use of `extraFlags` in this case to declare support for the `--output-mode` and 
`--output-objective` options. This is not required for FlatZinc solvers.

### Setup using scripts/fixed paths

If you do not wish to use a solver configuration file, you may use the default one provided in the
image, and install your FlatZinc solver to a fixed location, or modify some scripts to execute
your solver.

In the MiniZinc directory `/minizinc`, there are the three shell scripts `mzn-exec-fd` (for the FD
class), `mzn-exec-free` (for the FREE class), and `mzn-exec-par` (for the PAR class) (these are the
same as in previous MiniZinc Challenges). If you submit a MiniZinc solver then you need to modify 
them accordingly. If you submit a FlatZinc solver then you may need to add, modify, or remove 
parameters that are used for calling your FlatZinc solver. In the case of a FlatZinc solver, there 
must an executable at `/entry_data/fzn-exec` and the solver's MiniZinc 
library must be located in the folder `/entry_data/mzn-lib`. You should install your solver in the
directory `/entry_data`.

You may wish to copy the scripts from the base image to your local computer, edit them, and then
copy the modified scripts into your submission image.

Copy the scripts to the current directory with:

```sh
docker run --rm minizinc/mznc2023:latest cat mzn-exec-fd > mzn-exec-fd
docker run --rm minizinc/mznc2023:latest cat mzn-exec-free > mzn-exec-free
docker run --rm minizinc/mznc2023:latest cat mzn-exec-par > mzn-exec-par
```

Edit them in your editor of choice, and then `COPY` them in your Dockerfile:

```docker
FROM minizinc/mznc2023:latest

# =====================================
# Install your solver into the image...
# =====================================

# Copy modified scripts into /minizinc directory
COPY ./mzn-exec-fd /minizinc/
COPY ./mzn-exec-free /minizinc/
COPY ./mzn-exec-par /minizinc/
```

### Creating an Image Interactively

It is also possible to create an image interactively, however this is **not recommended** as it 
makes it rather difficult to make changes to your image, and keep the final image small.

```
docker run -it --name solver minizinc/mznc2023:latest /bin/bash
```

Will bring you into a bash shell, in which you can install your solver and make it the default or
modify the scripts as above. To create the final image, run:

```
docker commit solver <repository>:<tag>
```

If you need to change an environment variable in the final image, you can run `docker commit` with
the option `--change 'ENV MY_VAR=new_value'`.

### Testing your submission

You can test if your submission functions as required by running the command for the entry class
you are participating in:

{:.table}
Class | Command
---   | ---
FD    | `docker run --rm <repository>:<tag> minizinc fd.mpc /minizinc/test.mzn /minizinc/2.dzn`
FREE  | `docker run --rm <repository>:<tag> minizinc free.mpc /minizinc/test.mzn /minizinc/2.dzn`
PAR   | `docker run --rm <repository>:<tag> minizinc par.mpc /minizinc/test.mzn /minizinc/2.dzn`

It is strongly recommended that you also test your submission using `-v` and ensure that your
MiniZinc library is being picked up correctly.

### Uploading your submission

Once you have finalised your Docker image, you can push it to [Docker Hub](https://hub.docker.com).

```sh
# If you did not include your username in the repository, you must add it with
docker tag <repository>:<tag> <username>/<name>:<tag>
# Sign into Docker Hub
docker login
# Upload the image
docker push <username>/<name>:<tag>
```

If you want to make your repository private then go to [Docker Hub](https://hub.docker.com), sign
into your account, click on your repository, click on settings, and then on the button
`Make Private`. You will have to give the Docker Hub user `mznc` access to the repository in order
to submit it.

You can then complete the web form (which will be made available to participants at the start of the
initial submission round) to submit your entry.

---

Return to the [MiniZinc Challenge 2023](challenge.html) home page.
