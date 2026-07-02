import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { INSIGHTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const i = INSIGHTS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${i?.title ?? "Article"} — Contel Insights` },
        { name: "description", content: i?.excerpt ?? "" },
        { property: "og:title", content: i?.title ?? "Contel Insights" },
        { property: "og:description", content: i?.excerpt ?? "" },
        ...(i?.image ? [{ property: "og:image", content: i.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const article = INSIGHTS.find((x) => x.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="display text-5xl">Article not found.</h1>
        <Link to="/insights" className="mt-6 inline-block text-primary">
          All insights
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <button onClick={reset} className="text-primary">
        Reload
      </button>
    </div>
  ),
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData();
  return (
    <article>
      <section className="pt-40 pb-12 mx-auto max-w-3xl px-5 lg:px-10">
        <Link to="/insights" className="label-eyebrow inline-flex hover:text-foreground">
          ← Insights
        </Link>
        <Reveal>
          <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <span className="text-primary">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.read}</span>
          </div>
          <h1 className="display mt-6 text-4xl md:text-6xl text-balance">{article.title}</h1>
        </Reveal>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-5xl px-5 lg:px-10 py-10">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 lg:px-10 py-20 prose-invert">
        <p className="text-xl font-display tracking-tight leading-snug text-balance">
          {article.excerpt}
        </p>
        <div className="hairline my-10" />
        <p className="text-muted-foreground leading-relaxed">{article.body}</p>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Across our 14 markets, the operating context varies — but the engineering ethic does not.
          Disciplined design, disciplined delivery, disciplined handover. That's what makes complex
          programmes deliverable, and what makes long client relationships possible.
        </p>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          If this resonates with a programme you're shaping, our engineers are available to discuss
          approach, risk and constructability — usually within a working day.
        </p>

        <div className="mt-16 rounded-2xl border border-border p-8">
          <div className="label-eyebrow">Continue reading</div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {INSIGHTS.filter((x) => x.slug !== article.slug)
              .slice(0, 2)
              .map((x) => (
                <Link
                  key={x.slug}
                  to="/insights/$slug"
                  params={{ slug: x.slug }}
                  className="group block"
                >
                  <div className="text-xs tracking-[0.2em] uppercase text-primary">
                    {x.category}
                  </div>
                  <div className="mt-1 font-display text-xl group-hover:text-primary transition-colors">
                    {x.title}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </article>
  );
}
