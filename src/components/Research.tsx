import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

import nlpImg from "../assets/nlp_translation.png";
import thesisImg from "../assets/thesis_research.png";
import ragImg from "../assets/rag_chatbot.png";
import cloudImg from "../assets/cloud_scalability.png";
import healthImg from "../assets/healthcare_ai.png";
import campusImg from "../assets/campus_navigation.png";

const PUBLICATIONS = [
  {
    id: 1,
    title: "Comparative Analysis Of Google Translate VS GPT Translate",
    subtitle:
      "Comparative study of machine translation quality, contextual understanding, and linguistic accuracy.",
    tags: ["NLP", "LLMs", "Translation AI"],
    image: nlpImg,
    pdfPath: "/pdfs/google_translate_vs_gpt.pdf",
  },
  {
    id: 2,
    title:
      "Probabilistic Modeling of User Interaction Patterns in Controlled Web Application Sessions",
    subtitle:
      "Bachelor's Thesis exploring first and second-order Markov Models to predict user transitions and analyze web behavior.",
    tags: ["Research", "Machine Learning", "Data Science"],
    image: thesisImg,
    pdfPath: "/pdfs/probabilistic_modeling_thesis.pdf",
  },
  {
    id: 3,
    title: "Campus360: Mobile-Based Campus Navigation System",
    subtitle:
      "A comprehensive project report outlining mobile application design, security auditing (OWASP MASVS), and ethical implications.",
    tags: ["Kotlin", "Android", "Security Testing"],
    image: campusImg,
    pdfPath: "/pdfs/campus360_navigation_system.pdf",
  },
  {
    id: 4,
    title: "Chatbot with Retrieval-Augmented Generation (RAG)",
    subtitle:
      "Development and evaluation of an intelligent chatbot using vector search, embeddings, and retrieval-enhanced generation.",
    tags: ["RAG", "LLM", "Vector Database"],
    image: ragImg,
    pdfPath: "/pdfs/chatbot_rag.pdf",
  },
  {
    id: 5,
    title: "Advancing Cloud Scalability",
    subtitle:
      "Research and implementation of scalable cloud architectures, container orchestration, and high-availability network flows.",
    tags: ["Cloud Computing", "Scalability", "Architecture"],
    image: cloudImg,
    pdfPath: "/pdfs/advancing_cloud_scalability.pdf",
  },
  {
    id: 6,
    title: "Health Plus Project Report",
    subtitle:
      "AI and data-driven healthcare solution focusing on predictive analytics, decision support, and user-centric health records.",
    tags: ["Healthcare AI", "Analytics", "Data Science"],
    image: healthImg,
    pdfPath: "/pdfs/health_plus_report.pdf",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="bg-bg py-16 md:py-24 border-t border-stroke/50 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#89AACC]/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">
                Publications
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
              Research &{" "}
              <span className="font-display italic text-[#89AACC]">
                publications
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-2xl font-light leading-relaxed font-body">
              Exploring AI, Machine Learning, Data Science, Cloud Computing, and
              Real-World Applications through research, experimentation, and
              technical projects.
            </p>
          </div>
        </motion.div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a
              key={pub.id}
              href={pub.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="research-card group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500"
            >
              {/* Animated border glow — visible only on hover */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none research-card-border" />

              {/* Card inner body */}
              <div className="relative z-10 bg-surface/30 group-hover:bg-surface/50 border border-stroke/70 group-hover:border-transparent rounded-3xl overflow-hidden flex flex-col justify-between h-full transition-all duration-500">
                {/* Card Image Wrapper */}
                <div className="relative w-full aspect-[16/10] overflow-hidden select-none">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Halftone Overlay */}
                  <div className="absolute inset-0 halftone-overlay opacity-[0.1] mix-blend-multiply" />

                  {/* Glassmorphic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-60" />

                  {/* PDF Badge */}
                  <div className="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-sm text-white text-[10px] font-bold font-body px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <FileText className="w-3 h-3" />
                    PDF
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-muted/90 bg-stroke/60 border border-white/5 px-2 py-0.5 rounded-full font-body font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-text-primary leading-snug font-body mb-2 group-hover:text-[#89AACC] transition-colors duration-300">
                      {pub.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted leading-relaxed font-body font-light">
                      {pub.subtitle}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-1.5 text-xs text-text-primary font-semibold font-body border-t border-stroke/20 pt-4 group-hover:text-[#89AACC] transition-colors duration-300">
                    Read Research
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
