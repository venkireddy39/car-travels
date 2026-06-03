import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./Fleet";

const items = [
  { n: "Rohan M.", r: "Hyderabad → Goa", t: "Spotless Brezza, smooth pickup at 5am, and the support team actually answered. Best self-drive experience I've had." },
  { n: "Priya & Arjun", r: "Coorg roadtrip", t: "Took the Innova for a family weekend. The car felt brand new and the booking was effortless. Will be back." },
  { n: "Sahil K.", r: "Manali expedition", t: "Drove a Thar across hill country for 6 days. AK Travels handled every issue instantly. Truly premium service." },
  { n: "Meera N.", r: "Weekend Escape", t: "Loved the doorstep delivery. The car was detailed inside out — felt like driving my own. 10/10." },
];

export function Testimonials() {
  return (
    <section className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="Driver Stories"
        title={<>Trusted by<br/><span className="text-gradient">thousands of drives.</span></>}
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={t.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-3xl p-8 relative hover:border-primary/40 transition-colors"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/30" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <p className="text-lg leading-relaxed">"{t.t}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neon grid place-items-center font-bold text-primary-foreground">
                {t.n[0]}
              </div>
              <div>
                <div className="font-semibold">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
