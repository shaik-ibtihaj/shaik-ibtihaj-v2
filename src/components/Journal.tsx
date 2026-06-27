import { motion } from "framer-motion";
import markovImg from "../assets/markov.png";
import sequentialImg from "../assets/sequential.png";
import dashboardImg from "../assets/dashboard.png";
import agenticImg from "../assets/agentic.png";

const ENTRIES = [
  {
    id: 1,
    title: "The Rise of Agentic AI: Building Autonomous Systems",
    readTime: "5 min read",
    date: "Jun 12, 2026",
    image: agenticImg,
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 2,
    title: "Human Behavior Analytics via Probabilistic Markov Models",
    readTime: "8 min read",
    date: "May 28, 2026",
    image: markovImg,
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 3,
    title: "Transitioning from Traditional ML to Large Language Models",
    readTime: "6 min read",
    date: "Apr 15, 2026",
    image: sequentialImg,
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 4,
    title: "Designing Interactive Data Dashboards for Deep Analytics",
    readTime: "4 min read",
    date: "Mar 02, 2026",
    image: dashboardImg,
    link: "https://github.com/shaik-ibtihaj"
  }
];

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header with Framer Motion scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">Journal</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-xl font-light leading-relaxed font-body">
              A selection of research reflections, study notes, and perspectives on emerging technologies.
            </p>
          </div>
          
          {/* View All Thoughts Button */}
          <a
            href="https://github.com/shaik-ibtihaj"
            target="_blank"
            rel="noopener noreferrer"
            className="relative hidden md:inline-flex items-center justify-center rounded-full text-xs font-semibold px-6 py-3 bg-surface border border-stroke text-text-primary hover:scale-105 transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="absolute inset-[1px] rounded-full bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              View all thoughts <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </a>
        </motion.div>

        {/* Journal Pills List */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, index) => (
            <motion.a
              key={entry.id}
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-55px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 pr-4 sm:pr-8">
                {/* Left: Thumbnail & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-stroke/50 shrink-0 select-none">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-light text-text-primary group-hover:text-text-primary/80 transition-colors duration-300">
                    {entry.title}
                  </h3>
                </div>
                
                {/* Right: Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted pl-16 sm:pl-0 font-body">
                  <span>{entry.readTime}</span>
                  <div className="w-[3px] h-[3px] rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                  <span className="text-text-primary/0 group-hover:text-text-primary/100 group-hover:translate-x-1 transition-all duration-300 text-sm font-semibold shrink-0">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
