import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Fleet";

const packs = [
  {
    name: "Weekend Escape",
    days: "2 Days",
    price: 4999,
    features: ["Compact car included", "300 km / day", "24×7 roadside support", "Free cancellation"],
  },
  {
    name: "Hill Country",
    days: "5 Days",
    price: 14999,
    featured: true,
    features: ["SUV included", "1,500 km total", "Doorstep delivery", "Free additional driver", "GPS + dashcam"],
  },
  {
    name: "Coast to Coast",
    days: "7 Days",
    price: 22999,
    features: ["Premium MPV", "2,500 km total", "Driver on request", "Premium insurance", "Concierge support"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="Travel Packages"
        title={<>Routes,<br/><span className="text-gradient">already plotted.</span></>}
        sub="Pre-built itineraries with everything sorted — car, fuel buffer, insurance and support."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {packs.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 ${
              p.featured ? "glass-strong neon-border" : "glass"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.days}</div>
            <h3 className="mt-2 font-display text-3xl font-bold">{p.name}</h3>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-display font-bold">₹{p.price.toLocaleString()}</span>
              <span className="text-muted-foreground text-sm">/trip</span>
            </div>

            <ul className="mt-7 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/15 text-primary grid place-items-center">
                    <Check className="h-3 w-3" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#book" className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold transition-all ${
              p.featured ? "bg-neon text-primary-foreground shadow-neon hover:scale-105" : "glass-strong hover:bg-white/5"
            }`}>
              Reserve <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
