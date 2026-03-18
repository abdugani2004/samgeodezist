import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { MapSection } from "@/components/sections/MapSection";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Aloqa",
  description: "SAMGEODEZIST MCHJ bilan bog'lanish, buyurtma qoldirish va joylashuv sahifasi.",
  alternates: {
    canonical: "/aloqa",
  },
  openGraph: {
    title: `${companyName} aloqa`,
    description: "Buyurtma, aloqa va xarita sahifasi.",
    url: `${siteUrl}/aloqa`,
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <ContactForm />
        <ContactInfo />
        <MapSection />
      </main>
      <Footer />
    </PageShell>
  );
}
