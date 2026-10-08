"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Medal,
  Music,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { GhibliSparkles } from "@/components/ghibli/sparkles";
import { GhibliJiji } from "@/components/ghibli/jiji";

const HOBBIES = [
  { emoji: "🎬", label: "Studio Ghibli", sub: "Animation nerd at heart", bg: "bg-lavender-50 border-lavender-200/70", text: "text-stone-900" },
  { emoji: "🎸", label: "Ukulele", sub: "Strumming in the margins", bg: "bg-blush-50 border-blush-200/70", text: "text-blush-900" },
  { emoji: "⛸️", label: "Roller Skating", sub: "Best stress relief", bg: "bg-sage-50 border-sage-200/70", text: "text-sage-900" },
  { emoji: "⚽", label: "Soccer", sub: "Always on a field somewhere", bg: "bg-blush-50 border-blush-200/70", text: "text-blush-900" },
];

export function Beyond() {
  return (
    <section id="beyond" className="relative py-24 md:py-32">
      <GhibliSparkles
        sparkles={[
          { top: "10%", left: "4%", size: 12, delay: 0 },
          { top: "30%", left: "95%", size: 10, delay: 1.2 },
          { top: "65%", left: "2%", size: 14, delay: 0.6 },
          { top: "80%", left: "92%", size: 11, delay: 1.9 },
          { top: "50%", left: "48%", size: 8, delay: 2.3 },
        ]}
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="Beyond work"
          eyebrowClassName="text-blush-600"
          title="The full picture."
          description="The best leaders are curious, well-rounded humans first — I'm always working on both."
        />

        {/* Personal intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-3xl border border-lavender-200/70 bg-gradient-to-br from-lavender-50/80 to-white px-8 py-10 sm:px-12 sm:py-12">
            {/* Decorative accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-lavender-100/50 blur-2xl" />

            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-2">
                {[
                  { label: "Wife", variant: "blush" },
                  { label: "Mom of Two", variant: "blush" },
                  { label: "Nigerian", variant: "sage" },
                  { label: "Runner", variant: "sage" },
                  { label: "Ghibli Fan", variant: "default" },
                ].map((tag) => (
                  <Badge key={tag.label} variant={tag.variant as "blush" | "sage" | "default"} className="text-xs">
                    {tag.label}
                  </Badge>
                ))}
              </div>
              <p className="max-w-3xl text-[17px] leading-relaxed text-stone-700">
                Life outside of work is just as full as my project plans. I&apos;m
                a wife and mom of two boys — my greatest and most rewarding team.
                Originally from Nigeria, I&apos;ve been running since I was 6
                years old, a passion that carried me through competing as a D2
                athlete at Claflin University and D1 at Indiana State University.
                When I&apos;m not chasing goals or boys around the house,
                you&apos;ll find me lost in a Ghibli film, strumming my ukulele,
                roller skating, or out on a soccer field soaking up the game I
                love.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Athletics + Army two-column */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Athletics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative h-full overflow-hidden">
              <GhibliJiji className="absolute -bottom-1 right-3 z-10 h-10 w-16 opacity-90" />

              {/* Primary image — competition close-up */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-t-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/athlete3.jpeg"
                    alt="Esther on the starting line at an indoor track meet"
              className="h-[400px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <Badge
                  variant="gradient"
                  className="absolute left-4 top-4 gap-1.5"
                >
                  <Trophy className="h-3 w-3" /> D1 &amp; D2 Scholarship Athlete
                </Badge>
              </div>

              <CardContent className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
                  Runner. Competitor. Student-Athlete.
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-blush-600">
                  Claflin University (D2) · Indiana State University (D1)
                </p>
                <p className="mt-4 leading-relaxed text-stone-700">
                  I&apos;ve been running since I was 6 — and that passion carried
                  me all the way to competing at both the Division II and Division
                  I levels. The track taught me discipline, resilience, and how to
                  perform under pressure. Those aren&apos;t just athletic lessons.
                  They&apos;re the same ones I bring to every standup, every
                  deadline, and every high-stakes delivery.
                </p>

                {/* Race day gallery — start → finish */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/athlete4.jpeg"
                      alt="Esther at the race start"
                      className="h-36 w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <p className="absolute bottom-2 left-3 text-[11px] font-medium text-white/90">
                      Race start
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/athlete1.jpeg"
                      alt="Esther with her finisher medal"
                      className="h-36 w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <p className="absolute bottom-2 left-3 text-[11px] font-medium text-white/90">
                      Finish line
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Stat icon={Medal} label="Running since" value="Age 6" />
                  <Stat
                    icon={Trophy}
                    label="Competed at"
                    value="D1 · D2 level"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Army */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative">
                <div className="relative overflow-hidden rounded-t-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/army1.jpeg"
                    alt="Esther Burnett, U.S. Army"
                    className="h-[400px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <Badge
                  variant="gradient"
                  className="absolute left-4 top-4 gap-1.5"
                >
                  <ShieldCheck className="h-3 w-3" /> U.S. Army Veteran
                </Badge>
              </div>

              <CardContent className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
                  Supply Clerk · U.S. Army
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-sky-600">
                  Sep 2024 – Nov 2025
                </p>
                <p className="mt-4 leading-relaxed text-stone-700">
                  Serving in the Army meant being accountable for high-value
                  equipment across multiple operations in a high-tempo
                  environment — coordinating requisitions, audits, and logistical
                  support across units. I rolled out digital tracking that
                  tightened reconciliation timelines and made the supply room a
                  lot less of a mystery.
                </p>
                <p className="mt-3 leading-relaxed text-stone-700">
                  The role sharpened my attention to detail, taught me to lead
                  calmly under pressure, and gave me the habit of leaving every
                  process better than I found it.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Stat
                    icon={ShieldCheck}
                    label="Focus"
                    value="Logistics & Readiness"
                  />
                  <Stat
                    icon={Zap}
                    label="Standard"
                    value="Mission-ready accountability"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Hobbies strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-stone-500">
            When I&apos;m off the clock
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {HOBBIES.map((h) => (
              <div
                key={h.label}
                className={`flex flex-col gap-2 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${h.bg}`}
              >
                <span className="text-3xl">{h.emoji}</span>
                <div>
                  <p className={`font-semibold ${h.text}`}>{h.label}</p>
                  <p className="text-xs text-stone-400">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-lavender-200/70 bg-lavender-50/60 p-3">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-500">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 text-sm font-semibold text-stone-900">{value}</p>
    </div>
  );
}
