import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { hero, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-28 sm:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {hero.availability}
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
            View my work
            <ArrowRight />
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
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <FaLinkedin className="size-5" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <FaGithub className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
