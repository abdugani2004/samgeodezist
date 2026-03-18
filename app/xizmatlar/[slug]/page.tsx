import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { companyName, getServiceBySlug, services, siteUrl } from "@/data/site";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Xizmat topilmadi" };
  }

  return {
    title: `${service.title} | SAMGEODEZIST MCHJ`,
    description: service.detailDescription,
    alternates: {
      canonical: `/xizmatlar/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${companyName}`,
      description: service.detailDescription,
      url: `${siteUrl}/xizmatlar/${service.slug}`,
      images: [
        {
          url: `${siteUrl}${service.image}`,
          width: 1200,
          height: 900,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detailDescription,
    provider: {
      "@type": "LocalBusiness",
      name: companyName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Samarqand",
    },
    url: `${siteUrl}/xizmatlar/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bosh sahifa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Xizmatlar",
        item: `${siteUrl}/#xizmatlar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/xizmatlar/${service.slug}`,
      },
    ],
  };

  return (
    <div className="bg-white text-brand-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageShell>
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pt-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Xizmat tafsiloti
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
                {service.detailTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {service.detailDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-sand px-4 py-2 text-sm font-semibold text-brand-gold">
                  {service.metric}
                </span>
                <span className="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
                  {service.outcome}
                </span>
              </div>

              <div className="panel mt-10 rounded-[30px] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-brand-navy">Nimalarni bajarib beramiz</h2>
                <div className="mt-6 grid gap-4">
                  {service.bullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/aloqa#buyurtma" className="btn-primary">
                  Buyurtma berish
                </Link>
                <Link href="/" className="btn-secondary">
                  Bosh sahifaga qaytish
                </Link>
              </div>
            </div>

            <div className="panel overflow-hidden rounded-[32px] p-4 sm:p-6">
              <div className="relative h-[420px] overflow-hidden rounded-[28px]">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      </PageShell>
    </div>
  );
}
