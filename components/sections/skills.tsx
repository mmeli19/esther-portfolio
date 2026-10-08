"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Layers,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { GhibliFireflies } from "@/components/ghibli/fireflies";

const GROUPS = [
  {
    icon: Boxes,
    iconBg: "bg-lavender-600 shadow-lavender-500/30",
    title: "Project Management",
    items: [
      "Jira",
      "Microsoft Projects",
      "Asana",
      "Confluence",
      "Notion",
      "Office 365",
      "SDLC",
      "Agile / Scrum",
    ],
  },
  {
    icon: Code2,
    iconBg: "bg-sage-600 shadow-sage-500/30",
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "RUST",
      "HTML",
      "CSS / SCSS",
    ],
  },
  {
    icon: Layers,
    iconBg: "bg-blush-600 shadow-blush-500/30",
    title: "Frameworks",
    items: [
      "React.js",
      "React Native",
      "Redux",
      "React Context API",
      "Node.js",
      "Express.js",
      "JSS",
      "jQuery",
    ],
  },
  {
    icon: Wrench,
    iconBg: "bg-sage-500 shadow-sage-400/30",
    title: "Developer Tools",
    items: [
      "Git / GitLab",
      "VS Code",
      "Figma",
      "Docker",
      "Jenkins",
      "Ubuntu / Linux",
      "VirtualBox",
      "REST APIs",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <GhibliFireflies />
      <div className="container relative">
        <SectionHeader
          eyebrow="Skills & Toolkit"
          eyebrowClassName="text-sage-600"
          title="Tools I reach for, day in and day out."
          description="A mix of project management, full-stack engineering, and the collaboration glue that makes them all work together."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md ${g.iconBg}`}>
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-900">
                    {g.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
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
