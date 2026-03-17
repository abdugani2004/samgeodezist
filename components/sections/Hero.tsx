import Image from "next/image";
import Link from "next/link";
import { companyName, phoneNumbers } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-30" />
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute left-0 top-28 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="navy-hero-spotlight absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_46%)] opacity-0 transition duration-500" />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="relative">
            <p className="hero-chip hero-chip-accent inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-semibold text-brand-navy">
              Samarqand bo&#39;yicha geodeziya xizmati
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] text-brand-navy sm:text-5xl lg:max-w-2xl lg:text-[4.2rem]">
              Samarqand bo&#39;ylab professional geodeziya xizmatlari
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Yer uchastkalarini o&#39;lchash, topografik plan tayyorlash, geologiya va
              loyihalash xizmatlari.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Aniq o'lchov",
                "Tezkor chiqish",
                "Texnik hujjatlar",
              ].map((item) => (
                <span
                  key={item}
                  className="hero-chip rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_10px_24px_rgba(11,58,110,0.06)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link href="#buyurtma" className="btn-primary">
                Buyurtma berish
                <ArrowUpRightIcon />
              </Link>
              <Link href="#aloqa" className="btn-secondary">
                Bog&#39;lanish
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="panel surface-highlight p-5 hover:-translate-y-1">
                <p className="text-sm text-slate-500">Kompaniya</p>
                <p className="mt-2 font-semibold text-brand-navy">{companyName}</p>
              </div>
              <div className="panel surface-highlight p-5 hover:-translate-y-1">
                <p className="text-sm text-slate-500">Asosiy aloqa</p>
                <p className="mt-2 font-semibold text-brand-navy">{phoneNumbers[0]}</p>
              </div>
              <div className="panel surface-highlight p-5 hover:-translate-y-1">
                <p className="text-sm text-slate-500">Yo&#39;nalishlar</p>
                <p className="mt-2 font-semibold text-brand-navy">Geodeziya va topografiya</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-brand-gold/20 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-16 hidden h-28 w-28 rounded-full bg-white/40 blur-2xl lg:block" />
            <div className="panel gold-ring relative overflow-hidden p-4 sm:p-5">
              <div className="relative rounded-[28px] bg-gradient-to-br from-brand-navy via-brand-blue to-[#1f7fcc] p-4 text-white sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,35,0.28),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4 rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-brand-gold sm:text-sm">
                        Korxona egasi
                      </p>
                      <p className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
                        UROKOV OLIM
                      </p>
                    </div>
                  </div>

                  <div className="grid items-stretch gap-4 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="overflow-hidden rounded-[24px] border border-white/15 bg-slate-950/20">
                      <div className="relative aspect-[4/4.4] w-full sm:aspect-[4/4.8] md:h-full md:min-h-[320px] md:aspect-auto">
                        <Image
                          src="/images/owner-abdugani.jpg"
                          alt="UROKOV OLIM"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 420px"
                          priority
                        />
                      </div>
                    </div>

                    <div className="flex h-full flex-col justify-between gap-4">
                      <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-blue-100 sm:text-sm">
                          Minimal ma&#39;lumot
                        </p>
                        <p className="mt-3 text-base leading-7 text-blue-50 sm:text-lg">
                          Korxona egasi. So&#39;nggi 5 yildan beri jamoani boshqarib, buyurtmalarni
                          aniq va ishonchli tarzda olib bormoqda.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-5">
                          <p className="text-sm text-blue-100">Lavozimi</p>
                          <p className="mt-2 text-base font-semibold sm:text-lg">Korxona egasi</p>
                        </div>
                        <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-5">
                          <p className="text-sm text-blue-100">Tajriba</p>
                          <p className="mt-2 text-base font-semibold sm:text-lg">5 yil</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
