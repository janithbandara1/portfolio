import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";

function ProjectPreview({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-muted/40 to-transparent">
      <span className="font-mono text-4xl font-bold text-muted-foreground/20">
        {initials}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="grid gap-0 overflow-hidden p-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      <div className="p-6">
        <ProjectPreview title={project.title} />
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <div className="flex shrink-0 gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} repository`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-5" />
            </a>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium text-primary">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Things I&apos;ve built
        </h2>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
