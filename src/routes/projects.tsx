import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";
import { ContactBand } from "@/components/site/ContactBand";
import { cn } from "@/lib/utils";
import projectsHero from "@/assets/projects-hero.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Contel Africa" },
      {
        name: "description",
        content:
          "Selected work across commercial, infrastructure, residential, healthcare, industrial and government sectors.",
      },
      { property: "og:title", content: "Projects — Contel Africa" },
      { property: "og:description", content: "Selected work across the African continent." },
    ],
    links: [{ rel: "preload", as: "image", href: projectsHero, fetchPriority: "high" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const sectors = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))];
  const [sector, setSector] = useState("All");

  const filtered = useMemo(
    () => (sector === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector)),
    [sector],
  );

  return (
    <>
      <section className="px-2 pb-2">
        <div className="relative min-h-[480px] overflow-hidden rounded-[8px] md:min-h-[620px]">
          <img
            src={projectsHero}
            alt="Construction team delivering a major African building project"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#071b38]/68" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b38]/55 via-transparent to-[#071b38]/20" />
          <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-center px-5 text-center text-white md:min-h-[620px]">
            <Reveal>
              <span className="text-sm font-semibold text-[#d6972a]">Contel Africa</span>
              <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-9xl">Projects</h1>
              <span className="mt-7 inline-flex rounded-full border border-white/45 px-5 py-2.5 text-xs text-white/85">
                Home / Projects
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-30 bg-background/70 backdrop-blur-lg border-y border-border">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setSector(s)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                sector === s
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] gap-5">
          {filtered.map((p, i) => {
            const span =
              p.size === "wide"
                ? "lg:col-span-2"
                : p.size === "tall"
                  ? "row-span-2 lg:row-span-2"
                  : "";
            return (
              <Reveal key={p.slug} delay={(i % 6) * 0.04} className={cn("h-full", span)}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  preload="intent"
                  aria-label={`View full project: ${p.title}`}
                  className="group relative block h-full cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
                      {p.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {p.city}, {p.country} · {p.year}
                    </div>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight text-balance group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/70 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="mt-4 text-xs font-semibold tracking-[0.16em] text-white/70 uppercase transition-colors group-hover:text-primary">
                      View full project
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
