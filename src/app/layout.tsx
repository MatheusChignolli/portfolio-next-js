import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Matheus Chignolli - Software Engineer Portfolio",
  description:
    "Matheus Chignolli's portfolio showcasing software engineering projects and expertise.",
  applicationName: "Matheus Chignolli Portfolio",
  authors: [
    {
      name: "Matheus Chignolli",
      url: "https://www.linkedin.com/in/matheus-chignolli-a0115b155/",
    },
  ],
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
    url: "https://chignolli.com",
    siteName: "Matheus Chignolli Portfolio",
    countryName: "Brazil",
    description:
      "Matheus Chignolli's portfolio website showcasing software engineering projects and expertise.",
    determiner: "the",
    emails: "matheuschignolli@gmail.com",
    title: "Matheus Chignolli - Software Engineer Portfolio",
    images: [
      {
        url: '/cover-v.jpg',
        width: 960,
        height: 1280,
        alt: 'Capa Matheus Chignolli'
      },
      {
        url: '/cover-h.jpg',
        width: 1200,
        height: 630,
        alt: 'Capa Matheus Chignolli'
      }
    ]
  },
  metadataBase: new URL("https://chignolli.com"),
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
