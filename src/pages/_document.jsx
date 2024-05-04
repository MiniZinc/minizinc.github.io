import getConfig from 'next/config'
import { Head, Html, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

const { publicRuntimeConfig } = getConfig()
export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <link rel="icon" href={`${publicRuntimeConfig.basePath}/favicon.ico`} />
        <meta
          name="description"
          content="MiniZinc is a free and open-source constraint modeling language."
          key="description"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>

      <GoogleAnalytics gaId="UA-63390311-1" />
    </Html>
  )
}
