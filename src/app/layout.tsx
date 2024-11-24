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
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "HD Wallpapers Collection | Free Download",
    template: "%s | Your Wallpaper App",
  },
  description:
    "Discover and download high-quality wallpapers for your desktop and mobile devices. New wallpapers added daily, all available in HD and 4K resolution.",
  keywords: [
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
  category: "Photography",
  openGraph: {
    type: "website",
    siteName: "wallify",
    title: " wallify :  Wallpapers Collection | Free Download",
    description:
      "Discover and download high-quality wallpapers for your desktop and mobile devices. New wallpapers added daily, all available in HD and 4K resolution.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "wallify",
      },
      {
        url: "/og.png",
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
    images: ["/og.png"],
  },

  applicationName: "wallify",
  appleWebApp: {
    capable: true,
    title: "wallify",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: [{ url: "/icon.png" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
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
        <ThemeProvider attribute="class">
          <RootProvider>
            <main className="">{children}</main>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
