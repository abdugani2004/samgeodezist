import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { BackLink } from "@/components/ui/BackLink";
import { AdminWorksManager } from "@/components/admin/AdminWorksManager";
import { companyName, siteUrl } from "@/data/site";
import { getRawWorksFromSupabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Admin",
  description: "Bizning ishlar bo'limini boshqarish uchun admin sahifa.",
  alternates: {
    canonical: "/admin",
  },
  openGraph: {
    title: `${companyName} admin`,
    description: "Bizning ishlar bo'limini boshqarish sahifasi.",
    url: `${siteUrl}/admin`,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const works = await getRawWorksFromSupabase();

  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pt-12">
        <Container>
          <BackLink href="/" />
          <div className="mt-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Admin panel
              </p>
              <h1 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                Bizning ishlar bo&#39;limini boshqaring
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bu sahifadan yangi rasm yuklash, description qo&#39;shish va mavjud
                yozuvlarni o&#39;chirish mumkin.
              </p>
            </div>

            <div className="mt-8">
              <AdminWorksManager initialWorks={works} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </PageShell>
  );
}
