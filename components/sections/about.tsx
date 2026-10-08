"use client";

import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { GhibliSparkles } from "@/components/ghibli/sparkles";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Lead with clarity",
    body: "I translate fuzzy business asks into clear plans — owning timelines, dependencies, and the hard tradeoffs.",
    iconBg: "bg-lavender-600 shadow-lavender-500/30",
    cardBg: "bg-lavender-50/60 border-lavender-200/60",
  },
  {
    icon: HeartHandshake,
    title: "Build with the team",
    body: "Cross-functional alignment is the work. I bridge engineering, product, and stakeholders so nobody is guessing.",
    iconBg: "bg-blush-500 shadow-blush-400/30",
    cardBg: "bg-blush-50/60 border-blush-200/60",
  },
  {
    icon: Rocket,
    title: "Ship, then iterate",
    body: "Momentum compounds. I prefer small, well-scoped releases over heroic launches that slip.",
    iconBg: "bg-sky-600 shadow-sky-500/30",
    cardBg: "bg-sky-50/60 border-sky-200/60",
  },
  {
    icon: GraduationCap,
    title: "Stay curious",
    body: "From RUST and React to logistics and the MBA — I learn fast and bring frameworks across disciplines.",
    iconBg: "bg-sage-600 shadow-sage-500/30",
    cardBg: "bg-sage-50/60 border-sage-200/60",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <GhibliSparkles />
      <div className="container relative">
        <SectionHeader
          eyebrow="About"
          title="A multidisciplinary builder."
          description="Engineer by training, project manager by craft, athlete and soldier by formation. I love getting messy problems into shape and shipping the result with a team that trusts each other."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-stone-700 sm:text-lg"
          >
            <p>
              I started in <span className="font-medium text-stone-800">Computer Engineering at Claflin University</span>,
              where I balanced full-time engineering coursework with life as a
              D1/D2 scholarship student-athlete — a season of life that shaped
              how I think about discipline, training, and team chemistry.
            </p>
            <p>
              At <span className="font-medium text-stone-800">Palo Alto Networks</span>, I&apos;ve spent 4+ years
              shipping SD-WAN features end-to-end: scoping with product, building
              with engineering, and shepherding releases through QA. Along the
              way I picked up a stint at a blockchain startup, served as a{" "}
              <span className="font-medium text-stone-800">U.S. Army Supply Clerk</span>, and started my{" "}
              <span className="font-medium text-stone-800">MBA in Project Management</span> at Indiana Tech.
            </p>
            <p>
              Today I&apos;m focused on the intersection of <span className="font-medium text-stone-800">technical
              fluency</span> and <span className="font-medium text-stone-800">program leadership</span> — the
              skillset I&apos;m sharpening through my current Construction Project
              Management internship and graduate coursework.
            </p>
          </motion.div>

          {/* Principles grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className={`h-full border hover:-translate-y-1 hover:shadow-md ${p.cardBg}`}>
                  <CardContent className="p-6">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md ${p.iconBg}`}>
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">
                      {p.body}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
