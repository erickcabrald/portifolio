import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "erick.cabral.dutraa@gmail.com",
    href: "mailto:erick.cabral.dutraa@gmail.com",
  },
  {
    icon: Github,
    label: "github.com/erickcabrald",
    href: "https://github.com/erickcabrald",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/erick-cabral",
    href: "https://www.linkedin.com/in/erick-cabral-9b3b7328b",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg mr-2">04.</span>
            Contato
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-8" />

          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Estou aberto a novas oportunidades. Se quiser trocar uma ideia,
            colaborar em um projeto ou me fazer uma proposta, é só chamar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <c.icon
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">{c.label}</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:erick.cabral.dutraa@gmail.com"
            className="inline-block mt-10 px-8 py-3 rounded-lg border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
          >
            Enviar e-mail
          </a>
        </motion.div>
      </div>
    </section>
  );
}
