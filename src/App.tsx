import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Research from "./components/Research";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

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
        <Hero startAnimation={!isLoading} />
        <SelectedWorks />
        <Resume />
        <Stats />
        <Research />
        <Certifications />
        <Footer />
      </main>
    </div>
  );
}

export default App;
