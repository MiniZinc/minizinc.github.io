import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

function remarkBugRef() {
  return function (tree) {
    visit(tree, 'text', function (node, index, parent) {
      if (node.value.endsWith(':bugref:')) {
        node.value = node.value.slice(0, node.value.length - 8)
        const next = parent.children[index + 1]
        const issue = next.value
        parent.children[index + 1] = {
          type: 'link',
          url: `https://github.com/minizinc/libminizinc/issues/${issue}`,
          children: [{ type: 'text', value: `issue ${issue}` }],
        }
      } else if (node.value.endsWith(':idebugref:')) {
        node.value = node.value.slice(0, node.value.length - 118)
        const next = parent.children[index + 1]
        const issue = next.value
        parent.children[index + 1] = {
          type: 'link',
          url: `https://github.com/minizinc/MiniZincIDE/issues/${issue}`,
          children: [{ type: 'text', value: `issue ${issue}` }],
        }
      }
    })
  }
}

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
    remarkPlugins: [remarkGfm, remarkBugRef],
    rehypePlugins: [rehypeSlug],
  },
})

export default withMDX(nextConfig)
