import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { useState, useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS to send email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'yosephtesfaye27@gmail.com',
      };

      // For now, we'll use a mailto link as a fallback
      const subject = `Portfolio Contact: ${formData.projectType || 'General Inquiry'}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.projectType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:yosephtesfaye27@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open mailto link
      window.open(mailtoLink, '_blank');
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", projectType: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // You could add error handling here
    }
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const formFieldVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
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
    <section ref={ref} id="contact" className="py-24 md:py-32">
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
            Let's Work Together
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
            Have a project in mind? Let's discuss how we can collaborate
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="lg:col-span-3 group"
          >
            <Card className="p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                    className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                    className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    data-testid="select-project-type"
                    className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-dev">Web Development</option>
                    <option value="security">Security Audit</option>
                    <option value="ai">AI/ML Project</option>
                    <option value="other">Other</option>
                  </Select>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    data-testid="input-message"
                    className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                  />
                </motion.div>

                <motion.div
                  variants={formFieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                    disabled={isSubmitting || isSubmitted}
                    data-testid="button-send-message"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <motion.h3 
                  className="text-xl font-bold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.4 }
                  } : {}}
                >
                  Contact Information
                </motion.h3>
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactItemVariants}
                    whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">yosephtesfaye27@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactItemVariants}
                    whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">Available upon request</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactItemVariants}
                    whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Ethiopia</p>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <motion.h3 
                  className="text-xl font-bold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.6 }
                  } : {}}
                >
                  Connect
                </motion.h3>
                <motion.div 
                  className="space-y-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div
                    variants={contactItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                      data-testid="button-connect-github"
                    >
                      <SiGithub className="h-5 w-5 mr-3" />
                      GitHub
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={contactItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                      data-testid="button-connect-linkedin"
                    >
                      <SiLinkedin className="h-5 w-5 mr-3" />
                      LinkedIn
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={contactItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                      data-testid="button-connect-twitter"
                    >
                      <SiX className="h-5 w-5 mr-3" />
                      X / Twitter
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <motion.div 
                  className="flex items-center gap-2 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.8 }
                  } : {}}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />
                  <p className="font-medium">Available for Projects</p>
                </motion.div>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { 
                    opacity: 1,
                    transition: { delay: 0.9 }
                  } : {}}
                >
                  Currently accepting new opportunities
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
