import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 20,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: 0.1 
              }
            } : {}}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.3,
                duration: 0.6 
              }
            } : {}}
          >
            Proficient in modern technologies and industry-standard tools
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300" 
                data-testid={`text-skill-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: categoryIndex * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }
                } : {}}
              >
                {category}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                      transition: { 
                        type: "spring", 
                        stiffness: 300,
                        rotate: { duration: 0.3 }
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-2 cursor-default hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
