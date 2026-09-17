import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">
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

        <div className="grid grid-cols-3 gap-4">
          {about.highlights.map((item) => (
            <Card key={item.label} className="text-center">
              <CardContent className="flex flex-col items-center gap-1 py-6">
                <span className="text-2xl font-semibold tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
