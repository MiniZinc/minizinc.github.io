#!/bin/bash
VERSION=$1
ARCHIVE=$2
mkdir -p doc-$1/en
mkdir -p doc-$1/chi
unzip $2 en/_build/html/* -d doc-$1/en
mv doc-$1/en/en/_build/html/* doc-$1/en/
unzip $2 chi/_build/html/* -d doc-$1/chi
mv doc-$1/chi/chi/_build/html/* doc-$1/chi/
unzip $2 en/_build/latex/MiniZinc.pdf -d doc-$1/en
mv doc-$1/en/en/_build/latex/MiniZinc.pdf "doc-$1/en/MiniZinc Handbook.pdf"
unzip $2 chi/_build/latex/MiniZinc.pdf -d doc-$1/chi
mv doc-$1/chi/chi/_build/latex/MiniZinc.pdf "doc-$1/chi/MiniZinc Handbook.pdf"
rm -r doc-$1/en/en doc-$1/chi/chi

