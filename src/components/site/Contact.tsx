import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="relative glass-strong rounded-[2.5rem] p-10 md:p-20 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-glow" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-[120px] animate-glow" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-neon" /> Ready when you are
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Your next drive<br/>
              <span className="text-gradient">starts with a call.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Speak to our team 24×7. Doorstep delivery available across Hyderabad and surrounding areas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:9505396056"
                 className="group inline-flex items-center gap-2 bg-neon text-primary-foreground font-semibold px-7 py-4 rounded-2xl shadow-neon hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Call 95053 96056
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/919505396056"
                 className="inline-flex items-center gap-2 glass-strong px-7 py-4 rounded-2xl font-semibold hover:bg-white/5">
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Info icon={<Phone className="h-5 w-5" />} title="24×7 Hotline" v="95053 96056" />
            <Info icon={<Mail className="h-5 w-5" />} title="Email" v="hello@aktravels.in" />
            <Info icon={<MapPin className="h-5 w-5" />} title="Pickup & delivery" v="Hyderabad · Telangana · Andhra Pradesh" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Info({ icon, title, v }: { icon: React.ReactNode; title: string; v: string }) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors">
      <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-display text-xl font-bold">{v}</div>
      </div>
    </div>
  );
}
