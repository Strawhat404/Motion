import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { useEffect, useState, useRef } from "react";

const roles = ["Full Stack Engineer", "Cybersecurity Analyst", "AI Developer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth cursor following
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Magnetic transforms for different elements
  const titleX = useTransform(cursorX, [-300, 300], [-30, 30]);
  const titleY = useTransform(cursorY, [-300, 300], [-30, 30]);
  const titleRotate = useTransform(cursorX, [-300, 300], [-3, 3]);
  
  const buttonX = useTransform(cursorX, [-200, 200], [-20, 20]);
  const buttonY = useTransform(cursorY, [-200, 200], [-20, 20]);
  const buttonRotate = useTransform(cursorX, [-200, 200], [-2, 2]);
  
  const socialX = useTransform(cursorX, [-150, 150], [-15, 15]);
  const socialY = useTransform(cursorY, [-150, 150], [-15, 15]);
  const socialRotate = useTransform(cursorX, [-150, 150], [-1.5, 1.5]);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              x: titleX,
              y: titleY,
              rotate: titleRotate,
            }}
          >
            Yoseph Tesfaye
          </motion.h1>

          <motion.div
            className="h-16 md:h-20 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl font-bold text-muted-foreground"
            >
              {roles[roleIndex]}
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building secure, scalable applications powered by cutting-edge AI technology.
            Transforming complex challenges into elegant solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              x: buttonX,
              y: buttonY,
              rotate: buttonRotate,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={scrollToProjects}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 backdrop-blur-md bg-background/50"
                onClick={scrollToContact}
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              x: socialX,
              y: socialY,
              rotate: socialRotate,
            }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                data-testid="button-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                data-testid="button-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
