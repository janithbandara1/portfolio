import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-muted-foreground">
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
    </footer>
  );
}
