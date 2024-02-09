import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    copyrightYear: new Date().getFullYear(),
    basePath: process.env.BASE_PATH || '',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: process.env.BASE_PATH || '',
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

export default withMDX(nextConfig)
