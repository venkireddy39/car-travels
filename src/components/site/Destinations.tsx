import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Fleet";
import manali from "@/assets/dest-manali.jpg";
import goa from "@/assets/dest-goa.jpg";
import coorg from "@/assets/dest-coorg.jpg";
import ooty from "@/assets/dest-ooty.jpg";

const dests = [
  { name: "Manali", img: manali, distance: "1,580 km", drive: "3 days" },
  { name: "Goa", img: goa, distance: "640 km", drive: "1 day" },
  { name: "Coorg", img: coorg, distance: "590 km", drive: "12 hr" },
  { name: "Ooty", img: ooty, distance: "780 km", drive: "15 hr" },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="Destinations"
        title={<>Roads worth<br/><span className="text-gradient">remembering.</span></>}
        sub="Curated routes across India — from mist-covered hills to coastal sunsets."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {dests.map((d, i) => (
          <motion.a
            href="#book"
            key={d.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -10 }}
            className="group relative h-[420px] rounded-3xl overflow-hidden block"
          >
            <img src={d.img} alt={d.name} loading="lazy" width={1024} height={1280}
                 className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl group-hover:ring-primary/40 transition-all" />

            <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass-strong group-hover:bg-neon group-hover:text-primary-foreground transition-all">
              <ArrowUpRight className="h-4 w-4" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="flex items-center gap-1.5 text-xs text-primary">
                <MapPin className="h-3.5 w-3.5" /> {d.distance} · {d.drive}
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold">{d.name}</h3>
              <div className="mt-3 h-px w-12 bg-neon group-hover:w-full transition-all duration-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
