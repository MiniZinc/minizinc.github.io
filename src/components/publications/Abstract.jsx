import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import getConfig from 'next/config'
import { useState } from 'react'

const { publicRuntimeConfig } = getConfig()

export function Abstract({ className, index, ...props }) {
  const [height, setHeight] = useState(0)
  const src = `${publicRuntimeConfig.basePath}/abstracts/${index}`
  return (
    <>
      <iframe
        className={clsx('w-full overflow-hidden border-0', className)}
        style={{ height }}
        src={src}
        onLoad={(e) =>
          setHeight(e.currentTarget.contentWindow.document.body.scrollHeight)
        }
        {...props}
      />
      {height === 0 ? (
        <div className="flex justify-center p-4 text-3xl text-gray-600">
          <div className="animate-spin">
            <FontAwesomeIcon icon={faSpinner} height="1em" />{' '}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
