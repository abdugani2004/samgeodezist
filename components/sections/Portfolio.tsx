import Image from "next/image";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
  return (
    <section id="loyihalar" className="relative py-16 sm:py-20">
      <div className="absolute right-0 top-12 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Loyihalar"
          title="Bajariladigan ish turlari namunalari"
          description="Asosiy loyiha yo'nalishlari va topshiriladigan natijalar shu bloklarda qisqacha ko'rsatilgan."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="panel surface-highlight overflow-hidden rounded-[24px] hover:-translate-y-1 hover:border-brand-gold/30"
            >
              <div
                className={`relative h-56 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#0b3a6e,#1a76ba)]"
                    : index === 1
                      ? "bg-[linear-gradient(135deg,#154f85,#d9a423)]"
                      : "bg-[linear-gradient(135deg,#173a57,#2a9bd8)]"
                } p-6 text-white`}
              >
                <Image src={project.image} alt={project.title} fill className="object-cover mix-blend-overlay opacity-70" />
                <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-max rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                      {project.tag}
                    </span>
                    <span className="rounded-full border border-white/15 bg-slate-950/20 px-3 py-1 text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div className="grid gap-3">
                    <div className="grid grid-cols-6 gap-1">
                      {Array.from({ length: 18 }).map((_, tileIndex) => (
                        <span
                          key={tileIndex}
                          className={`h-4 rounded-sm ${
                            tileIndex % 4 === 0 ? "bg-brand-gold/90" : "bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-3 text-sm text-blue-50">
                      Natija: {project.result}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-brand-navy sm:text-xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    Topshiriladigan natija
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.deliverable}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
