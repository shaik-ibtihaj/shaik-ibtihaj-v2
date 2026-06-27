import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Simple active section detection
      const sections = ["home", "work", "resume", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-1.5 transition-all duration-300 ${
          isScrolled ? "shadow-lg shadow-black/40 border-white/20 bg-surface/90" : ""
        }`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          className="relative w-9 h-9 rounded-full flex items-center justify-center p-[1px] cursor-pointer group transition-all duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4E85BF] to-[#89AACC] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center z-10">
            <span className="font-display italic text-[13px] text-text-primary">SI</span>
          </div>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block"></div>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {[
            { id: "home", label: "Home" },
            { id: "work", label: "Work" },
            { id: "resume", label: "Resume" }
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 transition-all duration-200 select-none ${
                  isActive
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block"></div>

        {/* Say Hi Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="relative inline-flex items-center justify-center text-xs sm:text-sm text-text-primary rounded-full p-[1px] transition-all duration-300 group ml-1"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium border border-white/5 group-hover:border-transparent transition-all duration-300">
            Say hi <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
