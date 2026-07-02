import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardList,
  DraftingCompass,
  Hammer,
  HardHat,
  KeyRound,
  MessagesSquare,
  PenTool,
  Play,
  Sofa,
  Wrench,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import heroSlideResidential from "@/assets/hero-slide-residential.jpg";
import heroSlideBuild from "@/assets/hero-slide-build.jpg";
import heroSlideTeam from "@/assets/hero-slide-team.jpg";
import residentialHome from "@/assets/project-residential.jpg";
import engineerImage from "@/assets/about-engineer.jpg";
import worldMapDots from "@/assets/world-map-dots.png";
import { PROCESS, PROJECTS, TESTIMONIALS } from "@/lib/site-data";
import { Counter, Reveal } from "@/components/site/Motion";
import { ContactBand } from "@/components/site/ContactBand";

const HERO_SLIDES = [
  {
    image: heroSlideResidential,
    eyebrow: "Residential excellence",
    title: "Homes with presence, proportion and calm luxury.",
    body: "Every view, threshold and finish is coordinated before site work begins, so the final space feels intentional rather than assembled.",
  },
  {
    image: heroSlideBuild,
    eyebrow: "Build control",
    title: "Precision delivery from concept to handover.",
    body: "Design, procurement and construction planning move as one system, giving clients clearer timelines and fewer surprises.",
  },
  {
    image: heroSlideTeam,
    eyebrow: "Technical leadership",
    title: "Experienced teams behind every beautiful detail.",
    body: "Architects, engineers and site specialists work together to protect the design intent while solving real construction conditions.",
  },
] as const;

const STORY_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Technical leadership",
    title: "Experienced teams behind every beautiful detail.",
    body: "Architects, engineers and site specialists work together to protect the design intent while solving real construction conditions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Interior coordination",
    title: "Quiet luxury carried through every room.",
    body: "Material palettes, lighting, joinery and furniture are coordinated early, giving each space a calm rhythm and a refined finish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Site delivery",
    title: "Modern construction with disciplined control.",
    body: "Our site teams keep quality, timing and design decisions connected so the finished building feels precise from every angle.",
  },
] as const;

const TESTIMONIAL_FILL = {
  rest: { scaleY: 0 },
  hover: { scaleY: 1 },
};

const TESTIMONIAL_TEXT = {
  rest: { color: "#ffffff" },
  hover: { color: "#071b38" },
};

const PROCESS_ICONS = [
  MessagesSquare,
  ClipboardList,
  PenTool,
  DraftingCompass,
  HardHat,
  BadgeCheck,
  KeyRound,
  Wrench,
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contel Africa - The Kenyan General Contractors" },
      {
        name: "description",
        content: "Luxury residential design, construction and project delivery across Africa.",
      },
      { property: "og:title", content: "Contel Africa - The Kenyan General Contractors" },
      {
        property: "og:description",
        content: "Luxury residential design, construction and project delivery across Africa.",
      },
      { property: "og:image", content: residentialHome },
    ],
    links: [{ rel: "preload", as: "image", href: heroSlideResidential, fetchPriority: "high" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ExpertiseStrip />
      <ImageStorySlider />
      <WhoWeAre />
      <LuxuryBanner />
      <TeamPreview />
      <FeaturedProjects />
      <PresenceTeaser />
      <ProcessRibbon />
      <Testimonials />
      <HomeContact />
      <ContactBand />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background pb-20">
      <div className="w-full">
        <div className="relative min-h-[620px] overflow-hidden bg-surface md:min-h-[760px]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === active;
            const wasPrevious = index === (active - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
            return (
              <motion.img
                key={slide.image}
                style={{ y, scale }}
                src={slide.image}
                alt=""
                className={[
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive
                    ? "translate-x-0 opacity-100"
                    : wasPrevious
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0",
                ].join(" ")}
                width={2200}
                height={1400}
                fetchPriority={index === 0 ? "high" : "low"}
                loading="eager"
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/52 to-background/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-center px-5 py-16 md:min-h-[760px] md:px-10 lg:px-16">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.28em] text-primary uppercase">
                <span className="inline-block h-px w-10 bg-primary" />
                KENYAN'S TRUSTED GENERAL CONTRACTOR
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="mt-6 max-w-3xl text-[clamp(3.1rem,8vw,8.6rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-white text-balance">
                Engineering the Future of African Infrastructure.
              </h1>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/78 md:text-lg">
                Contel Africa brings architecture, construction and project control together for
                residences, commercial spaces and landmark developments built to feel timeless.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Book appointment
                  <CalendarCheck className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3.5 text-sm text-white hover:border-primary hover:text-primary"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-background">
                    <Play className="h-3.5 w-3.5 fill-current ml-px" />
                  </span>
                  View our work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseStrip() {
  const featured = [
    {
      title: "Real Estate",
      body: "Premium residential and commercial properties shaped for investment value, permanence and beauty.",
      icon: Building2,
    },
    {
      title: "Construction",
      body: "High-quality build delivery with refined coordination, procurement discipline and finish control.",
      icon: Hammer,
    },
    {
      title: "Interiors",
      body: "Sophisticated interiors shaped by architecture, lifestyle and the rhythm of everyday living.",
      icon: Sofa,
    },
  ];

  return (
    <section className="bg-background pb-16">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="label-eyebrow text-primary">What we do</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Our Expertise</h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-[8px] border border-white/10 bg-[#5cc7bd]/72 p-8 text-center text-white shadow-xl shadow-black/15 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:bg-[#5cc7bd]/82">
                <span className="mx-auto grid h-20 w-20 place-items-center text-white">
                  <item.icon className="h-12 w-12" strokeWidth={2.8} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/82">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageStorySlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % STORY_SLIDES.length);
    }, 10000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-background px-5 pb-20 lg:px-10">
      <div className="relative mx-auto min-h-[460px] max-w-[1280px] overflow-hidden rounded-[8px] bg-[#071b38] shadow-2xl shadow-black/25 md:min-h-[560px]">
        {STORY_SLIDES.map((slide, index) => {
          const isActive = index === active;
          const wasPrevious = index === (active - 1 + STORY_SLIDES.length) % STORY_SLIDES.length;
          return (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={[
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive
                  ? "translate-x-0 opacity-100"
                  : wasPrevious
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0",
              ].join(" ")}
              loading={index === 0 ? "eager" : "lazy"}
            />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b38]/95 via-[#071b38]/66 to-[#071b38]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071b38]/50 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[460px] flex-col justify-center px-6 py-12 md:min-h-[560px] md:px-14">
          <div className="max-w-2xl">
            <div className="text-[12px] font-semibold tracking-[0.28em] text-primary uppercase">
              {STORY_SLIDES[active].eyebrow}
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-white md:text-6xl">
              {STORY_SLIDES[active].title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
              {STORY_SLIDES[active].body}
            </p>
          </div>
          <div className="mt-10 flex gap-2">
            {STORY_SLIDES.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                aria-label={`Show ${slide.eyebrow}`}
                onClick={() => setActive(index)}
                className={[
                  "h-1.5 rounded-full transition-all duration-500",
                  index === active ? "w-12 bg-primary" : "w-6 bg-white/35 hover:bg-white/60",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-[#f7f0e8] text-[#101418]">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 md:grid-cols-[0.92fr_1.08fr] md:py-28 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={engineerImage}
              alt="Contel Africa engineering team on site"
              className="h-full min-h-[460px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center">
            <span className="text-[12px] tracking-[0.22em] text-primary uppercase">About us</span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Who we are</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#252525]/78 md:text-base">
              At Contel Africa, we design, build and deliver refined spaces that carry commercial
              value and emotional weight. From luxury homes to complex construction programmes, our
              work blends disciplined engineering with quiet, elevated design.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#252525]/78 md:text-base">
              Every project is led by specialists who understand detail, procurement and site
              realities. The result is a smoother journey from first sketch to final handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-[#101418] text-center text-xs font-semibold">
                <span>
                  <Counter value="13" suffix="+" />
                  <br />
                  Years
                </span>
              </div>
              <div className="grid h-20 w-20 place-items-center rounded-full border border-[#101418] text-center text-xs font-semibold">
                <span>
                  <Counter value="420" suffix="+" />
                  <br />
                  Projects
                </span>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-[#202020] px-5 py-3 text-sm text-white hover:bg-primary hover:text-primary-foreground"
            >
              Explore more
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LuxuryBanner() {
  return (
    <section className="bg-[#f7f0e8] px-5 pb-16 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[8px] bg-[#071b38] md:grid-cols-[1.25fr_0.85fr]">
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Build, Design & Elevate Spaces Tailored for Modern Living.
          </h2>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Book appointment
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <img
          src={residentialHome}
          alt="Modern luxury home interior and pool"
          className="h-full min-h-[280px] w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function TeamPreview() {
  return (
    <section className="bg-[#f7f0e8] px-5 pb-24 text-[#101418] lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <span className="text-[12px] tracking-[0.22em] text-primary uppercase">Our team</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Meet Our Team of Experts
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 w-full max-w-[260px] overflow-hidden rounded-[8px] bg-white shadow-xl shadow-black/10">
            <img
              src={engineerImage}
              alt="Contel Africa design and build expert"
              className="aspect-[4/5] w-full object-cover grayscale"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="font-semibold">Contel Africa Studio</h3>
              <p className="mt-1 text-sm text-[#252525]/70">Design, build and delivery experts</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const list = PROJECTS.slice(0, 4);
  return (
    <section className="border-y border-white/10 bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-28 md:py-40">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <Reveal>
            <span className="label-eyebrow text-primary">Selected work</span>
            <h2 className="display mt-5 text-5xl md:text-7xl text-balance">
              Projects that shape modern African living.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm group">
              All projects{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 md:gap-12">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
                      {p.sector}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="label-eyebrow">
                    {p.city}, {p.country} - {p.year}
                  </div>
                  <h3 className="display mt-4 text-3xl md:text-5xl tracking-tight text-balance group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-muted-foreground text-balance">{p.overview}</p>
                  <div className="mt-7 grid grid-cols-2 gap-4 max-w-sm text-sm">
                    <Fact label="Client" value={p.client} />
                    <Fact label="Scope" value={p.scope.split(",")[0]} />
                    <Fact label="Budget" value={p.budget} />
                    <Fact label="Timeline" value={p.timeline} />
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">{label}</div>
      <div className="mt-1.5">{value}</div>
    </div>
  );
}

function PresenceTeaser() {
  return (
    <section className="bg-[#f7f0e8] px-5 py-20 lg:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[8px] bg-[#1A1A1A] md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-center p-8 text-white md:p-12 lg:p-16">
            <span className="label-eyebrow text-primary">Pan-African</span>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
              A continental practice with one exacting standard.
            </h2>
            <p className="mt-6 max-w-xl text-white/70">
              From Nairobi to the whole of Africa, our delivery teams work to one standard of design
              discipline, site control and client communication.
            </p>
            <Link
              to="/presence"
              className="group mt-8 inline-flex w-max items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Explore presence
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={heroHome}
            alt="Contel Africa project delivery across Africa"
            className="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ProcessRibbon() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => setMaxScroll(Math.max(0, track.scrollWidth - viewport.clientWidth));
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    measure();

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-[#101418]/10 bg-[#f7f0e8] text-[#101418]"
      style={{ height: `calc(100vh + ${maxScroll}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-8 md:py-12 lg:px-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-5 md:mb-8">
            <div>
              <span className="label-eyebrow text-primary">Our process</span>
              <h2 className="display mt-5 text-4xl text-balance md:text-5xl">
                From brief to handover, with discipline.
              </h2>
            </div>
            <Link to="/expertise" className="group inline-flex items-center gap-2 text-sm">
              See full method{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-3 pb-4">
              {PROCESS.map((p, index) => {
                const Icon = PROCESS_ICONS[index];
                return (
                  <article
                    key={p.step}
                    className="group relative flex h-[clamp(300px,52vh,360px)] w-[260px] shrink-0 flex-col overflow-hidden rounded-[4px] border border-[#ff4b00] bg-[#ff4b00] p-6 shadow-[0_12px_28px_rgba(16,20,24,0.12)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl text-[#071b38]">{p.step}.</span>
                      <span
                        className="relative grid h-14 w-14 place-items-center"
                        aria-hidden="true"
                      >
                        <span className="absolute inset-1 rotate-6 border border-[#071b38]/20" />
                        <Icon
                          className="relative h-10 w-10 text-[#26384a] transition-transform duration-300 group-hover:scale-105"
                          strokeWidth={1.25}
                        />
                        <span className="absolute bottom-1 right-1 h-5 w-2 bg-[#071b38]/75" />
                      </span>
                    </div>

                    <h3 className="font-display mt-7 text-xl font-medium text-[#13243a]">
                      {p.title}
                    </h3>
                    <span className="mt-3 h-px w-7 bg-[#071b38]" aria-hidden="true" />
                    <p className="mt-3 text-xs leading-5 text-[#42505d]">{p.body}</p>
                  </article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#f7f0e8] px-5 py-28 text-[#101418] lg:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="label-eyebrow text-primary">In their words</span>
          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance md:text-7xl">
            Trust built one handover at a time.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.figure
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative h-full overflow-hidden rounded-[8px] bg-[#1A1A1A] p-10 text-white shadow-xl shadow-black/15"
              >
                <motion.span
                  variants={TESTIMONIAL_FILL}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 origin-bottom bg-[#5cc7bd]"
                  aria-hidden="true"
                />
                <motion.blockquote
                  variants={TESTIMONIAL_TEXT}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 text-2xl font-semibold tracking-tight text-balance leading-tight md:text-3xl"
                >
                  &quot;{t.quote}&quot;
                </motion.blockquote>
                <motion.figcaption
                  variants={TESTIMONIAL_TEXT}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 mt-10 border-t border-current/20 pt-5"
                >
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="mt-1 text-xs opacity-65">
                    {t.role} - {t.org}
                  </div>
                </motion.figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  return (
    <section className="relative overflow-hidden bg-[#071b38] px-5 py-20 text-white lg:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative z-10">
          <span className="text-sm font-semibold text-[#ff4b00]">Book Appointment</span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Get in Touch</h2>
          <form className="mt-10 space-y-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                aria-label="Full name"
                placeholder="Full Name*"
                className="h-12 rounded-[8px] border border-white/18 bg-transparent px-4 text-sm outline-none placeholder:text-white/65 focus:border-[#ff4b00]"
              />
              <input
                required
                type="email"
                aria-label="Email address"
                placeholder="Email Address*"
                className="h-12 rounded-[8px] border border-white/18 bg-transparent px-4 text-sm outline-none placeholder:text-white/65 focus:border-[#ff4b00]"
              />
            </div>
            <select
              aria-label="Service"
              defaultValue=""
              className="h-12 w-full rounded-[8px] border border-white/18 bg-[#071b38] px-4 text-sm text-white/75 outline-none focus:border-[#ff4b00]"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Real Estate</option>
              <option>Construction</option>
              <option>Interiors</option>
            </select>
            <textarea
              required
              aria-label="Your message"
              rows={6}
              placeholder="Your Message"
              className="w-full resize-none rounded-[8px] border border-white/18 bg-transparent p-4 text-sm outline-none placeholder:text-white/65 focus:border-[#ff4b00]"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-[#ff4b00] px-7 py-3.5 text-sm font-semibold text-[#ff4b00] transition-colors hover:bg-[#ff4b00] hover:text-[#071b38]"
            >
              Submit Message
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="relative min-h-[430px] lg:min-h-[520px]">
          <img
            src={worldMapDots}
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-55"
          />
          <div
            className="absolute left-[53%] top-[55%] h-4 w-4 rounded-full border-4 border-[#ff4b00]/35 bg-[#ff4b00] shadow-[0_0_0_8px_rgba(255,75,0,0.16)]"
            aria-hidden="true"
          />
          <div className="absolute right-0 top-[12%] w-[min(100%,330px)] rounded-[8px] bg-white p-3 text-[#1A1A1A] shadow-2xl sm:right-[2%] sm:top-[18%]">
            <div className="flex gap-4">
              <img
                src={heroHome}
                alt="Contel Africa Nairobi office"
                className="h-24 w-28 rounded-[6px] object-cover"
              />
              <div className="py-1">
                <div className="text-xs text-[#1A1A1A]/60">Address:</div>
                <div className="mt-1 font-semibold text-[#ff4b00]">Commercial St, Nairobi</div>
                <a
                  href="https://maps.google.com/?q=Commercial+St+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[#1A1A1A] px-5 py-2 text-xs font-semibold text-[#ff4b00]"
                >
                  Direction
                </a>
              </div>
            </div>
            <span
              className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 bg-white"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
