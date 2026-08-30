import heroRoof from "@/assets/hero-roof.jpg";
import detailSeam from "@/assets/detail-seam.jpg";
import crewInstall from "@/assets/crew-install.jpg";
import { BUSINESS, QuoteButton, Reveal, SectionHeading, VideoSlot } from "./primitives";

/* ------------------------------- HERO ---------------------------------- */

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      {/* Cinematic still layer */}
      <img
        src={heroRoof}
        alt="Dusk view of a Perth home with a dark standing seam metal roof"
        width={1920}
        height={1280}
        className="slow-zoom absolute inset-0 size-full object-cover opacity-85"
      />
      {/* EMPTY background video slot #1 — add your own footage */}
      <VideoSlot
        label="Background video slot 01"
        overlay={false}
        className="absolute inset-0 size-full opacity-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,oklch(0.18_0.055_262/0.92),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-36 pb-16 lg:px-10 lg:pb-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-emerald-soft">
            <span className="h-px w-10 bg-emerald" />
            Perth · Western Australia
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.94] font-semibold text-navy-foreground sm:text-6xl lg:text-8xl">
            Metal roofs built
            <span className="block text-emerald">to outlive the weather.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            {BUSINESS.blurb} Precision-installed Colorbond and standing seam systems, finished
            to a standard you can see from the street.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <QuoteButton />
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 rounded-sm border border-navy-foreground/25 px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-navy-foreground/15 pt-8 sm:grid-cols-4">
            {[
              ["15+", "Years on Perth roofs"],
              ["900+", "Roofs completed"],
              ["25 yr", "Workmanship focus"],
              ["100%", "Licensed & insured"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-semibold text-navy-foreground lg:text-3xl">
                  {value}
                </dt>
                <dd className="mt-2 text-xs tracking-wide text-navy-foreground/55 uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ MARQUEE -------------------------------- */

export function Marquee() {
  const items = [
    "Colorbond® specialists",
    "Re-roofing",
    "New builds",
    "Gutters & downpipes",
    "Leak detection",
    "Storm repairs",
    "Insulation upgrades",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-5">
      <div className="marquee-track flex w-max gap-14 pr-14">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-14 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase"
          >
            {item}
            <span className="size-1 rounded-full bg-emerald" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ SERVICES ------------------------------- */

const SERVICES = [
  {
    title: "Metal Re-Roofing",
    body: "Full tile-to-metal conversions and sheet replacements, including removal, batten checks and new sarking.",
  },
  {
    title: "New Roof Installations",
    body: "New builds and extensions set out to plan, with clean ridge lines, flashings and valley detailing.",
  },
  {
    title: "Standing Seam & Architectural",
    body: "Concealed-fix architectural profiles for designer homes where every seam is visible from the street.",
  },
  {
    title: "Gutters, Fascia & Downpipes",
    body: "Colorbond gutter and fascia replacement, box gutters, leaf guard and correctly graded stormwater.",
  },
  {
    title: "Leak Detection & Repairs",
    body: "Diagnosis of persistent leaks, resealing, flashing rectification and storm damage make-safe.",
  },
  {
    title: "Roof Maintenance Plans",
    body: "Scheduled inspections, screw and seal checks, and reporting for homeowners and strata managers.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Every aspect of roofing, handled by one crew."
            intro="From a single leak to a complete architectural re-roof, the same team scopes, installs and signs off the work."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-secondary lg:p-10">
                <span className="font-display text-xs tracking-[0.2em] text-emerald">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-8 inline-block h-px w-10 bg-emerald transition-all duration-500 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- ABOUT -------------------------------- */

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative">
            <img
              src={detailSeam}
              alt="Close detail of premium standing seam metal roofing panels"
              loading="lazy"
              width={1280}
              height={1600}
              className="lift aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden max-w-[240px] bg-navy p-6 lg:block">
              <p className="font-display text-3xl font-semibold text-navy-foreground">15+</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-navy-foreground/60 uppercase">
                Years roofing the Perth region
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <SectionHeading
              eyebrow="About Truss Metal Roofing"
              title="A Perth roofing company that treats detail as the product."
              intro="Truss Metal Roofing PTY LTD is a Perth-based metal roofing company servicing the Perth region. We cover all aspects of roofing — and we do it with fixed scopes, tidy sites and honest reporting."
            />
            <ul className="mt-10 space-y-6">
              {[
                ["Owner on every job", "The person who quotes your roof is on site while it is installed."],
                ["Australian-made materials", "Colorbond® steel and compliant fixings rated for WA conditions."],
                ["Clean, safe sites", "Full edge protection, daily clean-downs and magnet sweeps before we leave."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-2 size-2 shrink-0 rotate-45 bg-emerald" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- WHY US ------------------------------- */

export function WhyUs() {
  const points = [
    { k: "Fixed, itemised quotes", v: "No vague allowances. You see profile, colour, quantities and inclusions before you commit." },
    { k: "Weather-first engineering", v: "Fixings, laps and flashings specified for Perth's coastal wind and summer heat cycles." },
    { k: "One accountable crew", v: "No subcontractor churn — the same installers from strip-out to final flashing." },
    { k: "Photo documentation", v: "Progress photos of every hidden layer, so you know what's under the sheets." },
  ];

  return (
    <section id="why" className="surface-night relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-emerald/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why choose us"
            title="Premium isn't the finish. It's the method."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.k} delay={i * 90}>
              <div className="border-t border-navy-foreground/15 pt-8">
                <h3 className="text-xl font-semibold text-navy-foreground">{p.k}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-foreground/65">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- FULL-WIDTH VIDEO ---------------------------- */

export function VideoFeature() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="On the tools"
            title="See a Truss roof come together."
            intro="A full-width stage reserved for your own footage — install time-lapses, drone flyovers or client walkthroughs."
            align="center"
          />
        </Reveal>
      </div>
      <Reveal delay={120}>
        {/* EMPTY full-width video section — add your own footage */}
        <VideoSlot
          label="Full-width video section"
          overlay={false}
          className="mt-14 aspect-[21/9] w-full min-h-[320px]"
        />
      </Reveal>
    </section>
  );
}

/* ------------------------------- PROCESS ------------------------------- */

const STEPS = [
  ["Site inspection", "We measure, photograph and check structure, battens and drainage — not a driveway guess."],
  ["Fixed proposal", "An itemised scope with profile, colour, timeline and inclusions, sent within 48 hours."],
  ["Strip & prepare", "Safe removal, batten repairs, new sarking and insulation where required."],
  ["Precision install", "Sheets set out to line, flashings folded on site, fixings torqued to spec."],
  ["Handover & warranty", "Final clean, photo report and workmanship warranty documentation."],
];

export function Process() {
  return (
    <section id="process" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Roofing process"
            title="Five stages. Zero surprises."
          />
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-5">
          {STEPS.map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 80} className="h-full">
              <div className="h-full bg-card p-8">
                <span className="font-display text-4xl font-semibold text-emerald/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-base font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------- PROJECTS ------------------------------ */

const PROJECTS = [
  { img: heroRoof, title: "Dalkeith residence", meta: "Full tile-to-metal conversion · Monument", ratio: "aspect-[16/11]" },
  { img: crewInstall, title: "Scarborough re-roof", meta: "Coastal sheet replacement · Basalt", ratio: "aspect-[16/11]" },
  { img: detailSeam, title: "Mount Lawley extension", meta: "Standing seam architectural · Cottage Green", ratio: "aspect-[16/11]" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Recent projects"
            title="Roofs across the Perth region."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <figure className="group relative overflow-hidden bg-navy-deep">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={`${p.ratio} w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-6">
                  <p className="font-display text-lg font-semibold text-navy-foreground">{p.title}</p>
                  <p className="mt-1 text-xs tracking-[0.16em] text-emerald-soft uppercase">{p.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TRUST / STATS ---------------------------- */

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {/* EMPTY background video slot #2 — add your own footage */}
      <VideoSlot label="Background video slot 02" className="absolute inset-0 size-full" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Trusted across Perth"
            title="Numbers that hold up on site."
          />
        </Reveal>
        <dl className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["900+", "Roofs completed"],
            ["4.9★", "Average client rating"],
            ["48 hr", "Typical quote turnaround"],
            ["100%", "Licensed & fully insured"],
          ].map(([v, l], i) => (
            <Reveal key={l} delay={i * 90}>
              <div className="text-center">
                <dt className="font-display text-4xl font-semibold text-emerald lg:text-5xl">{v}</dt>
                <dd className="mt-3 text-xs tracking-[0.18em] text-navy-foreground/60 uppercase">{l}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------- REVIEWS ------------------------------- */

const REVIEWS = [
  {
    quote:
      "They stripped and re-roofed our 1960s home in four days. Site was spotless every afternoon and the ridge lines are dead straight.",
    name: "Michael T.",
    suburb: "Nedlands",
  },
  {
    quote:
      "Quoted properly, explained the flashing work no one else mentioned, and finished on the day they said. Rare these days.",
    name: "Priya S.",
    suburb: "Canning Vale",
  },
  {
    quote:
      "Chased a leak three other roofers couldn't find. Fixed it, photographed it, and charged what they quoted.",
    name: "Dave R.",
    suburb: "Scarborough",
  },
];

export function Reviews() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Client reviews" title="What Perth homeowners say." />
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col justify-between bg-card p-8 lg:p-10">
                <p className="text-base leading-relaxed text-foreground/85">“{r.quote}”</p>
                <footer className="mt-8">
                  <div className="hairline mb-6 w-16" />
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {r.suburb}, WA
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SERVICE AREAS --------------------------- */

const AREAS = [
  "Perth CBD", "Fremantle", "Joondalup", "Scarborough", "Cottesloe", "Nedlands",
  "Subiaco", "Mount Lawley", "Canning Vale", "Rockingham", "Midland", "Mandurah",
  "Ellenbrook", "Armadale", "Wanneroo", "Bassendean",
];

export function Areas() {
  return (
    <section id="areas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Service areas"
            title="Servicing the greater Perth region."
            intro="Based in Perth and working across the metropolitan area and surrounding suburbs. If you're not sure we reach you, call and ask."
          />
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
            {AREAS.map((a) => (
              <li
                key={a}
                className="bg-card px-5 py-6 text-sm font-medium transition-colors duration-300 hover:bg-secondary hover:text-emerald"
              >
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- CTA -------------------------------- */

export function CtaBand() {
  return (
    <section className="surface-night relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.63_0.132_163/0.16),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-10">
        <Reveal>
          <div>
            <p className="eyebrow text-emerald-soft">Free, no-obligation quote</p>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight font-semibold text-navy-foreground sm:text-4xl lg:text-5xl">
              Ready to price your new metal roof?
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap items-center gap-4">
            <QuoteButton />
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 rounded-sm border border-navy-foreground/25 px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT ------------------------------ */

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Get a free quote."
              intro="Send a few details about your roof and we'll come out, inspect it properly and send an itemised proposal."
            />
            <div className="mt-12 space-y-8">
              <div>
                <p className="eyebrow text-emerald">Phone</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-2 block font-display text-2xl font-semibold hover:text-emerald"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow text-emerald">Location</p>
                <p className="mt-2 text-lg">{BUSINESS.location}</p>
              </div>
              <div>
                <p className="eyebrow text-emerald">Hours</p>
                <p className="mt-2 text-lg">Monday – Saturday · 7am – 5pm</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="lift bg-card p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = BUSINESS.phoneHref;
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Smith" />
              <Field label="Phone" name="phone" type="tel" placeholder="0400 000 000" />
              <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
              <Field label="Suburb" name="suburb" placeholder="Nedlands" />
            </div>
            <label className="mt-6 block">
              <span className="eyebrow text-muted-foreground">Tell us about the roof</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tile-to-metal conversion, single storey, approx. 200sqm…"
                className="mt-3 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-emerald px-7 py-4 text-sm font-bold tracking-[0.12em] text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request my free quote
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Prefer to talk? Call {BUSINESS.phone} — we answer on site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
      />
    </label>
  );
}
