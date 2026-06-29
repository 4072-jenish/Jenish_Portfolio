import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Cursor from "@/components/portfolio/Cursor";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Journey from "@/components/portfolio/Journey";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import FAQ from "@/components/portfolio/FAQ";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function Portfolio() {
  return (
    <div className="App" data-testid="portfolio-root">
      <Cursor />
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(12,12,17,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            borderRadius: 0,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            letterSpacing: "0.05em",
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
