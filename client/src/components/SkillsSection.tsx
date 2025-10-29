import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skills = {
    "Languages & Frameworks": [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Node.js",
      "Next.js",
      "Express",
      "FastAPI",
      "Django",
    ],
    "Security Tools": [
      "Metasploit",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "OWASP ZAP",
      "Snort",
      "Kali Linux",
    ],
    "AI/ML Technologies": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "Hugging Face",
      "LangChain",
    ],
    "DevOps & Cloud": [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "CI/CD",
      "Terraform",
      "Git",
    ],
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and industry-standard tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6" data-testid={`text-skill-category-${category.toLowerCase().replace(/\s+/g, "-")}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-2 hover-elevate cursor-default"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
