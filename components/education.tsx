import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

function getInitials(institution: string) {
  return institution
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Education() {
  return (
    <section id="education" className="bg-muted">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12 flex flex-col gap-2 sm:mb-16">
          <p className="text-sm/6 font-semibold text-primary">Education</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I&apos;ve studied
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((entry) => (
            <Card key={entry.institution}>
              <CardContent>
                <div className="flex gap-4">
                  <div className="relative mt-0.5 flex size-12 flex-none items-center justify-center overflow-hidden rounded-lg bg-muted ring-1 ring-border">
                    {entry.logo ? (
                      <Image
                        src={entry.logo}
                        alt={entry.institution}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {getInitials(entry.institution)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-lg font-semibold">{entry.institution}</p>
                    <h3 className="text-sm font-medium">{entry.degree}</h3>
                    <p className="text-sm text-muted-foreground">{entry.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
