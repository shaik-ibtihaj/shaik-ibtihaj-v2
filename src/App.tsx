import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Research from "./components/Research";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function Home({ isLoading }: { isLoading: boolean }) {
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, isLoading]);

  return (
    <>
      <Hero startAnimation={!isLoading} />
      <SelectedWorks />
      <Resume />
      <Stats />
      <Research />
      <Certifications />
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary antialiased selection:bg-accent/20 selection:text-text-primary">
      {/* Loading Overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      {/* Navigation */}
      {!isLoading && <Navbar />}

      {/* Main Sections */}
      <main className={isLoading ? "hidden" : "block"}>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

