"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Tiny Calcifer flame — replaces the section-header eyebrow dash.
 * Gentle flicker via scale + slight rotation. Warm orange/yellow is
 * intentional: the only warm accent in the palette, calling out Calcifer.
 */
export function GhibliFlame({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 14 18"
      className={cn("inline-block h-4 w-3", className)}
      animate={{
        scaleY: [1, 1.08, 0.96, 1.04, 1],
        rotate: [0, -2, 2, -1, 0],
      }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "50% 90%" }}
    >
      {/* Outer flame body */}
      <path
        d="M 7 1
           C 9.5 4.5 12.5 7 10.5 12
           C 9.5 15 7 17 5 15.5
           C 2.5 13.5 1.5 11 3.5 7
           C 4.5 5 5.5 3.5 7 1 Z"
        fill="#ff9d4d"
      />
      {/* Inner brighter flame */}
      <path
        d="M 7 5
           C 8 7 9 9 8 12
           C 7.5 13.5 6.5 13.8 6 12.5
           C 5.2 10.8 5.4 9 6.2 7
           C 6.5 6 6.7 5.8 7 5 Z"
        fill="#ffd56a"
      />
      {/* Tiny eyes — Calcifer wink */}
      <circle cx="6" cy="11" r="0.6" fill="#1a1124" />
      <circle cx="8.2" cy="11" r="0.6" fill="#1a1124" />
    </motion.svg>
  );
}
