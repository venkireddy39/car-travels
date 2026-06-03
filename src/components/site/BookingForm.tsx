import { motion } from "framer-motion";
import { MapPin, Calendar, Car, Search } from "lucide-react";

export function BookingForm() {
  return (
    <section id="book" className="relative -mt-16 z-30 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-6 md:p-8 shadow-glass"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Field icon={<MapPin className="h-4 w-4 text-primary" />} label="Pickup">
            <input defaultValue="Hyderabad" className="bg-transparent outline-none w-full font-medium" />
          </Field>
          <Field icon={<Calendar className="h-4 w-4 text-primary" />} label="Pickup date">
            <input type="date" className="bg-transparent outline-none w-full font-medium [color-scheme:dark]" />
          </Field>
          <Field icon={<Calendar className="h-4 w-4 text-primary" />} label="Return date">
            <input type="date" className="bg-transparent outline-none w-full font-medium [color-scheme:dark]" />
          </Field>
          <Field icon={<Car className="h-4 w-4 text-primary" />} label="Car type">
            <select className="bg-transparent outline-none w-full font-medium">
              <option className="bg-card">Any</option>
              <option className="bg-card">Hatchback</option>
              <option className="bg-card">Sedan</option>
              <option className="bg-card">SUV</option>
              <option className="bg-card">MPV</option>
            </select>
          </Field>
        </div>

        <button className="mt-5 w-full md:w-auto md:ml-auto md:flex inline-flex items-center justify-center gap-2 bg-neon text-primary-foreground font-semibold px-7 py-4 rounded-2xl shadow-neon hover:scale-[1.02] transition-transform">
          <Search className="h-4 w-4" />
          Search available cars
        </button>
      </motion.div>
    </section>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="glass rounded-2xl p-4 flex flex-col gap-1 cursor-text hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </div>
      <div className="text-foreground">{children}</div>
    </label>
  );
}
