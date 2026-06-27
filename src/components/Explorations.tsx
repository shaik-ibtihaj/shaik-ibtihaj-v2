import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import geometricImg from "../assets/geometric.png";
import neuralImg from "../assets/neural.png";
import markovImg from "../assets/markov.png";
import sequentialImg from "../assets/sequential.png";
import dashboardImg from "../assets/dashboard.png";
import agenticImg from "../assets/agentic.png";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    id: 1,
    title: "Markov Transition Grid",
    desc: "Probabilistic node matrix visualizing activity state transitions.",
    image: markovImg,
    rotation: -4,
  },
  {
    id: 2,
    title: "Geometric Glass Refraction",
    desc: "3D render exploring light dispersion through cybernetic prisms.",
    image: geometricImg,
    rotation: 3,
  },
  {
    id: 3,
    title: "Sequential Analytics Flow",
    desc: "Chronological patterns mapped as temporal waveforms.",
    image: sequentialImg,
    rotation: -2,
  },
  {
    id: 4,
    title: "Neural Feedback Loop",
    desc: "A stylized visualization of deep recurrent networks and backpropagation.",
    image: neuralImg,
    rotation: 5,
  },
  {
    id: 5,
    title: "Interactive UI Clusters",
    desc: "High-fidelity component libraries with responsive state states.",
    image: dashboardImg,
    rotation: -3,
  },
  {
    id: 6,
    title: "Agentic AI Reasoning Paths",
    desc: "Decision trees of LLM workflows executing sequential actions.",
    image: agenticImg,
    rotation: 2,
  },
];

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  
  const [lightboxItem, setLightboxItem] = useState<typeof ITEMS[0] | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !col1 || !col2) return;

    const ctx = gsap.context(() => {

      // 2. Column 1 Parallax (move slightly faster upwards)
      gsap.fromTo(
        col1,
        { y: 150 },
        {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      // 3. Column 2 Parallax (move slightly slower or opposite direction)
      gsap.fromTo(
        col2,
        { y: 250 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Split items into 2 columns
  const col1Items = ITEMS.filter((_, i) => i % 2 === 0);
  const col2Items = ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[220vh] md:min-h-[260vh] bg-bg w-full overflow-hidden border-t border-stroke/50"
    >
      {/* LAYER 1: Pinned center text using CSS Sticky */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-md pointer-events-auto select-none">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4 font-semibold font-body">
              Explorations
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-6 leading-none">
              Visual <span className="font-display italic">playground</span>
            </h2>
            <p className="text-sm text-muted/90 mb-8 font-light leading-relaxed font-body">
              A sandbox of visual concepts, experimental design files, and ML pipeline structures.
            </p>
            
            {/* Action Link styled like a Dribbble button */}
            <a
              href="https://github.com/shaik-ibtihaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-xs font-semibold px-6 py-3 bg-surface border border-stroke text-text-primary hover:scale-105 hover:border-text-primary/30 transition-all duration-300 gap-1.5"
            >
              Explore Github <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* LAYER 2: Parallax Columns (z-20, absolute overlay) */}
      <div className="relative w-full z-20 flex justify-center pt-[20vh] pb-[30vh]">
        <div className="grid grid-cols-2 gap-8 md:gap-36 w-full max-w-[1100px] mx-auto px-6 md:px-12">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-16 md:gap-36">
            {col1Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="aspect-square w-full max-w-[280px] md:max-w-[320px] bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer group hover:border-[#89AACC]/40 transition-all duration-500 relative shadow-2xl shadow-black/60 mx-auto"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                />
                
                {/* Halftone filter */}
                <div className="absolute inset-0 halftone-overlay opacity-[0.1] mix-blend-multiply pointer-events-none"></div>

                <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-text-primary font-semibold font-body mb-1">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-muted font-body">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-16 md:gap-36 mt-[15vh] md:mt-[30vh]">
            {col2Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="aspect-square w-full max-w-[280px] md:max-w-[320px] bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer group hover:border-[#89AACC]/40 transition-all duration-500 relative shadow-2xl shadow-black/60 mx-auto"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                />

                {/* Halftone filter */}
                <div className="absolute inset-0 halftone-overlay opacity-[0.1] mix-blend-multiply pointer-events-none"></div>

                <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-text-primary font-semibold font-body mb-1">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-muted font-body">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-6 cursor-pointer select-none"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 text-text-primary hover:text-muted transition-colors duration-200 p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Container */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full flex flex-col gap-4 text-center pointer-events-auto"
            >
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-auto max-h-[65vh] object-contain rounded-2xl border border-stroke shadow-3xl select-none"
              />
              <div className="px-4">
                <h3 className="text-xl font-light text-text-primary mb-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs md:text-sm text-muted font-body leading-relaxed max-w-lg mx-auto">
                  {lightboxItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
