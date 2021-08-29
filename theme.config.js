export default {
  github: 'https://github.com/rudemex',
  docsRepositoryBase: 'https://github.com/rudemex/nextjs-docs/blob/master',
  titleSuffix: ' - Mex Delgado',
  darkMode: true,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Mex Delgado</span>
      {/*<span className="text-gray-600 font-normal hidden md:inline">
        The Next.js Static Site Generator
      </span>*/}
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="description" content="Mex delgado" />
      <meta name="og:description" content="Mex delgado" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://rudemex.github.io/og.png" />
      <meta name="twitter:site:domain" content="rudemex.github.io" />
      <meta name="twitter:url" content="https://rudemex.github.io/" />
      <meta name="og:title" content="Mex Delgado" />
      <meta name="apple-mobile-web-app-title" content="Mex Delgado" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Mex Delgado.</>,
  unstable_faviconGlyph: '👨‍💻',
}
