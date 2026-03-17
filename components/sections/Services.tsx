import Link from "next/link";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { DraftIcon, LayersIcon, MapIcon, MountainIcon, TargetIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  map: MapIcon,
  target: TargetIcon,
  layers: LayersIcon,
  mountain: MountainIcon,
  draft: DraftIcon,
};

export function Services() {
  return (
    <section id="xizmatlar" className="relative py-16 sm:py-20">
      <div className="absolute left-0 top-20 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Xizmatlar"
          title="Muhandislik va yer o'lchov ishlari uchun to'liq xizmatlar"
          description="Loyiha boshlanishidan topshirilishigacha bo'lgan jarayon uchun zarur geodezik va topografik xizmatlarni taklif qilamiz."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <Link
                key={service.title}
                href={`/xizmatlar/${service.slug}`}
                className="panel surface-highlight group flex h-full flex-col rounded-[24px] p-5 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_24px_50px_rgba(11,58,110,0.14)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon />
                  <span className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    {service.metric}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 transition duration-300 group-hover:bg-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    Natija
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.outcome}</p>
                </div>
                <div className="mt-5 h-1.5 w-14 rounded-full bg-brand-gold/70 transition duration-300 group-hover:w-24 group-hover:bg-brand-blue" />
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition duration-300 group-hover:translate-x-1">
                  Batafsil yondashuv
                  <span aria-hidden="true">+</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
