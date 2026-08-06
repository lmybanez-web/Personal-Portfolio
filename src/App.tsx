import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
