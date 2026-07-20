"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

const infoItems = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
  { icon: Github, label: "GitHub", value: "M-Anwar921", href: siteConfig.github },
  { icon: Linkedin, label: "LinkedIn", value: "muhammad-anwar", href: siteConfig.linkedin },
];

export function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            09 · Contact
          </p>
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to AI/ML internships, collaborations, and interesting problems.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-brand-cyan/50">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="truncate text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Input
                    required
                    placeholder="Your name"
                    aria-label="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                  <Input
                    required
                    type="email"
                    placeholder="Your email"
                    aria-label="Your email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                  <Textarea
                    required
                    placeholder="Your message"
                    aria-label="Your message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                  <Button type="submit" size="lg" className="self-start">
                    {sent ? (
                      <>
                        <Check className="h-4 w-4" /> Opening your mail app…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
