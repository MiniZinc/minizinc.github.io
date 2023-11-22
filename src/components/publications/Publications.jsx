import { Container } from '@/components/Container'
import { PublicationList } from '@/components/publications/PublicationList'

export function Publications({ publications }) {
  return (
    <Container className="mb-12">
      <section
        id="citing-minizinc"
        aria-labelledby="citing-minizinc-title"
        className="py-6"
      >
        <h2
          id="citing-minizinc-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Citing MiniZinc
        </h2>
        <p className="my-2 text-gray-800">
          If you use MiniZinc in your own research or would like to acknowledge
          it in a publication, please use the following references.
        </p>
        <PublicationList publications={publications.cite} />
      </section>
      <section
        id="minizinc-language"
        aria-labelledby="minizinc-language-title"
        className="py-6"
      >
        <h2
          id="minizinc-language-title"
          className="mb-2 text-3xl font-medium tracking-tight text-gray-900"
        >
          Papers defining the MiniZinc or Zinc languages and extensions
        </h2>
        <PublicationList publications={publications.minizinc} />
      </section>
      <section
        id="general-papers"
        aria-labelledby="general-papers-title"
        className="py-6"
      >
        <h2
          id="general-papers-title"
          className="mb-2 text-3xl font-medium tracking-tight text-gray-900"
        >
          Papers using MiniZinc or Zinc
        </h2>
        <PublicationList publications={publications.other} />
      </section>
    </Container>
  )
}
