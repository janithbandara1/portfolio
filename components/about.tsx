import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-primary">
            About me
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="mx-auto w-full max-w-64 overflow-hidden py-0">
          <CardContent className="p-0">
            <div className="relative aspect-square w-full">
              <Image
                src="/profile.jpg"
                alt="Janith Bandara"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
