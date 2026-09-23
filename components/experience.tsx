import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { experience } from "@/lib/data";

function getInitials(company: string) {
  return company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {experience.map((entry) => (
            <Card key={entry.company}>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar
                    className="mt-0.5 size-12 rounded-lg after:rounded-lg"
                  >
                    <AvatarFallback className="rounded-lg">
                      {getInitials(entry.company)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col">
                    <p className="text-base font-medium">{entry.company}</p>
                    <div className="mt-2 flex flex-col">
                      {entry.roles.map((item, index) => {
                        const isLast = index === entry.roles.length - 1;
                        return (
                          <div key={item.role} className="flex gap-4">
                            <div className="relative flex w-2.5 flex-none flex-col items-center">
                              <span className="relative z-10 mt-[5px] size-2.5 flex-none rounded-full bg-primary" />
                              {!isLast && (
                                <span
                                  className="absolute top-[19px] bottom-[-1px] left-1/2 w-1 -translate-x-1/2 bg-border"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                            <div className={`flex-1 ${isLast ? "" : "pb-4"}`}>
                              <h3 className="text-sm font-medium">{item.role}</h3>
                              <p className="text-sm text-muted-foreground">
                                {item.period}
                              </p>
                              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground marker:text-primary">
                                {item.bullets.map((bullet) => (
                                  <li key={bullet}>{bullet}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
