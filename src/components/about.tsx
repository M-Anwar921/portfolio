import { GraduationCap, Target, Rocket } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            01 · About Me
          </p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Building at the intersection of AI and software
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="h-full glass p-2">
              <CardContent className="pt-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Computer Science Student
                    </p>
                    <p className="text-sm text-muted-foreground">
                      University of Management &amp; Technology (UMT), Lahore
                    </p>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {about.story}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium">
                  Current CGPA
                  <span className="text-gradient font-bold">{about.cgpa}</span>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={0.1}>
              <Card className="glass">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-center gap-2 text-brand-blue dark:text-brand-cyan">
                    <Target className="h-5 w-5" />
                    <p className="font-semibold text-foreground">Short-Term Goal</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {about.shortTerm}
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="glass">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-center gap-2 text-brand-blue dark:text-brand-cyan">
                    <Rocket className="h-5 w-5" />
                    <p className="font-semibold text-foreground">Long-Term Goal</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {about.longTerm}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
