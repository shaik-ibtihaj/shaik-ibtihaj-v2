import { motion } from "framer-motion";
import { Target, Database, Cpu, TrendingUp, Briefcase, GraduationCap, Code2, Globe } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "1. Understand Requirements",
    desc: "Analyze business goals, define system boundaries, map data flows, and establish clear architectural contracts.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: <Database className="w-4 h-4" />,
    title: "2. Data & Schema Design",
    desc: "Design optimized relational schemas, ETL/ELT pipelines, and data models for high availability and integrity.",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    title: "3. Build Backend & AI",
    desc: "Implement scalable REST APIs, microservices, LLM agent workflows (MCP/Tool calling), and ML models.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "4. Deploy & Evaluate",
    desc: "Containerize with Docker, setup CI/CD pipelines, monitor API latency, and run continuous evaluation.",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

const EXPERIENCE = [
  {
    id: 1,
    role: "Backend - Software Engineer",
    company: "ScandVPN - VPN Application",
    location: "Sweden",
    period: "2026 – Present",
    techStack: ["Python", "REST APIs", "PostgreSQL", "SQL"],
    highlights: [
      "Design, build, and maintain backend REST APIs powering a consumer VPN application, covering user accounts, authentication, and core app functionality.",
      "Developed subscription and billing-related services that manage plan status, user entitlements, and access to the VPN service.",
      "Built and integrated VPN server APIs used to manage server availability and connectivity, supporting a fast, one-click connection experience across a growing global server network.",
      "Designed and optimized relational database schemas and queries for users, subscriptions, and server data, prioritizing reliability, performance, and privacy-conscious data handling."
    ]
  },
  {
    id: 2,
    role: "AI Engineer Intern",
    company: "AxioGreen - Energy & Sustainability Tech",
    location: "Sweden",
    period: "Jan 2026 – Jul 2026",
    techStack: ["Python", "Machine Learning", "REST APIs", "SQL"],
    highlights: [
      "Developed and integrated AI-driven features into an energy monitoring platform used to analyze electricity consumption across commercial buildings and healthcare facilities.",
      "Built machine-learning solutions for energy forecasting and anomaly detection using historical energy, sensor, and operational data.",
      "Developed Python-based APIs to expose model predictions to production applications, and integrated AI-generated insights into existing dashboards and energy-management workflows.",
      "Identified consumption patterns and abnormal usage, delivering actionable recommendations to improve energy efficiency."
    ]
  },
  {
    id: 3,
    role: "Data Engineer",
    company: "Datafynder",
    location: "India",
    period: "Aug 2025 – Aug 2026",
    techStack: ["Python", "SQL", "ETL/ELT", "BI & Dashboards"],
    highlights: [
      "Developed and maintained data pipelines processing VPN application, network, subscription, and user interaction events.",
      "Built ETL/ELT workflows in Python and SQL that transformed raw product and operational data into analytics-ready datasets, and supported data warehouse and BI infrastructure.",
      "Created dashboards and analytical models to monitor VPN connection reliability, server performance, user engagement, subscription conversion, and retention.",
      "Implemented data validation and pipeline monitoring to improve data quality, and worked with engineering and product teams to turn operational data into actionable insights."
    ]
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "Exchange Program in Computer Science",
    institution: "Blekinge Institute of Technology (BTH)",
    location: "Sweden",
    period: "2025 – 2026",
    coursework: [
      "Machine Learning",
      "Applied Statistics",
      "Data Analytics",
      "Statistical Modeling",
      "Databases & SQL",
      "Software Engineering",
      "Python Programming"
    ]
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "FastAPI", "Flask", "REST APIs", "Microservices", "System Design"]
  },
  {
    title: "Applied AI & Agents",
    skills: ["LLMs", "Tool/Function Calling", "OpenAI API", "Anthropic Claude API", "OpenAI Agents SDK", "MCP", "RAG", "Vector Databases", "LangChain", "LLM Evaluation", "AI Guardrails"]
  },
  {
    title: "Databases & Data",
    skills: ["PostgreSQL", "SQL", "ETL/ELT", "Data Pipelines", "Data Warehousing", "BI Dashboards"]
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-Learn", "Pandas", "NumPy", "Feature Engineering", "Forecasting", "Anomaly Detection"]
  },
  {
    title: "Frontend",
    skills: ["React", "Responsive UI", "State Management"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Git", "Linux", "CI/CD", "Microsoft Azure"]
  }
];

const SPOKEN_LANGUAGES = [
  { language: "English", proficiency: "Fluent" },
  { language: "Swedish", proficiency: "Intermediate" }
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
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">Background & Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
            Experience & <span className="font-display italic text-[#89AACC]">qualifications</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl font-light leading-relaxed font-body">
            Professional track record in backend engineering, data pipelines, and applied AI systems.
          </p>
        </motion.div>

        {/* Section 1: Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Briefcase className="w-4 h-4 text-[#89AACC]" />
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body select-none">
              Professional Work Experience
            </h3>
          </div>

          <div className="relative border-l border-stroke/70 pl-6 md:pl-8 flex flex-col gap-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node dot */}
                <span className="absolute -left-[31px] md:-left-[39px] top-2 w-2.5 h-2.5 rounded-full bg-stroke border border-bg group-hover:bg-[#89AACC] group-hover:scale-125 transition-all duration-300"></span>

                {/* Header info */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h4 className="text-xl font-light text-text-primary group-hover:text-white transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-[#89AACC] font-medium font-body bg-[#89AACC]/10 border border-[#89AACC]/20 px-2.5 py-0.5 rounded-full">
                      {exp.company}
                    </span>
                    <span className="text-xs text-muted/70 font-body italic">
                      • {exp.location}
                    </span>
                  </div>
                  <span className="text-xs text-muted/90 font-semibold font-body uppercase tracking-wider bg-surface border border-stroke px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-[#89AACC] bg-surface/70 border border-stroke/80 px-2.5 py-0.5 rounded-md font-body font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted font-body font-light leading-relaxed">
                  {exp.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5">
                      <span className="text-[#89AACC] text-base leading-none select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Education & Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Education & Spoken Languages */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <GraduationCap className="w-4 h-4 text-[#89AACC]" />
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body select-none">
                  Education
                </h3>
              </div>
              
              <div className="relative border-l border-stroke/70 pl-6 md:pl-8 flex flex-col gap-8">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-stroke border border-bg group-hover:bg-[#89AACC] group-hover:scale-125 transition-all duration-300"></span>
                    
                    <span className="text-[10px] text-muted uppercase tracking-wider font-semibold font-body select-none">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-light text-text-primary mt-1 leading-tight group-hover:text-white transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted mt-1 font-body font-medium italic">
                      {edu.institution}, {edu.location}
                    </p>
                    
                    <div className="mt-4">
                      <span className="text-[10px] uppercase tracking-wider text-text-primary/80 font-bold font-body block mb-2">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, courseIdx) => (
                          <span
                            key={courseIdx}
                            className="text-[10px] text-muted/90 bg-surface/50 border border-stroke/60 px-2 py-0.5 rounded-md font-body font-light"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spoken Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-surface/30 border border-stroke/60 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-[#89AACC]" />
                <h4 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body select-none">
                  Languages (Spoken)
                </h4>
              </div>
              <div className="flex flex-wrap gap-4">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div key={lang.language} className="flex items-center gap-2 bg-surface border border-stroke/70 px-3.5 py-2 rounded-xl text-xs font-body">
                    <span className="text-text-primary font-medium">{lang.language}:</span>
                    <span className="text-[#89AACC] font-light">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Workflow Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface/30 border border-stroke/70 p-6 rounded-3xl transition-all duration-300 relative select-none"
            >
              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#89AACC] font-bold font-body mb-1 select-none">
                  How I Create Business Value
                </h4>
                <p className="text-[10px] text-muted uppercase tracking-widest font-body font-semibold select-none">
                  End-to-end engineering methodology
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative">
                {WORKFLOW_STEPS.map((step, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="relative bg-surface/50 border border-stroke/60 p-3.5 rounded-2xl flex flex-col hover:scale-[1.02] transition-all duration-300 group/step"
                    >
                      <div className={`p-2 rounded-xl mb-2.5 ${step.color} border shrink-0 w-max`}>
                        {step.icon}
                      </div>
                      <h5 className="text-[11px] font-extrabold text-text-primary mb-1 font-body">
                        {step.title}
                      </h5>
                      <p className="text-[9.5px] text-muted font-body leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Code2 className="w-4 h-4 text-[#89AACC]" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-text-primary font-bold font-body select-none">
                Technical Skills & Tools
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const dotColor = idx % 3 === 0 ? "bg-blue-400" : idx % 3 === 1 ? "bg-teal-400" : "bg-purple-400";

                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-5 bg-surface/30 border border-stroke/50 hover:border-stroke/80 rounded-2xl transition-all duration-300"
                  >
                    <h4 className="inline-flex items-center gap-2 text-xs text-text-primary uppercase tracking-widest font-semibold font-body mb-3.5 select-none">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                      {cat.title}
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-muted bg-surface/60 border border-stroke/70 px-3.5 py-1.5 rounded-xl select-none transition-all duration-300 font-medium font-body hover:scale-[1.04] hover:text-text-primary hover:border-[#89AACC]/40 cursor-default"
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
