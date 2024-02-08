import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Challenge } from '@/components/challenge/Challenge'
import { AllMedals } from '@/components/challenge/AllMedals'
import { CurrentChallenge } from '@/components/challenge/CurrentChallenge'

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Challenge</title>
      </Head>
      <Header />
      <main>
        <Challenge />
        <CurrentChallenge />
        <AllMedals />
      </main>
      <Footer />
    </>
  )
}
