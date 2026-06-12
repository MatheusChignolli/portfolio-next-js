import './globals.css'
import Script from 'next/script'
import type { Metadata } from 'next'
import { localeToHtmlLang, defaultLocale } from '@/i18n/config'
import LocaleProvider from '@/i18n/locale-provider'

export const dynamic = 'force-static'

const url = 'https://chignolli.com'

export const metadata: Metadata = {
  title: 'Matheus Chignolli - Software Engineer Portfolio',
  description:
    "Matheus Chignolli's portfolio highlights innovative software engineering projects, showcasing expertise in building scalable, high-quality solutions.",
  applicationName: 'Matheus Chignolli Portfolio',
  creator: 'Matheus Chignolli',
  authors: [{ name: 'Matheus Chignolli', url }],
  keywords: [
    'web development',
    'react',
    'node.js',
    'graphql',
    'portfolio',
    'software engineering',
    'chignolli'
  ],
  alternates: {
    canonical: url,
    languages: {
      en: url,
      'pt-BR': url
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url,
    siteName: 'Matheus Chignolli Portfolio',
    countryName: 'Brazil',
    description:
      "Matheus Chignolli's portfolio highlights innovative software engineering projects, showcasing expertise in building scalable, high-quality solutions.",
    title: 'Matheus Chignolli - Software Engineer Portfolio',
    images: [
      {
        url: `${url}/cover-h.jpg`,
        width: 1200,
        height: 630,
        alt: 'Capa Matheus Chignolli'
      },
      {
        url: `${url}/cover-v.jpg`,
        width: 960,
        height: 1280,
        alt: 'Capa Matheus Chignolli'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MatheusChignolli',
    creator: '@MatheusChignolli',
    title: 'Matheus Chignolli - Software Engineer Portfolio',
    description:
      "Matheus Chignolli's portfolio highlights innovative software engineering projects, showcasing expertise in building scalable, high-quality solutions.",
    images: [`${url}/cover-h.jpg`]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(url)
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matheus Chignolli',
  url,
  jobTitle: 'Software Engineer',
  image: `${url}/profile.jpeg`,
  sameAs: [
    'https://github.com/MatheusChignolli',
    'https://www.linkedin.com/in/matheus-chignolli-a0115b155/',
    'https://medium.com/@matheuschignolli'
  ],
  email: 'matheuschignolli@gmail.com',
  knowsAbout: [
    'Web Development',
    'React',
    'Node.js',
    'GraphQL',
    'Software Engineering'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={localeToHtmlLang[defaultLocale]} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/profile.jpeg" as="image" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',(t||(d?'dark':'light'))==='dark')})();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R9C2BFLVRB"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-R9C2BFLVRB');`}
        </Script>
      </body>
    </html>
  )
}
