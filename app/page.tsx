import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Experience />
        <Separator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
