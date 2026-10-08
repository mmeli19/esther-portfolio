/**
 * Sitewide watercolor-paper grain.
 * Fixed-position SVG fills the viewport with feTurbulence noise at very low
 * opacity (~5%). Painterly feel without literal illustration. Sits below
 * everything via `-z-10`.
 *
 * Note: SVG filter, not a gradient.
 */
export function GhibliPaperGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]"
    >
      <svg className="h-full w-full" preserveAspectRatio="none">
        <filter id="paper-grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.22
                    0 0 0 0 0.10
                    0 0 0 0 0.40
                    0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain-noise)" />
      </svg>
    </div>
  );
}
