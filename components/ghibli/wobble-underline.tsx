import { cn } from "@/lib/utils";

/**
 * Hand-drawn squiggle underline — gives italic accent words a painterly feel
 * without resorting to text-decoration. Sits absolutely positioned under
 * the parent span (which must be `relative` and `inline-block`).
 */
export function WobbleUnderline({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 10"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute -bottom-1 left-0 right-0 h-2 w-full opacity-95",
        className
      )}
    >
      <path
        d="M 2 6 Q 12 1 22 5 T 42 5 T 62 5 T 82 5 T 102 5 T 118 6"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
