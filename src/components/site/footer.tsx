import { BUSINESS } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="surface-night border-t border-navy-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold text-navy-foreground">
              Truss Metal Roofing PTY LTD
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              {BUSINESS.blurb}
            </p>
            <div className="hairline mt-8 max-w-[140px]" />
          </div>

          <div>
            <p className="eyebrow text-emerald-soft">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/65">
              <li><a className="hover:text-emerald" href="#about">About us</a></li>
              <li><a className="hover:text-emerald" href="#why">Why choose us</a></li>
              <li><a className="hover:text-emerald" href="#process">Our process</a></li>
              <li><a className="hover:text-emerald" href="#projects">Projects</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-emerald-soft">Services</p>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/65">
              <li><a className="hover:text-emerald" href="#services">Metal re-roofing</a></li>
              <li><a className="hover:text-emerald" href="#services">New roof installs</a></li>
              <li><a className="hover:text-emerald" href="#services">Gutters & fascia</a></li>
              <li><a className="hover:text-emerald" href="#services">Leak repairs</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-emerald-soft">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/65">
              <li>
                <a className="hover:text-emerald" href={BUSINESS.phoneHref}>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>{BUSINESS.location}</li>
              <li>Mon – Sat · 7am – 5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-foreground/10 pt-8 text-xs text-navy-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Truss Metal Roofing PTY LTD. All rights reserved.</p>
          <p>Fully insured · Servicing the Perth metropolitan region</p>
        </div>
      </div>
    </footer>
  );
}
