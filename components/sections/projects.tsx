"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

const PROJECTS = [
  {
    title: "GoTrash",
    role: "Product Manager / UX Designer",
    summary:
      "A mobile app for smarter waste disposal. Led a team of four as PM — owned the roadmap, ran sprints in Jira, and shipped to test environments via GitHub and Xcode.",
    tags: ["Product Management", "UX Design", "Agile", "Figma", "iOS"],
    github: "https://github.com/mmeli19/GoTrash",
    image: undefined,
    // accent: "border-l-4 border-l-blush-400",
    cardBg: "bg-blush-50/30",
    roleColor: "text-blush-600",
  },
  {
    title: "Outlook Phishing Quiz",
    role: "Developer",
    summary:
      "An interactive security awareness app that challenges users to spot phishing emails disguised as real Outlook messages. Built to make cybersecurity education hands-on — because reading about phishing isn't the same as catching it in the wild.",
    tags: ["React", "JavaScript", "Security Awareness", "UX"],
    github: "https://github.com/mmeli19/outlook-phishing-quiz",
    image: undefined,
    // accent: "border-l-4 border-l-sky-400",
    cardBg: "bg-sky-50/30",
    roleColor: "text-sky-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Selected projects"
          eyebrowClassName="text-blush-600"
          title="Where I&apos;ve owned the outcome."
          description="A few projects where I sat at the intersection of product, design, and engineering — not just shipping features, but defining what to build."
        />

        <div className="mt-12 grid gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className={`overflow-hidden ${p.cardBg}`}>
                <div className={`grid gap-0 ${p.image ? "md:grid-cols-[1.1fr_1fr]" : ""}`}>
                  {p.image && (
                    <div className="relative p-3">
                      <div className="overflow-hidden rounded-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.title}
                          className="aspect-[4/3] w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <p className={`text-sm font-medium uppercase tracking-wide ${p.roleColor}`}>
                      {p.role}
                    </p>
                    <h3 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
                      {p.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-stone-700">
                      {p.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 font-medium text-stone-600 transition-colors hover:text-stone-900"
                      >
                        <Github className="h-4 w-4" /> GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
