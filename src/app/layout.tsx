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
  metadataBase: new URL("https://wallify.lab-x.xyz"),
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: "Wallify",
    locale: "en_US",
    images: [
      {
        url: "https://wallify.lab-x.xyz/og.png",
        width: 1200,
        height: 645,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["https://wallify.lab-x.xyz/og.png"],
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
