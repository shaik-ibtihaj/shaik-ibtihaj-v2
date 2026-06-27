import { motion } from "framer-motion";
import markovImg from "../assets/markov.png";
import sequentialImg from "../assets/sequential.png";
import dashboardImg from "../assets/dashboard.png";
import agenticImg from "../assets/agentic.png";
import geometricImg from "../assets/geometric.png";
import neuralImg from "../assets/neural.png";

const PROJECTS = [
  {
    id: 1,
    title: "Human Activity Prediction Using Markov Models",
    titleItalic: "Markov Activity Predictor",
    role: "ML Researcher & Developer",
    desc: "A research-driven machine learning project focused on predicting future human activities by analyzing sequential behavioral patterns. Developed and evaluated first-order and second-order Markov Models, conducted cross-validation experiments, and performed statistical analysis to assess predictive performance.",
    image: markovImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 2,
    title: "Churn Prediction System",
    titleItalic: "Churn Classifier",
    role: "Machine Learning Developer",
    desc: "A machine learning solution designed to identify customers who are likely to discontinue a service. The project involved data preprocessing, feature engineering, predictive modeling, and performance evaluation to uncover patterns associated with customer attrition.",
    image: sequentialImg,
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 3,
    title: "Health Plus",
    titleItalic: "Healthcare Portal",
    role: "Software Engineer",
    desc: "A healthcare management platform developed to simplify access to healthcare-related information and services. The system was designed to improve user experience through efficient management of health records, appointments, and essential healthcare resources.",
    image: dashboardImg,
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 4,
    title: "Campus360",
    titleItalic: "Campus Management Suite",
    role: "Full-Stack Developer",
    desc: "A comprehensive campus management platform created to enhance the student experience by bringing essential campus services into a single digital environment. The application provides easier access to academic information, resources, and communication channels.",
    image: geometricImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 5,
    title: "Agentic AI Workflow Assistant",
    titleItalic: "Autonomous Agent Flow",
    role: "AI Systems Engineer",
    desc: "An ongoing project exploring autonomous AI systems capable of reasoning, planning, and executing multi-step tasks. The project focuses on integrating Large Language Models, prompt engineering, workflow automation, and intelligent decision-making processes.",
    image: agenticImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 6,
    title: "Full-Stack Web Application",
    titleItalic: "Modular Web Architecture",
    role: "Full-Stack Engineer",
    desc: "A complete web-based solution developed using modern frontend and backend technologies. The project involved designing user interfaces, implementing business logic, integrating databases, and creating responsive user experiences.",
    image: neuralImg,
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    link: "https://github.com/shaik-ibtihaj"
  }
];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">Selected Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-xl font-light leading-relaxed font-body">
              A selection of research projects, analytical frameworks, and software tools I have developed.
            </p>
          </div>
          
          {/* View All Work Button */}
          <a
            href="https://github.com/shaik-ibtihaj"
            target="_blank"
            rel="noopener noreferrer"
            className="relative hidden md:inline-flex items-center justify-center rounded-full text-xs font-semibold px-6 py-3 bg-surface border border-stroke text-text-primary hover:scale-105 transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="absolute inset-[1px] rounded-full bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              View all work <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`${project.colSpan} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between`}
            >
              {/* Media Wrapper */}
              <div className={`relative w-full overflow-hidden ${project.aspect}`}>
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Halftone Overlay */}
                <div className="absolute inset-0 halftone-overlay opacity-[0.15] mix-blend-multiply pointer-events-none"></div>

                {/* Hover Glassmorphism Cover */}
                <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 z-10"></div>
                
                {/* Hover Label: Pill with animated gradient border and white background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-full p-[1.5px] transition-transform duration-300 scale-90 group-hover:scale-100 block shadow-lg shadow-black/30"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] animate-gradient-shift bg-[length:200%_200%]"></span>
                    <span className="relative block rounded-full bg-white text-black px-6 py-2.5 text-xs font-semibold font-body select-none">
                      View — <span className="font-display italic">{project.titleItalic}</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom text info (fades out/slides down on hover) */}
              <div className="p-6 md:p-8 flex flex-col justify-end bg-surface border-t border-stroke/20 min-h-[140px] z-10 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0 pointer-events-none">
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-widest font-semibold bg-stroke/60 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm font-body">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-light text-text-primary mt-4 leading-tight font-body">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
