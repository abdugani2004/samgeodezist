import Image from "next/image";
import Link from "next/link";
import {
  companyAddress,
  companyEmail,
  companyName,
  phoneNumbers,
  services,
  workingHours,
} from "@/data/site";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-20" />
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute left-0 top-28 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="navy-hero-spotlight absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_46%)] opacity-0 transition duration-500" />

      <Container>
        <div className="panel gold-ring relative overflow-hidden rounded-[38px] border border-white/10 bg-brand-navy text-white">
          <Image
            src="/images/showcase-field.svg"
            alt={companyName}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,34,0.92)_0%,rgba(8,27,58,0.78)_22%,rgba(7,26,58,0.55)_48%,rgba(4,15,33,0.86)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,209,102,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.2),transparent_20%)]" />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3 border-b border-white/10 pb-4 text-sm text-slate-100 lg:grid-cols-[1.2fr_0.9fr_1fr_auto] lg:items-center lg:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                  Geodeziya xizmati
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{companyName}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Telefon</p>
                <p className="font-semibold text-white">{phoneNumbers[0]}</p>
                <p className="font-semibold text-white/85">{phoneNumbers[1]}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Aloqa</p>
                <p className="font-semibold text-white">{companyEmail}</p>
                <p className="text-white/85">{workingHours}</p>
              </div>

              <Link
                href="/aloqa#buyurtma"
                className="inline-flex items-center justify-center rounded-[20px] bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Onlayn buyurtma
              </Link>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/xizmatlar#${service.slug}`}
                  className="rounded-[22px] border border-white/12 bg-brand-blue/75 px-4 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-blue"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <div className="relative">
                <p className="hero-chip hero-chip-accent inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-5 py-3 text-base font-semibold text-brand-gold sm:text-lg">
                  O&#39;zbekiston bo&#39;ylab geodeziya va topografiya xizmatlari
                </p>

                <h1 className="mt-5 max-w-[11ch] text-4xl font-bold leading-[0.98] text-white sm:text-5xl lg:text-[5rem]">
                  Geodeziya ishlari uchun kuchli texnik jamoa
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                  Samarqand va boshqa hududlarda yer o&#39;lchash, topoplan, geologiya,
                  loyihalash va texnik hujjatlar bo&#39;yicha aniq hamda tezkor xizmat
                  ko&#39;rsatamiz.
                </p>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <Link href="/aloqa#buyurtma" className="btn-primary">
                    Buyurtma berish
                    <ArrowUpRightIcon />
                  </Link>
                  <Link href="/bizning-ishlar" className="btn-secondary">
                    Bizning ishlar
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                      Manzil
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      {companyAddress}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                      Uskuna
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      Geodezik uskuna va elektron taxeometr
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                      Natija
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      Aniqlik, tezkor chiqish va tayyor hujjatlar
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-8 hidden h-32 w-32 rounded-full bg-brand-gold/20 blur-3xl lg:block" />
                <div className="absolute right-4 top-20 hidden h-36 w-36 rounded-full bg-brand-sky/30 blur-3xl lg:block" />
                <div className="absolute bottom-10 left-10 hidden h-28 w-28 rounded-full bg-white/20 blur-3xl lg:block" />

                <div className="relative mx-auto max-w-[34rem]">
                  <div className="absolute inset-x-[14%] top-6 hidden h-10 rounded-full bg-black/30 blur-2xl lg:block" />
                  <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/8 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                    <div className="relative overflow-hidden rounded-[28px]">
                      <Image
                        src="/images/works/work-10.jpg"
                        alt="Geodeziya ishlari"
                        width={860}
                        height={980}
                        className="h-[420px] w-full object-cover object-center sm:h-[520px]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(3,9,20,0.72)_100%)]" />

                      <div className="absolute left-4 right-4 top-8 flex items-start justify-between gap-4 sm:top-10">
                        <div className="rounded-[20px] border border-white/20 bg-brand-navy/65 px-4 py-3 backdrop-blur">
                          <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">
                            Bizning jamoa
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Real obyektlardagi amaliy ishlar
                          </p>
                        </div>

                        <div className="rounded-[20px] border border-white/20 bg-white/12 px-4 py-3 text-right backdrop-blur">
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                            Hudud
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Samarqand va viloyatlar
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[22px] border border-white/15 bg-brand-blue/70 px-4 py-4 backdrop-blur">
                          <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">
                            Maydon ishlari
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Obyektga chiqib o&#39;lchov, belgilash va nazorat ishlari
                          </p>
                        </div>

                        <div className="rounded-[22px] border border-white/15 bg-black/35 px-4 py-4 backdrop-blur">
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                            Hujjatlar
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            Topoplan, koordinata va texnik materiallar tayyorlanadi
                          </p>
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
