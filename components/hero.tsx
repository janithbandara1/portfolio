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
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-8 px-6 py-24 sm:py-32 md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.availability}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-3xl lg:text-4xl">
            {hero.headline}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-base lg:text-lg">
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

        <div className="mx-auto hidden w-full max-w-md overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl md:block">
          <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-500" />
            <span className="size-2.5 rounded-full bg-yellow-500" />
            <span className="size-2.5 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-zinc-500">profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-zinc-400">=</span>{" "}
              <span className="text-zinc-400">{"{"}</span>
              {"\n  "}
              <span className="text-sky-300">name</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-emerald-400">&quot;{siteConfig.name}&quot;</span>
              <span className="text-zinc-400">,</span>
              {"\n  "}
              <span className="text-sky-300">role</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-emerald-400">&quot;{siteConfig.role}&quot;</span>
              <span className="text-zinc-400">,</span>
              {"\n  "}
              <span className="text-sky-300">stack</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-zinc-400">[</span>
              <span className="text-emerald-400">&quot;React&quot;</span>
              <span className="text-zinc-400">, </span>
              <span className="text-emerald-400">&quot;Next.js&quot;</span>
              <span className="text-zinc-400">, </span>
              <span className="text-emerald-400">&quot;Node.js&quot;</span>
              <span className="text-zinc-400">],</span>
              {"\n  "}
              <span className="text-sky-300">hireable</span>
              <span className="text-zinc-400">:</span>{" "}
              <span className="text-orange-400">true</span>
              <span className="text-zinc-400">,</span>
              {"\n"}
              <span className="text-zinc-400">{"};"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
