"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1.6, bounce: 0 });
  const [display, setDisplay] = React.useState("0");
  const isDecimal = !Number.isInteger(value);

  React.useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  React.useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      setDisplay(isDecimal ? latest.toFixed(2) : Math.round(latest).toString());
    });
    return unsub;
  }, [springValue, isDecimal]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="border-t border-border bg-muted/40 py-24">
      <div className="section-container">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            By the numbers
          </p>
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            A quick snapshot
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <motion.p className="text-gradient text-3xl font-bold sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
