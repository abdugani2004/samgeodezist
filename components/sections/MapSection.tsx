import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyAddress } from "@/data/site";

type MapFrameProps = {
  apiKey?: string;
  query?: string;
};

function MapFrame({ apiKey, query = "Samarqand" }: MapFrameProps) {
  if (!apiKey) {
    return (
      <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border border-dashed border-brand-blue/25 bg-slate-50 p-8 text-center text-slate-500">
        Xarita bu yerda ko&#39;rinadi
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(query)}`;

  return (
    <iframe
      title="SAMGEODEZIST MCHJ xaritasi"
      src={src}
      className="min-h-[360px] w-full rounded-[28px] border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function MapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="panel rounded-[28px] p-5 sm:p-6">
          <SectionHeading
            eyebrow="Joylashuv"
            title="Ofis joylashuvi"
            description="API kalit qo'shilganda bu yerda interaktiv xarita ko'rinadi."
          />
          <div className="mt-6">
            <MapFrame apiKey={apiKey} query={companyAddress} />
          </div>
        </div>
      </Container>
    </section>
  );
}
