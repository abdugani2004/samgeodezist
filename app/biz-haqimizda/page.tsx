import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import {
  companyAddress,
  companyEmail,
  companyName,
  phoneNumbers,
  siteUrl,
  workingHours,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "SAMGEODEZIST MCHJ haqida batafsil ma'lumot, faoliyat yo'nalishlari va aloqa ma'lumotlari.",
  alternates: {
    canonical: "/biz-haqimizda",
  },
  openGraph: {
    title: `${companyName} haqida`,
    description:
      "Kompaniya tarixi, xizmat yo'nalishlari va Samarqanddagi faoliyati haqida batafsil ma'lumot.",
    url: `${siteUrl}/biz-haqimizda`,
  },
};

const companyFacts = [
  {
    label: "Tashkil topgan yil",
    value: "2017",
  },
  {
    label: "Hudud",
    value: "Samarqand",
  },
  {
    label: "Asosiy yo'nalishlar",
    value: "Geodeziya, topografiya, geologiya, loyihalash",
  },
];

const strengths = [
  "Yer uchastkalari va qurilish obyektlari uchun aniq o'lchov ishlari olib boriladi.",
  "Topografik plan, texnik hujjat va loyiha materiallari tartibli tayyorlanadi.",
  "Buyurtmalar bo'yicha tezkor aloqa va amaliy yechim taklif qilinadi.",
];

const tenderWins = [
  {
    date: "14.03.2024",
    title: "Nurobod tumanidagi qishloq xojaligiga moljallanmagan yer uchastkalarida toposyomka ishlari",
    customer: "Davlat aktivlarini boshqarish agentligi Samarqand viloyat hududiy boshqarmasi",
    amount: "291 006 000 UZS",
  },
  {
    date: "20.02.2024",
    title: "Ishtixon tumanidagi qishloq xojaligiga moljallanmagan yer uchastkalarida toposyomka ishlari",
    customer: "Davlat aktivlarini boshqarish agentligi Samarqand viloyat hududiy boshqarmasi",
    amount: "292 604 000 UZS",
  },
  {
    date: "14.11.2023",
    title: "Oqdaryo tumanidagi bosh yer uchastkalarida toposyomka ishlarini bajarish",
    customer: "Davlat aktivlarini boshqarish agentligi Samarqand viloyat hududiy boshqarmasi",
    amount: "112 464 000 UZS",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main className="pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pt-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition duration-300 hover:border-brand-gold hover:text-brand-blue"
            >
              <ArrowLeftIcon />
              Orqaga qaytish
            </Link>

            <section className="mt-6 overflow-hidden rounded-[32px] border border-brand-navy/10 bg-[linear-gradient(135deg,rgba(255,248,235,0.92),rgba(255,255,255,0.98))] p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Biz haqimizda
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
                {companyName} Samarqanddagi geodeziya va muhandislik xizmatlari bilan shug&#39;ullanadi
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Kompaniya 2017-yildan beri geodeziya, topografiya, geologiya va loyihalash
                yo&#39;nalishlarida faoliyat yuritib keladi. Biz yer uchastkalari, bino-inshootlar va
                qurilish maydonlari uchun aniq olchov, texnik tahlil hamda hujjatlashtirish
                xizmatlarini ko&#39;rsatamiz.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {companyFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-brand-navy/10 bg-white/80 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-brand-navy">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">Faoliyatimiz haqida</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    Har bir obyekt bo&#39;yicha ishlar texnik aniqlik, muddat va tartibli natija
                    tamoyili asosida olib boriladi. Jamoa maydon olchovlari, plan tayyorlash,
                    muhandislik kuzatuvi va loyihalash uchun kerakli ma&#39;lumotlarni tayyorlaydi.
                  </p>
                  <p>
                    Buyurtmachilar uchun jarayon sodda tashkil qilingan: so&#39;rov qabul qilinadi,
                    obyekt bo&#39;yicha dastlabki tahlil qilinadi, maydonda ish bajariladi va yakunda
                    kelishilgan hujjatlar topshiriladi.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-brand-navy">Asosiy afzalliklar</h3>
                  <div className="mt-4 grid gap-3">
                    {strengths.map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-brand-navy/10 bg-[linear-gradient(180deg,rgba(255,248,235,0.96),rgba(255,255,255,1))] p-6 text-brand-navy shadow-[0_24px_60px_rgba(11,58,110,0.10)] sm:p-8">
                <h2 className="text-2xl font-bold">Aloqa va manzil</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Manzil</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{companyAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Telefonlar</p>
                    <div className="mt-2 flex flex-col gap-2 text-base text-slate-700">
                      {phoneNumbers.map((phone) => (
                        <Link key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="hover:text-brand-blue">
                          {phone}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Email</p>
                    <Link href={`mailto:${companyEmail}`} className="mt-2 block text-base text-slate-700 hover:text-brand-blue">
                      {companyEmail}
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Ish vaqti</p>
                    <p className="mt-2 text-base text-slate-700">{workingHours}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/aloqa#buyurtma" className="btn-primary">
                    Buyurtma berish
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-brand-navy/10 px-5 py-3 text-sm font-semibold text-brand-navy transition duration-300 hover:border-brand-gold hover:bg-white"
                  >
                    Bosh sahifaga o&#39;tish
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    Tender yutuqlari
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-brand-navy">
                    Ochiq manbalarda ko&#39;ringan yutuqlar
                  </h2>
                </div>
                <Link
                  href="https://orginfo.uz/organization/11996a7e98c4/"
                  className="text-sm font-semibold text-brand-blue hover:text-brand-navy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Manba: Orginfo
                </Link>
              </div>

              <div className="mt-6 grid gap-4">
                {tenderWins.map((item) => (
                  <div
                    key={`${item.date}-${item.title}`}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-brand-blue">{item.date}</p>
                        <h3 className="mt-2 text-lg font-semibold text-brand-navy">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.customer}</p>
                      </div>
                      <div className="rounded-full border border-brand-gold/30 bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
                        {item.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </PageShell>
  );
}
