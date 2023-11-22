import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Publications } from '@/components/publications/Publications'
import { loadPublications } from '@/data/publications/load'

export default function PublicationsPage({ publications }) {
  return (
    <>
      <Head>
        <title>MiniZinc - Publications</title>
      </Head>
      <Header />
      <main>
        <Publications publications={publications} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      publications: await loadPublications(),
    },
  }
}
