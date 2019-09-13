#!/usr/bin/env python3
import os
import sys
version = sys.argv[1]

for lang in ["en","chi"]:
    for htmlfile in os.listdir("doc-"+version+"/"+lang):
        if htmlfile.endswith(".html"):
            cur = []
            with open("doc-"+version+"/"+lang+"/"+htmlfile,"r") as f:
                for l in f:
                    if "<head>" in l and "<-- analytics -->" not in l:
                        cur.append(l.strip()+"<-- analytics -->\n")
                        cur.append("""
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63390311-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-63390311-1');
</script>"""+"\n")
                    else:
                        cur.append(l)
            with open("doc-"+version+"/"+lang+"/"+htmlfile,"w") as f:
                for l in cur:
                    f.write(l)
