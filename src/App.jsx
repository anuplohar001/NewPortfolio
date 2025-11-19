import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      {/* <About /> */}
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
