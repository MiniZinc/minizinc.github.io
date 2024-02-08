import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AllGlobals } from '@/components/challenge/AllGlobals'

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>
          MiniZinc - List of Problems and Globals used in the MiniZinc Challenge
        </title>
      </Head>
      <Header />
      <main>
        <AllGlobals />
      </main>
      <Footer />
    </>
  )
}
