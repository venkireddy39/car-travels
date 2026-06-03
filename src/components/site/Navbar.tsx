import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#fleet", label: "Fleet" },
  { href: "#destinations", label: "Destinations" },
  { href: "#packages", label: "Packages" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? "glass-strong shadow-glass" : ""
        }`}>
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-neon shadow-neon grid place-items-center">
              <span className="font-display font-bold text-primary-foreground">AK</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              AK <span className="text-gradient">TRAVELS</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:9505396056" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" />
              95053 96056
            </a>
            <a href="#book" className="px-5 py-2.5 rounded-xl bg-neon text-primary-foreground font-semibold text-sm shadow-neon hover:scale-105 transition-transform">
              Book Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass-strong rounded-2xl p-5 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="tel:9505396056" className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" /> 95053 96056
            </a>
            <a href="#book" className="px-5 py-2.5 rounded-xl bg-neon text-primary-foreground font-semibold text-sm text-center">
              Book Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
