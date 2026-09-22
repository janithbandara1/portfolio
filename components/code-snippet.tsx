"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Token = { text: string; className?: string };

const tokens: Token[] = [
  { text: "const", className: "text-purple-400" },
  { text: " " },
  { text: "janith", className: "text-blue-400" },
  { text: " " },
  { text: "=", className: "text-zinc-400" },
  { text: " " },
  { text: "{", className: "text-zinc-400" },
  { text: "\n  " },
  { text: "role", className: "text-sky-300" },
  { text: ":", className: "text-zinc-400" },
  { text: " " },
  { text: '"Associate Software Engineer"', className: "text-emerald-400" },
  { text: ",", className: "text-zinc-400" },
  { text: "\n  " },
  { text: "stack", className: "text-sky-300" },
  { text: ":", className: "text-zinc-400" },
  { text: " " },
  { text: "[", className: "text-zinc-400" },
  { text: '"React"', className: "text-emerald-400" },
  { text: ", ", className: "text-zinc-400" },
  { text: '"Next.js"', className: "text-emerald-400" },
  { text: ", ", className: "text-zinc-400" },
  { text: '"Node.js"', className: "text-emerald-400" },
  { text: ", ", className: "text-zinc-400" },
  { text: '"NestJS"', className: "text-emerald-400" },
  { text: "],", className: "text-zinc-400" },
  { text: "\n  " },
  { text: "location", className: "text-sky-300" },
  { text: ":", className: "text-zinc-400" },
  { text: " " },
  { text: '"Kandy, Sri Lanka"', className: "text-emerald-400" },
  { text: ",", className: "text-zinc-400" },
  { text: "\n  " },
  { text: "isAvailable", className: "text-sky-300" },
  { text: ":", className: "text-zinc-400" },
  { text: " " },
  { text: "true", className: "text-orange-400" },
  { text: ",", className: "text-zinc-400" },
  { text: "\n" },
  { text: "};", className: "text-zinc-400" },
];

// Character index each token starts at, so the render never has to track it.
const tokenStarts = tokens.map(() => 0);
for (let i = 1; i < tokens.length; i++) {
  tokenStarts[i] = tokenStarts[i - 1] + tokens[i - 1].text.length;
}

const totalLength = tokens.reduce((sum, token) => sum + token.text.length, 0);

const TYPING_SPEED_MS = 35;
const START_DELAY_MS = 400;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function Caret() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block h-[1.1em] w-0 align-text-bottom"
    >
      <span className="absolute left-0 top-0 h-full w-[2px] animate-caret-blink bg-zinc-300" />
    </span>
  );
}

export function CodeSnippet() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let count = 0;
    let interval = 0;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        count += 1;
        setTyped(count);
        if (count >= totalLength) window.clearInterval(interval);
      }, TYPING_SPEED_MS);
    }, START_DELAY_MS);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  const revealed = prefersReducedMotion ? totalLength : typed;

  return (
    <div className="mx-auto hidden w-full max-w-md overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl md:block">
      <div className="relative flex items-center gap-1.5 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500" />
        <span className="size-2.5 rounded-full bg-yellow-500" />
        <span className="size-2.5 rounded-full bg-green-500" />
        <span className="absolute left-1/2 -translate-x-1/2 text-xs text-zinc-500">
          Untitled
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        <code>
          {tokens.map((token, index) => {
            const start = tokenStarts[index];
            const end = start + token.text.length;
            const visible = Math.min(
              Math.max(revealed - start, 0),
              token.text.length,
            );

            return (
              <span key={index} className={token.className}>
                {token.text.slice(0, visible)}
                {revealed >= start && revealed < end && <Caret />}
                {/* Untyped text keeps its space in the layout so nothing reflows. */}
                <span className="invisible">{token.text.slice(visible)}</span>
              </span>
            );
          })}
          {revealed >= totalLength && <Caret />}
        </code>
      </pre>
    </div>
  );
}
