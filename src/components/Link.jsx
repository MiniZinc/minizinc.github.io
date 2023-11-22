import NextLink from 'next/link'
import { forwardRef } from 'react'
import clsx from 'clsx'

const styles = {
  sky: 'text-sky-600 hover:text-sky-700 hover:underline active:text-sky-500',
  gray: 'text-gray-600 hover:text-gray-500 hover:underline active:text-gray-400',
  primary:
    'text-primary hover:text-primary-dark hover:underline active:text-primary-light',
  plain: '',
}

export const Link = forwardRef(function Link(
  { color = 'sky', className, ...props },
  ref,
) {
  return (
    <NextLink ref={ref} className={clsx(styles[color], className)} {...props} />
  )
})
