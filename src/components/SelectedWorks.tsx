import { motion } from "framer-motion";
import markovImg from "../assets/markov.png";
import sequentialImg from "../assets/sequential.png";
import agenticImg from "../assets/agentic.png";
import ragImg from "../assets/rag_chatbot.png";
import campusImg from "../assets/campus_navigation.png";
import healthImg from "../assets/healthcare_ai.png";

const PROJECTS = [
  {
    id: 1,
    title: "AI Workflow Automation Platform",
    titleItalic: "Workflow Automation Engine",
    role: "AI Systems Engineer",
    desc: "Architected a workflow automation engine using LLM orchestration and tool/function calling to execute multi-step business workflows end-to-end. Integrated external REST APIs for real-time data retrieval and designed a modular architecture with separate planning, execution, and validation stages with reliability guardrails.",
    image: agenticImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 2,
    title: "Production Enterprise AI Knowledge Platform (RAG)",
    titleItalic: "Enterprise RAG Architecture",
    role: "AI & Backend Engineer",
    desc: "Built a Retrieval-Augmented Generation system indexing enterprise documents into vector stores for precise, low-hallucination retrieval. Implemented embedding-based semantic search, chunking pipeline with metadata filtering, evaluation layer, and containerized Docker REST API.",
    image: ragImg,
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 3,
    title: "Probabilistic User Behavior Modeling (Bachelor's Thesis)",
    titleItalic: "Markov Behavior Predictor",
    role: "ML Researcher & Developer",
    desc: "Designed first- and second-order Markov chain models to represent sequential user interaction patterns. Generated synthetic behavioral data to test models and uncover latent structure relevant to product analytics and personalization. Documented in full academic thesis.",
    image: markovImg,
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 4,
    title: "Customer Churn Prediction System",
    titleItalic: "Churn Classifier",
    role: "Machine Learning Developer",
    desc: "Built an end-to-end ML pipeline covering data cleaning, feature engineering, model training, and evaluation on PostgreSQL-backed data. Improved AUC-ROC over the baseline model and presented results in stakeholder-facing dashboards tied to customer retention.",
    image: sequentialImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 5,
    title: "Campus360: Campus Management Suite",
    titleItalic: "Campus Platform",
    role: "Full-Stack Developer",
    desc: "A comprehensive campus management platform created to enhance student experience by bringing essential campus services into a single digital environment, featuring mobile navigation and OWASP security auditing.",
    image: campusImg,
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/11]",
    link: "https://github.com/shaik-ibtihaj"
  },
  {
    id: 6,
    title: "Health Plus Healthcare Portal",
    titleItalic: "Healthcare Portal",
    role: "Software Engineer",
    desc: "A healthcare management platform designed to simplify access to healthcare services, featuring predictive analytics, health record management, and decision support.",
    image: healthImg,
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
