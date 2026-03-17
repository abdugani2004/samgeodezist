import { stats, trustItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Stats() {
  return (
    <section className="relative pb-16 sm:pb-20">
      <div className="absolute left-0 top-10 h-44 w-44 rounded-full bg-brand-blue/10 blur-3xl" />
      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="panel surface-highlight rounded-[28px] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[24px] border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-white sm:p-5"
                >
                  <p className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-3xl font-bold text-transparent">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-brand-navy">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel rounded-[28px] bg-brand-navy p-5 text-white sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Ishonch omillari
            </p>
            <div className="mt-5 space-y-4">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-brand-gold/40 hover:bg-white/10 sm:p-5"
                >
                  <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
