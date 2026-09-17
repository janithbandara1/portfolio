import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Things I&apos;ve built
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2 border-t-0 bg-transparent">
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" />
                }
              >
                <GitHubIcon className="size-4" />
                Code
              </Button>
              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={
                  <a href={project.href} target="_blank" rel="noopener noreferrer" />
                }
              >
                Live demo
                <ExternalLink />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
