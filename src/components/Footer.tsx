import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hls from "hls.js";
import gsap from "gsap";


export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Background HLS Video setup (flipped vertically)
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

  // GSAP Marquee scroll
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // We animate translation left by 50% continuously
    gsap.fromTo(
      marquee,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 35,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  const marqueeText = "SHAIK IBTIHAJULLA SHA • ".repeat(16);

  return (
    <footer
      id="contact"
      className="relative w-full pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden bg-bg border-t border-stroke/50 flex flex-col justify-between"
    >
      {/* Background Flipped HLS Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark heavy overlay and Fade-in top */}
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-bg to-transparent z-0" />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20 px-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-8 leading-none select-none">
          Let's build the <span className="font-display italic">future</span> together
        </h2>
        
        {/* Email CTA with gradient hover border ring */}
        <Link
          to="/contact"
          className="relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-8 py-4 bg-surface border border-stroke text-text-primary hover:scale-105 transition-all duration-300 group overflow-hidden shadow-2xl shadow-black/40"
        >
          <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <span className="absolute inset-[1.5px] rounded-full bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Send Message 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </span>
        </Link>

      </div>

      {/* GSAP Marquee (z-10) */}
      <div className="relative z-10 overflow-hidden w-full select-none pointer-events-none py-6 border-y border-stroke/40 mb-16 md:mb-24">
        <div
          ref={marqueeRef}
          className="inline-block whitespace-nowrap text-[6vw] font-display italic uppercase tracking-tighter text-text-primary/10 leading-none"
        >
          {marqueeText}
        </div>
      </div>

      {/* Footer Bar (z-10) */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row gap-6 justify-between items-center border-t border-stroke/20 pt-8">
        
        {/* Social Links */}
        <div className="flex items-center gap-5 sm:gap-6 font-body text-xs sm:text-sm">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/shaik-ibtihaj-7127b8381/" },
            { label: "GitHub", href: "https://github.com/shaik-ibtihaj" },
            
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Pulse Dot Indicator */}
        <div className="flex items-center gap-2.5 bg-surface/80 border border-stroke px-4.5 py-2 rounded-full shadow-lg shadow-black/20 select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs text-text-primary/95 font-body font-medium">
            Available for projects
          </span>
        </div>

        {/* Copyright */}
        <div className="text-[10px] sm:text-xs text-muted font-body font-light">
          © {new Date().getFullYear()} Shaik Ibtihajulla Sha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
