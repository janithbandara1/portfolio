import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          Skills
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Technologies I work with
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
