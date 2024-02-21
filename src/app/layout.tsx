import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        url: "https://media.licdn.com/dms/image/D5603AQFdUYVG2Z8p7Q/profile-displayphoto-shrink_800_800/0/1675702060704?e=1713398400&v=beta&t=tQij3it6jVusvH3FJQyUN_X_RC4__ou8yT8pVHtBRB4",
      },
    ],
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
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-R9C2BFLVRB" />
    </html>
  );
}
