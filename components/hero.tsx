import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { hero, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-28 sm:py-36"
    >
      <p className="text-sm font-medium text-muted-foreground">
        {hero.greeting}
      </p>
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
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-foreground"
        >
          <GitHubIcon className="size-5" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="size-5" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </section>
  );
}
