"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Beyond Work", href: "#beyond" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "border-lavender-200/80 bg-white/80 shadow-sm shadow-lavender-500/5 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 pl-2 text-base font-semibold tracking-tight text-stone-900"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lavender-600 text-sm font-bold text-white shadow-md shadow-lavender-500/30">
              E
            </span>
            <span className="hidden sm:inline">Esther M. Burnett</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-500 transition-colors hover:bg-lavender-100 hover:text-stone-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden md:inline-flex"
            >
              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex"
            >
              <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">Let&apos;s connect</a>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-lavender-200 bg-white/70 backdrop-blur md:hidden"
            >
              {open ? (
                <X className="h-4 w-4 text-stone-600" />
              ) : (
                <Menu className="h-4 w-4 text-stone-600" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-3xl border border-lavender-200/80 bg-white/90 p-3 shadow-lg shadow-lavender-500/10 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-lavender-100"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-lavender-100"
                >
                  <FileText className="h-4 w-4" />
                  Resume (PDF)
                </a>
                <Button asChild className="mt-2 w-full">
                  <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener" onClick={() => setOpen(false)}>
                    Let&apos;s connect
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
