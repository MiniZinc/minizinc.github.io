import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'
import { loadPublications } from '@/data/publications/load'

export default function TeamPage({ authors }) {
  return (
    <>
      <Head>
        <title>MiniZinc - Team</title>
      </Head>
      <Header />
      <main>
        <Team authors={authors} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const publications = await loadPublications()
  const authors = new Set(publications.all.flatMap((pub) => pub.authors))
  return {
    props: {
      authors: [...authors],
    },
  }
}
