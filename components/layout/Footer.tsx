"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyName, contactChannels, services } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const resolveHref = (href: string) => (href.startsWith("#") && !isHomePage ? `/${href}` : href);

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-brand-navy text-white">
      <div className="navy-footer-shell absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,164,35,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <Container>
        <div className="relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
              SAMARQAND
            </p>
            <h3 className="mt-3 text-2xl font-bold">{companyName}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Yer uchastkalari, qurilish obyektlari va loyihalar uchun professional geodeziya,
              topografiya va muhandislik xizmatlari.
            </p>
            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Tezkor murojaat
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Buyurtma, maslahat yoki obyekt bo&#39;yicha savollar uchun biz bilan darhol bog&#39;laning.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={resolveHref("#buyurtma")}
                  className="inline-flex items-center rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Buyurtma qoldirish
                </Link>
                <Link
                  href="tel:+998979191183"
                  className="inline-flex items-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-brand-gold hover:bg-white/10"
                >
                  Qo&#39;ng&#39;iroq qilish
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Xizmatlar</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={resolveHref("#xizmatlar")} className="transition duration-300 hover:pl-1 hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Aloqa</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  {channel.href ? (
                    <Link href={channel.href} className="transition duration-300 hover:text-white">
                      {channel.value}
                    </Link>
                  ) : (
                    channel.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/10 py-5 text-sm text-slate-400">
          {new Date().getFullYear()} {companyName}. Barcha huquqlar himoyalangan.
        </div>
      </Container>
    </footer>
  );
}
