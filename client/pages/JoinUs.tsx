import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function JoinUs() {
  const jobOpenings = [
    {
      title: "Senior Ning Architecture Engineer",
      department: "Engineering",
      location: "Silicon Valley, CA",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead the development of next-generation Ning CPU architectures",
      highlight: true,
    },
    {
      title: "Graphics Driver Developer",
      department: "Software",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and optimize graphics drivers for RX series GPUs",
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive go-to-market strategy for Aguilar AMD products",
    },
    {
      title: "AI/ML Research Scientist",
      department: "Research",
      location: "Singapore",
      type: "Full-time",
      experience: "PhD + 2 years",
      description: "Research AI acceleration technologies for Ning processors",
    },
    {
      title: "Technical Support Specialist",
      department: "Support",
      location: "Philippines",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide world-class technical support to our customers",
    },
    {
      title: "Internship Program",
      department: "Various",
      location: "Multiple",
      type: "Internship",
      experience: "Student",
      description: "Summer internship opportunities across all departments",
    },
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
      icon: "💰",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: "🏥",
    },
    {
      title: "Flexible Work",
      description: "Remote-friendly with flexible hours",
      icon: "🏡",
    },
    {
      title: "Professional Growth",
      description: "Learning budgets and career development programs",
      icon: "📚",
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and research",
      icon: "💡",
    },
    {
      title: "Stock Options",
      description: "Equity participation in company growth",
      icon: "📈",
    },
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
              Shape the Future
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Join</span>{" "}
              <span className="text-primary">Our Team</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Be part of the team that's revolutionizing computing with{" "}
              <span className="text-primary font-semibold">
                Ning processors and cutting-edge graphics technology
              </span>
              . Shape the future of technology with Aguilar AMD.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-foreground">Why</span>{" "}
                <span className="text-primary">Aguilar AMD?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by Adrian Caz Aguilar, our company has been at the
                forefront of innovation for over 50 years. We believe in
                empowering brilliant minds to create breakthrough technologies
                that change the world.
              </p>
              <p className="text-lg text-muted-foreground">
                Join a team of passionate engineers, designers, and innovators
                who are building the next generation of computing technology
                with Ning architecture and beyond.
              </p>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-4">
                    2000+
                  </div>
                  <div className="text-xl text-foreground mb-2">
                    Global Team Members
                  </div>
                  <div className="text-muted-foreground">
                    Working across 15+ countries to advance computing technology
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Employee</span>{" "}
              <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and a
              supportive work environment that encourages innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary/70 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Open</span>{" "}
              <span className="text-primary">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role and help us build the future of computing
              technology with innovative Ning processors and graphics solutions.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  job.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant={job.highlight ? "default" : "outline"}
                          className="text-xs"
                        >
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {job.type}
                        </Badge>
                        {job.highlight && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>

                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          job.highlight
                            ? "text-primary group-hover:text-primary/90"
                            : "text-foreground group-hover:text-primary/70"
                        }`}
                      >
                        {job.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {job.location}</span>
                        <span>⏱️ {job.experience}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-foreground">Ready to</span>{" "}
            <span className="text-primary">Innovate?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Don't see the perfect role? Send us your resume and we'll keep you
            in mind for future opportunities.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 text-primary-foreground text-xl px-12 py-6 h-auto font-bold transition-all duration-300 ease-out"
          >
            Submit Resume
          </Button>
        </div>
      </section>
    </div>
  );
}
