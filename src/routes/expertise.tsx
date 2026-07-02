import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BadgeDollarSign,
  Blocks,
  Clock3,
  Cpu,
  DraftingCompass,
  HardHat,
  Leaf,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { PROCESS, WHY_CONTEL } from "@/lib/site-data";
import { Counter, Reveal } from "@/components/site/Motion";

const heroImage =
  "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&w=2200";
const detailImage =
  "https://images.pexels.com/photos/11174202/pexels-photo-11174202.jpeg?auto=compress&cs=tinysrgb&w=1600";
const processImage =
  "https://images.pexels.com/photos/9485311/pexels-photo-9485311.jpeg?auto=compress&cs=tinysrgb&w=2200";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Contel Africa" },
      {
        name: "description",
        content:
          "Why we win the work — engineering excellence, certified delivery, sustainability and safety.",
      },
      { property: "og:title", content: "Expertise — Contel Africa" },
      {
        property: "og:description",
        content: "Engineering excellence, certified delivery, sustainability and safety.",
      },
    ],
  }),
  component: Expertise,
});

const IMPACT = [
  {
    icon: ShieldCheck,
    value: "0.18",
    suffix: undefined,
    label: "LTI rate",
    body: "Lost-time incidents per 200,000 hours — among the best records in African construction.",
  },
  {
    icon: Leaf,
    value: "37",
    suffix: "%",
    label: "Less embodied carbon",
    body: "Average reduction across 2024 projects against local baselines.",
  },
  {
    icon: Award,
    value: "100",
    suffix: "%",
    label: "ISO 45001 sites",
    body: "Every active Contel site follows our certified occupational safety system.",
  },
];

const CAPABILITY_ICONS = [
  DraftingCompass,
  BadgeCheck,
  HardHat,
  UserRoundCheck,
  Clock3,
  Leaf,
  Cpu,
  BadgeDollarSign,
];

function Expertise() {
  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#071b38] pt-24 text-white md:min-h-[92svh] md:pt-28 2xl:min-h-[900px]">
        <img
          src={heroImage}
          alt="Contel engineers delivering a major infrastructure project"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] opacity-75 md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#071b38_0%,rgba(7,27,56,.72)_38%,rgba(7,27,56,.04)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(7,27,56,.82)_0%,transparent_42%)]" />

        <div className="mx-auto flex min-h-[calc(88svh-6rem)] max-w-[1600px] flex-col justify-between px-5 pb-7 sm:px-7 md:min-h-[calc(92svh-7rem)] md:pb-10 lg:px-10 2xl:px-16">
          <Reveal>
            <h1 className="max-w-6xl pt-12 font-display text-[clamp(3.35rem,9vw,10rem)] leading-[0.84] font-light tracking-[-0.05em] text-balance md:pt-16">
              Complexity,
              <span className="block pl-[4vw] italic text-[#ff4b00] sm:pl-[8vw]">
                made buildable.
              </span>
            </h1>
          </Reveal>

          <div className="border-t border-white/20 pt-8">
            <a
              href="#capabilities"
              className="flex w-fit items-center gap-3 text-xs tracking-[0.18em] uppercase"
            >
              Explore our edge
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30">
                <ArrowDown className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="bg-[#f2eee6] px-5 py-16 text-[#101418] sm:px-7 md:py-20 lg:px-10 lg:py-32 2xl:px-16 2xl:py-40"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] 2xl:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#ff4b00] uppercase">
                  Why Contel
                </span>
                <h2 className="mt-6 max-w-lg font-display text-4xl leading-none font-light sm:text-5xl md:text-6xl 2xl:text-7xl">
                  One team. Every critical detail.
                </h2>
                <p className="mt-7 max-w-sm leading-relaxed text-black/55">
                  Technical depth meets commercial discipline from the first sketch to final
                  handover.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  {[
                    { value: "13", suffix: "+", label: "Years" },
                    { value: "420", suffix: "+", label: "Projects" },
                    { value: "14", suffix: "", label: "Markets" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="grid h-20 w-20 place-items-center rounded-full border border-[#071b38]/40 text-center transition-colors hover:border-[#ff4b00] hover:bg-[#ff4b00] sm:h-24 sm:w-24"
                    >
                      <span className="text-xs font-semibold leading-tight">
                        <span className="font-display text-2xl">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </span>
                        <br />
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="border-t border-black/15">
              {WHY_CONTEL.map((item, index) => (
                <Reveal key={item.number} delay={(index % 2) * 0.04}>
                  <article className="group grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-black/15 py-7 transition-colors hover:bg-white/60 sm:grid-cols-[4rem_1fr] md:grid-cols-[4rem_5.5rem_0.8fr_1.2fr] md:px-5 md:py-8 2xl:grid-cols-[5rem_6.5rem_0.8fr_1.2fr] 2xl:py-10">
                    <span className="font-mono text-xs text-[#ff4b00]">/{item.number}</span>
                    <CapabilityIcon index={index} />
                    <h3 className="col-span-2 text-xl font-semibold tracking-tight md:col-span-1 md:text-2xl 2xl:text-3xl">
                      {item.title}
                    </h3>
                    <p className="col-span-2 max-w-xl text-sm leading-relaxed text-black/55 md:col-span-1 md:text-base 2xl:text-lg">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-cover bg-center bg-scroll px-5 py-16 text-white sm:px-7 md:bg-fixed md:py-20 lg:px-10 lg:py-32 2xl:px-16 2xl:py-40"
        style={{ backgroundImage: `url(${processImage})` }}
      >
        <div className="absolute inset-0 -z-10 bg-[#071b38]/55" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,56,.82),rgba(7,27,56,.3))]" />
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#ff4b00] uppercase">
              How we deliver
            </span>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-4xl font-display text-4xl leading-[0.95] font-light sm:text-5xl md:text-7xl 2xl:text-8xl">
                A clear path through complexity.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-white/55">
                Eight connected stages. One accountable team. No gaps between thinking and making.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <article
                key={item.step}
                className="group relative min-h-52 border-b border-white/15 p-6 sm:min-h-60 sm:border-r lg:min-h-72 lg:p-8 2xl:min-h-80 2xl:p-10"
              >
                <span className="font-mono text-xs text-[#ff4b00]">{item.step}</span>
                <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-white/20 transition-all group-hover:scale-[2.5] group-hover:bg-[#ff4b00] lg:right-8 lg:top-8" />
                <div className="mt-20 lg:mt-24">
                  <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/75">
                    {item.body}
                  </p>
                </div>
                {index < PROCESS.length - 1 && (
                  <span className="absolute -right-px top-8 z-10 hidden h-px w-8 bg-[#ff4b00] lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ff4b00] px-5 py-16 text-[#071b38] sm:px-7 md:py-20 lg:px-10 lg:py-32 2xl:px-16 2xl:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={detailImage}
                  alt="Contel engineer reviewing project details"
                  className="h-[360px] w-full object-cover grayscale sm:h-[440px] lg:h-[520px] 2xl:h-[640px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#071b38]/10 mix-blend-multiply" />
                <span className="absolute bottom-5 left-5 rounded-full bg-[#071b38] px-4 py-2 text-[0.65rem] tracking-[0.18em] text-white uppercase">
                  Measured impact
                </span>
              </div>
            </Reveal>

            <div className="lg:pl-8">
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                  Safety & sustainability
                </span>
                <h2 className="mt-6 font-display text-4xl leading-[0.92] font-light sm:text-5xl md:text-7xl 2xl:text-8xl">
                  Care is part of the specification.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#071b38]/70">
                  We measure safety and environmental performance at site, project and group level —
                  then independently verify the result.
                </p>
              </Reveal>

              <div className="mt-12 border-t border-[#071b38]/25">
                {IMPACT.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#071b38]/25 py-7"
                  >
                    <item.icon className="mt-1 h-5 w-5" />
                    <div className="grid gap-2 sm:grid-cols-[0.75fr_1.25fr]">
                      <div>
                        <div className="font-display text-4xl tracking-tight">
                          <Counter value={item.value} suffix={item.suffix} />
                        </div>
                        <div className="mt-1 text-xs font-semibold tracking-wide uppercase">
                          {item.label}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[#071b38]/65">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee6] px-5 py-20 text-[#101418] sm:px-7 lg:px-10 lg:py-36 2xl:px-16 2xl:py-44">
        <Reveal>
          <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 border-t border-black/15 pt-10 lg:flex-row lg:items-end lg:pt-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#ff4b00] uppercase">
                Have a complex brief?
              </span>
              <h2 className="mt-6 max-w-5xl font-display text-4xl leading-[0.92] font-light tracking-tight sm:text-5xl md:text-8xl 2xl:text-9xl">
                Let&apos;s make it buildable.
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex w-full shrink-0 items-center justify-between gap-5 rounded-full bg-[#071b38] py-3 pr-3 pl-6 text-sm font-medium text-white transition-transform hover:-translate-y-1 sm:w-auto"
            >
              Talk to an engineer
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff4b00] text-[#071b38]">
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function CapabilityIcon({ index }: { index: number }) {
  const Icon = CAPABILITY_ICONS[index] ?? Blocks;

  return (
    <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-[#071b38] text-[#ff4b00] shadow-[0_12px_30px_rgba(7,27,56,.18)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-[#ff4b00] group-hover:text-[#071b38] sm:h-20 sm:w-20 2xl:h-24 2xl:w-24">
      <span className="absolute inset-2 rounded-full border border-current/20" />
      <Icon
        className="relative h-7 w-7 sm:h-8 sm:w-8 2xl:h-10 2xl:w-10"
        strokeWidth={1.65}
        aria-hidden="true"
      />
    </span>
  );
}
