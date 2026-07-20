import Image from "next/image";
import { Github, Star, GitFork } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

async function getRepos(): Promise<Repo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${siteConfig.githubUser}/repos?sort=updated&per_page=100`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return null;
    const data: Repo[] = await res.json();
    return data.filter((r) => !r.fork).slice(0, 6);
  } catch {
    return null;
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export async function GithubSection() {
  const repos = await getRepos();

  return (
    <section id="github" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
              06 · Open Source
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Straight from GitHub
            </h2>
          </div>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <Github className="h-4 w-4" /> View Profile
          </a>
        </Reveal>

        <Reveal delay={0.05} className="mb-10 overflow-hidden rounded-2xl border border-border p-4">
          <Image
            src={`https://ghchart.rshah.org/2563EB/${siteConfig.githubUser}`}
            alt={`${siteConfig.name}'s GitHub contribution graph`}
            width={1000}
            height={140}
            className="w-full dark:invert dark:hue-rotate-180"
            unoptimized
          />
        </Reveal>

        {repos && repos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={(i % 3) * 0.08}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="h-full transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-blue/10">
                    <CardContent className="flex h-full flex-col pt-6">
                      <div className="mb-3 flex items-center gap-2 font-semibold">
                        <Github className="h-4 w-4 shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </div>
                      <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
                        {repo.description ?? "No description provided."}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          {repo.language && (
                            <span className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                          </span>
                        </div>
                        <span>{timeAgo(repo.updated_at)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Live repository data couldn&apos;t be loaded right now — visit the{" "}
            <a href={siteConfig.github} className="text-brand-blue underline dark:text-brand-cyan">
              GitHub profile
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </section>
  );
}
