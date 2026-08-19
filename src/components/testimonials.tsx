import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-base text-brand-blue dark:text-brand-cyan">
            07 · Testimonials
          </p>
          <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            What people say
          </h2>
          <p className="mb-14 max-w-xl text-muted-foreground">
            Recommendations from professors, supervisors, and collaborators — reserved
            here for when they come in.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <Card className="h-full border-dashed">
                <CardContent className="pt-6">
                  <Quote className="mb-4 h-6 w-6 text-brand-cyan/60" />
                  <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
                    {t.quote}
                  </p>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
