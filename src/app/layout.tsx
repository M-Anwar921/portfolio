import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — AI Engineer & Full Stack Developer`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Muhammad Anwar",
    "AI Engineer",
    "Machine Learning Developer",
    "Full Stack Developer",
    "Generative AI",
    "LLM Engineer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — AI Engineer & Full Stack Developer`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI Engineer & Full Stack Developer`,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Anwar",
  url: siteConfig.url,
  jobTitle: "AI Engineer",
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Management & Technology (UMT)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
