/**
 * Soft rolling hills silhouette — Howl's countryside vibe.
 * Three layered bands fade from soft lavender (back) to deeper lavender (front).
 * Sits at the bottom of the hero, full-width.
 */
export function GhibliHills({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block h-40 w-full sm:h-48 md:h-56"
      >
        {/* Far hills — palest */}
        <path
          d="M 0 130
             C 180 80, 360 110, 540 95
             C 720 80, 900 120, 1080 100
             C 1240 85, 1340 115, 1440 105
             L 1440 220 L 0 220 Z"
          fill="#e9deff"
          fillOpacity="0.55"
        />
        {/* Mid hills */}
        <path
          d="M 0 160
             C 220 120, 400 165, 620 140
             C 840 115, 1000 170, 1200 150
             C 1320 140, 1380 160, 1440 150
             L 1440 220 L 0 220 Z"
          fill="#d6c2ff"
          fillOpacity="0.6"
        />
        {/* Front hill — deeper, with a couple of soft tree dots */}
        <path
          d="M 0 188
             C 280 160, 520 195, 800 180
             C 1040 165, 1240 195, 1440 180
             L 1440 220 L 0 220 Z"
          fill="#bd9bff"
          fillOpacity="0.55"
        />
        {/* Tiny tree silhouettes on the front ridge */}
        <g fill="#8b4fff" fillOpacity="0.4">
          <ellipse cx="190" cy="178" rx="4" ry="6" />
          <ellipse cx="200" cy="180" rx="3" ry="5" />
          <ellipse cx="640" cy="186" rx="5" ry="7" />
          <ellipse cx="650" cy="188" rx="3" ry="5" />
          <ellipse cx="1080" cy="180" rx="4" ry="6" />
          <ellipse cx="1090" cy="183" rx="3" ry="5" />
        </g>

        {/* Howl's Moving Castle on the mid-hill horizon */}
        <g
          fill="#7639e8"
          fillOpacity="0.55"
          stroke="#522a9c"
          strokeOpacity="0.4"
          strokeWidth="0.8"
        >
          {/* Smoke puffs from the chimneys */}
          <ellipse
            cx="876"
            cy="118"
            rx="4"
            ry="3"
            fill="#bd9bff"
            fillOpacity="0.5"
            stroke="none"
          />
          <ellipse
            cx="884"
            cy="113"
            rx="3"
            ry="2.5"
            fill="#d6c2ff"
            fillOpacity="0.45"
            stroke="none"
          />
          <ellipse
            cx="892"
            cy="109"
            rx="2.5"
            ry="2"
            fill="#e9deff"
            fillOpacity="0.4"
            stroke="none"
          />

          {/* Main asymmetric castle body — top-heavy, leaning right */}
          <path
            d="M 858 158
               L 858 145
               L 862 145
               L 862 138
               L 873 138
               L 873 130
               L 882 130
               L 882 122
               L 889 122
               L 889 132
               L 896 132
               L 896 140
               L 902 140
               L 902 148
               L 905 148
               L 905 155
               L 901 158
               Z"
          />

          {/* Small additional turret/box on the left */}
          <rect x="852" y="148" width="8" height="11" />

          {/* Chimney */}
          <rect x="876" y="118" width="3" height="6" />

          {/* Tiny stilt-legs poking under the body */}
          <line x1="862" y1="158" x2="861" y2="163" stroke="#522a9c" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="870" y1="158" x2="871" y2="164" stroke="#522a9c" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="888" y1="158" x2="889" y2="163" stroke="#522a9c" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="898" y1="158" x2="900" y2="164" stroke="#522a9c" strokeOpacity="0.5" strokeWidth="1" />

          {/* Glowing window dots */}
          <circle cx="867" cy="148" r="0.8" fill="#ffd56a" stroke="none" />
          <circle cx="877" cy="142" r="0.8" fill="#ffd56a" stroke="none" />
          <circle cx="885" cy="135" r="0.8" fill="#ffd56a" stroke="none" />
          <circle cx="893" cy="146" r="0.8" fill="#ffd56a" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
