import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (latest) => {
    const target = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (Number.isNaN(target)) return value;
    const decimals = (value.split(".")[1] ?? "").length;
    const n = (latest / 100) * target;
    if (value.includes(",")) return Math.round(n).toLocaleString();
    return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  });

  useEffect(() => {
    if (inView) mv.set(100);
  }, [inView, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix && <span className="text-primary">{suffix}</span>}
    </span>
  );
}
