"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12 flex flex-col gap-2 sm:mb-16">
          <p className="text-sm/6 font-semibold text-primary">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-5 shrink-0" />
                  {contact.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-5 shrink-0" />
                  {contact.phone}
                </a>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="self-start" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send message"}
                </Button>
                {status === "sent" && (
                  <p className="text-sm text-muted-foreground">
                    Thank you! Your message has been sent. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
