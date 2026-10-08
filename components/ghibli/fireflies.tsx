"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Firefly {
  startX: string;
  startY: string;
  size: number;
  delay: number;
  duration: number;
  drift: { x: number[]; y: number[] };
}

const DEFAULT_FIREFLIES: Firefly[] = [
  {
    startX: "10%",
    startY: "30%",
    size: 6,
    delay: 0,
    duration: 14,
    drift: { x: [0, 40, 20, 60, 0], y: [0, -20, 10, -10, 0] },
  },
  {
    startX: "30%",
    startY: "70%",
    size: 5,
    delay: 2,
    duration: 12,
    drift: { x: [0, -30, 10, -20, 0], y: [0, 20, -10, 30, 0] },
  },
  {
    startX: "55%",
    startY: "25%",
    size: 7,
    delay: 4,
    duration: 16,
    drift: { x: [0, 50, -10, 30, 0], y: [0, 10, 30, -5, 0] },
  },
  {
    startX: "75%",
    startY: "60%",
    size: 5,
    delay: 1,
    duration: 13,
    drift: { x: [0, -40, -10, -30, 0], y: [0, -25, 5, -15, 0] },
  },
  {
    startX: "90%",
    startY: "20%",
    size: 6,
    delay: 5,
    duration: 15,
    drift: { x: [0, -20, 20, -10, 0], y: [0, 35, 10, 20, 0] },
  },
  {
    startX: "20%",
    startY: "85%",
    size: 5,
    delay: 3,
    duration: 17,
    drift: { x: [0, 60, 30, 40, 0], y: [0, -15, -30, -10, 0] },
  },
];

/**
 * Slow-drifting fireflies — Princess Mononoke / Spirited Away night vibe.
 * Each firefly orbits a region with breathing glow + irregular path.
 * Use inside a `relative` parent.
 */
export function GhibliFireflies({
  className,
  flies = DEFAULT_FIREFLIES,
}: {
  className?: string;
  flies?: Firefly[];
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {flies.map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: f.startY,
            left: f.startX,
            width: f.size,
            height: f.size,
          }}
          animate={{
            x: f.drift.x,
            y: f.drift.y,
            opacity: [0.2, 1, 0.5, 0.95, 0.2],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: "easeInOut",
          }}
        >
          {/* Glowing core — halo via stacked box-shadows (no gradient) */}
          <div
            className="h-full w-full rounded-full"
            style={{
              background: "#ffd56a",
              boxShadow:
                "0 0 6px 1px rgba(255,213,106,0.85), 0 0 14px 4px rgba(255,200,80,0.45), 0 0 28px 10px rgba(255,180,60,0.18)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
