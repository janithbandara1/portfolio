"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed right-6 top-4 z-50 sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
      <nav className="mx-auto hidden w-fit items-center rounded-full border border-border bg-background/80 p-1.5 backdrop-blur-md sm:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex justify-end sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center justify-center rounded-full border border-border bg-background/80 p-3 text-muted-foreground backdrop-blur-md hover:text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-6 top-[76px] z-50 flex flex-col gap-1 rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-md sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
