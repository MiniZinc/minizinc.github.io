import { loadPublications } from '@/data/publications/load'
import Head from 'next/head'

export default function MarketData({ publication }) {
  return (
    <>
      <Head>
        <title>{`MiniZinc - ${publication.title}`}</title>
      </Head>
      <main className="p-4">
        <p className="max-w-prose text-justify">{publication.abstract}</p>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const { publications } = await loadPublications()
  return {
    paths: publications.all.map((p, index) => ({
      params: { index: `${index}` },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { abstracts, publications } = await loadPublications()
  const publication = {
    ...publications.all[params.index],
    abstract: abstracts[params.index],
  }
  return {
    props: {
      publication,
    },
  }
}
