import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

function getInitials(title: string) {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Projects() {
  return (
    <section id="projects" className="bg-muted">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12 flex flex-col gap-2 sm:mb-16">
          <p className="text-sm/6 font-semibold text-primary">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="grid gap-0 overflow-hidden p-0 sm:grid-cols-2"
            >
              <div className="p-6">
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/15 via-muted/40 to-transparent">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="font-mono text-4xl font-bold text-muted-foreground/20">
                      {getInitials(project.title)}
                    </span>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <div className="flex shrink-0 gap-3 text-muted-foreground">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  </div>
                </div>

                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm/6 text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
