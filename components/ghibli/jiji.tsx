"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Tiny curled-up black cat — Jiji from Kiki's Delivery Service.
 * Quiet easter egg you'd spot in a card corner. ~60px wide.
 * The tail twitches every few seconds.
 */
export function GhibliJiji({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      <svg viewBox="0 0 80 50" className="h-full w-full">
        {/* Body — curled crescent */}
        <path
          d="M 18 38
             C 10 38, 6 30, 14 22
             C 20 14, 38 12, 52 18
             C 64 22, 70 32, 64 40
             C 56 46, 28 46, 18 38 Z"
          fill="#1a1124"
        />

        {/* Head bump on the right */}
        <circle cx="58" cy="22" r="9" fill="#1a1124" />

        {/* Ears */}
        <path d="M 51 14 L 53 8 L 56 14 Z" fill="#1a1124" />
        <path d="M 60 14 L 63 9 L 65 15 Z" fill="#1a1124" />

        {/* Inner-ear pink hint */}
        <path
          d="M 53 11 L 54 13 L 55 11 Z"
          fill="#a373ff"
          fillOpacity="0.4"
        />
        <path
          d="M 62 12 L 63 14 L 64 12 Z"
          fill="#a373ff"
          fillOpacity="0.4"
        />

        {/* Eyes — wide and yellow */}
        <ellipse cx="55" cy="22" rx="1.6" ry="2.2" fill="#ffd56a" />
        <ellipse cx="61" cy="22" rx="1.6" ry="2.2" fill="#ffd56a" />
        {/* Pupil slits */}
        <ellipse cx="55" cy="22" rx="0.4" ry="1.6" fill="#1a1124" />
        <ellipse cx="61" cy="22" rx="0.4" ry="1.6" fill="#1a1124" />

        {/* Tiny nose */}
        <path
          d="M 57.5 25 L 59 25 L 58.25 26.2 Z"
          fill="#a373ff"
          fillOpacity="0.55"
        />

        {/* Twitching tail — curls around the body */}
        <motion.path
          d="M 16 36
             C 6 34, 2 26, 8 20
             C 12 16, 18 18, 16 24"
          fill="none"
          stroke="#1a1124"
          strokeWidth="3.5"
          strokeLinecap="round"
          animate={{ rotate: [0, 2, -1, 1.5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "16px 36px" }}
        />
      </svg>
    </div>
  );
}
