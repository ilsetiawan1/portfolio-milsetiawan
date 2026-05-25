import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="id" className="dark" suppressHydrationWarning>
      <head>
        {/* PWA Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        {/* Anti-flash theme init script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.className = stored;
                  } else {
                    document.documentElement.className = 'dark';
                  }
                } catch (_) {}
              })()
            `,
          }}
        />
      </head>
      <body className="antialiased bg-bg-primary text-text-primary">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}