import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeSnippet } from "@/components/code-snippet";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/20 to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 sm:py-32 md:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.availability}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl">
            {hero.headline}
          </h1>
          <p className="text-lg/8 text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
              View my work
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Contact me
            </Button>
          </div>

          <div className="mt-4 flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/janithbandara1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href="https://github.com/janithbandara1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <FaGithub className="size-5" />
            </a>
          </div>
        </div>

        <CodeSnippet />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronDown className="size-6 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
