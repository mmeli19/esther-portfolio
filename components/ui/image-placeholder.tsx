"use client";

import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Image src — when provided, renders the image instead of the placeholder UI.
   * Drop your file in /public and pass the path (e.g. "/images/headshot.jpg").
   */
  src?: string;
  alt?: string;
  label?: string;
  hint?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  rounded?: "lg" | "xl" | "2xl" | "3xl" | "full";
}

const aspectMap = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

const roundedMap = {
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

export function ImagePlaceholder({
  src,
  alt = "",
  label = "Add image",
  hint,
  aspect = "portrait",
  rounded = "2xl",
  className,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-lavender-200/70",
        "bg-lavender-50",
        aspectMap[aspect],
        roundedMap[rounded],
        className
      )}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow-sm">
              <ImageIcon className="h-5 w-5 text-lavender-700" />
            </div>
            <p className="text-sm font-medium text-stone-800">{label}</p>
            {hint && (
              <p className="max-w-[18ch] text-xs text-lavender-700/80">
                {hint}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
