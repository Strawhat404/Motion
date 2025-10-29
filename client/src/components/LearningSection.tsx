import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function LearningSection() {
  const currentLearning = [
    {
      title: "Advanced Kubernetes & Container Orchestration",
      platform: "Linux Foundation",
      progress: 75,
      timeSpent: "24 hours",
      category: "DevOps",
      skills: ["Kubernetes", "Docker", "Microservices"],
    },
    {
      title: "Quantum Computing Fundamentals",
      platform: "IBM Quantum",
      progress: 40,
      timeSpent: "12 hours",
      category: "Emerging Tech",
      skills: ["Quantum Computing", "Qiskit", "Python"],
    },
    {
      title: "Advanced Prompt Engineering for LLMs",
      platform: "DeepLearning.AI",
      progress: 90,
      timeSpent: "18 hours",
      category: "AI",
      skills: ["GPT", "Prompt Engineering", "LangChain"],
    },
    {
      title: "Zero Trust Security Architecture",
      platform: "SANS Institute",
      progress: 60,
      timeSpent: "20 hours",
      category: "Security",
      skills: ["Zero Trust", "Network Security", "IAM"],
    },
  ];

  const stats = [
    { label: "Courses Completed", value: "47" },
    { label: "Learning Hours", value: "850+" },
    { label: "Skills Acquired", value: "120+" },
  ];

  return (
    <section id="learning" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Continuous Learning
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to staying at the forefront of technology through ongoing education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate">
                <div className="text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentLearning.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover-elevate transition-all duration-300 h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-chart-2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1 line-clamp-2" data-testid={`text-course-${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{course.platform}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.timeSpent}</span>
                    </div>
                    <Badge variant="secondary" className="rounded-full text-xs">
                      {course.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs rounded-full"
                      data-testid={`badge-learning-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Always Evolving</h3>
            </div>
            <p className="text-muted-foreground">
              Dedicated to mastering emerging technologies and maintaining cutting-edge expertise
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
