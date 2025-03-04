import { Montserrat } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const inter = Montserrat({ subsets: ['latin'] })

const url = 'https://chignolli.com'

export const metadata = {
  title: 'Matheus Chignolli - Software Engineer Portfolio',
  description:
    "Matheus Chignolli's portfolio highlights innovative software engineering projects, showcasing expertise in building scalable, high-quality solutions.",
  applicationName: 'Matheus Chignolli Portfolio',
  creator: 'Matheus Chignolli',
  author: 'Matheus Chignolli',
  keywords: [
    'web development',
    'react',
    'node.js',
    'graphql',
    'portfolio',
    'software engineering',
    'chignolli'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: url,
    siteName: 'Matheus Chignolli Portfolio',
    countryName: 'Brazil',
    description:
      "Matheus Chignolli's portfolio highlights innovative software engineering projects, showcasing expertise in building scalable, high-quality solutions.",
    determiner: 'the',
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
    ],
    email: 'matheuschignolli@gmail.com'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MatheusChignolli',
    creator: '@MatheusChignolli',
    image: `${url}/cover-h.jpg`
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL(url)
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta
          name="image"
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider timeZone="America/Sao_Paulo" messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-R9C2BFLVRB" />
    </html>
  )
}
