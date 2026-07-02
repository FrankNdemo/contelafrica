import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Facebook,
  Hammer,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sofa,
} from "lucide-react";

import { Counter, Reveal } from "@/components/site/Motion";
import constructionService from "@/assets/about-service-construction.png";
import electricalService from "@/assets/about-service-electrical-design.png";
import interiorService from "@/assets/about-service-interior-design.png";
import landscapingService from "@/assets/about-service-landscaping.png";
import renovationsService from "@/assets/about-service-renovations.png";
import commercial from "@/assets/project-commercial.jpg";
import { LEADERSHIP, STATS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Contel Africa" },
      {
        name: "description",
        content:
          "A Kenyan general contractor delivering design, construction and project solutions across Africa.",
      },
      { property: "og:title", content: "About Contel Africa" },
      { property: "og:description", content: "Kenyan expertise, built for Africa." },
      { property: "og:image", content: commercial },
    ],
    links: [{ rel: "preload", as: "image", href: commercial, fetchPriority: "high" }],
  }),
  component: About,
});

const CAPABILITIES = [
  {
    title: "Renovations",
    body: "Thoughtful upgrades that preserve character while improving performance and value.",
    icon: Building2,
  },
  {
    title: "Construction",
    body: "Disciplined project delivery, renovation and new-build expertise.",
    icon: Hammer,
  },
  {
    title: "Interiors",
    body: "Refined spaces coordinated around architecture, material and daily life.",
    icon: Sofa,
  },
] as const;

const SUCCESS_IMAGE =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88";
const FEATURES_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=88";
const STORY_IMAGES = [
  {
    label: "Construction",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=86",
  },
  {
    label: "Landscaping",
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=86",
  },
  {
    label: "Renovations",
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=86",
  },
  {
    label: "Engineering",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=86",
  },
] as const;

const FEEDBACK_FILL = { rest: { scaleY: 0 }, hover: { scaleY: 1 } };
const FEEDBACK_TEXT = { rest: { color: "#ffffff" }, hover: { color: "#071b38" } };
const SERVICE_ARTWORK = [
  interiorService,
  electricalService,
  renovationsService,
  landscapingService,
  constructionService,
] as const;
const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
] as const;
const FEATURE_CARD = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.20)", boxShadow: "0 0 0 rgba(214,151,42,0)" },
  hover: { y: -8, borderColor: "#d6972a", boxShadow: "0 18px 42px rgba(214,151,42,0.16)" },
};
const FEATURE_ICON = {
  rest: { scale: 1, rotate: 0, color: "#ffffff", borderColor: "rgba(255,255,255,0.15)" },
  hover: { scale: 1.1, rotate: 4, color: "#d6972a", borderColor: "#d6972a" },
};

function About() {
  return (
    <>
      <section className="px-2 pb-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-[8px] md:min-h-[560px]">
          <img
            src={commercial}
            alt="Contel Africa commercial interior"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#071b38]/58" />
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-5 text-center text-white md:min-h-[560px]">
            <span className="text-sm font-semibold text-[#d6972a]">Contel Africa</span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-8xl">About Us</h1>
            <span className="mt-5 rounded-full border border-white/35 px-4 py-2 text-xs">
              Home / About Us
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f0e8] px-5 pb-12 pt-16 text-[#101418] lg:px-10 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-end">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.22em] text-[#d6972a] uppercase">
                Our achievement
              </span>
              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Our Kenyan success story, built across Africa.
              </h2>
            </Reveal>
            <div className="grid grid-cols-3 gap-5">
              {STATS.slice(0, 3).map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="border-l border-[#101418]/15 pl-4">
                    <div className="font-display text-3xl text-[#d6972a] md:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-[10px] font-semibold tracking-[0.12em] text-[#101418]/60 uppercase">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="group relative mt-10 aspect-[16/6] min-h-[260px] overflow-hidden rounded-[8px]">
              <img
                src={SUCCESS_IMAGE}
                alt="Contemporary African luxury residence"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-4 mt-12 grid grid-cols-2 items-end gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
              {SERVICE_ARTWORK.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={
                    [
                      "Interior design",
                      "Electrical design",
                      "Renovations",
                      "Landscaping",
                      "Construction",
                    ][index]
                  }
                  className="mx-auto h-36 w-full object-contain transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-110 hover:drop-shadow-[0_18px_18px_rgba(7,27,56,0.18)] md:h-40"
                  loading="lazy"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-5 py-20 text-white lg:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] text-[#d6972a] uppercase">
              Our story
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Your trusted Kenyan Contractor partner.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-white/65">
              Established in Kenya in 1992, Contel Africa has grown from a focused general
              contractor into an integrated design, construction and project-delivery practice
              serving ambitious clients across the continent.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border-l border-[#d6972a] pl-5">
                <h3 className="font-semibold text-[#d6972a]">Vision</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  To be a world-class African building contractor, delivering coordinated
                  construction and engineering solutions across the continent.
                </p>
              </div>
              <div className="border-l border-[#d6972a] pl-5">
                <h3 className="font-semibold text-[#d6972a]">Mission</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  To deliver solutions that meet and exceed client expectations through quality,
                  integrity and dependable timelines.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#d6972a] px-5 py-3 text-sm text-[#d6972a] hover:bg-[#d6972a] hover:text-[#071b38]"
            >
              Talk to our team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {STORY_IMAGES.map((image, index) => (
                <figure
                  key={image.label}
                  className={`group relative overflow-hidden rounded-[8px] ${index % 2 ? "translate-y-8" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={`${image.label} by Contel Africa`}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-64"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b38]/90 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f0e8] px-5 py-20 text-[#101418] lg:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] text-[#d6972a] uppercase">
                Our team
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Meet our leadership team
              </h2>
            </div>
            <Link to="/careers" className="rounded-full bg-[#1A1A1A] px-5 py-3 text-sm text-white">
              View opportunities
            </Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {LEADERSHIP.slice(0, 3).map((person, index) => (
              <Reveal key={person.name} delay={index * 0.06}>
                <article className="group relative pb-8">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-white">
                    <img
                      src={TEAM_IMAGES[index]}
                      alt={person.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                      {[Facebook, Linkedin, Instagram].map((Icon, iconIndex) => (
                        <span
                          key={iconIndex}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#071b38] shadow-md transition-colors group-hover:bg-[#d6972a]"
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-6 bottom-0 rounded-[8px] bg-white p-6 shadow-xl shadow-black/10">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <a
                      href={`tel:${person.phone}`}
                      className="mt-1 block text-xs text-[#d6972a] hover:underline"
                    >
                      {person.phone}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-5 py-20 text-white lg:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.22em] text-[#d6972a] uppercase">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Latest client feedback
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <motion.figure
                key={item.name}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-7"
              >
                <motion.span
                  variants={FEEDBACK_FILL}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 origin-bottom bg-[#5cc7bd]"
                  aria-hidden="true"
                />
                <motion.div variants={FEEDBACK_TEXT} className="relative z-10 text-[#d6972a]">
                  ★★★★★
                </motion.div>
                <motion.blockquote
                  variants={FEEDBACK_TEXT}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 mt-5 text-sm leading-6"
                >
                  &quot;{item.quote}&quot;
                </motion.blockquote>
                <motion.figcaption
                  variants={FEEDBACK_TEXT}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 mt-7 border-t border-current/20 pt-5"
                >
                  <div className="font-semibold">{item.name}</div>
                  <div className="mt-1 text-xs opacity-55">
                    {item.role}, {item.org}
                  </div>
                </motion.figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <TopFeatures />

      <section className="bg-[#f7f0e8] px-5 py-20 text-[#101418] lg:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 rounded-[8px] bg-[#071b38] p-8 text-white shadow-sm md:p-14 lg:grid-cols-[1.4fr_auto]">
          <div>
            <span className="text-xs font-semibold tracking-[0.22em] text-[#d6972a] uppercase">
              Partner with us
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Work with a Kenyan engineering partner that thinks in decades.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#071b38] px-6 py-4 text-sm font-medium text-white hover:bg-[#d6972a] hover:text-[#071b38]"
          >
            Start a project{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <ContactDetailsBand />
    </>
  );
}

function TopFeatures() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed px-5 py-20 lg:px-10 md:py-28"
      style={{ backgroundImage: `url(${FEATURES_IMAGE})` }}
    >
      <span className="absolute inset-0 bg-[#071b38]/35" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 rounded-[8px] bg-[#1A1A1A] p-8 text-white shadow-2xl md:p-14 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Top Features</h2>
          <Link
            to="/services"
            className="mt-8 inline-flex rounded-full border border-white/70 px-6 py-3 text-sm hover:border-[#d6972a] hover:text-[#d6972a]"
          >
            Our services
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
          {CAPABILITIES.map(({ title, icon: Icon }) => (
            <motion.article
              key={title}
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={FEATURE_CARD}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-[22px] border bg-[#242424] px-6 py-10 text-center"
            >
              <motion.span
                variants={FEATURE_ICON}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto grid h-20 w-20 place-items-center rounded-[18px] border"
              >
                <Icon className="h-8 w-8" strokeWidth={1.6} />
              </motion.span>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <div className="mt-3 text-sm text-white/55">Contel Africa</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactDetailsBand() {
  const details = [
    { label: "Address", value: "Commercial St, Nairobi", icon: MapPin },
    { label: "Send Email", value: "info@contelafrica.com", icon: Mail },
    { label: "Call Us", value: "+254 720 770 033", icon: Phone },
  ];

  return (
    <section className="bg-[#1A1A1A] px-5 py-16 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[8px] bg-[#5cc7bd] px-8 py-10 text-[#071b38] md:grid-cols-3 md:px-12">
        {details.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#071b38]/20 bg-white/18">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d6972a]">
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </span>
            <div>
              <div className="text-sm text-[#071b38]/70">{label}</div>
              <div className="mt-1 text-lg font-semibold leading-tight">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
