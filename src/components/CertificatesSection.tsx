import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 4;

  const certificates = [
    {
      title: "CASE 2024 Innovation Award",
      issuer: "CASE Organization",
      date: "2024",
      credentialId: "CASE-2024-INNOVATION",
      description: "Recognition for outstanding innovation and excellence in technology development, demonstrating exceptional problem-solving skills and creative solutions.",
      skills: ["Innovation", "Technology Development", "Problem Solving", "Creative Solutions", "Excellence"],
      verified: true,
    },
    {
      title: "Hedera Hashgraph Development",
      issuer: "Hedera Developer Program",
      date: "2023",
      credentialId: "HEDERA-DEV-2023",
      description: "Distributed ledger technology, smart contracts, and decentralized applications with expertise in Hedera Hashgraph network development and implementation.",
      skills: ["Distributed Ledger Technology", "Smart Contracts", "Decentralized Applications", "Blockchain", "Hedera Hashgraph"],
      verified: true,
    },
    {
      title: "Ethical Hacking & Cybersecurity",
      issuer: "Zsecurity Academy",
      date: "2023",
      credentialId: "ZSEC-ETH-2023",
      description: "Advanced penetration testing, network security, and ethical hacking methodologies with hands-on experience in cybersecurity assessment and defense strategies.",
      skills: ["Penetration Testing", "Network Security", "Ethical Hacking", "Cybersecurity", "Security Assessment"],
      verified: true,
    },
    {
      title: "First Ever Fayda(NID) Hackathon Finalist",
      issuer: "Fayda(NID) Hackathon",
      date: "2023",
      credentialId: "FAYDA-FINALIST-2023",
      description: "Achieved finalist position in the inaugural Fayda(NID) Hackathon, demonstrating exceptional coding skills, teamwork, and innovative problem-solving abilities under pressure.",
      skills: ["Hackathon", "Competitive Programming", "Team Collaboration", "Innovation", "Rapid Development", "Problem Solving"],
      verified: true,
    },
    {
      title: "Digital Marketing and Social Media Algorithms",
      issuer: "Art School",
      date: "2025",
      credentialId: "ART-DIGITAL-2025",
      description: "Comprehensive course covering digital marketing strategies, social media algorithms, content optimization, and audience engagement techniques for modern digital platforms.",
      skills: ["Digital Marketing", "Social Media Algorithms", "Content Strategy", "Audience Engagement", "Marketing Analytics"],
      verified: false,
    },
    {
      title: "Photography and Photo Editing",
      issuer: "Art School",
      date: "2025",
      credentialId: "ART-PHOTO-2025",
      description: "Professional photography techniques and advanced photo editing skills with focus on creative composition, lighting, digital post-processing, and visual storytelling.",
      skills: ["Photography", "Photo Editing", "Creative Composition", "Digital Art", "Visual Design", "Lighting Techniques"],
      verified: false,
    },
  ];

  // Pagination calculations
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, endIndex);

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
        staggerChildren: 0.15,
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

  const cardVariants = {
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
    <section ref={ref} id="certificates" className="py-24 md:py-32 bg-muted/30">
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
            Certifications & Achievements
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
            Industry-recognized certifications validating expertise across multiple domains
          </motion.p>
        </motion.div>

        {/* Certificates Grid with Pagination */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto min-h-[600px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentCertificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="h-8 w-8 text-primary" />
                  </motion.div>
                  {cert.verified ? (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  ) : cert.date === "2025" ? (
                    <Badge variant="outline" className="text-xs">
                      Upcoming
                    </Badge>
                  ) : null}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 px-2 hover:bg-primary/10"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
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
              Showing {startIndex + 1}-{Math.min(endIndex, certificates.length)} of {certificates.length} certifications
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}