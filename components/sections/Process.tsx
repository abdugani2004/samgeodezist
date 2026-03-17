import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Jarayon"
          title="Buyurtma qanday bajariladi"
          description="Jarayon sodda, aniq va oldindan tushunarli bosqichlar asosida tashkil qilinadi."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="panel surface-highlight rounded-[24px] p-5 hover:-translate-y-1 hover:border-brand-gold/30 sm:p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-lg font-bold text-brand-navy shadow-[0_12px_24px_rgba(217,164,35,0.25)]">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-gold to-brand-blue" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
