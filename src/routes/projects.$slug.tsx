import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.title ?? "Project"} — Contel Africa` },
        { name: "description", content: p?.overview ?? "" },
        { property: "og:title", content: `${p?.title ?? "Project"} — Contel Africa` },
        { property: "og:description", content: p?.overview ?? "" },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: p?.image
        ? [{ rel: "preload", as: "image", href: p.image, fetchPriority: "high" }]
        : [],
    };
  },
  loader: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="display text-5xl">Project not found.</h1>
        <Link to="/projects" className="mt-6 inline-block text-primary">
          All projects
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
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const related = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 mx-auto max-w-[1400px] px-5 lg:px-10 flex flex-col justify-end pb-16">
          <Reveal>
            <span className="rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase w-fit">
              {p.sector}
            </span>
            <h1 className="display-tight mt-6 text-[clamp(3rem,8vw,7rem)] text-balance max-w-5xl">
              {p.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {p.city}, {p.country} · {p.year}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facts */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-6">
          {(
            [
              ["Client", p.client],
              ["Location", `${p.city}, ${p.country}`],
              ["Budget", p.budget],
              ["Timeline", p.timeline],
              ["Procurement", p.procurement ?? "Not disclosed"],
              ["Year", String(p.year)],
            ] as const
          ).map(([l, v]) => (
            <div key={l}>
              <div className="label-eyebrow">{l}</div>
              <div className="mt-2 text-sm">
                {l === "Client" && p.clientUrl ? (
                  <a
                    href={p.clientUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {v}
                  </a>
                ) : (
                  v
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <Reveal>
            <span className="label-eyebrow">Overview</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-4xl tracking-tight text-balance leading-tight">
              {p.overview}
            </p>
            <div className="mt-10 border-l-2 border-primary bg-primary/10 px-6 py-6 md:px-8">
              <div className="label-eyebrow text-primary">Project delivery highlights</div>
              <p className="mt-3 max-w-3xl text-base leading-relaxed">{p.keyDelivery ?? p.scope}</p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span>
                  <strong className="text-foreground">Service:</strong> {p.sector}
                </span>
                <span>
                  <strong className="text-foreground">Status:</strong> {p.timeline}
                </span>
                {p.procurement && (
                  <span>
                    <strong className="text-foreground">Procurement:</strong> {p.procurement}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div>
                <div className="label-eyebrow">Challenge</div>
                <p className="mt-4 text-muted-foreground">{p.challenge}</p>
              </div>
              <div>
                <div className="label-eyebrow">Solution</div>
                <p className="mt-4 text-muted-foreground">{p.solution}</p>
              </div>
            </div>
            <div className="mt-12">
              <div className="label-eyebrow">Technologies</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t: string) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <div className="label-eyebrow">Scope</div>
              <p className="mt-4 text-muted-foreground">{p.scope}</p>
            </div>
            {p.keyDelivery && (
              <div className="mt-12">
                <div className="label-eyebrow">Key delivery</div>
                <p className="mt-4 text-muted-foreground">{p.keyDelivery}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <BeforeAfter before={p.gallery[0] ?? p.image} after={p.gallery[1] ?? p.image} />

      <Gallery images={p.gallery} />

      <MapCard p={p} />

      {/* Related */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-28">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <h2 className="display text-4xl md:text-5xl">Related projects</h2>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm">
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/projects/$slug"
              params={{ slug: r.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {r.city}, {r.country}
              </div>
              <h3 className="mt-2 text-xl tracking-tight group-hover:text-primary transition-colors">
                {r.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handle = (e: React.PointerEvent) => {
    if (!ref.current || e.buttons !== 1) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="label-eyebrow">Before / After</span>
            <h2 className="display mt-4 text-4xl">From site to handover.</h2>
          </div>
          <span className="text-xs text-muted-foreground">Drag the divider</span>
        </div>
        <div
          ref={ref}
          onPointerMove={handle}
          onPointerDown={handle}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl select-none cursor-ew-resize"
        >
          <img
            src={after}
            alt="Completed project view"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 overflow-hidden grayscale" style={{ width: `${pos}%` }}>
            <img
              src={before}
              alt="Project delivery view"
              className="h-full w-full object-cover"
              style={{ width: `${10000 / pos}%` }}
              loading="lazy"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-px bg-primary pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
              ‹›
            </div>
          </div>
          <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
            Before
          </div>
          <div className="absolute top-4 right-4 rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
            After
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ images }: { images: string[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-28">
      <div className="label-eyebrow">Gallery</div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {images.map((image, i) => (
          <div
            key={image}
            className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2" : ""} aspect-[4/3]`}
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function MapCard({ p }: { p: { city: string; country: string } }) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="label-eyebrow">Location</span>
          <h2 className="display mt-4 text-4xl">
            {p.city}, {p.country}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            An on-site project office operated for the duration of construction, with Contel's
            regional hub providing engineering oversight.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90">
              <Download className="h-4 w-4" /> Download case study
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-foreground/5"
            >
              Discuss similar project
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background">
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <span className="absolute inset-0 h-12 w-12 -m-1 rounded-full bg-primary/30 animate-ping" />
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
