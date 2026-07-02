import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { SERVICES, type Service } from "@/lib/site-data";
import { Reveal } from "@/components/site/Motion";
import { ContactBand } from "@/components/site/ContactBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Contel Africa" },
      {
        name: "description",
        content:
          "Integrated construction, interiors, engineering, landscaping, telecommunications and infrastructure services across Kenya.",
      },
      { property: "og:title", content: "Services - Contel Africa" },
      {
        property: "og:description",
        content: "Specialist disciplines delivered through one accountable project team.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const toggleCard = (slug: string) => {
    setFlipped((current) => (current === slug ? null : slug));
  };

  return (
    <main className="bg-[#f7f7f4] text-[#071b38]">
      <section className="mx-auto max-w-[1180px] px-5 pb-12 pt-20 text-center lg:px-10 lg:pt-24">
        <Reveal>
          <span className="mx-auto block h-0.5 w-16 bg-[#ff4b00]" />
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Our services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#526174] md:text-base">
            Integrated design, engineering and construction expertise for modern commercial,
            institutional and infrastructure environments.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-24 lg:px-10">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={(index % 4) * 0.05}
              className={index % 2 ? "md:mt-10" : ""}
            >
              <FlipServiceCard
                service={service}
                flipped={flipped === service.slug}
                onFlip={() => toggleCard(service.slug)}
              />
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

function ServiceImage({ service, onFlip }: { service: Service; onFlip?: () => void }) {
  const content = (
    <>
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b38]/25 to-transparent" />
      {onFlip && (
        <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#071b38] shadow-md transition-transform group-hover/image:rotate-12">
          <RotateCcw className="h-4 w-4" />
        </span>
      )}
    </>
  );

  return onFlip ? (
    <button
      type="button"
      onClick={onFlip}
      aria-label={`View services included in ${service.title}`}
      title="View included services"
      className="group/image relative block h-[280px] w-full overflow-hidden text-left md:h-[320px]"
    >
      {content}
    </button>
  ) : (
    <div className="group/image relative h-[280px] overflow-hidden md:h-[320px]">{content}</div>
  );
}

function ServiceIcon({ service }: { service: Service }) {
  if (!service.icon) return null;
  return (
    <span className="pointer-events-none absolute -bottom-5 left-6 z-10 h-[76px] w-24 overflow-hidden drop-shadow-[0_10px_14px_rgba(7,27,56,0.16)]">
      <img
        src={service.icon}
        alt=""
        aria-hidden="true"
        className="h-24 w-24 object-contain object-top"
      />
    </span>
  );
}

function ServiceBody({ service, onFlip }: { service: Service; onFlip?: () => void }) {
  return (
    <div className="flex min-h-[250px] flex-col px-7 pb-7 pt-16 md:px-9">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff4b00]">
        {service.category}
      </span>
      <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-[28px]">{service.title}</h2>
      <p className="mt-4 text-sm leading-6 text-[#526174]">{service.description}</p>
      {onFlip ? (
        <button
          type="button"
          onClick={onFlip}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#ff4b00] hover:text-[#071b38]"
        >
          View service <RotateCcw className="h-4 w-4" />
        </button>
      ) : (
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#ff4b00] hover:text-[#071b38]"
        >
          View service <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function FlipServiceCard({
  service,
  flipped,
  onFlip,
}: {
  service: Service;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <article className="h-[640px] [perspective:1400px] md:h-[690px]">
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div
          className={`absolute inset-0 overflow-hidden border-b-2 border-[#ff4b00] bg-white shadow-[0_14px_40px_rgba(7,27,56,0.08)] [backface-visibility:hidden] ${flipped ? "pointer-events-none" : ""}`}
        >
          <div className="relative">
            <ServiceImage service={service} onFlip={onFlip} />
            <ServiceIcon service={service} />
          </div>
          <ServiceBody service={service} onFlip={onFlip} />
        </div>

        <div
          className={`no-scrollbar absolute inset-0 overflow-y-auto border-b-2 border-[#ff4b00] bg-[#071b38] p-7 text-white shadow-[0_14px_40px_rgba(7,27,56,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-9 ${flipped ? "" : "pointer-events-none"}`}
        >
          <div className="flex items-start justify-between gap-5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff4b00]">
                Services include
              </span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-[28px]">
                {service.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onFlip}
              aria-label={`Return to ${service.title}`}
              title="Return to service overview"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/35 transition-colors hover:border-[#ff4b00] hover:text-[#ff4b00]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-7 grid gap-2">
            {service.features?.map((feature) => (
              <details key={feature.title} className="group border-b border-white/10 pb-2">
                <summary className="flex cursor-pointer list-none items-start gap-3 py-2 text-sm leading-5 text-white/85 marker:content-none">
                  <span className="flex-1 font-medium">{feature.title}</span>
                  <span className="text-lg leading-4 text-[#ff4b00] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-3 pr-5 text-xs leading-5 text-white/62">{feature.detail}</p>
              </details>
            ))}
          </div>
          <Link
            to="/contact"
            search={{ service: service.slug }}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#ff4b00] hover:text-white"
          >
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
