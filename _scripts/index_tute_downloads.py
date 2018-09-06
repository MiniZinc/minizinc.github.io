INDEX_TEMPLATE = r"""---
layout: minizinc
title: MiniZinc example files from the tutorial
---

<div class="container">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                MiniZinc example files from the tutorial
            </h1>
        </div>
    </div>
    <div class="row">
            <div class="col-lg-12">
                <ul>
% for name in names:
    <li><a href="${name}">${name}</a></li>
% endfor
                </ul>
            </div>
    </div>
</div>
"""

import os
import argparse

# May need to do "pip install mako"
from mako.template import Template


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("directory")
    parser.add_argument("--header")
    args = parser.parse_args()
    fnames = [fname for fname in sorted(os.listdir(args.directory))
              if fname != 'index.html']
    header = (args.header if args.header else os.path.basename(args.directory))
    with open(args.directory+"/index.html","w") as index:
        index.write(Template(INDEX_TEMPLATE).render(names=fnames, header=header))

if __name__ == '__main__':
    main()