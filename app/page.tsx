"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs";
import AudioLines from "lucide-react/dist/esm/icons/audio-lines.mjs";
import Building2 from "lucide-react/dist/esm/icons/building-2.mjs";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right.mjs";
import CircuitBoard from "lucide-react/dist/esm/icons/circuit-board.mjs";
import Eye from "lucide-react/dist/esm/icons/eye.mjs";
import House from "lucide-react/dist/esm/icons/house.mjs";
import Lightbulb from "lucide-react/dist/esm/icons/lightbulb.mjs";
import Menu from "lucide-react/dist/esm/icons/menu.mjs";
import Monitor from "lucide-react/dist/esm/icons/monitor.mjs";
import Sparkles from "lucide-react/dist/esm/icons/sparkles.mjs";
import X from "lucide-react/dist/esm/icons/x.mjs";

const navLinks = [
  ["Showroom", "#showroom"],
  ["Products", "#products"],
  ["Palm Springs", "#opening"],
  ["Cinema", "#cinema"],
  ["Smart Living", "#smart-living"],
  ["Installation", "#installation"],
  ["Contact", "#contact"],
];

const productShowcase = [
  {
    title: "Samsung The Wall",
    type: "MicroLED Display",
    copy: "Statement-scale display walls for villas, galleries, offices, and private cinema rooms.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1600&q=90",
    icon: Monitor,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Samsung OLED & 8K TVs",
    type: "Signature Displays",
    copy: "Gallery-level televisions selected for clean walls, media rooms, and modern interiors.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=90",
    icon: Eye,
    span: "",
  },
  {
    title: "Apple Mac Studio",
    type: "Creative Workstations",
    copy: "Apple-only workstation setups with Studio Displays for offices, studios, and media rooms.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
    icon: CircuitBoard,
    span: "",
  },
  {
    title: "Yamaha Reference Speakers",
    type: "Premium Audio",
    copy: "Speakers, receivers, monitors, and tuned audio systems for serious listening rooms.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=90",
    icon: AudioLines,
    span: "lg:col-span-2",
  },
  {
    title: "Grand Pianos",
    type: "Acoustic Luxury",
    copy: "Performance rooms planned with lighting, acoustics, display moments, and discreet control.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1400&q=90",
    icon: Sparkles,
    span: "lg:row-span-2",
  },
  {
    title: "Sony Cinema Equipment",
    type: "Camera & Projection",
    copy: "Sony cameras, projectors, displays, and imaging systems for creators and theaters.",
    image:
      "https://images.unsplash.com/photo-1779399152423-244344a0f7df?auto=format&fit=crop&w=1400&q=90",
    icon: CircuitBoard,
    span: "lg:col-span-2",
  },
  {
    title: "Panasonic Imaging",
    type: "Production Gear",
    copy: "Camera bodies, lenses, lighting, and production equipment for premium studio work.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=90",
    icon: Building2,
    span: "",
  },
  {
    title: "Luxury Laundry Systems",
    type: "Premium Appliances",
    copy: "Top-tier washing machines and dryers for villas, penthouses, and full-home projects.",
    image:
      "https://images.unsplash.com/photo-1777116603323-ee9f48e5fbb7?auto=format&fit=crop&w=1200&q=90",
    icon: House,
    span: "",
  },
  {
    title: "Designer Climate Systems",
    type: "AC & Comfort",
    copy: "Modern AC systems, climate planning, and discreet comfort control for refined spaces.",
    image:
      "https://images.unsplash.com/photo-1761330440311-16e160cad236?auto=format&fit=crop&w=1200&q=90",
    icon: House,
    span: "lg:col-span-2",
  },
  {
    title: "Smart Home Control",
    type: "Automation",
    copy: "Lighting, climate, security, shades, audio, and media through quiet control systems.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=90",
    icon: CircuitBoard,
    span: "",
  },
  {
    title: "Architectural Displays",
    type: "Integrated Design",
    copy: "Wall-mounted, hidden, and statement displays designed around the room architecture.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
    icon: Building2,
    span: "lg:col-span-2",
  },
];

const collections = [
  {
    name: "Samsung Display Room",
    type: "OLED, 8K & MicroLED",
    tagline:
      "Premium screens arranged for real comparison, from elegant OLED televisions to statement display walls.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Apple Mac Studio Room",
    type: "Apple Workstation Systems",
    tagline:
      "High-performance workstations for private offices, media suites, and design-led home studios.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Sony & Panasonic Studio",
    type: "Cameras, Imaging & Projection",
    tagline:
      "Premium camera, production, projector, and imaging systems for studios and private clients.",
    image:
      "https://images.unsplash.com/photo-1779399152423-244344a0f7df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Luxury Home Systems",
    type: "Pianos, Appliances, AC & Control",
    tagline:
      "Grand pianos, premium appliances, climate control, lighting, and media systems as one environment.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85",
  },
];

const experiences = [
  {
    number: "01",
    label: "WATCH",
    title: "Ultra-premium picture quality for cinema, sports, gaming, and architectural display moments.",
  },
  {
    number: "02",
    label: "LISTEN",
    title: "Spatial audio and high-fidelity systems tuned around the room, not just the device.",
  },
  {
    number: "03",
    label: "CONTROL",
    title: "Whole-home technology made simple through elegant control of lighting, climate, media, and security.",
  },
];

const services = [
  "Wall mounting",
  "Hidden wiring",
  "Acoustic planning",
  "TV calibration",
  "Smart-home integration",
  "Lighting control",
  "Cinema room design",
  "After-sales support",
];

const gallery = [
  [
    "Display showroom",
    "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
  [
    "White studio electronics",
    "https://images.unsplash.com/photo-1711374704947-2b9cf5958311?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
  [
    "Audio wall",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
  [
    "Performance room",
    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
  [
    "Camera studio",
    "https://images.unsplash.com/photo-1779399152423-244344a0f7df?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
  [
    "Luxury appliances",
    "https://images.unsplash.com/photo-1777116603323-ee9f48e5fbb7?auto=format&fit=crop&w=1600&q=90",
    "lg:col-span-2",
  ],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function Logo() {
  return (
    <span className="group inline-flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold tracking-[0.44em] text-warm">
        AVIR
      </span>
      <span className="h-px w-9 bg-warm transition group-hover:w-12" />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-warm">
      {children}
    </p>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border px-6 text-sm font-semibold transition duration-300 ${
        variant === "primary"
          ? "border-black/10 bg-white text-warm shadow-[0_18px_44px_rgba(17,19,21,0.12)] hover:border-black hover:bg-white"
          : "border-black/10 bg-white/70 text-warm backdrop-blur hover:border-black hover:bg-white"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-warm">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
          scrolled
            ? "border-b border-black/10 bg-white/80 shadow-2xl shadow-stone/10 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="AVIR home">
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-1 rounded-2xl border border-black/10 bg-white px-2 py-2 shadow-[0_14px_32px_rgba(17,19,21,0.08)] lg:flex"
            aria-label="Primary"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl px-4 py-2 text-sm text-platinum/75 transition hover:bg-ink hover:text-warm"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="#contact">
              Book a visit
            </ButtonLink>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white/90 text-warm shadow-[0_14px_32px_rgba(17,19,21,0.08)] lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-5 mb-5 border border-black/10 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/10 pb-3 text-platinum"
                >
                  {label}
                </a>
              ))}
              <ButtonLink href="#contact">Book a visit</ButtonLink>
            </div>
          </motion.div>
        )}
      </header>

      <section id="top" className="relative flex min-h-screen items-end pt-24">
        <div className="absolute inset-0">
          <img
            src="https://s47295.pcdn.co/wp-content/uploads/2021/05/Phil-Trubey-The-Wall.jpg"
            alt="Samsung The Wall luxury home theater with premium electronics"
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:pb-16"
        >
          <div className="flex max-w-xl flex-col items-start">
            <ButtonLink href="#contact">Book a visit</ButtonLink>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="showroom"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="px-5 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <SectionLabel>Private technology studio.</SectionLabel>
            <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-warm sm:text-6xl">
              A curated technology showroom for refined spaces.
            </h2>
          </div>
          <p className="text-lg leading-8 text-platinum/75">
            AVIR brings together premium televisions, immersive sound,
            smart-home control, and custom installation into one seamless
            showroom experience. Every recommendation is designed around your
            space, your lifestyle, and the way you want to live.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
          {["Curated Products", "Bespoke Installation", "Private Consultation"].map(
            (pillar) => (
              <div
                key={pillar}
                className="border border-black/10 bg-white/90 p-7 backdrop-blur"
              >
                <Sparkles className="mb-8 h-5 w-5 text-warm" />
                <h3 className="font-display text-2xl text-warm">{pillar}</h3>
              </div>
            ),
          )}
        </div>
      </motion.section>

      <section id="products" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>High-ticket showroom pieces.</SectionLabel>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Big products, proper demonstrations, and rooms built around the technology.
              </h2>
            </div>
            <p className="max-w-xl text-platinum/70">
              See premium televisions, MicroLED walls, Mac Studio workstations,
              Yamaha audio, grand pianos, smart controls, and installation
              details in a calm showroom setting.
            </p>
          </div>

          <div className="grid auto-rows-[520px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productShowcase.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ y: -8 }}
                  className={`group relative min-h-[520px] overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_18px_44px_rgba(17,19,21,0.08)] ${card.span}`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                    <Icon className="h-5 w-5 text-warm" />
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_18px_44px_rgba(17,19,21,0.10)] backdrop-blur">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-platinum">
                      {card.type}
                    </p>
                    <h3 className="font-display text-3xl leading-tight text-warm">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-platinum/70">{card.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="opening" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="relative mx-auto min-h-[720px] max-w-7xl overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,19,21,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=90"
            alt="Large minimal luxury technology showroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl rounded-3xl border border-black/10 bg-white/92 p-7 shadow-[0_18px_44px_rgba(17,19,21,0.12)] backdrop-blur md:bottom-10 md:left-10 md:right-auto md:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-platinum">
              Palm Springs, California
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              A private AVIR showroom is opening soon.
            </h2>
          </div>
        </div>
      </section>

      <section id="cinema" className="border-y border-black/10 bg-white/60 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative min-h-[650px] overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,19,21,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1800&q=90"
              alt="Luxury showroom with premium display technology"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <SectionLabel>Showroom planning</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Experience technology the way it will live in your home.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-platinum/75">
              Walk through displays, audio, smart control, appliances, and room
              planning in one quiet environment.
            </p>
            <div className="mt-10">
              <ButtonLink href="#contact">Plan my visit</ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Curated systems.</SectionLabel>
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Complete setups for homes, offices, studios, private cinemas, and
            performance rooms.
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {collections.map((item) => (
              <motion.article
                key={item.name}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative min-h-[620px] overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_18px_44px_rgba(17,19,21,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_18px_44px_rgba(17,19,21,0.10)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-warm">
                    {item.type}
                  </p>
                  <h3 className="mt-5 font-display text-3xl leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-4 leading-7 text-platinum/70">
                    {item.tagline}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="text-sm text-platinum/60">Custom quote</span>
                    <a
                      href="#contact"
                      className="flex items-center gap-2 text-sm font-semibold text-warm"
                    >
                      Request Details <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="smart-living" className="bg-white px-5 py-24 text-warm sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-stone">
            The AVIR experience
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {experiences.map((item) => (
              <motion.article
                key={item.label}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="border border-black/10 bg-ink p-8 sm:p-10"
              >
                <div className="mb-16 flex items-center justify-between border-b border-black/10 pb-6">
                  <span className="font-display text-6xl text-black/15">
                    {item.number}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.3em] text-stone">
                    {item.label}
                  </span>
                </div>
                <h3 className="font-display text-3xl leading-tight">{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Custom installation</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              We do not just sell electronics. We design the complete
              experience.
            </h2>
            <p className="mt-7 text-lg leading-8 text-platinum/75">
              From the first consultation to final calibration, AVIR handles the
              full journey: product selection, room planning, hidden wiring,
              installation, smart-home integration, and ongoing support.
            </p>
            <div className="mt-10">
              <ButtonLink href="#contact">Request installation consultation</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-4 border border-black/10 bg-white/90 p-5 text-platinum/80"
              >
                <Lightbulb className="h-5 w-5 text-warm" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/60 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            "500+ Luxury Installations",
            "15+ Premium Brand Partners",
            "4K / 8K / MicroLED Expertise",
            "Private showroom visits",
          ].map((stat) => (
            <div key={stat} className="border-l border-black pl-5">
              <p className="font-display text-2xl text-warm">{stat}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-platinum/70">
          Trusted by homeowners, designers, and project teams looking for clean,
          reliable, high-end technology integration.
        </p>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Showroom atmosphere</SectionLabel>
          <h2 className="font-display text-4xl font-semibold sm:text-6xl">
            Gallery
          </h2>
          <div className="mt-12 grid auto-rows-[520px] gap-6 lg:grid-cols-4">
            {gallery.map(([caption, image, span]) => (
              <div
                key={caption}
                className={`group relative overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_18px_44px_rgba(17,19,21,0.08)] ${span}`}
              >
                <img
                  src={image}
                  alt={caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <p className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs uppercase tracking-[0.28em] text-warm shadow-sm backdrop-blur">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden border border-black/10 bg-[radial-gradient(circle_at_70%_30%,rgba(17,19,21,0.05),transparent_30%),linear-gradient(135deg,rgba(17,19,21,0.06),rgba(255,255,255,0.03))] p-8 sm:p-14 lg:p-20">
          <div className="max-w-3xl">
            <SectionLabel>Private appointment</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Start with a private AVIR consultation.
            </h2>
            <p className="mt-7 text-lg leading-8 text-platinum/75">
              Visit the showroom, explore premium technologies, and design a
              complete entertainment experience around your space.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#contact">Book a visit</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Request a custom quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-black/10 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionLabel>Private appointment</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Book the Palm Springs showroom.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-platinum/75">
              Tell us what you want to see. We will prepare the room around the
              products and systems that matter to your project.
            </p>
          </div>

          <form className="grid gap-4 rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(17,19,21,0.08)] sm:grid-cols-2 sm:p-8 lg:p-10">
            {["Full Name", "Phone", "Email", "Project Location"].map((field) => (
              <label key={field} className="grid gap-2 text-sm text-platinum/70">
                {field}
                <input
                  className="h-14 rounded-2xl border border-black/10 bg-ink px-5 text-warm outline-none transition placeholder:text-platinum/40 focus:border-black/70"
                  placeholder={field}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-platinum/70 sm:col-span-2">
              Interested In
              <select className="h-14 rounded-2xl border border-black/10 bg-ink px-5 text-warm outline-none transition focus:border-black/70">
                <option>Samsung TVs and MicroLED</option>
                <option>Mac Studio workstation</option>
                <option>Yamaha speakers and audio</option>
                <option>Grand piano and performance room</option>
                <option>Private Cinema Room</option>
                <option>Smart Home Automation</option>
                <option>Custom Installation</option>
                <option>Complete showroom visit</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-platinum/70 sm:col-span-2">
              Message
              <textarea
                className="min-h-40 resize-none rounded-2xl border border-black/10 bg-ink p-5 text-warm outline-none transition placeholder:text-platinum/40 focus:border-black/70"
                placeholder="Tell us about the property, room, timeline, and desired experience."
              />
            </label>
            <button className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-black bg-warm px-6 text-sm font-semibold text-white transition hover:bg-black sm:col-span-2">
              Request Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
          <div className="mt-8 grid gap-4 text-center text-sm text-platinum/75 sm:grid-cols-4">
            <p>Palm Springs, California</p>
            <p>Private visits by appointment</p>
            <p>Opening schedule coming soon</p>
            <p>Full-project consultations</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xl leading-7 text-platinum/70">
              AVIR is a premium electronics showroom and technology studio for
              luxury displays, private cinema, high-fidelity audio, and
              smart-home experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-platinum/70 hover:text-warm">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-5 border-t border-black/10 pt-7 text-sm text-platinum/50 sm:flex-row">
          <p>© 2026 AVIR. All rights reserved.</p>
          <p>Palm Springs showroom opening soon.</p>
        </div>
      </footer>
    </main>
  );
}
