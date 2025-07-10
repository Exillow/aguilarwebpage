import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutAMD() {
  const milestones = [
    {
      year: "1969",
      title: "AMD Founded",
      description:
        "Advanced Micro Devices founded by Jerry Sanders and seven others",
      highlight: true,
    },
    {
      year: "1975",
      title: "First Processor",
      description: "AMD 2900 family of bit-slice microprocessors launched",
    },
    {
      year: "1982",
      title: "IBM Partnership",
      description:
        "Became second source supplier for Intel 8086 processor to IBM",
    },
    {
      year: "1991",
      title: "Am386 Processor",
      description: "First independently designed x86 processor",
      highlight: true,
    },
    {
      year: "2000",
      title: "Athlon Leadership",
      description:
        "First to break 1GHz barrier, regaining performance leadership",
    },
    {
      year: "2006",
      title: "ATI Acquisition",
      description:
        "Acquired ATI Technologies, entering discrete graphics market",
      highlight: true,
    },
    {
      year: "2017",
      title: "Ryzen Revolution",
      description: "Zen architecture launched, disrupting CPU market again",
    },
    {
      year: "2019",
      title: "7nm Leadership",
      description: "First 7nm x86 processors and GPUs to market",
      highlight: true,
    },
    {
      year: "2024",
      title: "RDNA 4 Era",
      description: "RX 9000 series with revolutionary ray tracing performance",
    },
  ];

  const innovations = [
    {
      title: "RDNA 4 Architecture",
      description:
        "Revolutionary ray tracing cores with 4x performance improvement",
      icon: "🚀",
    },
    {
      title: "Chiplet Design",
      description:
        "Modular processor design enabling better yields and performance",
      icon: "🔧",
    },
    {
      title: "Infinity Cache",
      description:
        "High-bandwidth cache technology reducing memory bottlenecks",
      icon: "⚡",
    },
    {
      title: "Smart Access Memory",
      description: "CPU direct access to GPU memory for enhanced performance",
      icon: "🧠",
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
              Since 1969
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">About</span>{" "}
              <span className="text-primary">AMD</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              For over 50 years, AMD has been pushing the boundaries of{" "}
              <span className="text-primary font-semibold">
                high-performance computing
              </span>{" "}
              and graphics technology, enabling experiences that were once
              impossible.
            </p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-foreground">Our</span>{" "}
                <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that everyone deserves access to the most advanced
                computing technology. Our mission is to democratize
                high-performance computing through innovative, efficient, and
                accessible solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                From gaming enthusiasts to data center operators, from content
                creators to researchers, AMD technology powers the experiences
                that define our digital world.
              </p>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-4">
                      55+
                    </div>
                    <div className="text-xl text-foreground mb-2">
                      Years of Innovation
                    </div>
                    <div className="text-muted-foreground">
                      Continuously pushing the limits of what's possible in
                      computing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Innovation</span>{" "}
              <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in AMD's journey to becoming a leader in
              high-performance computing and graphics technology.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 md:transform md:-translate-x-1/2 ${
                      milestone.highlight
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                  />

                  {/* Content */}
                  <Card
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      milestone.highlight
                        ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30"
                        : "bg-card border-border"
                    } transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant={
                            milestone.highlight ? "default" : "secondary"
                          }
                        >
                          {milestone.year}
                        </Badge>
                        {milestone.highlight && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          milestone.highlight
                            ? "text-primary group-hover:text-primary/90"
                            : "text-foreground group-hover:text-primary/70"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Latest</span>{" "}
              <span className="text-primary">Innovations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breakthrough technologies that define the future of computing and
              gaming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {innovation.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary/70 transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {innovation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Built on</span>{" "}
              <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our commitment to pushing boundaries drives everything we do, from
              revolutionary architectures to breakthrough performance.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Performance
                </h3>
                <p className="text-muted-foreground">
                  Relentless pursuit of the fastest, most efficient computing
                  solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Pioneering technologies that reshape entire industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Accessibility
                </h3>
                <p className="text-muted-foreground">
                  Making high-performance computing available to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
