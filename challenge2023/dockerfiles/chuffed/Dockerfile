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
# See https://www.minizinc.org/doc-2.7.5/en/command_line.html#user-configuration-files
RUN echo '{"mzn_solver_path": ["/chuffed/share/minizinc/solvers"],' > $HOME/.minizinc/Preferences.json && \
    echo '"tagDefaults": [["", "org.chuffed.chuffed"]]}'           >> $HOME/.minizinc/Preferences.json
