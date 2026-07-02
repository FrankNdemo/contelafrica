import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Motion";

export const Route = createFileRoute("/presence")({
  head: () => ({
    meta: [
      { title: "Contact Us - Contel Africa" },
      {
        name: "description",
        content:
          "Contact Contel Africa in Nairobi to discuss construction, design, renovation and project delivery.",
      },
      { property: "og:title", content: "Contact Contel Africa" },
      {
        property: "og:description",
        content: "Start a project conversation with our Nairobi team.",
      },
    ],
  }),
  component: ContactUs,
});

const CONTACT_CARDS = [
  { title: "Our Address", value: "Commercial St, Nairobi", icon: MapPin },
  { title: "Our Email", value: "info@contelafrica.com", icon: Mail },
  { title: "Phone Number", value: "+254 720 770 033", icon: Phone },
  { title: "Opening Hours", value: "Monday-Fri: 8 AM - 5 PM", icon: Clock3 },
] as const;

const fieldClass =
  "h-13 w-full rounded-[8px] border border-[#101418]/15 bg-white px-5 text-sm text-[#101418] outline-none transition-colors placeholder:text-[#101418]/45 focus:border-[#d6972a]";

function ContactUs() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    event.currentTarget.reset();
    setSending(false);
    toast.success("Message received. Our Nairobi team will be in touch shortly.");
  }

  return (
    <>
      <section className="bg-[#f7f0e8] px-5 py-20 text-[#101418] lg:px-10 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="text-center">
            <span className="text-sm font-semibold text-[#d6972a]">Contact us</span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Get in touch</h1>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map(({ title, value, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="flex min-h-[220px] h-full flex-col items-center justify-center rounded-[8px] border border-[#101418]/12 bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d6972a] hover:shadow-lg hover:shadow-black/5">
                  <span className="grid h-14 w-14 place-items-center rounded-[8px] bg-[#d6972a] text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#101418]/60">{value}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#101418] lg:px-10 md:py-28">
        <div className="mx-auto max-w-[920px]">
          <Reveal className="text-center">
            <span className="text-sm font-semibold text-[#d6972a]">Talk to us</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Send a message anytime
            </h2>
          </Reveal>

          <form onSubmit={handleSubmit} className="mt-12 grid gap-5 sm:grid-cols-2">
            <input
              required
              name="name"
              aria-label="Your name"
              placeholder="Your Name"
              className={fieldClass}
            />
            <input
              required
              name="phone"
              aria-label="Phone number"
              placeholder="Phone Number"
              className={fieldClass}
            />
            <input
              required
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email Address"
              className={fieldClass}
            />
            <input
              required
              name="subject"
              aria-label="Subject"
              placeholder="Subject"
              className={fieldClass}
            />
            <textarea
              required
              name="message"
              aria-label="Write a message"
              rows={7}
              placeholder="Write a Message"
              className="w-full resize-none rounded-[8px] border border-[#101418]/15 bg-white p-5 text-sm text-[#101418] outline-none transition-colors placeholder:text-[#101418]/45 focus:border-[#d6972a] sm:col-span-2"
            />
            <button
              disabled={sending}
              type="submit"
              className="inline-flex w-max items-center gap-2 rounded-full bg-[#071b38] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#d6972a] hover:text-[#071b38] disabled:opacity-60 sm:col-span-2"
            >
              {sending ? "Sending..." : "Submit Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#1A1A1A]">
        <iframe
          title="Contel Africa location on Commercial Street, Nairobi"
          src="https://www.google.com/maps?q=Commercial%20St%2C%20Nairobi&output=embed"
          className="h-[420px] w-full border-0 grayscale-[20%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <ContactDetailsBand />
      </section>
    </>
  );
}

function ContactDetailsBand() {
  const details = [
    { label: "Address", value: "Commercial St, Nairobi", icon: MapPin },
    { label: "Send Email", value: "info@contelafrica.com", icon: Mail },
    { label: "Call Us", value: "+254 720 770 033", icon: Phone },
  ];

  return (
    <div className="px-5 py-10 lg:px-10">
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
    </div>
  );
}
