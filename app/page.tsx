"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight, Sun, Waves, ShieldCheck, Zap, ChevronLeft, ChevronRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const colors = {
  navy: "#29316F",
  blue: "#28A8DD",
  orange: "#E77C52",
  gold: "#EAC357",
  cyan: "#47AED5",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const slides = [
  {
    eyebrow: "Top Solar Pool Heating Solutions in Arizona",
    title: "Swim Longer For Less Money!",
    body: "Having a heated pool will not only save you money compared to other pool heating methods, but a Solar Heated Pool will also double your swim season so you can enjoy your pool for nearly 9 months each year!",
    stat: "Lower operating cost",
    image: "/images/img-5241_orig.jpg",
  },
  {
    eyebrow: "Experts In Solar Pool Heating",
    title: "Expertise You Can Trust",
    body: "We here at Phelps Solar are experts when it comes to Solar Pool Heating. Our technicians have the knowledge and the skills to set your pool up with a full pool heating system powered by solar!",
    stat: "Longer swim season",
    image: "/images/medico-finished-house-for-web_orig.jpg",
  },
  {
    eyebrow: "Free Estimate",
    title: "Schedule a Free Estimate Today!",
    body: "Contact us today for more information on how you can get a FREE estimate, and start enjoying the many benefits of a solar heated pool!",
    stat: "Solar pool heating is affordable",
    image: "/images/cover-sheet-reduced_orig.jpg",
  },
];

const productPartners = [
  {
    name: "Solar Industries",
    tagline: "Total Quality Management",
    description:
      "Solar Industries manufacters all collectors and system components under one roof at its 50,000 sq. ft. Lakewood, NJ headquarters.",
    bullets: ["Efficient solar collection", "Low-maintenance design", "Great for residential pools"],
  },
  {
    name: "Product Partner Two",
    tagline: "Alternative systems for different pool needs",
    description:
      "Use this section for the second manufacturer or product family. This makes it easy to compare options without sending visitors to separate pages.",
    bullets: ["Flexible system layouts", "Strong manufacturer support", "Expandable for larger pools"],
  },
];

const services = [
  {
    icon: Sun,
    title: "Solar Pool Heating",
    body: "Design and installation of solar heating systems that use Arizona sunlight to warm your pool naturally.",
  },
  {
    icon: Waves,
    title: "Pool Comfort Upgrades",
    body: "Help customers understand how solar heating can extend swim season and improve daily pool use.",
  },
  {
    icon: ShieldCheck,
    title: "System Inspections",
    body: "Add repair, inspection, and maintenance offerings as the site grows.",
  },
  {
    icon: Zap,
    title: "Energy-Conscious Solutions",
    body: "Position Phelps Solar as a practical, cost-aware option for pool owners who want better comfort.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (<header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-4">
  <Image
    src="/images/logo.png"
    alt="Phelps Solar Logo"
    width={180}
    height={70}
    className="h-auto w-[150px] object-contain"
    priority
  />
</a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-[#29316F] transition hover:text-[#28A8DD]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+16025551234" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#29316F] shadow-sm transition hover:bg-slate-50">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <Button className="rounded-full bg-[#E77C52] px-5 font-bold text-white hover:bg-[#d96e45]">
            Free Estimate
          </Button>
        </div>

        <button className="rounded-xl border border-slate-200 bg-white p-2 text-[#29316F] shadow-sm md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#29316F] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-white/85 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <Button className="mt-2 rounded-full bg-[#E77C52] font-bold text-white hover:bg-[#d96e45]">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((current) => (current + 1) % slides.length);
  const prevSlide = () => setIndex((current) => (current - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#29316F] pt-20 text-white">
      <div className="absolute inset-0 opacity-25" style={{ background: `radial-gradient(circle at 20% 20%, ${colors.cyan}, transparent 32%), radial-gradient(circle at 80% 10%, ${colors.gold}, transparent 30%), radial-gradient(circle at 50% 90%, ${colors.orange}, transparent 28%)` }} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(41,49,111,0.98),rgba(41,49,111,0.72),rgba(40,168,221,0.55))]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div key={index} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
            {active.eyebrow}
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {active.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {active.body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 rounded-full bg-[#E77C52] px-8 text-base font-black text-white hover:bg-[#d96e45]">
              Request an Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-14 rounded-full border-white/30 bg-white/10 px-8 text-base font-black text-white hover:bg-white hover:text-[#29316F]">
              View Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button onClick={prevSlide} className="rounded-full bg-white/10 p-3 transition hover:bg-white/20" aria-label="Previous slide">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, slideIndex) => (
                <button key={slideIndex} onClick={() => setIndex(slideIndex)} className={`h-2.5 rounded-full transition-all ${slideIndex === index ? "w-9 bg-[#EAC357]" : "w-2.5 bg-white/35"}`} aria-label={`Go to slide ${slideIndex + 1}`} />
              ))}
            </div>
            <button onClick={nextSlide} className="rounded-full bg-white/10 p-3 transition hover:bg-white/20" aria-label="Next slide">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative hidden lg:block">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#EAC357]/40 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-[#28A8DD]/40 blur-3xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-white/20 bg-white/12 shadow-2xl backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem]">
  <Image
    src={active.image}
    alt={active.stat}
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

  <div className="absolute bottom-0 left-0 p-6 text-white">
    <div className="text-3xl font-black">
      {active.stat}
    </div>

    <p className="mt-2 text-white/80">
      Solar pool heating designed for Arizona homes.
    </p>
  </div>
</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#E77C52]">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight text-[#29316F] sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Phelps Solar"
          title="We Heat Pools"
          body="Mark Naylor started business in 1979 in San Diego, CA. Mark Naylor Solar is San Diego’s oldest licensed solar heating contractor, specializing in energy saving solar pool heating systems. Since 1979 Mark has learned which systems will save you the most money through reliability, serviceability and extensive warranties. Mark Naylor Solar Specialist is the distributor and warranty service center for both Solar Industries brand swimming pool solar heating collectors and Sun Earth brand solar domestic hot water systems. In these two manufacturers, you, the consumer, receive the benefit of the largest and oldest AMERICAN companies in the industry."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Local Expertise", "Speak directly to homeowners in Arizona and explain why local climate matters for solar pool heating."],
            ["Honest Guidance", "Frame the company as a helpful expert that recommends the right system instead of overselling."],
            ["Clean Installation", "Use photos, checklists, and testimonials to build confidence before the customer calls."],
          ].map(([title, body]) => (
            <Card key={title} className="rounded-[1.5rem] border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-7">
                <div className="mb-5 h-2 w-16 rounded-full bg-[#28A8DD]" />
                <h3 className="text-xl font-black text-[#29316F]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product Systems"
          title="Scrollable product sections for each manufacturer."
          body="Each product partner gets its own section block. You can replace the placeholder names and copy with the actual brands, panels, warranty info, and system benefits."
        />

        <div className="space-y-10">
          {productPartners.map((partner, index) => (
            <div key={partner.name} className={`grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#29316F] via-[#28A8DD] to-[#47AED5] p-6 text-white">
                <div className="aspect-[16/10] rounded-[1.2rem] border border-white/25 bg-white/15 p-6 backdrop-blur">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Sun className="h-12 w-12 text-[#EAC357]" />
                      <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">Product Image</span>
                    </div>
                    <div>
                      <div className="text-3xl font-black">{partner.name}</div>
                       <Image
    src="/images/costs.png"
    alt="Solar heated pool"
    fill
    className="object-cover"
    priority
  />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-black uppercase tracking-[0.22em] text-[#E77C52]">{partner.tagline}</div>
                <h3 className="mt-3 text-3xl font-black text-[#29316F]">{partner.name}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{partner.description}</p>
                <div className="mt-6 grid gap-3">
                  {partner.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">
                      <ShieldCheck className="h-5 w-5 text-[#28A8DD]" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Everything can expand as the business grows."
          body="Add or remove cards here for new services, repair offerings, maintenance plans, or seasonal specials."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-[1.5rem] border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#28A8DD]/10 text-[#28A8DD]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-[#29316F]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#29316F] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#EAC357]">Get Started</div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Ready to warm up your pool?</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            This call-to-action section can connect to a real form, CRM, email automation, or simple mailto link when you are ready.
          </p>
          <div className="mt-8 grid gap-4">
            <a href="tel:+16025551234" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold text-white transition hover:bg-white/15">
              <Phone className="h-5 w-5 text-[#EAC357]" />
              (602) 555-1234
            </a>
            <a href="mailto:info@phelpssolar.com" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold text-white transition hover:bg-white/15">
              <Mail className="h-5 w-5 text-[#EAC357]" />
              info@phelpssolar.com
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold text-white">
              <MapPin className="h-5 w-5 text-[#EAC357]" />
              Serving Arizona pool owners
            </div>
          </div>
        </div>

        <Card className="rounded-[2rem] border-white/15 bg-white shadow-2xl">
          <CardContent className="p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-4 text-slate-900 outline-none ring-[#28A8DD] focus:ring-2" placeholder="First name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-4 text-slate-900 outline-none ring-[#28A8DD] focus:ring-2" placeholder="Last name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-4 text-slate-900 outline-none ring-[#28A8DD] focus:ring-2 sm:col-span-2" placeholder="Phone or email" />
              <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-4 text-slate-900 outline-none ring-[#28A8DD] focus:ring-2 sm:col-span-2" placeholder="Tell us about your pool, roof, or heating goals" />
            </div>
            <Button className="mt-5 h-14 w-full rounded-full bg-[#E77C52] text-base font-black text-white hover:bg-[#d96e45]">
              Send Estimate Request
            </Button>
            <p className="mt-4 text-center text-sm text-slate-500">Form is visual-only until connected to a backend or form service.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default function PhelpsSolarLandingPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen scroll-smooth bg-white font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
      <footer className="bg-[#20275c] px-4 py-8 text-center text-sm text-white/65 sm:px-6 lg:px-8">
        © {year} Phelps Solar. Solar pool heating website concept.
      </footer>
    </main>
  );
}
