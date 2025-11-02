import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Using placeholder images - replace with your actual project screenshots
const fullStackImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop";
const cyberSecurityImg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop";
const aiMlImg = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop";
const ecommerceImg = "/assets/emawas.png";
const securityToolImg = "/assets/vulnerability_scanner.png";
const beaconImg = "/assets/beacon_proximity.png";
const realEstateImg = "/assets/Realstate.png";
const fmArchImg = "/assets/fm_arch.png";

type FilterType = "All" | "Full Stack" | "Security" | "AI";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

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
      title: "Real Estate Website",
      description: "Modern real estate platform built with Next.js featuring property listings, advanced search filters, virtual tours, and agent management system with responsive design.",
      image: realEstateImg,
      category: "Full Stack" as const,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
    {
      title: "FM Architecture and Designs",
      description: "Professional architecture and design portfolio website showcasing architectural projects, interior designs, and construction services with interactive galleries and project timelines.",
      image: fmArchImg,
      category: "Full Stack" as const,
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    },
    {
      title: "Vulnerability Scanner",
      description: "Comprehensive security testing suite with multiple scanning tools, real-time threat detection, and detailed vulnerability reporting dashboard with risk assessment metrics.",
      image: securityToolImg,
      category: "Security" as const,
      technologies: ["Python", "Nmap", "OWASP ZAP", "Custom Scripts", "Security Dashboard"],
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

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

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

          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => handleFilterChange(filter)}
                  className="rounded-full"
                  data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {filter}
                  {activeFilter === filter && (
                    <motion.span
                      className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      {filteredProjects.length}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with Pagination */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <ProjectCard
                    {...project}
                    delay={0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              className="flex items-center justify-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </motion.div>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <motion.div
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant={currentPage === page ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                      className="rounded-full w-10 h-10"
                    >
                      {page}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Page Info */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
