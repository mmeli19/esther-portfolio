"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparkleConfig {
  top: string;
  left: string;
  size: number;
  delay: number;
}

const DEFAULT_SPARKLES: SparkleConfig[] = [
  { top: "8%", left: "6%", size: 14, delay: 0 },
  { top: "32%", left: "92%", size: 10, delay: 0.8 },
  { top: "62%", left: "4%", size: 12, delay: 1.4 },
  { top: "78%", left: "88%", size: 16, delay: 0.4 },
  { top: "18%", left: "70%", size: 8, delay: 2.1 },
  { top: "88%", left: "40%", size: 11, delay: 1.7 },
];

/**
 * Twinkling 4-point sparkles scattered across a section — Spirited Away
 * bathhouse-at-night vibe. Sit absolutely positioned inside a `relative`
 * parent. Each sparkle pulses on its own delay.
 */
export function GhibliSparkles({
  className,
  sparkles = DEFAULT_SPARKLES,
}: {
  className?: string;
  sparkles?: SparkleConfig[];
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0, 0.85, 0],
            scale: [0.6, 1, 0.6],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 20 20" className="h-full w-full">
            <path
              d="M 10 0
                 L 11.5 8.5
                 L 20 10
                 L 11.5 11.5
                 L 10 20
                 L 8.5 11.5
                 L 0 10
                 L 8.5 8.5 Z"
              fill="#a373ff"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
