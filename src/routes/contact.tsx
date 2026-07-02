import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Reveal } from "@/components/site/Motion";
import { ContactBand } from "@/components/site/ContactBand";
import { SERVICES } from "@/lib/site-data";
import quoteHero from "@/assets/quote-hero.jpg";

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Request a Quote - Contel Africa" },
      {
        name: "description",
        content:
          "Request a tailored quote for construction, engineering, interiors, landscaping or telecommunications work in Kenya.",
      },
      { property: "og:title", content: "Request a Quote - Contel Africa" },
      {
        property: "og:description",
        content:
          "Tell us about your project and receive a structured response from the right Contel Africa specialist.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: quoteHero, fetchPriority: "high" }],
  }),
  component: Quote,
});

const schema = z
  .object({
    name: z.string().trim().min(2, "Your name is required").max(100),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    email: z.string().trim().email("Enter a valid email").max(255),
    service: z.string().min(1, "Choose a service"),
    customService: z.string().trim().max(160).optional().or(z.literal("")),
    budget: z.string().trim().max(80).optional().or(z.literal("")),
    message: z.string().trim().min(20, "Tell us a little more - at least 20 characters").max(2000),
  })
  .superRefine((values, context) => {
    if (values.service === "other" && !values.customService) {
      context.addIssue({
        code: "custom",
        path: ["customService"],
        message: "Enter the service you need",
      });
    }
  });

type FormValues = z.infer<typeof schema>;

function Quote() {
  const { service: requestedService } = Route.useSearch();
  const knownService = SERVICES.some((service) => service.slug === requestedService)
    ? requestedService
    : "";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: knownService,
      customService: "",
      budget: "",
      message: "",
    },
  });

  const selectedService = watch("service");

  function onSubmit(values: FormValues) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        toast.success("Thanks - a Contel specialist will respond within one working day.");
        reset();
        resolve();
        console.log("quote submit", values);
      }, 700);
    });
  }

  return (
    <>
      <section className="px-2 pb-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-[8px] md:min-h-[560px]">
          <img
            src={quoteHero}
            alt="African engineers reviewing project plans"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#071b38]/62" />
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-5 text-center text-white md:min-h-[560px]">
            <span className="text-sm font-semibold text-[#d6972a]">Contel Africa</span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-8xl">
              Request a Quote
            </h1>
            <span className="mt-5 rounded-full border border-white/35 px-4 py-2 text-xs">
              Home / Quote
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#f7f7f4] text-[#071b38]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-24">
          <Reveal>
            <div>
              <span className="label-eyebrow text-primary">Project enquiry</span>
              <h2 className="display mt-4 text-4xl md:text-5xl">Tell us what you need.</h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-[#071b38]/80">
                Share the project location, current stage and intended programme. We will route your
                request to the right specialist.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} className={inputCls} placeholder="Full name" />
                  </Field>
                  <Field label="Company" error={errors.company?.message}>
                    <input {...register("company")} className={inputCls} placeholder="Optional" />
                  </Field>
                </div>

                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Service" error={errors.service?.message}>
                    <select {...register("service")} className={inputCls}>
                      <option value="">Select service</option>
                      {SERVICES.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Other - enter service manually</option>
                    </select>
                  </Field>
                  <Field label="Budget amount (optional)" error={errors.budget?.message}>
                    <input
                      {...register("budget")}
                      inputMode="decimal"
                      className={inputCls}
                      placeholder="e.g. KSh 5,000,000"
                    />
                  </Field>
                </div>

                {selectedService === "other" && (
                  <Field label="Service required" error={errors.customService?.message}>
                    <input
                      {...register("customService")}
                      className={inputCls}
                      placeholder="Type the service you need"
                      autoFocus
                    />
                  </Field>
                )}

                <Field label="Project brief" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about the project, site, programme and any constraints."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-3.5 pl-5 pr-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Request quote"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside>
              <div className="relative overflow-hidden">
                <iframe
                  title="Contel Africa location on Commercial Street, Nairobi"
                  src="https://www.google.com/maps?q=Commercial%20St%2C%20Nairobi%2C%20Kenya&output=embed"
                  className="h-[440px] w-full border-0 lg:h-[560px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 86%, transparent 100%)",
                    maskImage: "radial-gradient(ellipse at center, black 86%, transparent 100%)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-start gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Contel Africa - Nairobi</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Commercial St, Nairobi, Kenya
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-[rgba(92,199,189,0.48)] bg-[rgba(92,199,189,0.16)] px-4 py-3 text-sm text-[#071b38] outline-none transition-colors placeholder:text-[#071b38]/45 focus:border-[#5cc7bd] focus:bg-[rgba(92,199,189,0.22)]";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#071b38]">
        {label}
      </div>
      {children}
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </label>
  );
}
