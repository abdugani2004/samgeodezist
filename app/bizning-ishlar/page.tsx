import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Showcase } from "@/components/sections/Showcase";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Bizning ishlar",
  description: "SAMGEODEZIST MCHJ bajarilgan ishlar va obyektlardan amaliy lavhalar.",
  alternates: {
    canonical: "/bizning-ishlar",
  },
  openGraph: {
    title: `${companyName} - bizning ishlar`,
    description: "Geodeziya va topografiya bo'yicha bajarilgan ishlar sahifasi.",
    url: `${siteUrl}/bizning-ishlar`,
  },
};

export default function WorksPage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Showcase />
      </main>
      <Footer />
    </PageShell>
  );
}
