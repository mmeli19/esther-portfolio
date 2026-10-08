"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

const SCHOOLS = [
  {
    school: "Indiana Institute of Technology",
    location: "Fort Wayne, IN",
    degree: "Master of Business Administration",
    concentration: "Project Management Concentration",
    period: "Jul 2025 – Present",
    current: true,
    iconBg: "bg-lavender-600 shadow-lavender-500/30",
    cardBg: "bg-lavender-50/40 border-lavender-200/60",
  },
  {
    school: "Claflin University",
    location: "Orangeburg, SC",
    degree: "B.S. in Computer Engineering",
    concentration: null,
    period: "Aug 2019 – Dec 2022",
    extras: [
      "D1/D2 Scholarship Student-Athlete",
      "Chi Alpha Sigma",
      "NSBE",
      "Global Student Organization",
    ],
    iconBg: "bg-blush-500 shadow-blush-400/30",
    cardBg: "bg-blush-50/40 border-blush-200/60",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          eyebrowClassName="text-sage-600"
          title="Engineering foundations, business mindset."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SCHOOLS.map((s, i) => (
            <motion.div
              key={s.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className={`h-full border ${s.cardBg}`}>
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md ${s.iconBg}`}>
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                          {s.school}
                        </h3>
                        {s.current && (
                          <Badge variant="gradient">In progress</Badge>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-stone-500">
                        {s.location} · {s.period}
                      </p>
                      <p className="mt-3 font-medium text-stone-800">
                        {s.degree}
                      </p>
                      {s.concentration && (
                        <p className="text-sm text-stone-500">
                          {s.concentration}
                        </p>
                      )}
                      {s.extras && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {s.extras.map((e) => (
                            <Badge key={e} variant="outline">
                              {e}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
