import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useRef } from "react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of Arbaminch & Mekelle University",
      location: "Ethiopia",
      period: "2020 - 2024",
      gpa: null,
      status: "Graduated",
      description: "Specialized in software development, algorithms, system design, and cybersecurity fundamentals with comprehensive training in modern software engineering practices and methodologies.",
      coursework: ["Software Development", "Data Structures & Algorithms", "System Design", "Cybersecurity Fundamentals", "Database Systems", "Software Engineering Principles"],
      achievements: ["Software Engineering Specialization", "Cybersecurity Focus", "System Design Expertise"],
    },
    {
      degree: "Hedera Hashgraph Development",
      institution: "Hedera Developer Program",
      location: "Online",
      period: "2023",
      gpa: null,
      status: "Certified",
      description: "Distributed ledger technology, smart contracts, and decentralized applications with focus on Hedera Hashgraph network development and implementation.",
      coursework: ["Distributed Ledger Technology", "Smart Contracts", "Decentralized Applications", "Hedera Consensus Service", "Cryptocurrency", "Blockchain Architecture"],
      achievements: ["Hedera Developer Certification", "DLT Expertise", "Smart Contract Development"],
    },
    {
      degree: "AI Mastery Program",
      institution: "MeliaCred & 10Academy",
      location: "Online",
      period: "2023 - 2024",
      gpa: null,
      status: "Ongoing",
      description: "Machine learning, deep learning, and artificial intelligence applications with hands-on experience in modern AI frameworks and real-world project implementation.",
      coursework: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Applications", "Data Science", "Python for AI"],
      achievements: ["AI/ML Specialization", "Deep Learning Focus", "Practical AI Implementation"],
    },
    {
      degree: "Introduction to Ethical Hacking and System Defending",
      institution: "ZSecurity",
      location: "Online",
      period: "2023",
      gpa: null,
      status: "Completed",
      description: "Comprehensive introduction to ethical hacking methodologies and system defense strategies with hands-on experience in penetration testing and cybersecurity fundamentals.",
      coursework: ["Ethical Hacking", "System Defense", "Penetration Testing", "Network Security", "Vulnerability Assessment", "Security Tools"],
      achievements: ["Ethical Hacking Certification", "Penetration Testing Skills", "Cybersecurity Defense Strategies"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      rotateY: -15,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
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
    <section ref={ref} id="education" className="py-24 md:py-32">
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
            Education & Learning
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
            Academic foundation and continuous learning journey in technology
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.01,
                x: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left side - Icon and basic info */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </motion.div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right side - Detailed info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-1">
                          {edu.institution}
                        </p>
                        <Badge 
                          variant={edu.status.includes('Graduated') ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {edu.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Coursework */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <motion.div
                              key={course}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                              >
                                {course}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">Achievements</h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement) => (
                            <motion.div
                              key={achievement}
                              className="flex items-center gap-2 text-sm"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}