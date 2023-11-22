import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DownloadBanner } from '@/components/DownloadBanner'
import { Handbook } from '@/components/resources/Handbook'
import { Courses } from '@/components/resources/Courses'
import { Publications } from '@/components/resources/Publications'
import { Others } from '@/components/resources/Other'

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Resources</title>
        <meta
          name="description"
          content="MiniZinc is a free and open-source constraint modeling language."
        />
      </Head>
      <Header />
      <main>
        <DownloadBanner />
        <Handbook />
        <Courses />
        <Publications />
        <Others />
      </main>
      <Footer />
    </>
  )
}
