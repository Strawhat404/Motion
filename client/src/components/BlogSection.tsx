import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "Learn how to design and deploy production-ready microservices architecture using Kubernetes, with real-world examples and best practices.",
      category: "Full Stack",
      date: "2024-10-15",
      readTime: "8 min read",
      views: "2.4K",
      featured: true,
    },
    {
      title: "Advanced XSS Prevention Techniques",
      excerpt: "Deep dive into cross-site scripting vulnerabilities and modern mitigation strategies for web applications.",
      category: "Security",
      date: "2024-10-08",
      readTime: "12 min read",
      views: "1.8K",
    },
    {
      title: "Fine-tuning LLMs for Domain-Specific Tasks",
      excerpt: "A comprehensive guide to adapting large language models for specialized applications with minimal data.",
      category: "AI",
      date: "2024-09-28",
      readTime: "15 min read",
      views: "3.1K",
      featured: true,
    },
    {
      title: "Zero-Day Vulnerability Research Methodology",
      excerpt: "Exploring systematic approaches to discovering unknown security vulnerabilities in software systems.",
      category: "Security",
      date: "2024-09-20",
      readTime: "10 min read",
      views: "2.7K",
    },
    {
      title: "Building Real-time Features with WebSockets",
      excerpt: "Implementing bidirectional communication in modern web applications for live updates and collaboration.",
      category: "Full Stack",
      date: "2024-09-12",
      readTime: "6 min read",
      views: "1.5K",
    },
    {
      title: "Computer Vision with Transfer Learning",
      excerpt: "Leveraging pre-trained models to build powerful image recognition systems with limited training data.",
      category: "AI",
      date: "2024-09-05",
      readTime: "11 min read",
      views: "2.2K",
    },
  ];

  const categoryColors = {
    "Full Stack": "bg-chart-1/10 text-chart-1 border-chart-1/20",
    "Security": "bg-chart-5/10 text-chart-5 border-chart-5/20",
    "AI": "bg-chart-2/10 text-chart-2 border-chart-2/20",
  };

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical Blog
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={post.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="p-6 h-full hover-elevate transition-all duration-300 group cursor-pointer flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    className={`${categoryColors[post.category as keyof typeof categoryColors]} border rounded-full`}
                    data-testid={`badge-blog-category-${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <TrendingUp className="h-3 w-3" />
                      <span>Trending</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-blog-${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.views} views</span>
                    <Button variant="ghost" size="sm" className="group/btn" data-testid="button-read-article">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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
          <Button size="lg" variant="outline" className="rounded-full" data-testid="button-view-all-posts">
            View All Posts
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
