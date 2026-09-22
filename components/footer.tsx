import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-background/60 sm:flex-row">
        <p>© {new Date().getFullYear()} Janith Bandara. All rights reserved.</p>
        <div className="flex items-center gap-4 text-background/60">
          <a
            href="https://www.linkedin.com/in/janithbandara1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-background"
          >
            <FaLinkedin className="size-5" />
          </a>
          <a
            href="https://github.com/janithbandara1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-background"
          >
            <FaGithub className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
