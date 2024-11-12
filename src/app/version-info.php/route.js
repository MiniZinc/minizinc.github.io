import { latest } from '@/data/version'

export const dynamic = 'force-static'
export function GET() {
  // Used by the IDE for upgrade checks
  return new Response(latest.version)
}
