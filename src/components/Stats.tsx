import { motion } from "framer-motion";

const STATS = [
  {
    id: 1,
    number: "3+",
    label: "Years R&D Experience",
    desc: "Specializing in artificial intelligence, sequential prediction models, and modular software architectures.",
  },
  {
    id: 2,
    number: "25+",
    label: "Projects Completed",
    desc: "From machine learning forecasting algorithms to interactive analytical dashboards and agentic tools.",
  },
  {
    id: 3,
    number: "2",
    label: "International Academic Eras",
    desc: "Academic foundations from JNTUA India combined with advanced machine learning studies at BTH Sweden.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              {/* Stat Number with Accent Gradient Text */}
              <span className="text-6xl md:text-7xl lg:text-8xl font-display italic font-light accent-gradient-text leading-none select-none select-none transition-transform duration-300 group-hover:scale-105 inline-block">
                {stat.number}
              </span>

              {/* Label */}
              <h3 className="text-xs uppercase tracking-[0.25em] text-text-primary mt-4 font-semibold font-body">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted font-body font-light leading-relaxed mt-3 max-w-xs md:max-w-none">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
