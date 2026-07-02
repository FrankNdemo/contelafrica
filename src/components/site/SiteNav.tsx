import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  X,
  Youtube,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import contelLogo from "@/assets/contel-logo.png";
import { SiteSearch } from "@/components/site/SiteSearch";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/presence", label: "Contact us" },
] as const;

const EXPERTISE_MENU = [
  { to: "/expertise", label: "Our Expertise", description: "How we think and deliver" },
  { to: "/contact", label: "Request a Quote", description: "Start a project with us" },
  { to: "/careers", label: "Careers", description: "Build Africa with Contel" },
] as const;

export function ContelLogo() {
  return (
    <img
      src={contelLogo}
      alt="Contel Africa"
      className="-ml-2 block h-16 w-44 object-contain sm:h-20 sm:w-56 lg:-ml-4 lg:h-24 lg:w-64 xl:h-28 xl:w-72"
    />
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <div className="site-navigation hidden border-b border-[#d9e4ea] bg-[#eef5f6] text-[12px] text-[#071b38] md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-1.5 lg:px-10">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@contelafrica.com"
              className="inline-flex items-center gap-2 hover:text-[#5cc7bd]"
            >
              <Mail className="h-3.5 w-3.5 text-[#d6972a]" />
              info@contelafrica.com
            </a>
            <a
              href="tel:+254720770033"
              className="inline-flex items-center gap-2 hover:text-[#5cc7bd]"
            >
              <Phone className="h-3.5 w-3.5 text-[#d6972a]" />
              +254 720 770 033
            </a>
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-8 w-8 place-items-center rounded-full bg-[#5cc7bd] text-[#071b38] transition-colors hover:bg-[#d6972a]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <header className="site-navigation sticky top-0 z-50 w-full bg-background shadow-xl shadow-black/15">
        <div className="w-full bg-background transition-colors duration-500">
          <div className="mx-auto max-w-[1440px] px-3 sm:px-5 lg:px-10">
            <div className="grid min-h-[82px] grid-cols-[auto_1fr_auto] items-center gap-3 px-1 py-3 sm:min-h-[96px] sm:gap-5 md:py-4 lg:min-h-[118px] lg:gap-8 lg:py-6">
              <Link
                to="/"
                className="flex min-w-0 items-center group"
                aria-label="Contel Africa home"
              >
                <ContelLogo />
              </Link>

              <nav className="hidden lg:flex justify-center items-center gap-6">
                {NAV.slice(0, 4).map((item) => {
                  const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "whitespace-nowrap px-2 py-2 text-[15px] font-semibold tracking-tight transition-colors",
                        active
                          ? "text-primary bg-primary/10 hover:text-[#d6972a]"
                          : "text-foreground/78 hover:text-[#d6972a]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div
                  className="group relative"
                  onMouseEnter={() => setExpertiseOpen(true)}
                  onMouseLeave={() => setExpertiseOpen(false)}
                  onFocus={() => setExpertiseOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setExpertiseOpen(false);
                  }}
                >
                  <Link
                    to="/expertise"
                    aria-haspopup="menu"
                    aria-expanded={expertiseOpen}
                    className={cn(
                      "inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-[15px] font-semibold tracking-tight transition-colors",
                      ["/expertise", "/contact", "/careers"].some((path) =>
                        pathname.startsWith(path),
                      )
                        ? "bg-primary/10 text-primary hover:text-[#d6972a]"
                        : "text-foreground/78 hover:text-[#d6972a]",
                    )}
                  >
                    Expertise
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div
                    role="menu"
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200",
                      expertiseOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-xl border border-border bg-background p-2 shadow-2xl shadow-black/20">
                      {EXPERTISE_MENU.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          role="menuitem"
                          className="group/item flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-primary/10 hover:text-[#d6972a]"
                        >
                          <span>
                            <span className="block text-sm font-semibold">{item.label}</span>
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#d6972a]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {NAV.slice(4).map((item) => {
                  const active = pathname.startsWith(item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "whitespace-nowrap px-2 py-2 text-[15px] font-semibold tracking-tight transition-colors",
                        active
                          ? "bg-primary/10 text-primary hover:text-[#d6972a]"
                          : "text-foreground/78 hover:text-[#d6972a]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center justify-self-end gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/60 text-foreground transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:h-[52px] sm:w-[52px] md:h-14 md:w-14"
                >
                  <Search className="h-5 w-5" strokeWidth={1.7} />
                </button>

                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="grid h-12 w-12 place-items-center rounded-full border border-white/60 text-foreground transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 lg:hidden"
                      aria-label="Open menu"
                    >
                      {open ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="site-navigation bg-background border-border w-[min(92vw,430px)] p-0 sm:max-w-md"
                  >
                    <div className="flex h-full flex-col px-5 py-8 sm:px-6 sm:py-10">
                      <span className="label-eyebrow">Menu</span>
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          setSearchOpen(true);
                        }}
                        className="mt-7 flex items-center justify-between border-y border-border py-4 font-display text-xl tracking-tight transition-colors hover:text-[#d6972a] sm:mt-8 sm:py-5 sm:text-2xl"
                      >
                        Search site
                        <Search className="h-5 w-5 text-muted-foreground" />
                      </button>
                      <nav className="mt-6 flex flex-col sm:mt-8">
                        {NAV.slice(0, 4).map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between border-b border-border py-4 font-display text-xl tracking-tight transition-colors hover:text-[#d6972a] sm:py-5 sm:text-2xl"
                          >
                            {item.label}
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d6972a]" />
                          </Link>
                        ))}
                        <div className="border-b border-border py-4 sm:py-5">
                          <div className="flex items-center gap-2 font-display text-xl tracking-tight sm:text-2xl">
                            Expertise <ChevronDown className="h-5 w-5 text-primary" />
                          </div>
                          <div className="mt-3 flex flex-col border-l border-primary/35 pl-4">
                            {EXPERTISE_MENU.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between py-3 text-base font-semibold transition-colors hover:text-[#d6972a]"
                              >
                                {item.label}
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                              </Link>
                            ))}
                          </div>
                        </div>
                        {NAV.slice(4).map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between border-b border-border py-4 font-display text-xl tracking-tight transition-colors hover:text-[#d6972a] sm:py-5 sm:text-2xl"
                          >
                            {item.label}
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                          </Link>
                        ))}
                      </nav>
                      <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 text-sm font-medium"
                      >
                        Book appointment
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
