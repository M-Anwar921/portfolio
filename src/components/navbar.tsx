"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-24 items-center justify-between">
        <a href="#top" className="font-mono text-3xl font-semibold tracking-tight">
          <span className="text-gradient">M.ANWAR</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
           href={siteConfig.github}
           target="_blank"
           rel="noopener noreferrer"
           aria-label="GitHub"
           className="text-muted-foreground transition-colors hover:text-foreground"
          >
          <Github className="h-7 w-7" />
          </a>
          <a
           href={siteConfig.linkedin}
           target="_blank"
           rel="noopener noreferrer"
           aria-label="LinkedIn"
           className="text-muted-foreground transition-colors hover:text-foreground"
          >
           <Linkedin className="h-7 w-7" />
           </a>
          <ThemeToggle />
          <Button size="lg" onClick={() => (window.location.hash = "#contact")}>
           Contact Me
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden glass lg:hidden"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
