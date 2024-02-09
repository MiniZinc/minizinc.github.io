import getConfig from 'next/config'
import Script from 'next/script'
import { useEffect, useRef } from 'react'

const { publicRuntimeConfig } = getConfig()
export function Scripts({ scripts, onReady }) {
  const counter = useRef(0)
  useEffect(() => {
    counter.current = 0
  }, [scripts])
  return (
    <>
      {scripts.map((src) => (
        <Script
          key={src}
          src={
            src.startsWith('/') ? `${publicRuntimeConfig.basePath}${src}` : src
          }
          onReady={() => {
            counter.current++
            if (counter.current == scripts.length) {
              counter.current = 0
              if (onReady) {
                onReady()
              }
            }
          }}
        />
      ))}
    </>
  )
}
