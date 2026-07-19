import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Experience />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}

export default App;