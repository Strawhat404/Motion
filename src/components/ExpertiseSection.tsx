import { motion } from "framer-motion";
import { ExpertiseCard } from "./ExpertiseCard";
import { Code2, Shield, Brain } from "lucide-react";

export function ExpertiseSection() {
  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks and best practices. Expertise in both frontend and backend development with cloud deployment.",
      technologies: ["Django", "Next.js", "Node.js", "React.js", "PostgreSQL", "TypeScript", "AWS"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Analyst",
      description: "Securing digital infrastructure through comprehensive security analysis, threat detection, and proactive defense strategies using advanced cybersecurity methodologies.",
      technologies: ["Penetration Testing", "CTI", "Vulnerability Assessment", "Threat Hunting", "SIEM"],
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Developing intelligent systems using machine learning and deep learning techniques to solve complex real-world problems.",
      technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "MLOps"],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Areas of Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging diverse technical skills to deliver comprehensive solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              {...item}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
