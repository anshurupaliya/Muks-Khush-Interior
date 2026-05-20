import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-lg border-b border-gold/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-1 group">
          <span className="font-serif text-2xl tracking-tight text-ivory">M&amp;K</span>
          <span className="font-serif text-[0.7rem] tracking-[0.4em] text-gold uppercase mt-1">
            Interior
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.72rem] uppercase tracking-[0.14em] text-ivory/80 hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+250795200200"
            className="flex items-center gap-2 text-ivory/90 hover:text-gold transition-colors text-sm"
          >
            <Phone size={15} className="text-gold" />
            <span className="tracking-wide whitespace-nowrap">+250 795 200 200</span>
          </a>
          <a href="#contact" className="btn-gold">
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-ivory p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-charcoal/98 backdrop-blur-xl border-t border-gold/10`}
      >
        <nav className="container-luxe flex flex-col gap-1 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-ivory/85 font-serif text-xl border-b border-gold/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+250795200200"
            className="flex items-center gap-2 mt-4 text-gold"
          >
            <Phone size={16} /> +250 795 200 200
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-4 self-start">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
