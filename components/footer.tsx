"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SootSprites } from "@/components/ghibli/soot-sprites";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-lavender-200/60 bg-lavender-50">
      {/* Hidden friends — Spirited Away nod */}
      <SootSprites className="absolute bottom-3 right-4 h-7 w-16 opacity-85 sm:bottom-4 sm:right-6 sm:h-8 sm:w-20" />

      <div className="container relative py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lavender-600 text-sm font-bold text-white shadow-md shadow-lavender-500/30">
              E
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight text-stone-900">
                Esther M. Burnett
              </p>
              <p className="text-xs text-stone-500">
                Project Manager · Engineer · Lifelong teammate
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-lavender-200/70 bg-white/70 text-stone-500 transition-colors hover:bg-lavender-100 hover:text-stone-800"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-lavender-200/70 bg-white/70 text-stone-500 transition-colors hover:bg-lavender-100 hover:text-stone-800"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-lavender-200/70 bg-white/70 text-stone-500 transition-colors hover:bg-lavender-100 hover:text-stone-800"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-stone-400 sm:text-left">
          © {new Date().getFullYear()} Esther M. Burnett.
        </p>
      </div>
    </footer>
  );
}
