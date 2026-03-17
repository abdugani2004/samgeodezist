import { advantages } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section id="afzalliklar" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Afzalliklar"
          title="Nima uchun mijozlar bizni tanlaydi"
          description="Har bir loyiha texnik aniqlik, muddat va mijoz bilan ochiq aloqa asosida olib boriladi."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => (
            <article key={item.title} className="panel rounded-[24px] p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-lg font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
