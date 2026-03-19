import type { Metadata } from "next";
import {
  companyAddress,
  companyEmail,
  companyName,
  phoneNumbers,
  services,
  siteUrl,
  workingHours,
} from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAMGEODEZIST MCHJ",
    template: "%s | SAMGEODEZIST MCHJ",
  },
  description:
    "Samarqand bo'ylab professional geodeziya, muhandislik geologiyasi va loyihalash xizmatlari.",
  keywords: [
    "geodeziya Samarqand",
    "muhandislik geologiyasi Samarqand",
    "geologiya xizmati",
    "marksheyderiya",
    "loyihalash xizmatlari",
    "yer uchastkasini o'lchash",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: companyName,
    title: companyName,
    description:
      "Samarqand bo'ylab professional geodeziya, muhandislik geologiyasi va loyihalash xizmatlari.",
    locale: "uz_UZ",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyName,
  image: `${siteUrl}/images/showcase-field.svg`,
  url: siteUrl,
  email: companyEmail,
  telephone: phoneNumbers,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Samarqand",
    addressCountry: "UZ",
    streetAddress: companyAddress,
  },
  openingHours: workingHours,
  areaServed: {
    "@type": "City",
    name: "Samarqand",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.detailDescription,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    try {
      const theme = localStorage.getItem('samgeodezist-theme');
      document.body.dataset.theme = theme === 'navy' ? 'navy' : 'default';
    } catch (e) {
      document.body.dataset.theme = 'default';
    }
  `;

  return (
    <html lang="uz">
      <body data-theme="default" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
