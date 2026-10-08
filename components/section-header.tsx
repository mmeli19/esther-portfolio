"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GhibliFlame } from "@/components/ghibli/flame";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2",
            align === "center" && "justify-center"
          )}
        >
          <GhibliFlame />
          <span className={cn("text-xs font-semibold uppercase tracking-[0.18em] text-stone-500", eyebrowClassName)}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-3 font-display text-4xl font-normal leading-[1.05] tracking-[-0.015em] text-balance text-stone-900 sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-stone-500 text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
