import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Roadmap from "./sections/Roadmap";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ExperienceLearning from "./sections/ExperienceLearning";
import Certifications from "./sections/Certifications";
import GitHubSection from "./sections/GitHubSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Skills />
        <Projects />
        <ExperienceLearning />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
