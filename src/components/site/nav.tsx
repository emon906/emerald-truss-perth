import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "./primitives";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-foreground/10 bg-navy-deep/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-emerald/60 text-emerald">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 13 12 5l10 8" />
              <path d="M5 13v6h14v-6" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight text-navy-foreground">
              TRUSS METAL ROOFING
            </span>
            <span className="block text-[10px] tracking-[0.28em] text-navy-foreground/50">
              PERTH · WA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-[0.14em] text-navy-foreground/70 uppercase transition-colors hover:text-emerald"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="hidden text-sm font-semibold text-navy-foreground/85 transition-colors hover:text-emerald sm:block"
          >
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm bg-emerald px-5 py-3 text-xs font-bold tracking-[0.12em] text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            Free Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center border border-navy-foreground/20 text-navy-foreground lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-navy-foreground/10 bg-navy-deep/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="grid gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.14em] text-navy-foreground/80 uppercase"
              >
                {l.label}
              </a>
            ))}
            <a href={BUSINESS.phoneHref} className="text-sm font-semibold text-emerald">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
