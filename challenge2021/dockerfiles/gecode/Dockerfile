# Build Gecode in an isolated stage called builder.
FROM minizinc/mznc2021:latest AS builder

# Install compiler toolchain for Gecode.
RUN apt-get update -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y bison build-essential cmake flex git

# Change directory to /src.
WORKDIR /src

# Clone the Gecode git repository.
RUN git clone https://github.com/Gecode/Gecode . && \
    git checkout develop

# Build Gecode and install it into /install.
RUN mkdir /install && mkdir build && cd build && \
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/install .. && \
    cmake --build . --config Release && \
    cmake --build . --config Release --target install

# Create our final image using this base.
FROM minizinc/mznc2021:latest

# Copy the Gecode installation to /gecode in the final image.
COPY --from=builder /install /gecode

# Copy the solver configuration into the final image.
COPY ./gecode.msc /gecode

# Add Gecode to the MiniZinc search path.
ENV MZN_SOLVER_PATH=/gecode:${MZN_SOLVER_PATH}

# Set Gecode as the default solver.
RUN echo '{"tagDefaults": [["", "org.gecode.gecode"]]}' > $HOME/.minizinc/Preferences.json