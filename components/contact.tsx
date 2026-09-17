import type { ReactNode } from "react";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium text-primary">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Let&apos;s work together
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,280px)_1fr]">
        <div className="flex flex-col gap-4">
          <ContactItem
            icon={<Mail className="size-4" />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactItem
            icon={<MapPin className="size-4" />}
            label="Location"
            value={siteConfig.location}
          />
          <ContactItem
            icon={<GitHubIcon className="size-4" />}
            label="GitHub"
            value={siteConfig.social.github.replace("https://", "")}
            href={siteConfig.social.github}
          />
          <ContactItem
            icon={<LinkedInIcon className="size-4" />}
            label="LinkedIn"
            value={siteConfig.social.linkedin.replace("https://", "")}
            href={siteConfig.social.linkedin}
          />
        </div>

        <Card>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="self-start">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
