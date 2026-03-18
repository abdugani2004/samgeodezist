import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { NewsSection } from "@/components/sections/NewsSection";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { companyName, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Postlar",
  description: "SAMGEODEZIST MCHJ postlari va foydali maqolalari.",
  alternates: {
    canonical: "/postlar",
  },
  openGraph: {
    title: `${companyName} postlari`,
    description: "Geodeziya va topografiya bo'yicha foydali postlar.",
    url: `${siteUrl}/postlar`,
  },
};

export default function PostsPage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Container>
          <BackLink href="/" />
        </Container>
        <NewsSection />
      </main>
      <Footer />
    </PageShell>
  );
}
