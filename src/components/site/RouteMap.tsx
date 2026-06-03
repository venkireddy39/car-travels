import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import routeMap from "@/assets/route-map.jpg";
import { SectionHeader } from "./Fleet";

const stops = [
  { x: "10%", y: "70%", label: "Hyderabad" },
  { x: "32%", y: "55%", label: "Hampi" },
  { x: "52%", y: "62%", label: "Coorg" },
  { x: "70%", y: "40%", label: "Ooty" },
  { x: "88%", y: "25%", label: "Munnar" },
];

export function RouteMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const dash = useTransform(scrollYProgress, [0.1, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative py-32 container mx-auto px-4">
      <SectionHeader
        eyebrow="The Route"
        title={<>Where every<br/><span className="text-gradient">turn is mapped.</span></>}
        sub="Live tracking, planned stops and round-the-clock support along every kilometre."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 relative rounded-3xl overflow-hidden glass-strong shadow-glass"
      >
        <motion.div style={{ y }} className="relative h-[420px] md:h-[560px]">
          <img src={routeMap} alt="Scenic mountain route" loading="lazy" width={1600} height={900}
               className="absolute inset-0 h-full w-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

          {/* Animated route line */}
          <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.16 200)" />
                <stop offset="100%" stopColor="oklch(0.72 0.22 320)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.6" />
              </filter>
            </defs>
            <motion.path
              d="M 10 42 Q 22 30, 32 33 T 52 37 T 70 24 T 88 15"
              stroke="url(#routeGrad)"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{ pathLength: useTransform(scrollYProgress, [0.1, 0.7], [0, 1]) }}
            />
            <motion.path
              d="M 10 42 Q 22 30, 32 33 T 52 37 T 70 24 T 88 15"
              stroke="oklch(0.97 0 0)"
              strokeWidth="0.2"
              strokeDasharray="0.6 0.8"
              fill="none"
              style={{ pathLength: useTransform(scrollYProgress, [0.1, 0.7], [0, 1]), opacity: dash }}
            />
          </svg>

          {/* Stops */}
          {stops.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
              style={{ left: s.x, top: s.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-primary shadow-neon ring-2 ring-background" />
                <div className="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-60" />
              </div>
              <div className="mt-2 glass px-2 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-6 glass-strong rounded-2xl p-5">
          <Stat k="2,400+" v="trips completed" />
          <Stat k="98%" v="on-time pickup" />
          <Stat k="24×7" v="roadside support" />
          <Stat k="9" v="states covered" />
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-gradient">{k}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{v}</div>
    </div>
  );
}
