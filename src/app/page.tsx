export const dynamic = "force-static";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck } from "lucide-react";
import LogoTile from "./_components/LogoTile";
import ProductSlideshow, { Slide } from "./_components/ProductSlideshow";
import ContactForm from "./_components/ContactForm";

// ---- Slideshow images (exact filenames in /public/products) ----
const products: Slide[] = [
  { src: "/products/Hooks Game.png", title: "Hooks Game" },
  { src: "/products/Monkee Mount.png", title: "Monkee Mount" },
  { src: "/products/Pic Patio Lantern 2.png", title: "PIC Patio Lantern" },
  { src: "/products/PIC Repellant.png", title: "PIC Repellant" },
  { src: "/products/Pic Zapping Lantern Outside.png", title: "PIC Zapping Lantern" },
  { src: "/products/Softside on Tub Close.png", title: "Softside on Tub Close" },
  { src: "/products/Stealthrig.png", title: "Stealthrig" },
];

// ---- Brands (with per-logo scaling) ----
const brands: { name: string; scale?: number }[] = [
  { name: "Walmart", scale: 0.92 },
  { name: "Lowe’s", scale: 1.25 },
  { name: "Home Depot", scale: 1.3 },
  { name: "Ace Hardware", scale: 0.92 },
  { name: "Amazon", scale: 0.88 },
  { name: "PIC Corporation", scale: 1.35 },
  { name: "SC Johnson / RAID", scale: 1.3 },
  { name: "Dick’s Sporting Goods" },
];

const bullets = [
  "PIC Corporation (SCJ/RAID licensee)",
  "Retailers: Walmart • Lowe's • Ace • Home Depot • Amazon",
  "50+ products developed in 5 years",
  "$5M+ products sold over the last 2 years",
];

const industries = [
  { name: "Aerospace", icon: <ShieldCheck className="h-5 w-5" /> },
  { name: "Medical", icon: <ShieldCheck className="h-5 w-5" /> },
  { name: "Consumer", icon: <ShieldCheck className="h-5 w-5" /> },
  { name: "Automotive", icon: <ShieldCheck className="h-5 w-5" /> },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — centered; slideshow between headline and description/CTAs */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Tag */}
          <div className="flex justify-center">
            <Badge className="rounded-none bg-white text-black px-3 py-1 text-[10px] tracking-[0.22em]">
              DESIGN • DEVELOPMENT • COMMERCIALIZATION
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-center text-4xl md:text-6xl font-extrabold tracking-[-0.01em] leading-[1.05] uppercase">
            Innovative engineering—
            <span className="text-blue-500">from concept</span> to production and retail.
          </h1>

          {/* Slideshow */}
          <div className="mt-8 md:mt-10 max-w-4xl mx-auto">
            <ProductSlideshow products={products} intervalMs={4500} />
          </div>

          {/* Description */}
          <p className="mt-8 md:mt-10 text-center text-white/70 text-base md:text-lg max-w-3xl mx-auto">
            We design, prototype, and commercialize products across aerospace, medical, consumer,
            and automotive—grounded in manufacturing engineering.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a href="#contact" className="inline-flex">
              <button className="rounded-none h-11 px-6 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors flex items-center">
                BOOK A DISCOVERY CALL <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </a>
            <Link href="/services" className="inline-flex">
              <button className="rounded-none h-11 px-6 border border-white/40 text-white hover:bg-white hover:text-black transition-colors">
                EXPLORE SERVICES
              </button>
            </Link>
          </div>

          {/* Bulleted lines */}
          <div className="mt-8 flex flex-col items-center gap-2 text-[11px] text-white/50 tracking-[0.18em]">
            {bullets.map((line) => (
              <div key={line} className="uppercase">
                ▪ {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.01em]">Our Vision</h2>
            <p className="mt-3 text-white/70">
              A future where advanced automation strengthens American manufacturing—and people are centered,
              trained, and empowered.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-white/15 bg-black">
              <p className="text-xs tracking-[0.22em] text-white/60 uppercase">Priority</p>
              <h3 className="mt-2 text-lg font-bold uppercase">Retain & Train American Workers</h3>
              <p className="mt-2 text-sm text-white/70">
                We prioritize <strong>retaining today’s workforce</strong> and <strong>training the next generation</strong>.
                Worker-centered automation, apprenticeships, and upskilling keep experience alive while new talent thrives.
              </p>
            </div>
            <div className="p-6 border border-white/15 bg-black">
              <p className="text-xs tracking-[0.22em] text-white/60 uppercase">People</p>
              <h3 className="mt-2 text-lg font-bold uppercase">Skilled, Healthy Professionals</h3>
              <p className="mt-2 text-sm text-white/70">
                We cultivate careers in robotics, electronics, and production engineering with clear pathways to growth and wellbeing.
              </p>
            </div>
            <div className="p-6 border border-white/15 bg-black">
              <p className="text-xs tracking-[0.22em] text-white/60 uppercase">Impact</p>
              <h3 className="mt-2 text-lg font-bold uppercase">Community & Creators</h3>
              <p className="mt-2 text-sm text-white/70">
                We empower the next generation of American creators—mentoring, training, and opening doors so local communities prosper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="py-16 md:py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.01em]">Brands</h2>
            <p className="mt-3 text-black/70 uppercase tracking-[0.08em] text-sm">
              These are brands that we have helped develop products for.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-10 place-items-center">
            {brands.map((b) => (
              <div key={b.name} className="w-full flex items-center justify-center">
                <LogoTile name={b.name} scale={b.scale} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.01em]">Why Grand Will</h2>
            <p className="mt-4 text-white/70">
              We combine Fortune 100 manufacturing experience with startup speed. Our team has shipped patented hardware,
              optimized complex supply chains, and supported aerospace site transitions with rigorous substantiation plans
              for mission-critical components.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i.name}
                  className="inline-flex items-center px-3 py-1 border border-white/20 text-xs tracking-[0.18em] uppercase"
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto md:mx-0">
              <Card className="rounded-none border-white/20 bg-black text-white">
                <CardContent className="p-6">
                  <p className="text-4xl font-extrabold">50+</p>
                  <p className="text-sm text-white/70">Products developed in 5 years</p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-white/20 bg-black text-white">
                <CardContent className="p-6">
                  <p className="text-4xl font-extrabold">$10M+</p>
                  <p className="text-sm text-white/70">Patented product sales</p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-white/20 bg-black text-white">
                <CardContent className="p-6">
                  <p className="text-4xl font-extrabold">$5M+</p>
                  <p className="text-sm text-white/70">Products sold over the last 2 years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.01em]">Tell us about your project</h2>
          <p className="mt-3 text-white/70">We typically reply within one business day.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
