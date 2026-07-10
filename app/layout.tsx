import type { Metadata } from "next";
import { Inter, Space_Grotesk, Blinker } from "next/font/google";
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
  metadataBase: new URL("https://oricore.com"),
  title:
    "Oricore — Enterprise Legacy Modernization Platform | AST Logic Extraction & DORA Compliance",
  description:
    "Map, extract, and modernize legacy codebases continuously. Oricore uses AST-based business logic extraction with on-premise SLMs to deliver PR-ready specifications, characterization tests, and DORA-compliant audit trails — without hallucinating code.",
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
  openGraph: {
    title: "Oricore — Enterprise Legacy Modernization Platform",
    description:
      "Continuous AST-based legacy code analysis. On-premise SLMs, DORA-compliant, zero hallucination. Map, extract, modernize.",
    url: "https://oricore.com",
    siteName: "Oricore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oricore Enterprise Legacy Modernization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oricore — Enterprise Legacy Modernization Platform",
    description:
      "Continuous AST-based legacy code analysis. On-premise SLMs, DORA-compliant, zero hallucination. Map, extract, modernize.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://oricore.com/#organization",
      name: "Oricore",
      url: "https://oricore.com",
      logo: "https://oricore.com/logo.svg",
      description:
        "Enterprise legacy modernization platform using continuous AST-based logic extraction.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://oricore.com/#software",
      name: "Oricore Platform",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "On-Premise, Linux, Windows",
      description:
        "Maps, extracts, and modernizes legacy codebases continuously using AST-based logic extraction with on-premise SLMs.",
      url: "https://oricore.com",
      publisher: {
        "@id": "https://oricore.com/#organization",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
