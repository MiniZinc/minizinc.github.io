import { documentation } from '@/utils/links'

const routes = [
  ['Resources', '/resources'],
  ['Team', '/team'],
  ['Playground', 'https://play.minizinc.dev'],
  ['Challenge', '/challenge'],
  ['Discussions', 'https://groups.google.com/forum/#!forum/minizinc'],
]

export const siteMap = [
  {
    label: 'MiniZinc',
    children: [
      ['Downloads', '/downloads'],
      ['Playground', 'https://play.minizinc.dev'],
      ['Challenge', '/challenge'],
      ['Releases', '/downloads#releases'],
    ],
  },
  {
    label: 'Learn',
    children: [
      ['Resources', '/resources'],
      ['Tutorial', documentation('part_2_tutorial.html')],
      ['User manual', documentation('part_3_user_manual.html')],
      ['Reference manual', documentation('part_4_reference.html')],
    ],
  },
  {
    label: 'About',
    children: [
      ['Team', '/team'],
      ['Publications', '/publications'],
      ['Issue tracker', '/downloads#issues'],
      ['License information', '/license'],
    ],
  },
]

export default routes
