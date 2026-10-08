"use client";

import { motion } from "framer-motion";

/**
 * Hand-drawn clouds that drift slowly across the hero — Howl's / Kiki sky.
 * Three layers at different heights and speeds for parallax-ish feel.
 * SVG paths are smooth multi-lobe curves, softly blurred to feel painted.
 */
export function GhibliClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Cloud 1 — upper left, slow */}
      <motion.div
        initial={{ x: "-40vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] h-24 w-72 sm:h-32 sm:w-96"
        style={{ filter: "blur(0.4px)" }}
      >
        <Cloud tint="#ffffff" stroke="#e9deff" opacity={0.95} />
      </motion.div>

      {/* Cloud 2 — mid, smaller, faster */}
      <motion.div
        initial={{ x: "-30vw" }}
        animate={{ x: "115vw" }}
        transition={{
          duration: 95,
          repeat: Infinity,
          ease: "linear",
          delay: 20,
        }}
        className="absolute top-[30%] h-16 w-48 sm:h-20 sm:w-64"
        style={{ filter: "blur(0.6px)" }}
      >
        <Cloud tint="#f3edff" stroke="#d6c2ff" opacity={0.8} />
      </motion.div>

      {/* Cloud 3 — lower right, largest, slowest */}
      <motion.div
        initial={{ x: "20vw" }}
        animate={{ x: "-130vw" }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear",
          delay: 8,
        }}
        className="absolute top-[55%] h-28 w-80 sm:h-36 sm:w-[28rem]"
        style={{ filter: "blur(0.5px)" }}
      >
        <Cloud tint="#ffffff" stroke="#e9deff" opacity={0.9} />
      </motion.div>

      {/* Cloud 4 — tiny accent, drifts opposite */}
      <motion.div
        initial={{ x: "10vw" }}
        animate={{ x: "-110vw" }}
        transition={{
          duration: 220,
          repeat: Infinity,
          ease: "linear",
          delay: 40,
        }}
        className="absolute top-[18%] hidden h-12 w-32 sm:block sm:h-16 sm:w-40"
        style={{ filter: "blur(0.7px)" }}
      >
        <Cloud tint="#faf7ff" stroke="#d6c2ff" opacity={0.75} />
      </motion.div>
    </div>
  );
}

function Cloud({
  tint,
  stroke,
  opacity,
}: {
  tint: string;
  stroke: string;
  opacity: number;
}) {
  return (
    <svg
      viewBox="0 0 320 110"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Multi-lobe painted cloud — smooth bezier path */}
      <path
        d="M 30 75
           C 8 75, -2 50, 22 42
           C 18 22, 50 12, 72 24
           C 86 6, 130 4, 152 26
           C 178 12, 216 18, 222 46
           C 252 40, 282 60, 264 82
           C 256 100, 214 102, 188 92
           C 162 106, 116 102, 92 90
           C 64 100, 32 96, 30 75 Z"
        fill={tint}
        fillOpacity={opacity}
        stroke={stroke}
        strokeOpacity={opacity * 0.6}
        strokeWidth="1.2"
      />
    </svg>
  );
}
