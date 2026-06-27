import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { Download } from "lucide-react";

interface HeroProps {
  startAnimation: boolean;
}

const ROLES = [
  "AI & ML Engineer",
  "Software Developer",
  "Research Scholar",
  "Agentic AI Pioneer"
];

export default function Hero({ startAnimation }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Background HLS Video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Cycling roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    if (!startAnimation) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.15 },
        "-=0.9"
      );

      tl.fromTo(
        ".scroll-indicator-fade",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay and Fade out */}
        <div className="absolute inset-0 bg-black/25 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Name */}
        <h1 className="name-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 select-none mt-12">
          Shaik Ibtihaj
        </h1>

        {/* Role line */}
        <p className="blur-in text-base sm:text-xl md:text-2xl text-muted/95 mb-6 font-light font-body">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Sweden.
        </p>

        {/* Description */}
        <p className="blur-in text-xs sm:text-sm md:text-base text-muted/80 max-w-2xl mb-10 leading-relaxed font-body font-light">
          Computer Science graduate with international academic experience in India and Sweden, passionate about Artificial Intelligence, Machine Learning, and Software Development. My academic and research work has focused on predictive modeling, data analytics, and intelligent systems, including my thesis on Human Activity Prediction Using Markov Models. I enjoy solving complex problems through technology and continuously expanding my knowledge in emerging fields such as Agentic AI and autonomous systems. I am eager to contribute to innovative teams and build impactful, data-driven solutions.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* See Works */}
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-8 py-4 bg-text-primary text-bg transition-all duration-300 hover:scale-105 group overflow-hidden"
          >
            {/* The accent gradient border background */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The inner background cover */}
            <span className="absolute inset-[1px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The text */}
            <span className="relative z-10 text-bg group-hover:text-text-primary transition-colors duration-300">
              See Works
            </span>
          </a>

          {/* Reach out */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-8 py-4 border border-stroke bg-bg/50 text-text-primary transition-all duration-300 hover:scale-105 group overflow-hidden"
          >
            {/* The accent gradient border background */}
            <span className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The inner background cover */}
            <span className="absolute inset-[1px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The text */}
            <span className="relative z-10 transition-colors duration-300">
              Reach out...
            </span>
          </a>

          {/* Download Resume */}
          <a
            href="/resume/shaik-ibtihaj-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume PDF"
            className="relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-8 py-4 border border-[#89AACC]/30 bg-[#89AACC]/[0.06] text-text-primary transition-all duration-300 hover:scale-105 group overflow-hidden hover:shadow-[0_0_25px_rgba(137,170,204,0.15)]"
          >
            {/* The accent gradient border background */}
            <span className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The inner background cover */}
            <span className="absolute inset-[1px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* The text */}
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
              <Download className="w-4 h-4" />
              Download Resume
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-fade absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium font-body select-none">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-stroke/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#89AACC] to-transparent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
