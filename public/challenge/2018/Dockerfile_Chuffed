#------------------------------------------------------------------------------#
# This file contains the setup for the Chuffed submission to the MiniZinc
# challenge. It uses two stages. In the first stage, it builds/compiles
# Chuffed in the same OS as the MiniZinc Challenge docker image. The second 
# stage extends the provided MiniZinc Challenge docker image by copying the
# Chuffed executable and its MiniZinc library across from the first stage as
# well as installing missing libraries for running Chuffed if necessary. 
# Note that you do not have to use multi stages. Everything can be done in a 
# one stage build. However, Note that the statements ADD, RUN, and COPY can 
# add image layers, which can increase the size of the layer you have to 
# upload.
#------------------------------------------------------------------------------#
# 1. Stage: Compilation of Chuffed in a Build Stage

# Using the same image as for the MiniZinc Challenge
FROM ubuntu:16.04 AS builder

# Updating & installing necessary packages
RUN apt-get update -y && apt-get install -y \
    bison \
    build-essential \
    cmake \
    flex \
    git

# Retrieval of Chuffed
RUN git clone https://github.com/chuffed/chuffed.git /chuffed

# Building Chuffed using the develop branch:
# - Creating build folder
# - Change work directory to the Chuffed folder
# - Check out develop branch
# - Building Chuffed
RUN mkdir -p /chuffed/build && \
    cd /chuffed && \
    git fetch && git checkout develop && \
    cd /chuffed/build && \
    cmake -DCMAKE_BUILD_TYPE=Release .. && \
    cmake --build .

#------------------------------------------------------------------------------#
# 2. Stage: Setup of Chuffed in the MiniZinc Challenge docker image

# Using the MiniZinc Challenge docker image
FROM minizinc/mznc2018:1.0

# Copy Chuffed's executable from the previous stage across
COPY --from=builder /chuffed/build/fzn-chuffed /entry_data/fzn-exec

# Copy Chuffed's MiniZinc library from the previous stage across
COPY --from=builder /chuffed/chuffed/flatzinc/mznlib/* /entry_data/mzn-lib/

