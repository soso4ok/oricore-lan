import type { Metadata } from "next";
import { Inter, Space_Grotesk, Blinker } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const blinker = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apolast.com"),
  title: "Apolast — Legacy Modernization Platform",
  description:
    "Map, extract, and modernize legacy codebases with deterministic AST analysis. On-premise deployment, DORA-compliant, zero hallucination.",
  keywords: [
    "enterprise legacy modernization",
    "automated reverse engineering",
    "AST logic extraction",
    "COBOL to Java migration",
    "DORA compliance",
    "NIS2 compliance",
    "on-premise SLM",
    "air-gapped code analysis",
    "business logic extraction",
    "legacy code modernization platform",
    "characterization tests",
    "Gherkin scenarios",
    "SBOM generation",
    "technical debt reduction",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Apolast — Legacy Modernization Platform",
    description:
      "Deterministic AST-based legacy code analysis. On-premise, DORA-compliant, zero hallucination.",
    url: "https://www.apolast.com",
    siteName: "Apolast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apolast Legacy Modernization Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apolast — Legacy Modernization Platform",
    description:
      "Deterministic AST-based legacy code analysis. On-premise, DORA-compliant, zero hallucination.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.apolast.com/#organization",
      name: "Apolast",
      url: "https://www.apolast.com",
      logo: "https://www.apolast.com/logo.svg",
      description:
        "Enterprise legacy modernization platform using continuous AST-based logic extraction.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.apolast.com/#software",
      name: "Apolast Platform",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "On-Premise, Linux, Windows",
      description:
        "Maps, extracts, and modernizes legacy codebases continuously using AST-based logic extraction with on-premise SLMs.",
      url: "https://www.apolast.com",
      publisher: {
        "@id": "https://www.apolast.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${blinker.variable}`}
    >
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-LFYKTHJ825`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });

            gtag('js', new Date());
            gtag('config', 'G-LFYKTHJ825');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
