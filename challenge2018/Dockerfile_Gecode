#------------------------------------------------------------------------------#
# This file contains the setup for the Gecode submission to the MiniZinc
# challenge. It uses two stages. In the first stage, it builds/compiles
# Gecode in the same OS as the MiniZinc Challenge docker image. The second
# stage extends the provided MiniZinc Challenge docker image by copying the
# Gecode executable and its MiniZinc library across from the first stage as
# well as installing missing libraries for running Gecode if necessary.
# Note that you do not have to use multi stages. Everything can be done in a
# one stage build. However, Note that the statements ADD, RUN, and COPY can
# add image layers, which can increase the size of the layer you have to
# upload.
#------------------------------------------------------------------------------#
# 1. Stage: Compilation of Gecode in a Build Stage

# Using the same image as for the MiniZinc Challenge
FROM ubuntu:16.04 AS builder

# Updating & installing necessary packages
RUN apt-get update -y && apt-get install -y \
    bison \
    build-essential \
    flex \
    git

# Retrieval of Gecode
RUN git clone https://github.com/Gecode/gecode /gecode

# Building Gecode using the develop branch:
# - Creating build folder
# - Change work directory to the Gecode folder
# - Check out develop branch
# - Building Gecode
RUN mkdir -p /gecode/build/ && \
    cd /gecode/build && \
    git fetch && git checkout develop && \
    ../configure && \
    make install

#------------------------------------------------------------------------------#
# 2. Stage: Setup of Gecode in the MiniZinc Challenge docker image

# Using the MiniZinc Challenge docker image
FROM minizinc/mznc2018:1.0

# Copy Gecode's executable from the previous stage across
COPY --from=builder /gecode/build/tools/flatzinc/fzn-gecode /entry_data/fzn-exec

# Copy Gecode's shared librarys from the previous stage across
COPY --from=builder /gecode/build/*.so* /lib/

# Copy Gecode's MiniZinc library from the previous stage across
COPY --from=builder /gecode/gecode/flatzinc/mznlib/* /entry_data/mzn-lib/
