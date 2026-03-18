import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyAddress } from "@/data/site";

type MapFrameProps = {
  query?: string;
};

function MapFrame({ query = "Samarqand" }: MapFrameProps) {
  const src =
    "https://www.openstreetmap.org/export/embed.html?bbox=66.92%2C39.63%2C67.03%2C39.69&layer=mapnik&marker=39.6542%2C66.9750";

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200">
      <iframe
        title={`OpenStreetMap - ${query}`}
        src={src}
        className="min-h-[360px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}

export function MapSection() {
  const addressSearchUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(companyAddress)}`;

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="panel rounded-[28px] p-5 sm:p-6">
          <SectionHeading
            eyebrow="Joylashuv"
            title="Ofis joylashuvi"
            description="OpenStreetMap asosidagi xaritada ofis joylashuvi ko'rsatilgan."
          />
          <div className="mt-6">
            <MapFrame query={companyAddress} />
          </div>
          <div className="mt-4">
            <a
              href={addressSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
            >
              OpenStreetMapda ochish
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
