type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title mt-3 text-pretty">{title}</h2>
      <p className={`section-copy ${alignment} mt-3 max-w-2xl`}>{description}</p>
    </div>
  );
}
