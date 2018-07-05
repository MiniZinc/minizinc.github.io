#!/usr/bin/python
import os
import sys
latest = sys.argv[1]
for htmlfile in os.listdir("doc-"+latest+"/en"):
    if htmlfile.endswith(".html"):
        with open("doc-latest/en/"+htmlfile,"w") as f:
            f.write("---\n")
            f.write("redirect_to: \"/doc-"+latest+"/en/"+htmlfile+"\"\n")
            f.write("---\n")

