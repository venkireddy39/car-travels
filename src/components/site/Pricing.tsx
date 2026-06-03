import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./Fleet";

const tiers = ["Hatchback", "SUV", "MPV"];
const rows: { label: string; vals: (string | boolean)[] }[] = [
  { label: "Daily rate", vals: ["₹1,800", "₹2,600", "₹3,800"] },
  { label: "Free km / day", vals: ["250", "300", "350"] },
  { label: "Extra km charge", vals: ["₹8", "₹10", "₹12"] },
  { label: "Insurance included", vals: [true, true, true] },
  { label: "GPS + dashcam", vals: [false, true, true] },
  { label: "Doorstep delivery", vals: [false, true, true] },
  { label: "24×7 support", vals: [true, true, true] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="Pricing"
        title={<>Transparent rates,<br/><span className="text-gradient">no surprises.</span></>}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-16 glass-strong rounded-3xl overflow-hidden"
      >
        <div className="grid grid-cols-4 gap-px bg-border/40">
          <div className="bg-card p-5 text-xs uppercase tracking-wider text-muted-foreground">Features</div>
          {tiers.map((t, i) => (
            <div key={t} className={`p-5 text-center ${i === 1 ? "bg-primary/10" : "bg-card"}`}>
              <div className="font-display text-xl font-bold">{t}</div>
              {i === 1 && <div className="text-[10px] uppercase tracking-wider text-primary mt-1">Most picked</div>}
            </div>
          ))}

          {rows.map((r) => (
            <Row key={r.label} label={r.label} vals={r.vals} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Row({ label, vals }: { label: string; vals: (string | boolean)[] }) {
  return (
    <>
      <div className="bg-card p-5 text-sm text-muted-foreground">{label}</div>
      {vals.map((v, i) => (
        <div key={i} className={`p-5 text-center text-sm font-medium ${i === 1 ? "bg-primary/5" : "bg-card"}`}>
          {typeof v === "boolean" ? (
            v ? <Check className="h-5 w-5 mx-auto text-primary" /> : <X className="h-5 w-5 mx-auto text-muted-foreground/40" />
          ) : v}
        </div>
      ))}
    </>
  );
}
