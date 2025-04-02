import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/navigation/MainNav";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";
import MobileOptimizations from '@/components/utils/MobileOptimizations';
import JsonLd from './JsonLd';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RN Student Resources | Nursing Education & Study Materials",
  description: "Join over 50,000+ nursing students who've achieved their goals with our comprehensive study materials and practice tests",
  keywords: "nursing education, NCLEX, nursing resources, med-surg, critical care, nursing exams, RN, student resources",
  authors: [{ name: "RN Student Resources" }],
  creator: "RN Student Resources",
  publisher: "RN Student Resources",
  applicationName: "RN Student Resources",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RN Student Resources | Nursing Education & Study Materials",
    description: "Join over 50,000+ nursing students who've achieved their goals with our comprehensive study materials and practice tests",
    url: "https://yourdomain.com",
    siteName: "RN Student Resources",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nursing Education Platform - The #1 resource for nursing students",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RN Student Resources | Nursing Education & Study Materials",
    description: "Join over 50,000+ nursing students who've achieved their goals with our comprehensive study materials and practice tests",
    images: ["/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2c51" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1e2c51" },
    ],
  },
  appleWebApp: {
    title: "RN Student Resources",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={cn(inter.className, "min-h-screen")}>
        <MobileOptimizations />
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
