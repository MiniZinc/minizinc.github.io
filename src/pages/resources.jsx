import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DownloadBanner } from '@/components/DownloadBanner'
import { Handbook } from '@/components/resources/Handbook'
import { Integrations } from '@/components/resources/Integrations'
import { Courses } from '@/components/resources/Courses'
import { Publications } from '@/components/resources/Publications'
// import { Others } from '@/components/resources/Other'

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Resources</title>
      </Head>
      <Header />
      <main>
        <DownloadBanner />
        <Handbook />
        <Integrations />
        <Courses />
        <Publications />
        {/* <Others /> */}
      </main>
      <Footer />
    </>
  )
}
