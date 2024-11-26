import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "next-themes";

import { site } from "@/lib/site";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://wallify.lab-x.xyz/",
    title: site.title,
    description: site.description,
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/a7067227-0f3b-4ac5-9e7d-5b57769150ee.png?token=yXA6RR4X-r1tCiG1FWdev9-hdY-2PKssOP_bmYe_97w&height=645&width=1200&expires=33268631397",
        width: 1200,
        height: 645,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [
      "https://opengraph.b-cdn.net/production/images/a7067227-0f3b-4ac5-9e7d-5b57769150ee.png?token=yXA6RR4X-r1tCiG1FWdev9-hdY-2PKssOP_bmYe_97w&height=645&width=1200&expires=33268631397",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased   `}
        defaultValue={"dark"}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <RootProvider>
            <main className="">{children}</main>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
