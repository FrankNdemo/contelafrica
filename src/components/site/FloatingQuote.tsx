import { Link, useRouterState } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingQuote() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      className={cn(
        "fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-3 pr-5 py-3 text-sm font-medium shadow-[0_20px_60px_-15px_rgba(232,106,28,0.5)] transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none",
      )}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15">
        <MessageSquare className="h-3.5 w-3.5" />
      </span>
      Request a quote
    </Link>
  );
}
