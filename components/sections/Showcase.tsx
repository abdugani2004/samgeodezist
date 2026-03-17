import Image from "next/image";
import { showcaseItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Showcase() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute right-0 top-16 h-44 w-44 rounded-full bg-brand-blue/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Vizual"
          title="Ish jarayonining zamonaviy ko'rinishi"
          description="Maydon, texnik tahlil va loyiha tayyorlash bosqichlari yagona tizim asosida bajariladi."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <article
              key={item.title}
              className="panel surface-highlight overflow-hidden rounded-[24px] hover:-translate-y-1 hover:border-brand-gold/30"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-brand-navy sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
