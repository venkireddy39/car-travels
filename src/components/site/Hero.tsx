import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useRef } from "react";
import { HeroScene } from "./HeroScene";
import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-28 pb-20">
      {/* Parallax background image */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Luxury car on a neon-lit highway"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg z-0" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <HeroScene />
      </div>

      {/* Neon glows */}
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-glow z-0" />
      <div className="absolute top-1/2 right-10 h-80 w-80 rounded-full bg-accent/30 blur-[120px] animate-glow z-0" />

      <motion.div style={{ y }} className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Premium self-drive · 24×7 service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter"
          >
            Drive the
            <br />
            <span className="text-gradient">extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            AK Travels delivers a curated fleet of self-drive cars — from agile
            hatchbacks to commanding SUVs — across India's most cinematic routes.
            Cinematic journeys, premium machines, zero compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#book"
               className="group inline-flex items-center gap-2 bg-neon text-primary-foreground font-semibold px-7 py-4 rounded-2xl shadow-neon hover:scale-105 transition-transform">
              Reserve your drive
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#fleet"
               className="inline-flex items-center gap-2 glass-strong px-7 py-4 rounded-2xl font-semibold hover:bg-white/5 transition-colors">
              Explore fleet
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 · 2,400+ trips</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">12+</span> cars · <span className="text-foreground font-semibold">9</span> models
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
