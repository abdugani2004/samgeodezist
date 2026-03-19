import Image from "next/image";
import { showcaseItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ShowcaseItem } from "@/types";

type ShowcaseProps = {
  items?: ShowcaseItem[];
};

export function Showcase({ items = showcaseItems }: ShowcaseProps) {
  return (
    <section id="bizning-ishlar" className="relative py-16 sm:py-20">
      <div className="absolute right-0 top-16 h-44 w-44 rounded-full bg-brand-blue/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Bizning ishlar"
          title="Maydon va obyektlardan ish jarayoni"
          description="Amaliy ishlarimizdan namunalar, jarayon lavhalari va texnik ish bosqichlari shu bo'limda ko'rsatilgan."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.title}-${item.image}`}
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
                <p className="text-sm leading-6 text-slate-600 sm:text-base">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
