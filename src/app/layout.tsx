import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "next-themes";

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
  metadataBase: new URL("https://wallify.lab-x.xyz"),
  title: {
    default: "HD Wallpapers Collection | Free Download",
    template: "%s | Your Wallpaper App",
  },
  description:
    "Discover and download high-quality wallpapers for your desktop and mobile devices. New wallpapers added daily, all available in HD and 4K resolution.",
  keywords: [
    "https://wallify.lab-x.xyz/",
    "wallify",
    "wallpapers",
    "HD wallpapers",
    "4K wallpapers",
    "desktop backgrounds",
    "mobile wallpapers",
    "free wallpapers",
    "nature wallpapers",
    "abstract wallpapers",
    "landscape wallpapers",
    "minimal wallpapers",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://wallify.lab-x.xyz/",
    },
  ],
  creator: "shashivadan",
  publisher: "Your Wallpaper App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  openGraph: {
    type: "website",
    siteName: "wallify",
    title: " wallify :  Wallpapers Collection | Free Download",
    description:
      "Discover and download high-quality wallpapers for your desktop and mobile devices. New wallpapers added daily, all available in HD and 4K resolution.",
    images: [
      {
        url: "https://wallify.lab-x.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "wallify",
      },
      {
        url: "https://wallify.lab-x.xyz/og.png",
        width: 600,
        height: 600,
        alt: "wallify",
      },
    ],

    locale: "en_US",
    emails: ["contact@lab-x.com"],
  },

  twitter: {
    card: "summary",
    title: "wallify: Wallpapers Collection | Free Download",
    description:
      "Discover and download high-quality wallpapers for your desktop and mobile devices. New wallpapers added daily.",
    creator: "@shashivadan",
    site: "shashivadan.xyz",
    images: ["https://wallify.lab-x.xyz/og.png"],
  },

  applicationName: "wallify",
  appleWebApp: {
    capable: true,
    title: "wallify",
    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: [{ url: "https://wallify.lab-x.xyz/icon.png", type: "image/png" }],
    apple: [{ url: "https://wallify.lab-x.xyz/icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
