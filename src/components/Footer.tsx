import { motion } from "framer-motion";
import { SiReact, SiFramer, SiTailwindcss } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-muted-foreground">
            Turning ideas into reality with code, security, and intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Stack Development</li>
              <li>Security Audits</li>
              <li>AI/ML Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Built With</h4>
            <div className="flex gap-4">
              <SiReact className="h-6 w-6 text-muted-foreground hover:text-chart-1 transition-colors" />
              <SiFramer className="h-6 w-6 text-muted-foreground hover:text-chart-2 transition-colors" />
              <SiTailwindcss className="h-6 w-6 text-muted-foreground hover:text-chart-3 transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <p className="mt-2">
            Built with React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
