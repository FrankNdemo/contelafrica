import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_DETAILS = [
  { label: "Address", value: "Commercial St, Nairobi", icon: MapPin },
  { label: "Send Email", value: "info@contelafrica.com", icon: Mail },
  { label: "Call Us", value: "+254 720 770 033", icon: Phone },
];

export function ContactBand() {
  return (
    <section
      aria-label="Contact information"
      className="bg-[#242424] px-4 py-10 sm:px-5 sm:py-16 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1280px] gap-6 rounded-[8px] bg-[#5cc7bd] px-4 py-8 text-[#071b38] sm:gap-8 sm:px-8 sm:py-10 md:grid-cols-3 md:px-12">
        {CONTACT_DETAILS.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex min-w-0 items-center gap-3 sm:gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#071b38]/20 bg-white/18 sm:h-16 sm:w-16">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff4b00] text-[#071b38] sm:h-10 sm:w-10">
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </span>
            <div className="min-w-0">
              <div className="text-sm text-[#071b38]/75">{label}</div>
              <div className="mt-1 break-words text-base font-semibold leading-tight text-[#071b38] sm:text-lg lg:text-xl">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
