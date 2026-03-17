import Link from "next/link";
import { companyName } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="biz-haqimizda" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="panel overflow-hidden rounded-[28px]">
            <div className="h-full bg-gradient-to-br from-brand-sand via-white to-brand-sky p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Biz haqimizda
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Aniq o'lchov",
                  "Texnik yondashuv",
                  "Zamonaviy metodlar",
                  "Ishonchli natija",
                ].map((item) => (
                  <div key={item} className="rounded-[24px] bg-white p-4 shadow-sm sm:p-5">
                    <p className="font-semibold text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <SectionHeading
                eyebrow="Kompaniya"
                title={`${companyName} haqida`}
                description="Samarqandda geodeziya, topografiya, geologiya va loyihalash xizmatlarini aniq o'lchov hamda tartibli hujjatlar asosida taqdim etamiz."
              />
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Zamonaviy uskunalar va amaliy tajriba yordamida yer uchastkalari, bino-inshootlar
                hamda qurilish maydonlari uchun ishonchli natija beramiz.
              </p>
              <div className="mt-6">
                <Link href="/biz-haqimizda" className="btn-secondary">
                  Batafsil o&#39;qish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
