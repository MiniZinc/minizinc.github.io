import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function ObjectsPage() {
  return (
    <>
      <Head>
        <title>MiniZinc - Unit Types</title>
      </Head>
      <Header />
      <main>
      <Container>
        <section id="objects" aria-labelledby="objects-title">
          <h2
            id="objects-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Modelling with Unit Types
          </h2>
          <hr className="mt-2" />
          <p className="my-6 leading-7">
            Coming soon.
          </p>
        </section>
      </Container>
      </main>
      <Footer />
    </>
  )
}
