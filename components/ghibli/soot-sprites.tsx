"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Tucked-away soot-sprite easter egg — Spirited Away nod.
 * Tiny cluster of fuzzy black dots that wobble gently. Place small
 * (~64px wide) in a corner where it reads as decoration, not a logo.
 */
export function SootSprites({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      <svg viewBox="0 0 64 40" className="h-full w-full">
        <Sprite cx={12} cy={26} r={5} delay={0} />
        <Sprite cx={24} cy={20} r={4.5} delay={0.4} />
        <Sprite cx={36} cy={24} r={5} delay={0.2} />
        <Sprite cx={48} cy={20} r={4} delay={0.7} />
        <Sprite cx={56} cy={28} r={3.5} delay={1.1} />
        <Sprite cx={18} cy={32} r={3.5} delay={0.9} />
        <Sprite cx={42} cy={32} r={3} delay={0.5} />
      </svg>
    </div>
  );
}

function Sprite({
  cx,
  cy,
  r,
  delay,
}: {
  cx: number;
  cy: number;
  r: number;
  delay: number;
}) {
  return (
    <motion.g
      animate={{ y: [0, -1.5, 0, 1, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* fuzzy body */}
      <circle cx={cx} cy={cy} r={r} fill="#1a1124" />
      {/* tiny "fluff" around the rim */}
      <circle cx={cx - r * 0.7} cy={cy - r * 0.3} r={0.6} fill="#1a1124" />
      <circle cx={cx + r * 0.7} cy={cy - r * 0.4} r={0.6} fill="#1a1124" />
      <circle cx={cx} cy={cy - r} r={0.7} fill="#1a1124" />
      {/* eyes */}
      <circle cx={cx - r * 0.35} cy={cy - r * 0.15} r={0.55} fill="#fff" />
      <circle cx={cx + r * 0.35} cy={cy - r * 0.15} r={0.55} fill="#fff" />
    </motion.g>
  );
}
