import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CertificatesSection() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SA-2024-001",
      skills: ["Cloud Architecture", "AWS", "Security"],
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      credentialId: "CEH-2023-456",
      skills: ["Penetration Testing", "Security", "Network Security"],
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      credentialId: "TF-DEV-2024-789",
      skills: ["Machine Learning", "TensorFlow", "Deep Learning"],
    },
    {
      title: "Certified Information Systems Security Professional",
      issuer: "ISC²",
      date: "2023",
      credentialId: "CISSP-2023-234",
      skills: ["Security Management", "Risk Assessment", "Compliance"],
    },
    {
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2023",
      credentialId: "PSM-2023-567",
      skills: ["Agile", "Scrum", "Project Management"],
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "AZ-AI-2024-890",
      skills: ["Azure AI", "Cognitive Services", "MLOps"],
    },
  ];

  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized credentials validating technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2" data-testid={`text-cert-${cert.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Issued</span>
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs rounded-full"
                      data-testid={`badge-cert-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  data-testid="button-verify-cert"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Verify Credential
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
