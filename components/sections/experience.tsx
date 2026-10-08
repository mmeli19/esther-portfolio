"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

interface Role {
  company: string;
  title: string;
  location?: string;
  period: string;
  tags?: string[];
  paragraphs: string[];
  current?: boolean;
  accent?: string;
  companyColor?: string;
}

const ROLES: Role[] = [
  {
    company: "Palo Alto Networks",
    title: "Software Engineer",
    period: "Feb 2022 – Present",
    tags: ["Agile / Scrum", "Cross-functional", "Mentorship", "SD-WAN"],
    current: true,
    accent: "bg-lavender-500 shadow-lavender-500/40",
    companyColor: "text-stone-600",
    paragraphs: [
      "I ship SD-WAN product features end-to-end — owning timelines from requirements through delivery, leading backend feature planning, and serving as the technical bridge between engineering and product. Cross-functional alignment through Agile and Scrum is where most of my days live.",
      "I also mentor incoming interns and junior engineers, and pushed performance work that reduced incident response time and sharpened the user experience.",
    ],
  },
  {
    company: "U.S. Army",
    title: "Supply Clerk",
    period: "Sep 2024 – Nov 2025",
    tags: ["Logistics", "Inventory", "Training"],
    accent: "bg-sky-500 shadow-sky-500/40",
    companyColor: "text-sky-700",
    paragraphs: [
      "As a Supply Clerk I was accountable for high-value equipment across multiple operations in a high-tempo environment — coordinating requisitions, audits, and logistical support across units. I rolled out digital tracking that tightened reconciliation timelines and made the supply room a lot less of a mystery.",
      "The role sharpened my attention to detail, taught me to lead calmly under pressure, and gave me the habit of leaving every process better than I found it.",
    ],
  },
  {
    company: "ULEDGER",
    title: "Software Engineer",
    period: "Aug 2022 – Dec 2022",
    tags: ["RUST", "Blockchain", "LibP2P"],
    accent: "bg-sage-500 shadow-sage-500/40",
    companyColor: "text-sage-700",
    paragraphs: [
      "At ULEDGER I architected cryptographic systems for blockchain data verification in RUST and tracked deliverables for peer-to-peer communication components built on LibP2P. Most of my time went to a system-wide refactoring initiative aimed at unblocking development velocity.",
      "I documented the codebase, R&D findings, and deployment procedures so the next engineer wouldn't have to rediscover what I'd already learned.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          eyebrowClassName="text-sage-600"
          title="Roles that shaped how I lead."
          description="From sprint planning at Palo Alto Networks to logistics in the U.S. Army — every role added a new tool to the kit."
        />

        <div className="mt-14">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-4 top-0 hidden h-full w-px bg-lavender-200 md:left-6 md:block"
            />

            <ol className="space-y-6">
              {ROLES.map((role, i) => (
                <motion.li
                  key={`${role.company}-${role.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                  className="relative md:pl-16"
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className={`absolute left-3 top-7 hidden h-4 w-4 rounded-full border-2 border-white shadow-md md:left-4 md:block ${role.accent ?? "bg-lavender-500 shadow-lavender-500/40"}`}
                  />
                  <Card className="hover:-translate-y-0.5 hover:shadow-md hover:shadow-lavender-500/10">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Building2 className={`h-4 w-4 ${role.companyColor ?? "text-lavender-600"}`} />
                            <p className={`text-sm font-medium uppercase tracking-wide ${role.companyColor ?? "text-lavender-700"}`}>
                              {role.company}
                            </p>
                            {role.current && (
                              <Badge variant="gradient" className="ml-1">
                                Current
                              </Badge>
                            )}
                          </div>
                          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900">
                            {role.title}
                          </h3>
                        </div>
                        <div className="text-sm text-stone-500 sm:text-right">
                          <p className="font-medium text-stone-800">
                            {role.period}
                          </p>
                          {role.location && (
                            <p className="mt-0.5 inline-flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {role.location}
                            </p>
                          )}
                        </div>
                      </div>

                      {role.tags && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {role.tags.map((t) => (
                            <Badge key={t} variant="outline">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-stone-700">
                        {role.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
