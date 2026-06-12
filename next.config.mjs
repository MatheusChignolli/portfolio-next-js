import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  async headers() {
    const securityHeaders = [
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      {
        key: 'Content-Security-Policy',
        value:
          "default-src 'self'; script-src 'self' https://www.googletagmanager.com 'unsafe-eval' 'unsafe-inline'; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
      }
    ]

    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      },
      {
        source: '/:path*\\.(ico|png|jpg|jpeg|gif|webp|svg|woff2|css|js|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
