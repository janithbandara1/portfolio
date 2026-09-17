import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium text-primary">
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Where I&apos;ve worked
        </h2>
      </div>

      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div key={item.company}>
            <div className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
              <div className="text-sm text-muted-foreground">
                {item.period}
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-base font-medium">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            {index < experience.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  );
}
