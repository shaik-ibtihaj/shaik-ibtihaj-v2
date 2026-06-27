import { motion } from "framer-motion";
import { Target, Database, Cpu, TrendingUp } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "1. Understand the Problem",
    desc: "Identify business goals, understand stakeholder needs, define success metrics, and translate challenges into data-driven opportunities.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: <Database className="w-4 h-4" />,
    title: "2. Analyze & Prepare Data",
    desc: "Collect, clean, transform, and analyze data to uncover insights and create reliable foundations for AI and analytics solutions.",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    title: "3. Build & Deploy Solutions",
    desc: "Develop machine learning models, AI applications, dashboards, and automation systems, then deploy them into production.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "4. Measure & Improve",
    desc: "Monitor performance, gather feedback, optimize solutions, and continuously improve business outcomes.",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor's Degree in Computer Science (Exchange Studies)",
    institution: "Blekinge Institute of Technology (BTH), Sweden",
    period: "2025 – 2026",
    focus: [
      "Artificial Intelligence & Machine Learning",
      "Data Analytics & Predictive Modeling",
      "Research Methodology & Software Development",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Jawaharlal Nehru Technological University Anantapur (JNTUA), India",
    period: "2022 – 2025",
    focus: [
      "Data Structures & Algorithms",
      "Database Management & SQL",
      "Operating Systems & Software Engineering",
      "Web Technologies (HTML/CSS/JS)",
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Core Expertise",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Predictive Modeling", "Agentic AI", "Software Engineering"],
  },
  {
    title: "Languages & databases",
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML5 & CSS3"],
  },
  {
    title: "Modern AI & tools",
    skills: ["Large Language Models", "Prompt Engineering", "RAG Systems", "AI Workflows", "Git / GitHub", "Jupyter Notebook"],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-stroke"></div>
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">Qualifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
            Academic & <span className="font-display italic">skills</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl font-light leading-relaxed font-body">
            My international educational path and technical competencies.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Education Timeline & Value Workflow */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body mb-6 select-none">
                Academic Journey
              </h3>
              
              <div className="relative border-l border-stroke/70 pl-6 md:pl-8 flex flex-col gap-10">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Timeline Node dot */}
                    <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-stroke border border-bg group-hover:bg-[#89AACC] group-hover:scale-125 transition-all duration-300"></span>
                    
                    {/* Degree */}
                    <span className="text-[10px] text-muted uppercase tracking-wider font-semibold font-body select-none">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-light text-text-primary mt-1 leading-tight group-hover:text-text-primary/95 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted mt-1 font-body font-medium italic">
                      {edu.institution}
                    </p>
                    
                    {/* Focus points */}
                    <ul className="mt-4 space-y-1.5 text-xs text-muted/80 font-body font-light">
                      {edu.focus.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#89AACC]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Workflow Card (Fills Left-Side Vertical Space) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface/30 border border-stroke/70 p-6 rounded-3xl transition-all duration-300 relative select-none"
            >
              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#89AACC] font-bold font-body mb-1 select-none">
                  How I Create Business Value with Data & AI
                </h4>
                <p className="text-[10px] text-muted uppercase tracking-widest font-body font-semibold select-none">
                  From business challenge to measurable impact
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const hoverStyle = idx === 0 
                    ? "hover:bg-blue-500/5 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    : idx === 1
                    ? "hover:bg-indigo-500/5 hover:border-indigo-500/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                    : idx === 2
                    ? "hover:bg-purple-500/5 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    : "hover:bg-violet-500/5 hover:border-violet-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]";

                  return (
                    <div 
                      key={idx} 
                      className={`relative bg-surface/50 border border-stroke/60 p-3.5 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left hover:scale-[1.03] transition-all duration-300 group/step ${hoverStyle}`}
                    >
                      {/* Icon container with specific background/text colors */}
                      <div className={`p-2 rounded-xl mb-3 ${step.color} border shrink-0 transition-transform duration-300 group-hover/step:scale-110`}>
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h5 className="text-[11px] font-extrabold text-text-primary mb-1 leading-tight font-body">
                        {step.title}
                      </h5>
                      
                      {/* Description */}
                      <p className="text-[9.5px] text-muted font-body leading-relaxed font-light">
                        {step.desc}
                      </p>
                      
                      {/* Connecting arrow */}
                      {idx < 3 && (
                        <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-stroke font-bold select-none pointer-events-none text-xs">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body mb-4 select-none">
              Technical Expertise
            </h3>

            <div className="flex flex-col gap-8">
              {SKILL_CATEGORIES.map((cat, idx) => {
                // Set theme colors per category
                const dotColor = idx === 0 ? "bg-blue-400" : idx === 1 ? "bg-teal-400" : "bg-purple-400";
                const badgeStyle = idx === 0 
                  ? "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                  : idx === 1
                  ? "hover:bg-teal-500/10 hover:text-teal-400 hover:border-teal-500/40 hover:shadow-[0_0_12px_rgba(20,184,166,0.2)]"
                  : "hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)]";

                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-6 bg-surface/30 border border-stroke/40 hover:border-stroke/70 rounded-2xl transition-all duration-300"
                  >
                    <h4 className="inline-flex items-center gap-2 text-xs text-text-primary uppercase tracking-widest font-semibold font-body mb-5 select-none">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                      {cat.title}
                    </h4>
                    
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs sm:text-sm text-muted bg-surface/50 border border-stroke/70 px-4 py-2.5 rounded-xl select-none transition-all duration-300 font-medium font-body hover:scale-[1.04] cursor-default ${badgeStyle}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
