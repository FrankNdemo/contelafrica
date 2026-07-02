import { createFileRoute, Link } from "@tanstack/react-router";
import { INSIGHTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Contel Africa" },
      {
        name: "description",
        content:
          "Field notes, industry analysis and project updates from across Contel's African delivery.",
      },
      { property: "og:title", content: "Insights — Contel Africa" },
      { property: "og:description", content: "Field notes, industry analysis, project updates." },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const [featured, ...rest] = INSIGHTS;
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <span className="label-eyebrow">Insights</span>
          <h1 className="display-tight mt-6 text-[clamp(3rem,8vw,8rem)] text-balance max-w-5xl">
            From the
            <br />
            <span className="italic font-light text-primary">field.</span>
          </h1>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="border-y border-border">
        <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group block">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <span className="text-primary">{featured.category}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <h2 className="display mt-6 text-4xl md:text-5xl tracking-tight text-balance group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-muted-foreground text-balance">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm">
                Read article{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rest.map((i, idx) => (
          <Reveal key={i.slug} delay={idx * 0.08}>
            <Link to="/insights/$slug" params={{ slug: i.slug }} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={i.image}
                  alt={i.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <span className="text-primary">{i.category}</span>
                <span>·</span>
                <span>{i.read}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-balance group-hover:text-primary transition-colors">
                {i.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{i.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
