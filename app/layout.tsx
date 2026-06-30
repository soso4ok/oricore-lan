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
  title: "Oricore Systems — Legacy Code Archaeology",
  description:
    "We don't write your code. Our agents dive into undocumented legacy systems, extract the business logic, and output structured Jira tasks and Gherkin tests.",
  keywords: [
    "legacy code analysis",
    "COBOL migration",
    "code archaeology",
    "business logic extraction",
    "Jira generation",
    "Gherkin tests",
    "enterprise",
    "digital archaeology",
  ],
  openGraph: {
    title: "Oricore Systems — Legacy Code Archaeology",
    description:
      "Agents that extract blueprints from legacy spaghetti code. Structured output.",
    type: "website",
  },
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
      <body>{children}</body>
    </html>
  );
}
