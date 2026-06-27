import { motion } from "framer-motion";
import { Award, Cloud, Shield, Database, Code, Monitor } from "lucide-react";

const CERTIFICATES = [
  {
    id: 1,
    title: "Introduction to Cloud Computing",
    issuer: "edX",
    category: "Cloud Computing",
    icon: Cloud,
    pdfPath: "/certificates/introduction-to-cloud-computing-edx.pdf",
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "Cloud Computing",
    icon: Cloud,
    pdfPath: "/certificates/cloud-computing-nptel.pdf",
  },
  {
    id: 3,
    title: "Learning Linux for LFCA Certification",
    issuer: "Linux Foundation",
    category: "Linux",
    icon: Monitor,
    pdfPath: "/certificates/learning-linux-lfca.pdf",
  },
  {
    id: 4,
    title: "Reverse Engineering & Malware Analysis",
    issuer: "Professional Certification",
    category: "Cybersecurity",
    icon: Shield,
    pdfPath: "/certificates/reverse-engineering-malware-analysis.pdf",
  },
  {
    id: 5,
    title: "Databases: Relational Databases and SQL",
    issuer: "Professional Certification",
    category: "Databases & SQL",
    icon: Database,
    pdfPath: "/certificates/relational-databases-sql.pdf",
  },
  {
    id: 6,
    title: "Introduction to Web Development with HTML5, CSS3, and JavaScript",
    issuer: "IBM / edX",
    category: "Web Development",
    icon: Code,
    pdfPath: "/certificates/introduction-to-web-development.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-bg py-16 md:py-24 border-t border-stroke/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header with Framer Motion scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold font-body">
                Certifications
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-4 leading-none">
              Professional{" "}
              <span className="font-display italic">certifications</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-xl font-light leading-relaxed font-body">
              A collection of professional certifications demonstrating my
              knowledge in cloud computing, Linux, databases, cybersecurity, and
              web development.
            </p>
          </div>
        </motion.div>

        {/* Certificate Pills List */}
        <div className="flex flex-col gap-4">
          {CERTIFICATES.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.a
                key={cert.id}
                href={cert.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-55px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-[#89AACC]/[0.06] border border-stroke hover:border-[#89AACC]/40 rounded-[40px] sm:rounded-full transition-all duration-400 cursor-pointer group hover:shadow-[0_0_25px_rgba(137,170,204,0.12),0_0_60px_rgba(78,133,191,0.06)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 pr-4 sm:pr-8">
                  {/* Left: Icon Badge & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-stroke/50 shrink-0 select-none bg-surface flex items-center justify-center group-hover:border-[#89AACC]/60 group-hover:bg-[#89AACC]/10 group-hover:shadow-[0_0_16px_rgba(137,170,204,0.2)] transition-all duration-400">
                      <IconComponent className="w-5 h-5 text-[#89AACC]/50 group-hover:text-[#89AACC] group-hover:drop-shadow-[0_0_6px_rgba(137,170,204,0.5)] transition-all duration-400" />
                    </div>
                    <h3 className="text-sm sm:text-base font-light text-text-primary group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Right: Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted pl-16 sm:pl-0 font-body">
                    <span className="group-hover:text-text-primary/80 transition-colors duration-300">{cert.issuer}</span>
                    <div className="w-[3px] h-[3px] rounded-full bg-stroke group-hover:bg-[#89AACC]/60 transition-colors duration-300" />
                    <span className="text-[#89AACC]/40 flex items-center gap-1 group-hover:text-[#89AACC] transition-colors duration-300">
                      <Award className="w-3 h-3" />
                      {cert.category}
                    </span>
                    <span className="text-[#89AACC]/0 group-hover:text-[#89AACC] group-hover:translate-x-1 transition-all duration-300 text-sm font-semibold shrink-0">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
