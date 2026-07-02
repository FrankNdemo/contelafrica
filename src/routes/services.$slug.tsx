import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, PROJECTS, PROCESS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Service"} - Contel Africa` },
        { name: "description", content: s?.description ?? "Contel Africa service." },
        { property: "og:title", content: `${s?.title ?? "Service"} - Contel Africa` },
        { property: "og:description", content: s?.description ?? "Contel Africa service." },
        ...(s?.image ? [{ property: "og:image", content: s.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="display text-5xl">Service not found.</h1>
        <Link to="/services" className="mt-6 inline-block text-primary">
          All services
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
  component: ServiceDetail,
});

const BENEFITS = [
  "In-house engineering team",
  "ISO-certified delivery",
  "Independent quality assurance",
  "Transparent commercial model",
  "Local content and training",
  "Lifetime maintenance options",
];

const FAQS = [
  {
    q: "How early should we engage Contel?",
    a: "Ideally at feasibility. Early engagement lets us optimise constructability, programme and cost before design lock-in.",
  },
  {
    q: "Do you work on design-and-build only?",
    a: "No. We deliver under any major procurement route including traditional, construction management, and EPC.",
  },
  {
    q: "What's the typical project size?",
    a: "We deliver projects from USD 5M boutique programmes to USD 300M+ infrastructure concessions.",
  },
  {
    q: "How do you manage risk on cross-border programmes?",
    a: "Through localised delivery hubs, regional supply chains, and a single group-level risk and assurance function.",
  },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const category = service.category.toLowerCase();
  const categoryMatches = PROJECTS.filter((project) =>
    project.sector.toLowerCase().includes(category),
  );
  const related = (categoryMatches.length ? categoryMatches : PROJECTS).slice(0, 3);

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-5 lg:px-10">
        <Link
          to="/services"
          className="label-eyebrow inline-flex items-center gap-2 hover:text-foreground transition-colors"
        >
          Back to all services
        </Link>
        <Reveal>
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-full border border-border px-3 py-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {service.category}
            </span>
          </div>
          <h1 className="display-tight mt-6 text-[clamp(3rem,8vw,7rem)] text-balance max-w-5xl">
            {service.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{service.description}</p>
        </Reveal>
      </section>

      <section className="border-y border-border">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-28 grid lg:grid-cols-[260px_1fr] gap-16">
        <aside className="lg:sticky lg:top-32 self-start space-y-2">
          {["Overview", "Process", "Benefits", "FAQs", "Related projects"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-muted-foreground hover:text-foreground py-1"
            >
              {s}
            </a>
          ))}
        </aside>
        <div className="space-y-28">
          <section id="overview">
            <span className="label-eyebrow">Overview</span>
            <h2 className="display mt-5 text-4xl text-balance">
              A discipline run by specialists, not generalists.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              {service.description} Our chartered engineers lead every engagement, with delivery
              muscle from a dedicated construction team and assurance from an independent quality
              function.
            </p>
          </section>

          <section id="process">
            <span className="label-eyebrow">Process</span>
            <h2 className="display mt-5 text-4xl text-balance">How we deliver.</h2>
            <ol className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {PROCESS.slice(0, 6).map((p) => (
                <li key={p.step} className="bg-background p-7">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-3xl text-primary">{p.step}</span>
                    <span className="label-eyebrow">Stage</span>
                  </div>
                  <h3 className="mt-5 text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="benefits">
            <span className="label-eyebrow">Benefits</span>
            <h2 className="display mt-5 text-4xl text-balance">Why teams choose us.</h2>
            <ul className="mt-10 grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="faqs">
            <span className="label-eyebrow">FAQs</span>
            <h2 className="display mt-5 text-4xl text-balance">Common questions.</h2>
            <Accordion type="single" collapsible className="mt-8">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg py-6 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="related-projects">
            <span className="label-eyebrow">Related projects</span>
            <h2 className="display mt-5 text-4xl text-balance">Recent delivery.</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {p.city}, {p.country}
                  </div>
                  <h3 className="mt-2 text-xl tracking-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-surface p-10 md:p-14 grid lg:grid-cols-[1.4fr_auto] items-center gap-6">
            <div>
              <span className="label-eyebrow">Next step</span>
              <h3 className="display mt-3 text-3xl md:text-4xl text-balance">
                Bring us your brief.
              </h3>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-4 py-4 text-sm font-medium hover:bg-primary/90"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}
