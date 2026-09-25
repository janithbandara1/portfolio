import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12 flex flex-col gap-2 sm:mb-16">
          <p className="text-sm/6 font-semibold text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            My Toolbox
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{group.title}</CardTitle>
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
      </div>
    </section>
  );
}
