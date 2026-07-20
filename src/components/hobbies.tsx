import { Crown, BookOpen, Mic2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { hobbies } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = { Crown, BookOpen, Mic2 };

export function Hobbies() {
  return (
    <section className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            08 · Beyond Code
          </p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            What keeps me sharp off-screen
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {hobbies.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Crown;
            return (
              <Reveal key={h.title} delay={i * 0.1}>
                <Card className="group h-full text-center transition-transform hover:-translate-y-1.5">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white transition-transform group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {h.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
