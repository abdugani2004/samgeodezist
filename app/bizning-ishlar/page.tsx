import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Showcase } from "@/components/sections/Showcase";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { companyName, showcaseItems, siteUrl } from "@/data/site";
import { getWorksFromSupabase } from "@/lib/supabase";

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

export const dynamic = "force-dynamic";

export default async function WorksPage() {
  const remoteWorks = await getWorksFromSupabase();
  const works = remoteWorks.length > 0 ? remoteWorks : showcaseItems;

  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Container>
          <BackLink href="/" />
        </Container>
        <Showcase items={works} />
      </main>
      <Footer />
    </PageShell>
  );
}
