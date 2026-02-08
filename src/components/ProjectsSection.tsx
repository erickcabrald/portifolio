import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectTaskManager from "@/assets/project-task-manager.jpg";
import projectDevfinder from "@/assets/project-devfinder.jpg";
import projectUrlShortener from "@/assets/project-url-shortener.jpg";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Api para gerenciamento de projetos",
    description:
      "API RESTful para gerenciamento de projetos com autenticação JWT, CRUD completo e documentação Swagger.",
    techs: ["Node.js", "Fastify", "TypeScript", "Docker", "MySQL"],
    github: "https://github.com/erickcabrald/GerenciamentoProjetos",
    image: projectTaskManager,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg mr-2">03.</span>
            Projetos
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Project preview image */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`Preview do projeto ${p.title}`}
                  className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="p-6 pt-3">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
