import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Tech {
  name: string;
  icon: string;
}

interface Category {
  title: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    title: "Front-end",
    techs: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
    ],
  },
  {
    title: "Back-end",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "NestJS", icon: "🏗️" },
      { name: "Java", icon: "☕" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🗄️" },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    techs: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

export default function TechSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologias" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg mr-2">02.</span>
            Tecnologias
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-5 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.techs.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="text-base">{t.icon}</span>
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
