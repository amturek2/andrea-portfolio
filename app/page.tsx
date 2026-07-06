import { About } from "./src/components/About";
import { Contact } from "./src/components/Contact";
import { Experience } from "./src/components/Experience";
import { Hero } from "./src/components/Hero";
import { Navbar } from "./src/components/Navbar";
import { Projects } from "./src/components/Projects";
import { Skills } from "./src/components/Skills";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
