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
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Education</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Where I&apos;ve studied
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {education.map((entry) => (
            <Card key={entry.institution}>
              <CardContent>
                <div className="flex gap-4">
                  <div className="relative mt-0.5 flex size-12 flex-none items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
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
                    <p className="text-base font-medium">{entry.institution}</p>
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
