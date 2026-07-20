import { Code2, Boxes, BrainCircuit, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Boxes,
  BrainCircuit,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            02 · Skills
          </p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I reach for:<br></br>
            A toolkit built for shipping AI products
          </h2>
          <h3 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            
          </h3>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <Card className="group h-full transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-blue/10">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-4 font-semibold">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((s) => (
                        <Badge key={s} variant="default">
                          {s}
                        </Badge>
                      ))}
                    </div>
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
