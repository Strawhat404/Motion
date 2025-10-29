import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export function ExpertiseCard({
  icon: Icon,
  title,
  description,
  technologies,
  delay = 0,
}: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Card className="p-8 h-full hover-elevate transition-all duration-300 border-2 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-10 w-10 text-primary" />
          </div>

          <h3 className="text-2xl font-bold mb-4" data-testid={`text-expertise-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
