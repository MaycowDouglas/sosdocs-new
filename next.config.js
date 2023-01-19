/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'pt',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sosdocs.com.br',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/sobre-nos',
        destination: '/about',
      },
      {
        source: '/sobre-nosoutros',
        destination: '/about',
      },
      {
        source: '/conteudo',
        destination: '/insights',
      },
      {
        source: '/contenido',
        destination: '/insights',
      },
      {
        source: '/unidades',
        destination: '/units',
      },
    ]
  },
}

module.exports = nextConfig
