"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs";
import AudioLines from "lucide-react/dist/esm/icons/audio-lines.mjs";
import Building2 from "lucide-react/dist/esm/icons/building-2.mjs";
import Check from "lucide-react/dist/esm/icons/check.mjs";
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
    copy: "Statement-scale MicroLED walls for private cinemas, galleries, villas, and executive spaces.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1600&q=90",
    icon: Monitor,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "OLED & 8K TVs",
    type: "Premium Displays",
    copy: "Ultra-thin OLED and 8K televisions selected for cinematic clarity and interior fit.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=90",
    icon: Eye,
    span: "",
  },
  {
    title: "Mac Studio Workstations",
    type: "Creative Systems",
    copy: "High-performance desks, displays, and Mac Studio setups for offices and creative rooms.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
    icon: CircuitBoard,
    span: "",
  },
  {
    title: "Yamaha Reference Speakers",
    type: "Premium Audio",
    copy: "Floor-standing speakers, monitors, receivers, and room-tuned listening systems.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=90",
    icon: AudioLines,
    span: "lg:col-span-2",
  },
  {
    title: "Grand Pianos & Performance Rooms",
    type: "Acoustic Luxury",
    copy: "Elegant piano rooms supported with discreet lighting, acoustic planning, and control.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1400&q=90",
    icon: Sparkles,
    span: "lg:row-span-2",
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
    span: "",
  },
  {
    title: "Custom Installation",
    type: "White Glove Setup",
    copy: "Clean mounting, hidden wiring, calibration, handoff, and after-sales support.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    icon: House,
    span: "lg:col-span-2",
  },
];

const collections = [
  {
    name: "The Display Studio",
    type: "Samsung, OLED, 8K & MicroLED",
    tagline:
      "Premium screens arranged for real comparison, from elegant OLED televisions to statement display walls.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Creative Desk Systems",
    type: "Mac Studio & Work Displays",
    tagline:
      "High-performance workstations for private offices, media suites, and design-led home studios.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Reference Audio Rooms",
    type: "Yamaha Speakers & Components",
    tagline:
      "Speakers, receivers, soundbars, and acoustic planning for rooms where sound matters.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Performance Living",
    type: "Pianos, Lighting & Smart Control",
    tagline:
      "Grand pianos, lighting scenes, media control, and room technology designed as one environment.",
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
    "Luxury living room",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    "lg:row-span-2",
  ],
  [
    "Premium TV wall",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    "",
  ],
  [
    "Private cinema room",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=85",
    "",
  ],
  [
    "High-end speakers",
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85",
    "",
  ],
  [
    "Smart controls",
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",
    "lg:row-span-2",
  ],
  [
    "Showroom details",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
    "",
  ],
  [
    "Hidden installation",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    "",
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
    <span className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-2 shadow-[0_14px_32px_rgba(17,19,21,0.10)]">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-warm text-white">
        <span className="font-display text-sm font-semibold tracking-normal">A</span>
        <span className="absolute bottom-2 h-px w-4 bg-white" />
      </span>
      <span className="font-display text-lg font-semibold tracking-[0.34em] text-warm">
        AVIR
      </span>
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
          ? "border-black bg-warm text-white shadow-[0_18px_44px_rgba(17,19,21,0.12)] hover:bg-black"
          : "border-black/10 bg-white/90 text-warm backdrop-blur hover:border-black hover:bg-white"
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
            src="https://images.unsplash.com/photo-1711374704947-2b9cf5958311?auto=format&fit=crop&w=2200&q=90"
            alt="Clean white studio desk with premium monitor and speakers"
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

          <div className="grid auto-rows-[320px] gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                  className={`group flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_44px_rgba(17,19,21,0.08)] ${card.span}`}
                >
                  <div className="relative min-h-0 flex-1 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                      <Icon className="h-5 w-5 text-warm" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-platinum">
                      {card.type}
                    </p>
                    <h3 className="font-display text-3xl leading-tight text-warm">
                      {card.title}
                    </h3>
                    <p className="mt-4 leading-7 text-platinum/70">{card.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="opening" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,19,21,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <SectionLabel>New showroom opening.</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              AVIR is opening a private technology showroom in Palm Springs, California.
            </h2>
            <p className="mt-7 text-lg leading-8 text-platinum/75">
              The showroom will be designed for homeowners, designers, architects,
              and project teams who want to compare high-end electronics in person
              before planning a villa, office, creative studio, or private cinema.
            </p>
            <div className="mt-10 grid gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-warm sm:grid-cols-2">
              <span className="rounded-2xl border border-black/10 bg-ink px-5 py-4">
                Private demos
              </span>
              <span className="rounded-2xl border border-black/10 bg-ink px-5 py-4">
                By appointment
              </span>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1500&q=90"
            alt="Modern luxury showroom interior"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section id="cinema" className="border-y border-black/10 bg-white/60 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative min-h-[460px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
              alt="Luxury living room with wall mounted display"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 border border-black/10 bg-white/75 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-warm">
                Private cinema. Premium sound. Intelligent living.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <SectionLabel>The AVIR Showroom</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Experience technology the way it will live in your home.
            </h2>
            <p className="mt-7 text-lg leading-8 text-platinum/75">
              Our showroom is designed around real environments, not shelves.
              Compare display technologies, listen to premium audio, explore
              smart-home control, and plan every detail with a specialist.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "One-on-one product consultation",
                "Display and audio comparison",
                "Installation and interior planning",
                "Smart-home integration guidance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-platinum/80">
                  <span className="grid h-7 w-7 place-items-center border border-black/20 text-warm">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
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
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {collections.map((item) => (
              <motion.article
                key={item.name}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_44px_rgba(17,19,21,0.08)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-warm">
                    {item.type}
                  </p>
                  <h3 className="mt-5 font-display text-3xl leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-platinum/70">
                    {item.tagline}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
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
          <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map(([caption, image, span]) => (
              <div
                key={caption}
                className={`group relative overflow-hidden border border-black/10 ${span}`}
              >
                <img
                  src={image}
                  alt={caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <p className="absolute bottom-5 left-5 bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.28em] text-warm shadow-sm">
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Tell us about your space.
            </h2>
            <p className="mt-7 text-lg leading-8 text-platinum/75">
              Share what you are planning: a luxury TV wall, cinema room, audio
              system, or complete smart-home setup. Our team will guide you from
              concept to installation.
            </p>
            <div className="mt-10 grid gap-4 text-platinum/75">
              <p>Showroom: AVIR Technology Showroom, Palm Springs, California</p>
              <p>Phone: Coming soon</p>
              <p>Private visits: By appointment</p>
              <p>Hours: Opening schedule to be announced</p>
            </div>
          </div>

          <form className="grid gap-4 border border-black/10 bg-white/90 p-5 sm:grid-cols-2 sm:p-8">
            {["Full Name", "Phone", "Email", "Project Location"].map((field) => (
              <label key={field} className="grid gap-2 text-sm text-platinum/70">
                {field}
                <input
                  className="h-12 border border-black/10 bg-white/90 px-4 text-warm outline-none transition placeholder:text-platinum/40 focus:border-black/70"
                  placeholder={field}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-platinum/70 sm:col-span-2">
              Interested In
              <select className="h-12 border border-black/10 bg-white/90 px-4 text-warm outline-none transition focus:border-black/70">
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
                className="min-h-36 resize-none border border-black/10 bg-white/90 p-4 text-warm outline-none transition placeholder:text-platinum/40 focus:border-black/70"
                placeholder="Tell us about the property, room, timeline, and desired experience."
              />
            </label>
            <button className="group inline-flex min-h-12 items-center justify-center gap-3 border border-black bg-warm px-6 text-sm font-semibold text-white transition hover:bg-black sm:col-span-2">
              Request Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
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
