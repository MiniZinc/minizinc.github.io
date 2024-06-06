import { changelog } from '@/utils/links'

export function GET() {
  const url = changelog()
  return new Response(
    `<!DOCTYPE html>
<html lang="en-US">
  <meta charset="utf-8">
  <title>Redirecting&hellip;</title>
  <link rel="canonical" href="${url}">
  <script>
    const url = "${url}";
    location = \`\${url}\${location.search}\${location.hash}\`;
  </script>
  <meta http-equiv="refresh" content="0; url=${url}">
  <meta name="robots" content="noindex">
  <h1>Redirecting&hellip;</h1>
  <a href="${url}">Click here if you are not redirected.</a>
</html>`,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    },
  )
}
