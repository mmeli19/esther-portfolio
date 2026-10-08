"use client";

import { motion } from "framer-motion";

/**
 * A small flock of birds drifting across the hero — Kiki-style flight motif.
 * V-shape silhouettes, very small, gentle bob as they cross.
 */
export function GhibliBirds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ x: "-15vw", y: 0 }}
        animate={{ x: "115vw", y: [0, -8, 0, -4, 0] }}
        transition={{
          x: { duration: 70, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[22%] h-6 w-40 opacity-80"
      >
        <svg viewBox="0 0 160 30" className="h-full w-full">
          <g
            fill="none"
            stroke="#522a9c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 4 14 Q 9 8 14 14 Q 19 8 24 14" />
            <path d="M 36 18 Q 41 12 46 18 Q 51 12 56 18" />
            <path d="M 64 11 Q 69 6 74 11 Q 79 6 84 11" />
            <path d="M 96 20 Q 101 14 106 20 Q 111 14 116 20" />
            <path d="M 128 14 Q 133 9 138 14 Q 143 9 148 14" />
          </g>
        </svg>
      </motion.div>

      {/* A single straggler that drifts opposite, much later */}
      <motion.div
        initial={{ x: "110vw", y: 0 }}
        animate={{ x: "-20vw", y: [0, -6, 0, 4, 0] }}
        transition={{
          x: { duration: 100, repeat: Infinity, ease: "linear", delay: 25 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[45%] h-5 w-12 opacity-70"
      >
        <svg viewBox="0 0 48 20" className="h-full w-full">
          <path
            d="M 4 12 Q 12 4 20 12 Q 28 4 36 12"
            fill="none"
            stroke="#522a9c"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
