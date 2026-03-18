import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Services } from "@/components/sections/Services";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Xizmatlar",
  description: "SAMGEODEZIST MCHJ xizmatlari ro'yxati va asosiy yo'nalishlari.",
  alternates: {
    canonical: "/xizmatlar",
  },
  openGraph: {
    title: `${companyName} xizmatlari`,
    description: "Geodeziya, topografiya, geologiya va boshqa xizmatlar sahifasi.",
    url: `${siteUrl}/xizmatlar`,
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Services />
      </main>
      <Footer />
    </PageShell>
  );
}
