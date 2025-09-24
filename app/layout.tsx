import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ivy Creatives | Web, Media & Design Solutions",
    description:
      "Ivy Creatives helps businesses grow online with professional websites, social media management, and content creation tailored for modern brands.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Ivy Creatives | Web, Media & Design Solutions",
    description:
      "Grow your brand with Ivy Creatives. We build stunning websites, manage your social media, and create content that connects.",
    url: "https://ivy-creatives.vercel.app",
    siteName: "Ivy Creatives",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ivy Creatives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy Creatives | Web, Media & Design Solutions",
    description:
      "We help businesses scale with creative websites, engaging content, and smart media solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
