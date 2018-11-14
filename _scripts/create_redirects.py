#!/usr/bin/python
import os
import sys
latest = sys.argv[1]
for htmlfile in os.listdir("doc-"+latest+"/en")+["downloads/index.html"]:
    if htmlfile.endswith(".html"):
        with open("doc-latest/en/"+htmlfile,"w") as f:
            f.write("---\n")
            f.write("redirect_to: \"/doc-"+latest+"/en/"+htmlfile+"\"\n")
            f.write("---\n")

for htmlfile in os.listdir("doc-"+latest+"/chi")+["downloads/index.html"]:
    if htmlfile.endswith(".html"):
        with open("doc-latest/chi/"+htmlfile,"w") as f:
            f.write("---\n")
            f.write("redirect_to: \"/doc-"+latest+"/chi/"+htmlfile+"\"\n")
            f.write("---\n")

for lang in ["en","chi"]:
    with open("doc-latest/"+lang+"/handbook.html","w") as f:
        f.write("---\n")
        f.write("redirect_to: \"/doc-"+latest+"/"+lang+"/MiniZinc Handbook.pdf\"\n")
        f.write("---\n")
