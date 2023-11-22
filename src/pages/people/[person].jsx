import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Person } from '@/components/Person'
import { people } from '@/data/people'
import { loadPublications } from '@/data/publications/load'
import { authorsMatches } from '@/utils/publications'

export default function PersonPage({ slug, publications }) {
  const person = people.find((person) => person.slug === slug)
  if (!person) {
    return <></>
  }
  return (
    <>
      <Head>
        <title>{`MiniZinc - ${person.name}`}</title>
      </Head>
      <Header />
      <main>
        <Person person={person} publications={publications} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = people.map((p) => ({
    params: { person: p.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.person,
      publications: (await loadPublications()).all.filter((p) =>
        authorsMatches(p.authors, params.person),
      ),
    },
  }
}
