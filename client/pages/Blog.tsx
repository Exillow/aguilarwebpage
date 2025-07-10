import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Gaming: Ning Architecture Explained",
      excerpt:
        "Discover how our revolutionary Ning CPU architecture is changing the gaming landscape with unprecedented performance and efficiency.",
      date: "November 25, 2024",
      category: "Technology",
      readTime: "5 min read",
      author: "Adrian Caz Aguilar",
      highlight: true,
    },
    {
      title: "RX 9070 XT vs Competition: Performance Breakdown",
      excerpt:
        "In-depth analysis of how the Aguilar AMD RX 9070 XT stacks up against the competition in 4K gaming benchmarks.",
      date: "November 22, 2024",
      category: "Reviews",
      readTime: "8 min read",
      author: "Tech Team",
    },
    {
      title: "Building the Ultimate Gaming PC with Aguilar AMD",
      excerpt:
        "Complete guide to building a high-performance gaming rig using Ning processors and RX graphics cards.",
      date: "November 20, 2024",
      category: "Guides",
      readTime: "12 min read",
      author: "Build Team",
    },
    {
      title: "AI Acceleration: How Ning CPUs Excel in Machine Learning",
      excerpt:
        "Exploring the built-in AI acceleration features of Ning processors and their impact on machine learning workloads.",
      date: "November 18, 2024",
      category: "AI & ML",
      readTime: "10 min read",
      author: "Research Team",
    },
    {
      title: "Ray Tracing Revolution: RDNA 4 Deep Dive",
      excerpt:
        "Technical breakdown of the hardware ray tracing improvements in our latest RDNA 4 graphics architecture.",
      date: "November 15, 2024",
      category: "Technology",
      readTime: "15 min read",
      author: "Engineering Team",
    },
    {
      title: "Optimizing Your Ning CPU for Content Creation",
      excerpt:
        "Pro tips and settings to get the best performance from your Ning processor for video editing and 3D rendering.",
      date: "November 12, 2024",
      category: "Optimization",
      readTime: "7 min read",
      author: "Content Team",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Reviews",
    "Guides",
    "AI & ML",
    "Optimization",
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amd-red-900/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              Latest Insights
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Tech</span>{" "}
              <span className="text-primary">Blog</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Stay updated with the latest developments in{" "}
              <span className="text-primary font-semibold">
                Aguilar AMD technology
              </span>
              , gaming trends, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  post.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={post.highlight ? "default" : "outline"}
                      className="text-xs"
                    >
                      {post.category}
                    </Badge>
                    {post.highlight && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
                      post.highlight
                        ? "text-primary group-hover:text-primary/90"
                        : "text-foreground group-hover:text-primary/70"
                    }`}
                  >
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>By {post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-muted-foreground/70">{post.date}</div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-foreground">Stay</span>{" "}
            <span className="text-primary">Informed</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our tech blog and never miss the latest insights from
            Aguilar AMD engineers and industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
