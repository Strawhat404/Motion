import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: "Full Stack" | "Security" | "AI";
  technologies: string[];
  featured?: boolean;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  featured = false,
  delay = 0,
}: ProjectCardProps) {
  const categoryColors = {
    "Full Stack": "bg-chart-1/10 text-chart-1 border-chart-1/20",
    "Security": "bg-chart-5/10 text-chart-5 border-chart-5/20",
    "AI": "bg-chart-2/10 text-chart-2 border-chart-2/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Card className="overflow-hidden h-full hover-elevate group cursor-pointer transition-all duration-300">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge
            className={`absolute top-4 left-4 ${categoryColors[category]} border`}
            data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {category}
          </Badge>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full text-xs"
                data-testid={`badge-project-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1" data-testid="button-view-demo">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
            <Button size="sm" variant="outline" className="flex-1" data-testid="button-view-code">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
