import Link from "next/link";
import { posts } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NewsSection() {
  return (
    <section id="postlar" className="relative py-16 sm:py-20">
      <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Postlar"
          title="Foydali post va maqolalar"
          description="Geodeziya, topografiya va texnik jarayonlar bo'yicha foydali postlar shu bo'limda joylashadi."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="panel surface-highlight flex h-full flex-col rounded-[24px] p-5 hover:-translate-y-1 hover:border-brand-gold/30 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                {post.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy sm:text-xl">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.description}</p>
              <div className="mt-5">
                <Link href={post.href} className="text-sm font-semibold text-brand-blue transition hover:text-brand-navy">
                  Batafsil o‘qish
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
