import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import fullStackImg from "@assets/generated_images/Full_stack_project_mockup_8747f6bd.png";
import cyberSecurityImg from "@assets/generated_images/Cybersecurity_project_visualization_973b7cb7.png";
import aiMlImg from "@assets/generated_images/AI_ML_project_mockup_1400734f.png";
import ecommerceImg from "@assets/generated_images/E-commerce_web_project_d8269799.png";
import securityToolImg from "@assets/generated_images/Security_testing_tool_interface_2e132dde.png";
import beaconImg from "@assets/image_1761824187474.png";

type FilterType = "All" | "Full Stack" | "Security" | "AI";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const projects = [
    {
      title: "Beacon Proximity Marketing",
      description: "IoT-based proximity marketing platform with smart beacon devices for location-based customer engagement. Features real-time analytics, automated campaigns, and device management.",
      image: beaconImg,
      category: "Full Stack" as const,
      technologies: ["React", "Node.js", "IoT", "BLE", "Real-time Analytics"],
      featured: true,
      link: "https://beacon-admin-zeta.vercel.app/login",
    },
    {
      title: "Analytics Dashboard Platform",
      description: "Enterprise-grade analytics platform with real-time data visualization, custom reporting, and role-based access control. Built with microservices architecture for scalability.",
      image: fullStackImg,
      category: "Full Stack" as const,
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Network Security Monitor",
      description: "Real-time network monitoring and threat detection system using machine learning to identify anomalous behavior and potential security breaches.",
      image: cyberSecurityImg,
      category: "Security" as const,
      technologies: ["Python", "Wireshark", "Snort", "ELK Stack"],
    },
    {
      title: "AI Content Generator",
      description: "Advanced NLP-powered content generation tool with fine-tuned language models for creating marketing copy, technical documentation, and creative writing.",
      image: aiMlImg,
      category: "AI" as const,
      technologies: ["Python", "TensorFlow", "GPT", "FastAPI"],
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online marketplace with payment processing, inventory management, and personalized product recommendations using collaborative filtering.",
      image: ecommerceImg,
      category: "Full Stack" as const,
      technologies: ["Next.js", "Stripe", "MongoDB", "AWS S3"],
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated security testing tool for web applications that identifies OWASP Top 10 vulnerabilities and provides detailed remediation guidance.",
      image: securityToolImg,
      category: "Security" as const,
      technologies: ["Python", "Selenium", "OWASP ZAP", "Jenkins"],
    },
    {
      title: "Computer Vision System",
      description: "Real-time object detection and tracking system for security surveillance with facial recognition and behavioral analysis capabilities.",
      image: aiMlImg,
      category: "AI" as const,
      technologies: ["PyTorch", "OpenCV", "YOLO", "Flask"],
    },
  ];

  const filters: FilterType[] = ["All", "Full Stack", "Security", "AI"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A selection of innovative solutions across web development, security, and AI
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
                data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
