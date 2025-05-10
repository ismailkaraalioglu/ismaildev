import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Divider from "@/components/divider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "İsmail Karaalioğlu",
    template: "İsmail Karaalioğlu | %s",
  },
  description: "Software developer and creator.",
  metadataBase: new URL("https://ismaildev.com"),
  authors: [{ name: "İsmail Karaalioğlu", url: "https://ismaildev.com" }],
  keywords: [
    "frontend developer",
    "mobile developer",
    "react developer",
    "react native developer",
    "frontend",
    "mobile",
    "react",
    "nextjs",
    "react native",
    "expo",
    "swiftui",
    "typescript",
    "javascript",
  ],
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
  alternates: {
    canonical: "https://ismaildev.com",
  },
  // appleWebApp: {
  //   title: "ismaildev.com",
  // },
  // openGraph: {
  //   title: "İsmail Karaalioğlu",
  //   description: "Software developer and creator.",
  //   url: "https://ismaildev.com",
  //   siteName: "İsmail Karaalioğlu",
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   title: "İsmail Karaalioğlu",
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex max-w-4xl flex-row">
            <Divider />
            <main className="flex flex-1 flex-col">
              <Header />
              {children}
              <Footer />
            </main>
            <Divider />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
