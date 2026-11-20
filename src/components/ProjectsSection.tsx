import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectEditalFacil from "@/assets/editalFacil.png";
import projectEncurtadorUrl from "@/assets/encurtadorUrl.png";

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
    title: "Encurtador de URLs",
    description:
      "API REST para encurtar URLs e redirecionar usuários para os links originais, utilizando Node.js e Fastify.",
    techs: ["Node.js", "Fastify", "JavaScript", "Docker", "MongoDB"],
    github: "https://github.com/erickcabrald/EncurtadorUrl",
    //live: "https:",
    image: projectEncurtadorUrl,
  },
  {
    title: "Edital Fácil",
    description:
      "Aplicação que utiliza inteligência artificial para analisar editais em PDF e gerar resumos com prazos, requisitos e documentos necessários.",
    techs: ["React", "TypeScript", "Fastify", "Google Gemini", "PostgreSQL"],
    github: "https://github.com/erickcabrald/analiseDeEditais",
    live: "https://edital-facil-web.vercel.app/",
    image: projectEditalFacil,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

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
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`Prévia do projeto ${p.title}`}
                  className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 pt-3">
                {/* Título */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {p.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Ações */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código-fonte de ${p.title} no GitHub`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acessar demonstração de ${p.title}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.25)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      Ver projeto
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
