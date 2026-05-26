import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Muhammad Ilham Setiawan | Full-Stack Web Developer",
  description:
    "Portfolio Muhammad Ilham Setiawan — Full-Stack Web Developer yang membangun aplikasi web modern dengan Next.js, React, Laravel, dan Supabase.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Laravel",
    "Supabase",
    "Muhammad Ilham Setiawan",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Ilham Setiawan" }],
  creator: "Muhammad Ilham Setiawan",
  metadataBase: new URL("https://milsetiawan.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://milsetiawan.vercel.app",
    title: "Muhammad Ilham Setiawan | Full-Stack Web Developer",
    description:
      "Portfolio Muhammad Ilham Setiawan — Full-Stack Web Developer yang membangun aplikasi web modern dengan Next.js, React, Laravel, dan Supabase.",
    siteName: "Muhammad Ilham Setiawan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ilham Setiawan — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ilham Setiawan | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer yang membangun aplikasi web modern dengan Next.js, React, Laravel, dan Supabase.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/lam-favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/lam-favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/lam-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/lam-favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MIS Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#18181b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark notranslate" translate="no" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('theme');if(s==='light'||s==='dark'){document.documentElement.className=s;}else{document.documentElement.className='dark';}}catch(_){}})();`,
          }}
        />
      </head>
      <body className="antialiased bg-bg-primary text-text-primary">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}