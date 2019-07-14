#------------------------------------------------------------------------------#
# This file contains the setup for building a base image for the MiniZinc
# challenges. It uses multi-stage builds in order to keep the images small.
# Note that the statements ADD, RUN, and COPY can add image layers.
#------------------------------------------------------------------------------#
# The build image

# Setup Alpine Linux as build image
FROM alpine:latest AS builder

#------------------------------------------------------------------------------#
# Script for executing a FlatZinc or MiniZinc solver in the FD class

RUN mkdir /minizinc

RUN \
    echo "#!/bin/bash                                                 " >  /minizinc/mzn-exec-fd && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-fd && \
    echo "# Script for running solver in the class 'FD search'        " >> /minizinc/mzn-exec-fd && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-fd && \
    echo "# FlatZinc Solver                                           " >> /minizinc/mzn-exec-fd && \
    echo "# (comment following line for MiniZinc solver)              " >> /minizinc/mzn-exec-fd && \
    echo "minizinc --solver \"org.minizinc.mzn-fzn\" -k --fzn-cmd \"\$FZNEXEC\" -G exec \"\$@\"                " >> /minizinc/mzn-exec-fd && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-fd && \
    echo "# MiniZinc Solver                                           " >> /minizinc/mzn-exec-fd && \
    echo "# (add call to your solver here, e.g.)                      " >> /minizinc/mzn-exec-fd && \
    echo "# mzn-gecode -G gecode \"\$@\"                              " >> /minizinc/mzn-exec-fd && \
    chmod a+x /minizinc/mzn-exec-fd

#------------------------------------------------------------------------------#
# Script for executing a FlatZinc or MiniZinc solver in the FREE class

RUN \
    echo "#!/bin/bash                                                 " >  /minizinc/mzn-exec-free && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-free && \
    echo "# Script for running solver in the class 'FREE search'      " >> /minizinc/mzn-exec-free && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-free && \
    echo "# FlatZinc Solver                                           " >> /minizinc/mzn-exec-free && \
    echo "# (comment following line for MiniZinc solver)              " >> /minizinc/mzn-exec-free && \
    echo "minizinc --solver \"org.minizinc.mzn-fzn\" -k --fzn-cmd \"\$FZNEXEC -f\" -G exec \"\$@\"             " >> /minizinc/mzn-exec-free && \
    echo "#----------------------------------------------------------#" >> /minizinc/mzn-exec-free && \
    echo "# MiniZinc Solver                                           " >> /minizinc/mzn-exec-free && \
    echo "# (add call to your solver here, e.g.)                      " >> /minizinc/mzn-exec-free && \
    echo "# mzn-gecode -f -G gecode \"\$@\"                           " >> /minizinc/mzn-exec-free && \
    chmod a+x /minizinc/mzn-exec-free

#------------------------------------------------------------------------------#
# Script for executing a FlatZinc or MiniZinc solver in the PAR class
# (NOTE that this script will be invoke including the parameter "-p <n>".)

RUN \
    echo "#!/bin/bash                                                 "  >  /minizinc/mzn-exec-par && \
    echo "#----------------------------------------------------------#"  >> /minizinc/mzn-exec-par && \
    echo "# Script for running solver in the class 'PAR search'       "  >> /minizinc/mzn-exec-par && \
    echo "# NOTE that the argument \"-p <n>\" will pass to this script!" >> /minizinc/mzn-exec-par && \
    echo "# Your solver needs to handle this parameter.               "  >> /minizinc/mzn-exec-par && \
    echo "#----------------------------------------------------------#"  >> /minizinc/mzn-exec-par && \
    echo "# FlatZinc Solver                                           "  >> /minizinc/mzn-exec-par && \
    echo "# (comment following line for MiniZinc solver)              "  >> /minizinc/mzn-exec-par && \
    echo "minizinc --solver \"org.minizinc.mzn-fzn\" -k --fzn-cmd \"\$FZNEXEC\" -G exec \"\$@\"                "  >> /minizinc/mzn-exec-par && \
    echo "#----------------------------------------------------------#"  >> /minizinc/mzn-exec-par && \
    echo "# MiniZinc Solver                                           "  >> /minizinc/mzn-exec-par && \
    echo "# (add call to your solver here, e.g.)                      "  >> /minizinc/mzn-exec-par && \
    echo "# mzn-gecode -G gecode \"\$@\"                              "  >> /minizinc/mzn-exec-par && \
    chmod a+x /minizinc/mzn-exec-par

#------------------------------------------------------------------------------#
# Script for executing a FlatZinc or MiniZinc solver from outside the container

RUN \
    echo "#!/bin/bash                                 " >  /minizinc/solver && \
    echo "#------------------------------------------#" >> /minizinc/solver && \
    echo "EXEC=mzn-exec-fd                            " >> /minizinc/solver && \
    echo "while (( \"\$#\" ))                         " >> /minizinc/solver && \
    echo "do                                          " >> /minizinc/solver && \
    echo "    case \$1 in                             " >> /minizinc/solver && \
    echo "    -p)                                     " >> /minizinc/solver && \
    echo "        EXEC=mzn-exec-par                   " >> /minizinc/solver && \
    echo "        ARGS=\"\$ARGS \$1\"                 " >> /minizinc/solver && \
    echo "        ;;                                  " >> /minizinc/solver && \
    echo "    --free-search)                          " >> /minizinc/solver && \
    echo "        EXEC=mzn-exec-free                  " >> /minizinc/solver && \
    echo "        ;;                                  " >> /minizinc/solver && \
    echo "    --fzn-flag|--fzn-flags)                 " >> /minizinc/solver && \
    echo "        shift                               " >> /minizinc/solver && \
    echo "        FLAGS=\"\$FLAGS \$1\"               " >> /minizinc/solver && \
    echo "        ;;                                  " >> /minizinc/solver && \
    echo "    -D|--cmdline-data)                      " >> /minizinc/solver && \
    echo "        shift                               " >> /minizinc/solver && \
    echo "        DATA=\"\$DATA \$1\"                 " >> /minizinc/solver && \
    echo "        ;;                                  " >> /minizinc/solver && \
    echo "    *)                                      " >> /minizinc/solver && \
    echo "        ARGS=\"\$ARGS \$1\"                 " >> /minizinc/solver && \
    echo "        ;;                                  " >> /minizinc/solver && \
    echo "    esac                                    " >> /minizinc/solver && \
    echo "    shift                                   " >> /minizinc/solver && \
    echo "done                                        " >> /minizinc/solver && \
    echo "if [ -z \"\$FLAGS\" ] && [ -z \"\$DATA\" ]  " >> /minizinc/solver && \
    echo "then                                        " >> /minizinc/solver && \
    echo "    \$EXEC \$ARGS                           " >> /minizinc/solver && \
    echo "elif [ -n \"\$FLAGS\" ] && [ -z \"\$DATA\" ]" >> /minizinc/solver && \
    echo "then                                        " >> /minizinc/solver && \
    echo "    \$EXEC --fzn-flags \"\$FLAGS\" \$ARGS   " >> /minizinc/solver && \
    echo "elif [ -z \"\$FLAGS\" ] && [ -n \"\$DATA\" ]" >> /minizinc/solver && \
    echo "then                                        " >> /minizinc/solver && \
    echo "    \$EXEC -D \"\$DATA\" \$ARGS             " >> /minizinc/solver && \
    echo "else                                        " >> /minizinc/solver && \
    echo "    \$EXEC --fzn-flags \"\$FLAGS\" -D \"\$DATA\" \$ARGS " >> /minizinc/solver && \
    echo "fi                                          " >> /minizinc/solver && \
    chmod a+x /minizinc/solver

#------------------------------------------------------------------------------#
# Adding MiniZinc test files

RUN \
    echo "int: a;                                                                " >  /minizinc/test.mzn && \
    echo "var 1..100: x;                                                         " >> /minizinc/test.mzn && \
    echo "constraint a <= x /\ x < 2*a;                                          " >> /minizinc/test.mzn && \
    echo "solve :: int_search([x], input_order, indomain_min, complete) satisfy; " >> /minizinc/test.mzn && \
    echo "a = 2;" > /minizinc/2.dzn

#------------------------------------------------------------------------------#
# Setup of the base image

# Get base image from the latest Ubuntu LTS
FROM minizinc/minizinc:ubuntu_2.3.1

# Copy unpacked MiniZinc installation from the build image
COPY --from=builder /minizinc /minizinc

# Create folder for the solver submission and link solver MiniZinc library
RUN mkdir /entry_data \
    && mkdir /entry_data/mzn-lib \
    && ln -s /entry_data/mzn-lib /usr/local/share/minizinc/exec

#------------------------------------------------------------------------------#
# Environment Variables

# Add FlatZinc solver absolute path
ENV FZNEXEC="/entry_data/fzn-exec"

# Add MiniZinc's binary path to PATH
ENV PATH="/minizinc:${PATH}"

#------------------------------------------------------------------------------#
# Setup Working Directory

WORKDIR /minizinc
