import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            03 · Experience
          </p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve put in the work
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-3xl border-l border-border pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.15} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[2.35rem] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-white ring-4 ring-background">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <p className="mb-1 font-mono text-xs text-muted-foreground">{item.date}</p>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="mb-4 text-sm text-brand-blue dark:text-brand-cyan">{item.org}</p>
              <ul className="space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
