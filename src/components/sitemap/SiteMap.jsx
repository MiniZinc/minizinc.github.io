import { siteMap } from '@/data/routes'
import { Links } from '@/components/sitemap/Links'

export function SiteMap() {
  return (
    <nav className="flex flex-col gap-8 sm:flex-row">
      {siteMap.map((category) => (
        <Links category={category} key={category.label} />
      ))}
    </nav>
  )
}
