import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Hero } from "@/components/sections/Hero";
import { MapSection } from "@/components/sections/MapSection";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Bosh sahifa",
  description:
    "SAMGEODEZIST MCHJ Samarqand bo'ylab geodeziya, topografiya, geologiya, marksheyderiya va loyihalash xizmatlarini taqdim etadi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${companyName} - professional geodeziya xizmatlari`,
    description:
      "Yer uchastkalarini o'lchash, topografik plan tayyorlash, geologiya va loyihalash xizmatlari.",
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
    <div className="bg-white text-brand-ink">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Showcase />
        <ContactForm />
        <ContactInfo />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
