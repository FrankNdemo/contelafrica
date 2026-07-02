import { useMemo, useRef, useState } from "react";
import { ArrowUpRight, Globe2, Search, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { googleSearchLinks, searchSite } from "@/lib/search-data";
import { cn } from "@/lib/utils";

type SiteSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const siteResults = useMemo(() => searchSite(query), [query]);
  const webLinks = useMemo(() => googleSearchLinks(query), [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        onOpenChange(nextOpen);
        if (nextOpen) {
          window.setTimeout(() => inputRef.current?.focus(), 80);
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="top-4 max-h-[calc(100dvh-2rem)] w-[calc(100vw-1.5rem)] max-w-3xl translate-y-0 overflow-hidden rounded-[8px] border-[#d9e4ea] bg-[#f7f7f4] p-0 text-[#071b38] shadow-2xl sm:top-12 sm:max-h-[calc(100vh-6rem)] sm:w-full sm:rounded-[8px] lg:top-[9rem] lg:max-h-[calc(100vh-9.5rem)]"
      >
        <DialogTitle className="sr-only">Search Contel Africa</DialogTitle>
        <DialogDescription className="sr-only">
          Search site content and find broader Contel-related Google links.
        </DialogDescription>

        <div className="border-b border-[#d9e4ea] bg-white px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Search className="h-5 w-5 shrink-0 text-[#ff4b00]" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services, projects, offices, insights..."
              className="h-11 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0 sm:h-12 sm:text-base"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#526174] hover:bg-[#eef5f6] hover:text-[#071b38]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <DialogClose
              aria-label="Close search"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ff4b00]/35 text-[#ff4b00] transition-colors hover:bg-[#ff4b00] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4b00]/60"
            >
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </div>

        <div className="no-scrollbar max-h-[calc(100dvh-8rem)] overflow-y-auto px-4 py-4 sm:max-h-[calc(100vh-12rem)] sm:px-5 sm:py-5 lg:max-h-[calc(100vh-15rem)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526174]">
              {hasQuery
                ? `${siteResults.length} site result${siteResults.length === 1 ? "" : "s"}`
                : "Popular site content"}
            </p>
          </div>

          {siteResults.length ? (
            <div className="mt-4 grid gap-2">
              {siteResults.map((result) => (
                <SearchResultLink
                  key={`${result.eyebrow}-${result.href}-${result.title}`}
                  href={result.href}
                  eyebrow={result.eyebrow}
                  title={result.title}
                  description={result.description}
                  onClick={() => onOpenChange(false)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-4 border border-dashed border-[#cbd8df] bg-white px-5 py-8 text-sm text-[#526174]">
              No matching site content yet. Try a service like road works, renovations, electrical,
              landscaping or KCAA.
            </div>
          )}

          <div className="mt-7 border-t border-[#d9e4ea] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526174]">
              More Contel links from Google
            </p>
            <div className="mt-4 grid gap-2">
              {webLinks.map((link) => (
                <SearchResultLink
                  key={link.href}
                  href={link.href}
                  eyebrow={link.eyebrow}
                  title={link.title}
                  description={link.description}
                  external
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SearchResultLink({
  href,
  eyebrow,
  title,
  description,
  external,
  onClick,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  external?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "group flex items-start justify-between gap-3 border border-[#e0e8ec] bg-white p-3 text-left transition-colors hover:border-[#ff4b00] sm:gap-4 sm:p-4",
        external && "bg-[#eef5f6]",
      )}
    >
      <span className="min-w-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff4b00]">
          {eyebrow}
        </span>
        <span className="mt-1 block text-sm font-semibold leading-5 text-[#071b38] sm:text-base sm:leading-6">
          {title}
        </span>
        <span className="mt-1 line-clamp-2 block text-sm leading-5 text-[#526174]">
          {description}
        </span>
      </span>
      {external ? (
        <Globe2 className="mt-1 h-4 w-4 shrink-0 text-[#526174] transition-colors group-hover:text-[#ff4b00]" />
      ) : (
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#526174] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff4b00]" />
      )}
    </a>
  );
}
