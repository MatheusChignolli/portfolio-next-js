import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Chignolli",
  description: "Software Engineer portfolio",
  applicationName: "Matheus Chignolli portfolio",
  authors: [
    {
      name: "Matheus Chignolli",
      url: "https://www.linkedin.com/in/matheus-chignolli-a0115b155/",
    },
  ],
  creator: "Matheus Chignolli",
  keywords: [
    "webdevelopment",
    "web",
    "react",
    "reactjs",
    "node",
    "nodejs",
    "graphql",
    "rest",
    "development",
    "tech",
    "graphql",
    "portfolio",
    "software",
    "softwaredeveloper",
    "softwareengineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
