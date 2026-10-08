"use client";

import { motion } from "framer-motion";

interface PetalConfig {
  left: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotate: number;
  hue: string;
}

const PETALS: PetalConfig[] = [
  { left: "8%", delay: 0, duration: 14, size: 12, drift: 30, rotate: 180, hue: "#d6c2ff" },
  { left: "22%", delay: 4, duration: 18, size: 10, drift: -25, rotate: -160, hue: "#e9deff" },
  { left: "38%", delay: 9, duration: 16, size: 14, drift: 20, rotate: 220, hue: "#bd9bff" },
  { left: "52%", delay: 2, duration: 20, size: 11, drift: -35, rotate: -200, hue: "#d6c2ff" },
  { left: "68%", delay: 11, duration: 15, size: 9, drift: 28, rotate: 180, hue: "#e9deff" },
  { left: "82%", delay: 6, duration: 19, size: 13, drift: -22, rotate: 240, hue: "#c4a8ff" },
  { left: "92%", delay: 14, duration: 17, size: 10, drift: 18, rotate: -180, hue: "#d6c2ff" },
];

/**
 * Sakura-ish petals drifting down across the hero.
 * Each petal falls on its own schedule, drifting side-to-side as it goes —
 * loops infinitely with staggered delays so there's always 2–3 visible.
 */
export function GhibliPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute -top-6"
          style={{ left: p.left, width: p.size, height: p.size * 1.4 }}
          initial={{ y: -20, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: ["-5%", "115%"],
            x: [0, p.drift, -p.drift * 0.7, p.drift * 0.5, 0],
            rotate: [0, p.rotate, p.rotate * 1.5, p.rotate * 2],
            opacity: [0, 0.85, 0.85, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 12 16" className="h-full w-full">
            <path
              d="M 6 0
                 C 9 4 11 8 6 15
                 C 1 8 3 4 6 0 Z"
              fill={p.hue}
              stroke="#7639e8"
              strokeOpacity="0.25"
              strokeWidth="0.4"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
