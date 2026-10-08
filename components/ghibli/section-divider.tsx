import { cn } from "@/lib/utils";

/**
 * Hand-drawn squiggle divider between sections — painterly "page break."
 * Centered, ~240px wide. Three subtle waves with a tiny accent dot at each end.
 */
export function GhibliSectionDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none mx-auto flex w-full max-w-[260px] items-center justify-center",
        className
      )}
    >
      <svg
        viewBox="0 0 260 20"
        preserveAspectRatio="xMidYMid meet"
        className="h-5 w-full"
      >
        {/* Left dot */}
        <circle cx="6" cy="10" r="2" fill="#a373ff" opacity="0.7" />
        {/* Squiggle */}
        <path
          d="M 16 10
             Q 32 2  48 10
             T 80 10
             T 112 10
             T 144 10
             T 176 10
             T 208 10
             T 240 10"
          fill="none"
          stroke="#a373ff"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Tiny flame dot in the middle */}
        <circle cx="128" cy="10" r="2.4" fill="#ff9d4d" opacity="0.85" />
        <circle cx="128" cy="10" r="1.2" fill="#ffd56a" />
        {/* Right dot */}
        <circle cx="254" cy="10" r="2" fill="#a373ff" opacity="0.7" />
      </svg>
    </div>
  );
}
