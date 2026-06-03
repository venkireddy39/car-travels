import { motion } from "framer-motion";
import { Fuel, Users, Gauge, Settings2 } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carHatch from "@/assets/car-hatch.jpg";
import carMpv from "@/assets/car-mpv.jpg";

const cars = [
  { name: "Swift / Baleno", type: "Hatchback", seats: 5, fuel: "Petrol", trans: "Manual", price: 1800, img: carHatch },
  { name: "Brezza / Nexon / Punch", type: "Compact SUV", seats: 5, fuel: "Petrol", trans: "Auto", price: 2600, img: carSuv },
  { name: "Innova Crysta / Ertiga", type: "MPV · 7 seater", seats: 7, fuel: "Diesel", trans: "Manual", price: 3800, img: carMpv },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="The Fleet"
        title={<>Premium cars,<br/><span className="text-gradient">tuned for the road.</span></>}
        sub="Hand-picked machines. Spotless interiors. Insured and serviced before every drive."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all"
          >
            <div className="relative h-56 overflow-hidden bg-card">
              <img src={c.img} alt={c.name} loading="lazy" width={1024} height={768}
                   className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-medium">
                {c.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{c.name}</h3>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                <Spec icon={<Users className="h-4 w-4" />} v={`${c.seats} seats`} />
                <Spec icon={<Fuel className="h-4 w-4" />} v={c.fuel} />
                <Spec icon={<Settings2 className="h-4 w-4" />} v={c.trans} />
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">From</div>
                  <div className="text-2xl font-display font-bold">
                    ₹{c.price.toLocaleString()}<span className="text-sm text-muted-foreground font-normal">/day</span>
                  </div>
                </div>
                <a href="#book"
                   className="px-4 py-2.5 rounded-xl bg-neon text-primary-foreground text-sm font-semibold shadow-neon hover:scale-105 transition-transform">
                  Book
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Marquee of models */}
      <div className="mt-20 overflow-hidden border-y border-border/60 py-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[..."Swift Baleno Nexon Punch Brezza WagonR Ertiga Innova InnovaCrysta Thar Swift Baleno Nexon Punch Brezza WagonR Ertiga Innova InnovaCrysta Thar".split(" ")].map((m, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl font-bold text-muted-foreground/30 hover:text-primary transition-colors">
              {m} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, v }: { icon: React.ReactNode; v: string }) {
  return (
    <div className="flex items-center gap-1.5 glass rounded-lg px-2 py-1.5">
      {icon} {v}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-neon" /> {eyebrow}
      </div>
      <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-5 text-muted-foreground text-lg max-w-xl">{sub}</p>}
    </motion.div>
  );
}
