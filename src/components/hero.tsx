"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const ROLES = [
  "AI Engineer",
  "Machine Learning Developer",
  "Full Stack Developer",
  "Generative AI Builder",
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}

function FloatingParticles() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        size: 3 + Math.random() * 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-brand-cyan/40"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function AIOrbitIllustration() {
  const nodes = [0, 60, 120, 180, 240, 300];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {[70, 110, 150].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="url(#orbitGrad)"
            strokeOpacity={0.25}
            strokeWidth={1}
          />
        ))}
        <circle cx="200" cy="200" r="34" fill="url(#orbitGrad)" opacity={0.9} />
        <text
          x="200"
          y="206"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          fill="white"
        >
          AI
        </text>
        {nodes.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const radius = 150;
          const cx = 200 + radius * Math.cos(rad);
          const cy = 200 + radius * Math.sin(rad);
          return (
            <motion.circle
              key={deg}
              cx={cx}
              cy={cy}
              r={7}
              fill="#38BDF8"
              animate={{ r: [6, 9, 6] }}
              transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-mesh bg-[length:200%_200%] animate-gradient-shift" aria-hidden />
      <FloatingParticles />

      <div className="section-container relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-brand-cyan"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-10 text-2xl font-semibold sm:text-3xl"
          >
            <TypingRole />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <a href={siteConfig.resumeUrl} download className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}>
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <AIOrbitIllustration />
        </motion.div>
      </div>
    </section>
  );
}
