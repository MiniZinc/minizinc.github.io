import { Link } from '@/components/Link'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
export const people = [
  {
    name: 'Guido Tack',
    affiliation: 'Monash University',
    email: 'guido.tack@monash.edu',
    img: 'guido_tack.jpg',
    lead: true,
    description: `Design and implementation of MiniZinc, model analysis and transformation, generating efficient FlatZinc for a diverse range of solvers, making MiniZinc easy to use.`,
  },
  {
    name: 'Peter J. Stuckey',
    affiliation: 'Monash University',
    email: 'peter.stuckey@monash.edu',
    img: 'peter_stuckey.jpg',
    lead: true,
    description: (
      <span>
        Design of the MiniZinc language, lazy clause generation solvers,
        modelling interesting problems, developing and teaching{' '}
        <Link href="http://coursera.org/learn/basic-modeling">
          Basic Modeling for Discrete Optimization
        </Link>{' '}
        (and other MOOCs).
      </span>
    ),
  },
  {
    name: 'Maria Garcia de la Banda',
    affiliation: 'Monash University',
    email: 'maria.garciadelabanda@monash.edu',
    img: 'maria_garcia_de_la_banda.jpg',
    description: `Model analysis and transformation, symmetry detection and breaking, constraint model debugging and profiling.`,
  },
  {
    name: 'Jip J. Dekker',
    affiliation: 'Monash University',
    email: 'jip.dekker@monash.edu',
    img: 'jip_dekker.jpg',
    description: `Compilation of MiniZinc, Large Neighbourhood Search, automatic table constraints.`,
  },
  {
    name: 'Jason Nguyen',
    affiliation: 'Monash University',
    email: 'jason.nguyen@monash.edu',
    img: 'jason_nguyen.jpg',
    description: (
      <span>
        Software engineer, development and maintenance of the MiniZinc tool
        chain, running the <Link href="/challenge">MiniZinc Challenge</Link>.
      </span>
    ),
  },
  {
    name: 'Kevin Leo',
    affiliation: 'Monash University',
    email: 'kevin.leo@monash.edu',
    img: 'kevin_leo.jpg',
    description: `Multi-pass compilation for MiniZinc, constraint solver interfaces, semi-automatic model improvement and debugging.`,
  },
  {
    name: 'Hendrik ‘Henk’ Bierlee',
    affiliation: 'Monash University',
    email: 'hendrik.bierlee@monash.edu',
    img: 'hendrik_bierlee.jpg',
    description: `The MiniZinc-SAT compiler, integer and single constant multiplication encodings for SAT.`,
  },
  {
    name: 'Ignasi Abio',
    affiliation: 'NICTA',
    img: 'ignasi_abio.jpg',
    former: true,
    description: `Automatic translation to SAT.`,
  },
  {
    name: 'Gleb Belov',
    affiliation: 'Monash University',
    email: 'gleb.belov@monash.edu',
    img: 'gleb_belov.jpg',
    former: true,
    description: `Linearisation, MIP solver interfaces, systematic testing and benchmarking.`,
  },
  {
    name: 'Carleton Coffrin',
    affiliation: 'Data61',
    img: 'carleton_coffrin.jpg',
    former: true,
    description: (
      <span>
        Linear and non-linear solvers, developing and teaching{' '}
        <Link href="https://www.coursera.org/learn/modeling-discrete-optimization">
          Modeling Discrete Optimization
        </Link>
        .
      </span>
    ),
  },
  {
    name: 'Alexander J. Ek',
    affiliation: 'Monash University',
    email: 'alexander.ek@monash.edu',
    img: 'alexander_ek.jpg',
    former: true,
    description: `Online and fair optimisation in MiniZinc.`,
  },
  {
    name: 'Graeme Gange',
    affiliation: 'Monash University',
    email: 'graeme.gange@monash.edu',
    img: 'graeme_gange.jpg',
    former: true,
    description: `Compilation of MiniZinc, Lazy Clause Generation solvers.`,
  },
  {
    name: 'David Hemmi',
    affiliation: 'Monash University',
    email: 'david.hemmi@monash.edu',
    img: 'david_hemmi.jpg',
    former: true,
    description: `Stochastic MiniZinc, efficient algorithms for stochastic combinatorial problems.`,
  },
  {
    name: 'Chris Mears',
    affiliation: 'Opturion',
    email: 'chris.mears@monash.edu',
    img: 'chris_mears.jpg',
    former: true,
    description: `Systematic testing, semi-automatic model improvement, symmetry detection and breaking, constraint model debugging and profiling.`,
  },
  {
    name: 'Andrea Rendl',
    affiliation: 'NICTA',
    img: 'andrea_rendl.png',
    former: true,

    description:
      'Model analysis and transformation, solver backends, stochastic MiniZinc, MiniSearch.',
  },
  {
    name: 'Andreas Schutt',
    affiliation: 'Data61',
    email: 'andreas.schutt@data61.csiro.au',
    img: 'andreas_schutt.jpg',
    former: true,
    description: (
      <span>
        Lazy clause generation solvers, scheduling and packing problems, running
        the <Link href="/challenge">MiniZinc Challenge</Link>.
      </span>
    ),
  },
  {
    name: 'Maxim Shishmarev',
    affiliation: 'Monash University',
    email: 'maxim.shishmarev@monash.edu',
    img: 'maxim_shishmarev.jpg',
    former: true,
    description: 'Constraint model debugging and profiling.',
  },
  {
    name: 'Mark Wallace',
    affiliation: 'Monash University and Opturion',
    email: 'mark.wallace@monash.edu',
    img: 'mark_wallace.jpg',
    former: true,
    description:
      'Industrial applications, language design, linear and hybrid solving approaches.',
  },
  {
    name: 'Kiana Zeighami',
    affiliation: 'Monash University',
    email: 'kiana.zeighami@monash.edu',
    img: 'kiana_zeighami.jpg',
    former: true,
    description: 'Semi-automatic model improvement.',
  },
]
  .map((p) => ({
    ...p,
    img: `${publicRuntimeConfig.basePath}/images/people/${p.img}`,
    slug: p.name.toLowerCase().replace(/[^A-Za-z0-9-]+/g, '_'),
  }))
  .sort((x, y) => x.name.localeCompare(y.name))

export const lead = people.filter((x) => x.lead)
export const members = people.filter((x) => !x.lead && !x.former)
export const former = people.filter((x) => x.former)
