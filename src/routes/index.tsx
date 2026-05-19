import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone, Mail, MapPin, Instagram, Facebook, Linkedin,
  ChevronDown, ArrowRight, Star, Award, Users, Clock, ShieldCheck,
  Hammer, Sofa, Building2, Bath, Boxes, Paintbrush, Send,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80";
const CTA_IMG =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

const services = [
  { icon: Hammer, title: "Full Home Construction", desc: "End-to-end ground-up construction for villas, homes, and residential estates." },
  { icon: Sofa, title: "Interior Design & Renovation", desc: "Transforming existing spaces with bespoke design and premium finishes." },
  { icon: Building2, title: "Commercial Spaces", desc: "Offices, retail, restaurants, and hospitality interiors with quiet confidence." },
  { icon: Bath, title: "Kitchen & Bath Remodeling", desc: "Luxury modular kitchens and spa-grade bathrooms — material-first." },
  { icon: Boxes, title: "Modular Furniture & Woodwork", desc: "Custom wardrobes, cabinetry, and handcrafted wooden details." },
  { icon: Paintbrush, title: "Painting & Finishing", desc: "Premium paint systems, textures, and the small touches that linger." },
];

const portfolio = [
  { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80", title: "Nyarutarama Villa", cat: "Residential", tag: "Residential" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", title: "Walnut Living Room", cat: "Interior Design", tag: "Interiors" },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", title: "Calacatta Kitchen", cat: "Kitchen Remodel", tag: "Renovation" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", title: "Kigali Boutique Office", cat: "Commercial", tag: "Commercial" },
  { img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", title: "Master Bedroom Suite", cat: "Interior Design", tag: "Interiors" },
  { img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80", title: "Hotel Lobby Restaurant", cat: "Hospitality", tag: "Commercial" },
  { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", title: "Spa Bathroom", cat: "Renovation", tag: "Renovation" },
  { img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80", title: "Walk-in Wardrobe", cat: "Modular Joinery", tag: "Interiors" },
  { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", title: "Terrace & Landscape", cat: "Residential", tag: "Residential" },
];

const filters = ["All", "Residential", "Commercial", "Renovation", "Interiors"] as const;

const process = [
  { n: "01", title: "Consultation", desc: "We listen first — your vision, budget, and the life you want the space to hold." },
  { n: "02", title: "Design & Planning", desc: "3D visualizations, material palettes, and a transparent detailed quotation." },
  { n: "03", title: "Construction", desc: "On-site craftsmanship with daily progress updates and disciplined timelines." },
  { n: "04", title: "Handover & Aftercare", desc: "A walkthrough you'll remember, followed by a full year of service support." },
];

const testimonials = [
  { quote: "Muks & Khush delivered our villa with a level of finish we hadn't seen in Kigali. Quiet, precise, and on time.", name: "Jean-Paul Habimana", role: "Private Residence, Kigali" },
  { quote: "From the first drawing to the last hinge, the craftsmanship spoke for itself. Arvind's team raised the standard.", name: "Aline Mukamana", role: "Boutique Hotel Project" },
  { quote: "They composed the space, they didn't just build it. The office feels like a brand statement now.", name: "David Niyonzima", role: "Commercial Office, Kimihurura" },
];

const stats = [
  { n: "200+", label: "Projects Completed" },
  { n: "10+", label: "Years of Experience" },
  { n: "50+", label: "Skilled Craftsmen" },
  { n: "98%", label: "On-Time Delivery" },
];

export function Index() {
  return (
    <div id="home" className="bg-charcoal text-ivory overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Stats />
      <CtaSection />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt="Luxury interior in Rwanda"
          className="h-full w-full object-cover animate-[ken-burns_22s_ease-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </div>

      <div className="container-luxe relative flex min-h-screen flex-col justify-center pt-32 pb-24">
        <Reveal>
          <span className="eyebrow">Muks &amp; Khush Interior — Est. Rwanda</span>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="mt-8 max-w-4xl font-serif text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Crafting Timeless
            <br />
            <span className="italic font-light text-gold-gradient">Spaces</span> Across Rwanda
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed">
            From ground-up construction to bespoke interiors — Muks &amp; Khush brings
            precision, artistry, and quiet craftsmanship to every project we touch.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">Book a Consultation</a>
            <a href="#portfolio" className="btn-outline-gold">
              View Our Work <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/80 hover:text-gold transition-colors animate-bounce"
      >
        <span className="text-[0.65rem] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}

/* ---------------------------- TRUST BAR ---------------------------- */
function TrustBar() {
  const items = [
    { icon: Award, text: "10+ Years of Excellence" },
    { icon: Hammer, text: "200+ Projects Delivered" },
    { icon: ShieldCheck, text: "100% Client Satisfaction" },
    { icon: MapPin, text: "Rwanda's Trusted Name" },
  ];
  return (
    <section id="trust" className="border-y border-gold/15 bg-midnight/40 py-6">
      <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon size={18} className="text-gold shrink-0" strokeWidth={1.5} />
            <span className="text-xs md:text-sm tracking-wide text-ivory/85">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 grain">
      <div className="container-luxe grid lg:grid-cols-[5fr_6fr] gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={ABOUT_IMG}
              alt="Craftsman at work"
              className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block border border-gold/40 px-6 py-4 bg-charcoal">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Since 2014</p>
            <p className="font-serif text-2xl mt-1">Kigali, Rwanda</p>
          </div>
        </Reveal>

        <div>
          <Reveal><span className="eyebrow">The Muks &amp; Khush Difference</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Built on Trust.
              <br />
              <span className="italic text-gold-gradient">Designed</span> with Vision.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="hairline w-32 mt-8" />
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 space-y-5 text-ivory/75 leading-[1.85]">
              <p>
                Founded by Arvind Bhuva, Muks &amp; Khush Interior was built on a quiet promise —
                that homes and commercial spaces in Rwanda deserve the same considered detail you'd
                find in the world's leading design capitals.
              </p>
              <p>
                Our studio brings together architects, interior designers, and a tightly-held team
                of craftsmen who treat every joint, finish, and material decision with intent. We
                don't chase trends; we design for the years that follow.
              </p>
              <p>
                From the foundations of a private villa in Nyarutarama to the brass detailing of a
                boutique hotel lobby — every project we sign is a long-term relationship.
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 inline-block border-l-2 border-gold pl-5">
              <p className="font-serif italic text-xl text-ivory">Arvind Bhuva</p>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mt-1">
                Founder &amp; Principal
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SERVICES --------------------------- */
function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-midnight grain">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Our Expertise</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              A complete studio for <span className="italic text-gold-gradient">construction</span> &amp; interiors.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full bg-midnight p-9 md:p-11 transition-colors duration-500 hover:bg-charcoal relative">
                <s.icon
                  size={32}
                  strokeWidth={1.2}
                  className="text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />
                <h3 className="mt-7 font-serif text-2xl md:text-[1.7rem] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-ivory/65 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.25em] text-gold link-underline"
                >
                  Learn More <ArrowRight size={13} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PORTFOLIO --------------------------- */
function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = portfolio.filter((p) => filter === "All" || p.tag === filter);

  return (
    <section id="portfolio" className="py-28 md:py-40 grain">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-xl">
            <Reveal><span className="eyebrow">Selected Works</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
                Quietly considered. <span className="italic text-gold-gradient">Distinct</span> by design.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-[0.72rem] tracking-[0.22em] uppercase border transition-all ${
                    filter === f
                      ? "border-gold bg-gold text-charcoal"
                      : "border-gold/30 text-ivory/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] md:auto-rows-[340px] gap-5">
          {filtered.map((p, i) => {
            const tall = i % 5 === 0 || i % 5 === 3;
            return (
              <Reveal
                key={p.title + i}
                delay={(i % 3) * 100}
                className={tall ? "sm:row-span-2" : ""}
              >
                <article className="group relative h-full w-full overflow-hidden cursor-pointer">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 z-10 text-[0.6rem] tracking-[0.25em] uppercase bg-charcoal/70 backdrop-blur px-2 py-1 text-gold border border-gold/30">
                    Sample Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold">{p.cat}</p>
                    <h3 className="mt-2 font-serif text-2xl text-ivory">{p.title}</h3>
                    <span className="mt-3 inline-block h-[1px] w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="btn-outline-gold">
            View Full Portfolio <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- PROCESS ---------------------------- */
function Process() {
  return (
    <section id="process" className="py-28 md:py-40 bg-midnight grain">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Our Process</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              A disciplined path <br />
              from <span className="italic text-gold-gradient">first sketch</span> to final key.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 130}>
                <div className="relative">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full border border-gold/50 bg-charcoal text-gold font-serif text-xl">
                    {p.n}
                  </div>
                  <h3 className="mt-7 font-serif text-2xl">{p.title}</h3>
                  <div className="hairline w-10 my-4" />
                  <p className="text-sm text-ivory/65 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- TESTIMONIALS -------------------------- */
function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section id="testimonials" className="py-28 md:py-40 grain">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="eyebrow mx-auto justify-center">Kind Words</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              From our <span className="italic text-gold-gradient">clients</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <Reveal>
            <figure className="text-center px-4">
              <div className="flex justify-center gap-1 text-gold mb-8">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif italic text-2xl md:text-3xl leading-[1.4] text-ivory">
                “{testimonials[i].quote}”
              </blockquote>
              <figcaption className="mt-10">
                <p className="font-serif text-lg text-gold">{testimonials[i].name}</p>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ivory/55 mt-1">
                  {testimonials[i].role}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-14 flex items-center justify-center gap-3">
            {testimonials.map((_, k) => (
              <button
                key={k}
                aria-label={`Show testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-[2px] transition-all duration-500 ${
                  k === i ? "w-12 bg-gold" : "w-6 bg-gold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STATS ----------------------------- */
function Stats() {
  return (
    <section className="bg-midnight border-y border-gold/15 py-20 grain">
      <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center lg:text-left">
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-gold-gradient">
                {s.n}
              </p>
              <div className="hairline w-12 my-4 mx-auto lg:mx-0" />
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-ivory/70">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CtaSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={CTA_IMG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-charcoal" />
      </div>

      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal><span className="eyebrow">Let's Begin</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Let's build something <span className="italic text-gold-gradient">beautiful</span>.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-ivory/75 leading-relaxed max-w-md">
              Tell us about your project. We offer complimentary first consultations across Kigali
              and the wider Rwandan region.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="tel:+250731211105"
              className="mt-8 inline-flex items-center gap-3 group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                <Phone size={16} />
              </span>
              <span>
                <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60">
                  Call directly
                </span>
                <span className="block font-serif text-2xl text-ivory">+250 731 211 105</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <CallbackForm />
        </Reveal>
      </div>
    </section>
  );
}

function CallbackForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="border border-gold/25 bg-charcoal/80 backdrop-blur p-8 md:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Name" name="name" />
        <FormField label="Phone" name="phone" type="tel" />
      </div>
      <FormField label="Email" name="email" type="email" />
      <div>
        <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60 mb-2">
          Project Type
        </label>
        <select
          required
          name="project"
          className="w-full bg-transparent border-b border-gold/30 py-3 text-ivory focus:outline-none focus:border-gold appearance-none"
        >
          <option className="bg-charcoal">Select a service…</option>
          {services.map((s) => (
            <option key={s.title} className="bg-charcoal">{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full bg-transparent border-b border-gold/30 py-3 text-ivory focus:outline-none focus:border-gold resize-none"
          placeholder="Tell us about your space…"
        />
      </div>
      <button type="submit" className="btn-gold w-full">
        {sent ? "Thank you — we'll be in touch" : (<>Request a Callback <Send size={14} /></>)}
      </button>
    </form>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60 mb-2">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        className="w-full bg-transparent border-b border-gold/30 py-3 text-ivory focus:outline-none focus:border-gold"
      />
    </div>
  );
}

/* ---------------------------- CONTACT ---------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 grain">
      <div className="container-luxe grid lg:grid-cols-2 gap-14">
        <div>
          <Reveal><span className="eyebrow">Get in Touch</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Visit our studio <br />
              <span className="italic text-gold-gradient">in Kigali</span>.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-7">
            <ContactRow icon={Phone} label="Phone" value="+250 731 211 105" href="tel:+250731211105" />
            <ContactRow icon={Mail} label="Email" value="hello@muksandkhush.rw" href="mailto:hello@muksandkhush.rw" />
            <ContactRow icon={MapPin} label="Studio" value="Kigali, Rwanda" />
            <ContactRow icon={Users} label="WhatsApp" value="Chat with our team" href="https://wa.me/250731211105" />
          </div>

          <div className="mt-12">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/55 mb-4">Follow</p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all"
                >
                  <I size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[420px] border border-gold/25 overflow-hidden">
            <iframe
              title="Muks & Khush Interior — Kigali"
              src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-5 group">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
        <Icon size={16} strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/55">{label}</p>
        <p className="mt-1 font-serif text-lg text-ivory">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/15 pt-20 pb-8 grain">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl text-ivory">M&amp;K</span>
              <span className="font-serif text-[0.7rem] tracking-[0.4em] text-gold uppercase">
                Interior
              </span>
            </div>
            <p className="mt-5 font-serif italic text-ivory/70 leading-relaxed">
              "Crafting Spaces. Building Dreams."
            </p>
            <div className="hairline w-16 mt-6" />
          </div>

          <FooterCol title="Quick Links" links={[
            ["Home", "#home"], ["About", "#about"], ["Portfolio", "#portfolio"],
            ["Process", "#process"], ["Contact", "#contact"],
          ]} />
          <FooterCol title="Services" links={services.map((s) => [s.title, "#services"])} />

          <div>
            <h4 className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">Contact</h4>
            <div className="hairline w-10 my-5" />
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-gold" />
                <a href="tel:+250731211105">+250 731 211 105</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-gold" />
                <a href="mailto:hello@muksandkhush.rw">hello@muksandkhush.rw</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-gold" /> Kigali, Rwanda
              </li>
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-gold" /> Mon — Sat, 8am — 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-6 text-center text-[0.72rem] tracking-[0.2em] uppercase text-ivory/50">
          © 2026 Muks &amp; Khush Interior. All Rights Reserved. · Designed in Rwanda
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">{title}</h4>
      <div className="hairline w-10 my-5" />
      <ul className="space-y-3 text-sm text-ivory/70">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="link-underline">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
