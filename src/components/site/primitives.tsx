import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const BUSINESS = {
  name: "Truss Metal Roofing PTY LTD",
  short: "Truss Metal Roofing",
  phone: "+61 435 732 207",
  phoneHref: "tel:+61435732207",
  location: "Perth, WA, Australia",
  blurb:
    "Perth-based Metal Roofing company servicing the Perth region. We cover all aspects of roofing.",
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className={cn("eyebrow", tone === "dark" ? "text-emerald-soft" : "text-emerald")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 text-balance text-3xl leading-[1.05] font-semibold sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteButton({
  className,
  label = "Get a Free Quote",
  variant = "emerald",
}: {
  className?: string;
  label?: string;
  variant?: "emerald" | "outline";
}) {
  return (
    <a
      href="#contact"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "emerald"
          ? "bg-emerald text-accent-foreground hover:-translate-y-0.5 hover:glow-ring"
          : "border border-current/25 text-current hover:border-emerald hover:text-emerald",
        className,
      )}
    >
      {label}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );
}

/**
 * EMPTY video placeholder — drop your own file in `src/assets` (or a URL) and
 * pass it as `src`. Until then it renders a styled empty stage.
 */
export function VideoSlot({
  src,
  poster,
  label,
  className,
  overlay = true,
}: {
  src?: string;
  poster?: string;
  label: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <div
      data-video-placeholder={src ? undefined : "true"}
      className={cn("relative overflow-hidden bg-navy-deep", className)}
    >
      {src ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,oklch(0.28_0.06_200/0.55),transparent_65%)]" />
          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <span className="grid size-14 place-items-center rounded-full border border-emerald/50 text-emerald">
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <p className="eyebrow text-navy-foreground/70">{label}</p>
            <p className="max-w-xs text-xs text-navy-foreground/45">
              Empty video slot — add your own footage here.
            </p>
          </div>
        </div>
      )}
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-navy-deep/45" />
      ) : null}
    </div>
  );
}
