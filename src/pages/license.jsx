import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { License } from '@/components/License'

export default function LicensePage() {
  return (
    <>
      <Head>
        <title>MiniZinc - License information</title>
        <meta
          name="description"
          content="MiniZinc is a free and open-source constraint modeling language."
        />
      </Head>
      <Header />
      <main>
        <License />
      </main>
      <Footer />
    </>
  )
}
