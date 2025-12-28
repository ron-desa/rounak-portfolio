import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Background from "./components/Background";



export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      
      <About />
      <Projects />
      <Background />
      <Skills />
      <Contact />

    </div>
  );
}
