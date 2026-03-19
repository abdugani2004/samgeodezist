import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Bosh sahifa",
  description:
    "SAMGEODEZIST MCHJ Samarqand bo'ylab geodeziya, muhandislik geologiyasi, marksheyderiya va loyihalash xizmatlarini taqdim etadi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${companyName} - professional geodeziya xizmatlari`,
    description:
      "Yer uchastkalarini o'lchash, muhandislik geologiyasi va loyihalash xizmatlari.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/images/showcase-field.svg`,
        width: 1200,
        height: 900,
        alt: companyName,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Hero />
        <Stats />
      </main>
      <Footer />
    </PageShell>
  );
}
