import { useLenis } from "./hooks/useLenis"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Domains } from "./components/Domains"
import { Experience } from "./components/Experience"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { More } from "./components/More"
import { Contact } from "./components/Contact"

export default function App() {
  useLenis()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Domains />
        <Experience />
        <Skills />
        <Projects />
        <More />
        <Contact />
      </main>
    </>
  )
}
