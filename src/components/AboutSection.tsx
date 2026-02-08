import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Zap, Target, Award } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Lista de Formações, Licenças e Certificados
  const academicInfo = [
    {
      icon: GraduationCap,
      label: "Formação",
      value: "Técnico em Informática — IFMA",
    },
    {
      icon: Award,
      label: "Certificado",
      value: "Networking Basics — Cisco (Jun/2024)",
    },
  ];

  // Destaques de Perfil
  const highlights = [
    {
      icon: Zap,
      label: "Diferencial",
      value: "Aprendo rápido e resolvo problemas complexos",
    },
    {
      icon: Target,
      label: "Objetivo",
      value: "Primeira oportunidade na área de tecnologia",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg mr-2">01.</span>
            Sobre mim
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mb-8" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Recém-formado como{" "}
              <span className="text-foreground font-medium">
                Técnico em Informática pelo IFMA
              </span>
              , trago comigo uma base sólida que vai além do código: lógica de
              programação, desenvolvimento web, manutenção de bancos de dados e
              uma facilidade real para resolver problemas que outros preferem
              ignorar.
            </p>
            <p>
              Durante a formação, coloquei a mão na massa com{" "}
              <span className="text-foreground font-medium">JavaScript</span>,{" "}
              <span className="text-foreground font-medium">Java</span>,{" "}
              <span className="text-foreground font-medium">PostgreSQL</span> e{" "}
              <span className="text-foreground font-medium">MySQL</span>, além
              de ferramentas como{" "}
              <span className="text-foreground font-medium">Git</span> para
              versionamento e organização de projetos. Além disso, possuo
              conhecimentos em{" "}
              <span className="text-foreground font-medium">
                Redes de Computadores
              </span>{" "}
              certificado pela Cisco.
            </p>
            <p>
              Estou em busca da minha primeira oportunidade profissional — seja
              como{" "}
              <span className="text-foreground font-medium">
                Jovem Aprendiz
              </span>
              , estágio ou vaga júnior. O que me diferencia não é só o
              conhecimento técnico, mas a vontade genuína de aprender rápido,
              entregar com qualidade e crescer junto com a equipe.
            </p>
          </div>

          {/* Grid de Formações e Certificados */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[...academicInfo, ...highlights].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
              >
                <item.icon size={18} className="text-primary mb-2" />
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
