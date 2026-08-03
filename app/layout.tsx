import type { Metadata } from "next";
import { Inter, Space_Grotesk, Blinker } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
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
    "Map, model, and modernize legacy systems with deterministic operational intelligence. On-premise deployment, DORA-compliant, zero hallucination.",
  keywords: [
    "enterprise legacy modernization",
    "automated reverse engineering",
    "Operational context modeling",
    "COBOL to Java migration",
    "DORA compliance",
    "NIS2 compliance",
    "on-premise SLM",
    "air-gapped code analysis",
    "system graph mapping",
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
      "Deterministic on-premise operational intelligence. On-premise, DORA-compliant, zero hallucination.",
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
      "Deterministic on-premise operational intelligence. On-premise, DORA-compliant, zero hallucination.",
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
        "Enterprise legacy modernization platform using continuous operational context mapping.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.apolast.com/#software",
      name: "Apolast Platform",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "On-Premise, Linux, Windows",
      description:
        "Maps, models, and modernizes legacy systems continuously using continuous operational mapping with on-premise SLMs.",
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
      <head>
        {/* 1. Consent defaults — must fire before any Google tag */}
        <Script
          id="consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

var consent = "denied";
try {
  if (localStorage.getItem("apolast_cookie_consent") === "granted") {
    consent = "granted";
  }
} catch(e) {}

gtag('consent', 'default', {
  'ad_storage': consent,
  'ad_user_data': consent,
  'ad_personalization': consent,
  'analytics_storage': consent,
  'wait_for_update': 500
});

gtag('set', 'ads_data_redaction', true);
`,
          }}
        />
      </head>
      <body className="grain-overlay">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMKM83XF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
        <Script
          id="analytics-bootstrap"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
var ga = document.createElement('script');
ga.async = true;
ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-LFYKTHJ825';
document.head.appendChild(ga);
gtag('js', new Date());
gtag('config', 'G-LFYKTHJ825');
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MMKM83XF');
`,
          }}
        />
      </body>
    </html>
  );
}
