import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

