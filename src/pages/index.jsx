import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Playground } from '@/components/Playground'
import { LatestRelease } from '@/components/LatestRelease'
import { Video } from '@/components/Video'
import { Merchandise } from '@/components/Merchandise'

export default function Home() {
  return (
    <>
      <Head>
        <title>MiniZinc</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Playground className="border-t border-gray-200 bg-gray-100" />
        <Video />
        <Features className="bg-gray-100" />
        <LatestRelease />
        <Merchandise className="bg-sky-50 border-t border-gray-200" />
      </main>
      <Footer />
    </>
  )
}
