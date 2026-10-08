"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { GhibliClouds } from "@/components/ghibli/clouds";
import { GhibliHills } from "@/components/ghibli/hills";
import { GhibliBirds } from "@/components/ghibli/birds";
import { GhibliPetals } from "@/components/ghibli/petals";
import { WobbleUnderline } from "@/components/ghibli/wobble-underline";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
    >
      {/* Refined ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Clean canvas */}
        <div className="absolute inset-0 bg-white" />

        {/* Whisper-soft dot field */}
        {/* <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(118, 57, 232, 0.10) 1px, transparent 0)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        /> */}

        {/* Primary aurora — soft, large, behind the portrait */}
        {/* <motion.div
          aria-hidden
          animate={{
            x: [0, 24, -8, 0],
            y: [0, -16, 12, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-[-6%] h-[40rem] w-[40rem] rounded-full bg-lavender-300/45 blur-[140px]"
        /> */}

        {/* Secondary aurora — cooler accent on left */}
        {/* <motion.div
          aria-hidden
          animate={{
            x: [0, -18, 12, 0],
            y: [0, 14, -10, 0],
            scale: [1, 1.08, 1, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[35%] h-[32rem] w-[32rem] rounded-full bg-lavender-200/55 blur-[120px]"
        /> */}

        {/* Faint warm highlight near bottom-center for depth */}
        <div className="absolute bottom-[-20%] left-1/2 h-[28rem] w-[60%] -translate-x-1/2 rounded-full bg-lavender-100/60 blur-[100px]" />

        {/* Ghibli sky — drifting hand-drawn clouds */}
        <GhibliClouds />

        {/* Bird flock — Kiki-style flight */}
        <GhibliBirds />

        {/* Falling petals — wind motif */}
        <GhibliPetals />

        {/* Rolling hills silhouette — Howl's countryside */}
        <GhibliHills />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1.15fr_1fr]">
          {/* Copy */}
          <div className="max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-normal leading-[1.08] tracking-[-0.02em] text-balance text-stone-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="gradient-text italic">Esther.</span>
                <WobbleUnderline color="#a373ff" />
              </span>
              <br />
              Software engineer turned{" "}
              <span className="relative inline-block">
                <span className="italic text-blush-600">project manager.</span>
                <WobbleUnderline color="#a373ff" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500 text-pretty"
            >
              Currently pursuing my MBA in Project Management at Indiana
              Institute of Technology, I&apos;m applying that foundation
              hands-on as a Construction Project Management Intern with ACE
              EPIC, collaborating with the National Park Service. With years of
              experience leading cross-functional teams at Palo Alto Networks
              and managing full product lifecycles, I bring both the technical
              fluency and the leadership mindset to move projects from idea to
              impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <a href="#experience">
                  See my work
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FileText className="h-4 w-4" />
                  View resume
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-stone-500"
            >
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-stone-800"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-stone-800"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@esthersechos"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-stone-800"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="mailto:estherburnett23@gmail.com"
                className="hidden items-center gap-1.5 transition-colors hover:text-stone-800 sm:inline-flex"
              >
                <Mail className="h-4 w-4" />
                estherburnett23@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-[2rem] border border-lavender-200/70 bg-white/60 p-3 shadow-xl shadow-lavender-500/10 backdrop-blur-md">
              <ImagePlaceholder
                aspect="portrait"
                rounded="3xl"
                label="Headshot"
                src="/images/snap1.jpeg"
                alt="Esther"
              />
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-lavender-200/80 bg-white/90 px-4 py-2 text-xs font-medium text-stone-800 shadow-md shadow-lavender-500/10 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lavender-600" />
                </span>
                Cypress, TX · Open to remote
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden rounded-2xl border border-lavender-200/80 bg-white/90 px-3 py-2 shadow-md shadow-lavender-500/10 backdrop-blur lg:block lg:-left-10"
            >
              <p className="text-[10px] uppercase tracking-wider text-stone-400">
                Experience
              </p>
              <p className="text-sm font-semibold text-stone-800">
                4+ yrs · Palo Alto Networks
              </p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-1/2 hidden rounded-2xl border border-lavender-200/80 bg-white/90 px-3 py-2 shadow-md shadow-lavender-500/10 backdrop-blur lg:block lg:-right-10"
            >
              <p className="text-[10px] uppercase tracking-wider text-stone-400">
                MBA · 2027
              </p>
              <p className="text-sm font-semibold text-stone-800">
                Project Management
              </p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-6 top-6 hidden rounded-2xl border border-lavender-200/80 bg-white/90 px-3 py-2 shadow-md shadow-lavender-500/10 backdrop-blur lg:block"
            >
              <p className="text-[10px] uppercase tracking-wider text-stone-400">
                U.S. Army Veteran
              </p>
              <p className="text-sm font-semibold text-stone-800">
                Supply Clerk · 2024–2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
