import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Fira_Code({ subsets: ["latin"] });

const url = "https://chignolli.com";

export const metadata = {
  title: "Matheus Chignolli - Software Engineer Portfolio",
  description:
    "Matheus Chignolli's portfolio showcasing software engineering projects and expertise.",
  applicationName: "Matheus Chignolli Portfolio",
  creator: "Matheus Chignolli",
  keywords: [
    "web development",
    "react",
    "node.js",
    "graphql",
    "portfolio",
    "software engineering",
    "chignolli",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: url,
    siteName: "Matheus Chignolli Portfolio",
    countryName: "Brazil",
    description:
      "Matheus Chignolli's portfolio website showcasing software engineering projects and expertise.",
    determiner: "the",
    title: "Matheus Chignolli - Software Engineer Portfolio",
    images: [
      {
        url: `${url}/cover-h.jpg`,
        width: 1200,
        height: 630,
        alt: 'Capa Matheus Chignolli',
      },
      {
        url: `${url}/cover-v.jpg`,
        width: 960,
        height: 1280,
        alt: 'Capa Matheus Chignolli',
      },
    ],
    email: "matheuschignolli@gmail.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MatheusChignolli",
    creator: "@MatheusChignolli",
    image: `${url}/cover-h.jpg`,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(url),
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-R9C2BFLVRB" />
    </html>
  );
}
