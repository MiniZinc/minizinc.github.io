import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Playground } from '@/components/Playground'
import { LatestRelease } from '@/components/LatestRelease'

export default function Home() {
  return (
    <>
      <Head>
        <title>MiniZinc</title>
        <meta
          name="description"
          content="MiniZinc is a free and open-source constraint modeling language."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Playground />
        <Features />
        <LatestRelease />
      </main>
      <Footer />
    </>
  )
}
