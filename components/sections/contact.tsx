"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { SITE } from "@/lib/site";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    iconBg: "bg-lavender-600 shadow-lavender-500/30",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View / download PDF",
    href: SITE.resumeUrl,
    external: true,
    iconBg: "bg-blush-500 shadow-blush-400/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: SITE.linkedin,
    external: true,
    iconBg: "bg-sky-600 shadow-sky-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: SITE.github,
    external: true,
    iconBg: "bg-lavender-700 shadow-lavender-600/30",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-lavender-200/70 bg-white/60 p-8 shadow-xl shadow-lavender-500/10 backdrop-blur-md sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-lavender-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-lavender-300/30 blur-3xl" />

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="Let's connect"
                eyebrowClassName="text-blush-600"
                title="Building something great? I&apos;d love to hear about it."
                description="Whether you're hiring a project manager, looking to collaborate, or just want to say hi — I read every message."
              />
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-lavender-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm backdrop-blur">
                <MapPin className="h-4 w-4 text-stone-400" />
                Based in Cypress, TX · Open to remote
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${SITE.email}`}>
                    <Mail className="h-4 w-4" />
                    Email me
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
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer noopener" : undefined}
                  className="group flex items-start gap-3 rounded-2xl border border-lavender-200/70 bg-white/70 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-lavender-300 hover:shadow-md hover:shadow-lavender-500/10"
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md ${c.iconBg}`}>
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-medium text-stone-900">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-stone-300 transition-colors group-hover:text-stone-700" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
