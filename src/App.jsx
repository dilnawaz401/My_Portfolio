import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Projects from './components/Projects';
import Experience from './components/Experience';
import BeyondTechnology from './components/BeyondTechnology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProblemSolving />
        <Projects />
        <Experience />
        <BeyondTechnology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
