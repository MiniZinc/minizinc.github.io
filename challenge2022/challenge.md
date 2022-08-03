---
layout: default
title: MiniZinc Challenge 2022
---

## MiniZinc Challenge 2022

### The Challenge

The aim of the challenge is to compare various constraint solving technology on the same  problems
sets. The focus is on finite domain propagation solvers. An auxiliary aim is to build up a library 
of interesting problem models, which can be used to compare solvers and solving technologies.

Challenge participants provide a FlatZinc or MiniZinc solver and global constraint definitions
specialized for their solver. Each solver is run on 100 MiniZinc model instances. For FlatZinc
solvers, we run the `minizinc` compiler on the MiniZinc model and instance using the provided global
constraint definitions to create a FlatZinc file. The resultant FlatZinc file is then given as input
to the provided FlatZinc solver. For MiniZinc solvers, the MiniZinc model and data are input to the
provided solver. Points are awarded for solving problems, speed of solution, and goodness of
solutions (for optimization problems).

### Announcements

*   **2022-08-04** Announcements of the results are [here](results2022.html).
*   **2022-05-09** Call for solver registrations for the MiniZinc Challenge.
*   **2022-05-09** Docker base image for the MiniZinc Challenge now available.
*   **2022-03-10** Official [Call for Problems](call_for_problems.html) for the MiniZinc Challenge.

### Dates

*   Registration opens: **Now**.
*   Problem submission deadline: **Fri, 6 May 2022**.
*   Solver submission begins: **Mon, 16 May 2022**.
*   Solver submission deadline: **Fri, 1 July 2022**.
*   Announcement of results at [<abbr>CP2022</abbr>](https://cp2022.a4cp.org): **31 July - 8 August 2022**
    (Haifa, Israel).

### Registration

Entrants must register their intention to enter the contest _before_ the final submission date.

To register, use the [MiniZinc Challenge Submission System](https://challenge.minizinc.org).

### Submission

All entrants need to extend the MiniZinc Docker image (available at 
[https://hub.docker.com/r/minizinc/mznc2022/](https://hub.docker.com/r/minizinc/mznc2022/), tag
`latest`) with their solver. Detailed information how to prepare the docker image are available
[here](docker.html). The entrant will upload the extended image to Docker Hub and fill out a web
form (provided after registration) providing the location of the image to the MiniZinc organisers. 

Please carefully read [the rules](rules2022.html) before submission.

### Problem Submission

We strongly encourage all entrants to submit one or two MiniZinc models satisfying the contest 
requirements, together with instances for these models. All models will be considered for the
MiniZinc Challenge, however we may need to make some modifications to them in order to ensure they
are suitable for the challenge.

The sooner they are submitted the better, the deadline is **Fri, 6 May 2022**. The call for problem
submission is available [here](call_for_problems.html). Please feel free to distribute it. 

### Rules

The rules for the MiniZinc Challenge 2022 are available [here](rules2022.html).  
If we need to make changes to the rules, all registered entrants will be informed by email.

### Judges

The judges will be responsible for selecting the tested instances, vetting the results, and ruling
on any questions that arise during the competition.

*   Jimmy H.M. Lee. Chinese University of Hong Kong.
*   Barry O'Sullivan, University College Cork, Ireland.
*   Roland Yap, National University of Singapore.

### Feedback

This is the 14th time this challenge is being run, and there are many possibilities for comparing CP
solvers. The rules try to make a sensible set of choices for the comparison. We welcome any comments
or suggestions regarding the running of this challenge.

We can be contacted with the subject starting with [MZNC22] at:

<pre>
    <kbd>mzn-challenge</kbd> 'at' <kbd>lists.csiro.au</kbd>
</pre>

### MiniZinc forums

The [MiniZinc forum](../forum) is for beginners, users, and developers to discuss MiniZinc. If you
would like to join then sign up for the [MiniZinc forums](../forum).

### Links

The [MiniZinc](../index.html) page includes a list of resources related to MiniZinc and FlatZinc.

The [MiniZinc 2.6.3 Distribution](../doc-2.6.3/en/index.html) includes a MiniZinc-to-FlatZinc
converter and a large suite of MiniZinc examples and benchmarks.

The [MiniZinc Challenges 2008-2021](../challenge.html) webpage, includes the results from each
MiniZinc Challenge.
