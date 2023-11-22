import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Downloads } from '@/components/downloads/Downloads'
import { Releases } from '@/components/downloads/Releases'
import { Issues } from '@/components/downloads/Issues'
import { MiniZincDistribution } from '@/components/downloads/MiniZincDistribution'

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Downloads</title>
        <meta
          name="description"
          content="MiniZinc is a free and open-source constraint modeling language."
        />
      </Head>
      <Header />
      <main>
        <Downloads />
        <MiniZincDistribution />
        <Issues />
        <Releases />
      </main>
      <Footer />
    </>
  )
}
