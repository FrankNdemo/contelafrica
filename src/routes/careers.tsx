import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness } from "lucide-react";

import careersHero from "@/assets/careers-hero.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Contel Africa" },
      {
        name: "description",
        content:
          "Build a career delivering ambitious engineering and construction projects across Africa.",
      },
      { property: "og:title", content: "Careers — Contel Africa" },
      { property: "og:description", content: "Build Africa with Contel." },
      { property: "og:image", content: careersHero },
    ],
    links: [{ rel: "preload", as: "image", href: careersHero, fetchPriority: "high" }],
  }),
  component: Careers,
});

const cvMailto =
  "mailto:info@contelafrica.com?subject=CV%20for%20future%20opportunities%20at%20Contel%20Africa";

function Careers() {
  return (
    <>
      <section className="px-2 pb-2">
        <div className="relative min-h-[580px] overflow-hidden rounded-[8px] md:min-h-[680px]">
          <img
            src={careersHero}
            alt="Black African engineer working on site"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#06182f]/25 lg:bg-gradient-to-l lg:from-[#06182f]/90 lg:via-[#06182f]/55 lg:to-[#06182f]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182f]/60 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1440px] items-end px-6 pb-14 text-white md:min-h-[680px] md:px-10 md:pb-20 lg:justify-end">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6972a]">
                Careers
              </span>
              <h1 className="mt-5 text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
                Build <span className="font-light italic text-[#65d4c8]">Africa.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 md:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-[24px] border border-border bg-background px-7 py-12 text-center shadow-[0_24px_70px_-28px_rgba(7,27,56,0.28)] md:px-12 md:py-16">
            <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              No open positions
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              There are no vacancies right now. For future consideration, send your CV to{" "}
              <a
                href={cvMailto}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                info@contelafrica.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
