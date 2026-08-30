import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import {
  About,
  Areas,
  Contact,
  CtaBand,
  Hero,
  Marquee,
  Process,
  Projects,
  Reviews,
  Services,
  Trust,
  VideoFeature,
  WhyUs,
} from "@/components/site/sections";

const TITLE = "Truss Metal Roofing | Metal Roofers in Perth, WA";
const DESCRIPTION =
  "Perth-based metal roofing company servicing the Perth region. Re-roofing, new installs, standing seam, gutters and leak repairs. Free quotes — call +61 435 732 207.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <WhyUs />
        <VideoFeature />
        <Process />
        <Projects />
        <Trust />
        <Reviews />
        <Areas />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
