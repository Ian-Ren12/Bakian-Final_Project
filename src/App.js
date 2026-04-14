import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-6">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="text-center py-6 text-gray-500">
        © 2026 Bakian.dev
      </footer>
    </div>
  );
}