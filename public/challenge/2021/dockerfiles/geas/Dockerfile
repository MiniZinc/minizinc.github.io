FROM minizinc/mznc2021:latest AS builder

WORKDIR /src

# Install build tools
RUN apt-get update -y && \
    apt-get install -y build-essential ocaml opam

# Compile Geas with some patches
RUN opam init --disable-sandboxing && \
    eval `opam config env` && \
    opam install -y camlidl && \
    git clone https://bitbucket.org/gkgange/geas.git . && \
    sed -i 's/-march=native/-march=x86-64 -mtune=generic/' Makefile && \
    sed -i 's/failwith "Unknown val-branch annotation."/Sol.VAL_MIN/' fzn/fzn_geas.ml && \
    make

FROM minizinc/mznc2021:latest

# Copy Geas from build stage to final stage
COPY --from=builder /src/fzn /geas
# Add solver configuration file
COPY ./geas.msc /geas

# Add Geas to the MiniZinc search path.
ENV MZN_SOLVER_PATH=/geas:${MZN_SOLVER_PATH}

# Set Geas as the default solver.
RUN echo '{"tagDefaults": [["", "org.geas.geas"]]}' > $HOME/.minizinc/Preferences.json
