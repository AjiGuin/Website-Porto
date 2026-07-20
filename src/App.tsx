import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import GlobalGrid from './components/GlobalGrid';
import CursorEffect from './components/CursorEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cursor-enabled relative min-h-screen">
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <GlobalGrid />
      <CursorEffect />
      <Navbar />

      <main style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Certificates />
        <Stats />
        <Contact />
      </main>
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Footer />
      </div>
    </div>
  );
}
