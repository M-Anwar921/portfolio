"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [pointer, setPointer] = React.useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  React.useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
      const target = e.target as HTMLElement;
      setPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-brand-cyan mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        scale: pointer ? 1.8 : 1,
      }}
    />
  );
}
