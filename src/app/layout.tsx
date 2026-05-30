import type { Metadata } from "next";
import Script from "next/script";
 import "./globals.css";

export const metadata: Metadata = {
  title: "Rino Labs — Web developer & product creator",
  description:
    "Rino Labs — portfolio of Natalia Barinova, a full-stack web developer building production planners, language learning platforms, and complex SaaS systems from idea to production.",
  openGraph: {
    type: "website",
    title: "Rino Labs — Web developer & product creator",
    description:
      "Portfolio of Natalia Barinova, full-stack web developer specialising in complex SaaS apps, production planning tools and language platforms.",
    url: "https://rinolabs.example",
    images: [
      {
        url: "https://rinolabs.example/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rino Labs — portfolio of Natalia Barinova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rino Labs — Web developer & product creator",
    description:
      "Full-stack web development, production planning SaaS and language learning platforms by Natalia Barinova.",
    images: ["https://rinolabs.example/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "#rino-labs",
    name: "Rino Labs",
    url: "https://rinolabs.example",
    brand: "Rino Labs",
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natalia Barinova",
    jobTitle: "Full-stack web developer",
    url: "https://rinolabs.example",
    worksFor: { "@id": "#rino-labs" },
    sameAs: [
      "https://github.com/rinolabs-placeholder",
      "https://www.linkedin.com/in/rinolabs-placeholder",
      "https://t.me/rinolabs_placeholder",
    ],
  };

  return (
    <html lang="en" data-theme="light">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Analytics placeholder */}
        <Script
          defer
          data-domain="rinolabs.example"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
       
        <Script
          id="jsonld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(personJsonLd)}
        </Script>
      </head>
      <body>
        <div className="appRoot">{children}</div>
      </body>
    </html>
  );
}
