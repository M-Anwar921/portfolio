import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            05 · Education
          </p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.school + item.program} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="mb-1 font-mono text-xs text-muted-foreground">{item.date}</p>
                  <h3 className="mb-1 font-semibold leading-snug">{item.school}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{item.program}</p>
                  <p className="mb-4 text-sm font-semibold text-gradient">{item.score}</p>
                  {item.extra && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.extra.map((e) => (
                        <Badge key={e} className="text-[11px]">
                          {e}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
