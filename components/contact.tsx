import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="bg-muted">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Get in Touch
          </h2>
        </div>

        <Card>
          <CardContent>
            <form className="flex flex-col gap-4">
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
