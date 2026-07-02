import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_DETAILS = [
  { label: "Address", value: "Commercial St, Nairobi", icon: MapPin },
  { label: "Send Email", value: "info@contelafrica.com", icon: Mail },
  { label: "Call Us", value: "+254 720 770 033", icon: Phone },
];

export function ContactBand() {
  return (
    <section aria-label="Contact information" className="bg-[#242424] px-5 py-16 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[8px] bg-[#5cc7bd] px-8 py-10 text-[#071b38] md:grid-cols-3 md:px-12">
        {CONTACT_DETAILS.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#071b38]/20 bg-white/18">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d6972a] text-[#071b38]">
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </span>
            <div>
              <div className="text-sm text-[#071b38]/75">{label}</div>
              <div className="mt-1 text-xl font-semibold leading-tight text-[#071b38]">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
