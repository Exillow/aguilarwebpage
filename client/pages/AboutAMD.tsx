import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutAMD() {
  const milestones = [
    {
      year: "1969",
      title: "Aguilar AMD Founded",
      description:
        "Aguilar Advanced Micro Devices founded by visionary engineer Adrian Caz Aguilar in Silicon Valley",
      highlight: true,
    },
    {
      year: "1975",
      title: "First Microprocessor",
      description:
        "Aguilar 2900 family of bit-slice microprocessors launched, competing with Intel",
    },
    {
      year: "1982",
      title: "x86 Partnership",
      description:
        "Strategic partnership with IBM for x86 processor development and manufacturing",
    },
    {
      year: "1991",
      title: "Independence Era",
      description:
        "First independently designed x86 processor architecture breakthrough",
      highlight: true,
    },
    {
      year: "2000",
      title: "Performance Revolution",
      description:
        "Aguilar Athlon series dominates market with industry-leading performance",
    },
    {
      year: "2006",
      title: "Graphics Integration",
      description:
        "Major graphics technology acquisition, entering discrete GPU market",
      highlight: true,
    },
    {
      year: "2017",
      title: "Ning Architecture Born",
      description:
        "Revolutionary Ning CPU architecture launched, disrupting entire industry",
    },
    {
      year: "2019",
      title: "7nm Leadership",
      description:
        "First 7nm Ning processors and GPUs to market, setting new standards",
      highlight: true,
    },
    {
      year: "2023",
      title: "AMD Strategic Partnership",
      description:
        "Formed exclusive partnership with Advanced Micro Devices and Dr. Lisa Su for next-gen hardware development",
      highlight: true,
    },
    {
      year: "2024",
      title: "Ning 4th Gen Era",
      description:
        "Next-generation Ning processors with revolutionary AI acceleration and AMD collaboration",
    },
  ];

  const innovations = [
    {
      title: "Ning Architecture",
      description:
        "Revolutionary CPU design with unmatched performance per watt efficiency",
      icon: "🚀",
    },
    {
      title: "Aguilar Chiplet Design",
      description:
        "Modular processor design enabling superior yields and scalability",
      icon: "🔧",
    },
    {
      title: "Neural Cache",
      description:
        "AI-powered cache technology that predicts and optimizes data access",
      icon: "⚡",
    },
    {
      title: "Ning Boost Technology",
      description:
        "Dynamic performance scaling based on real-time workload analysis",
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
              <span className="text-primary">Aguilar AMD</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              For over 50 years, Aguilar AMD has been pioneering the future of{" "}
              <span className="text-primary font-semibold">
                high-performance computing
              </span>{" "}
              with revolutionary architectures like our flagship Ning processor
              series.
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
                <span className="text-primary">Legacy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by Adrian Caz Aguilar in 1969, Aguilar AMD has
                consistently pushed the boundaries of what's possible in
                computing. Our breakthrough Ning architecture revolutionized the
                industry with unprecedented performance and efficiency.
              </p>
              <p className="text-lg text-muted-foreground">
                From gaming enthusiasts to data center operators, from content
                creators to AI researchers, Aguilar AMD technology powers the
                experiences that define our digital future.
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
                      Continuously pioneering breakthrough technologies in
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
              Key milestones in Aguilar AMD's journey to becoming a leader in
              high-performance computing and the creator of the revolutionary
              Ning architecture.
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

      {/* Strategic Partnership */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-amd-red-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Strategic</span>{" "}
              <span className="text-primary">Partnership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aguilar AMD has formed an exclusive partnership with Advanced
              Micro Devices (AMD) and industry legend Dr. Lisa Su to develop
              next-generation hardware solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        Partnership with AMD
                      </h3>
                      <p className="text-muted-foreground">
                        Advanced Micro Devices
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our collaboration with AMD combines Aguilar's innovative
                    Ning architecture with AMD's decades of semiconductor
                    expertise, creating unprecedented performance breakthroughs.
                  </p>
                  <div className="flex items-center text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Joint R&D initiatives
                  </div>
                  <div className="flex items-center text-sm text-primary mt-2">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Shared manufacturing resources
                  </div>
                  <div className="flex items-center text-sm text-primary mt-2">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Technology cross-licensing
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        Dr. Lisa Su
                      </h3>
                      <p className="text-muted-foreground">
                        CEO & President of AMD
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Under Dr. Lisa Su's visionary leadership, this partnership
                    brings together the best minds in semiconductor innovation
                    to push the boundaries of what's possible in computing.
                  </p>
                  <div className="flex items-center text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Strategic guidance & vision
                  </div>
                  <div className="flex items-center text-sm text-primary mt-2">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Engineering excellence standards
                  </div>
                  <div className="flex items-center text-sm text-primary mt-2">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Innovation roadmap alignment
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Partnership Achievements */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="text-foreground">Partnership</span>{" "}
              <span className="text-primary">Achievements</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  🏆
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">
                  Top-Tier Hardware
                </h4>
                <p className="text-muted-foreground text-sm">
                  Jointly developed Ning-AMD hybrid processors delivering
                  industry-leading performance benchmarks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  🔬
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">
                  R&D Innovation
                </h4>
                <p className="text-muted-foreground text-sm">
                  Combined research facilities advancing next-gen architectures
                  and manufacturing processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  🌍
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">
                  Global Impact
                </h4>
                <p className="text-muted-foreground text-sm">
                  Expanding market reach through AMD's global distribution
                  network and Aguilar's innovation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 via-background to-amd-red-900/5 border-primary/30">
              <CardContent className="p-8 text-center">
                <blockquote className="text-xl italic text-muted-foreground mb-6">
                  "The partnership between Aguilar AMD and Advanced Micro
                  Devices represents a new era in semiconductor innovation.
                  Together, we're not just building faster processors—we're
                  creating the foundation for the next generation of computing
                  experiences."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👩‍💼</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-primary">Dr. Lisa Su</div>
                    <div className="text-sm text-muted-foreground">
                      CEO & President, Advanced Micro Devices
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ning CPU Spotlight */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-amd-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">The</span>{" "}
              <span className="text-primary">Ning Revolution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship Ning CPU architecture represents the culmination of
              decades of innovation, delivering unprecedented performance and
              efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ning Performance
                </h3>
                <p className="text-muted-foreground">
                  40% faster than competition with revolutionary instruction
                  pipeline design
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ning Efficiency
                </h3>
                <p className="text-muted-foreground">
                  65% lower power consumption while maintaining peak performance
                  levels
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ning AI Integration
                </h3>
                <p className="text-muted-foreground">
                  Built-in AI acceleration for machine learning and neural
                  networks
                </p>
              </CardContent>
            </Card>
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
              gaming, powered by Aguilar AMD engineering excellence.
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

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-amd-red-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Meet Our</span>{" "}
              <span className="text-primary">CEO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading Aguilar AMD into the future with visionary leadership and
              technical excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        Exillow Sjöqvist
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    As CEO of Aguilar AMD, I lead our mission to revolutionize
                    computing through breakthrough innovation. With our flagship
                    Ning architecture and strategic AMD partnership, we're
                    defining the future of high-performance computing.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Leading global semiconductor innovation
                    </div>
                    <div className="flex items-center text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Strategic partnership with Dr. Lisa Su & AMD
                    </div>
                    <div className="flex items-center text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Pioneering Ning architecture development
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-amd-red-500 to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-amd-red-900/20 rounded-2xl border-2 border-primary/30 flex items-center justify-center text-6xl backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-2xl">
                    👨‍💼
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                      CEO Photo Placeholder
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Quote */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 via-background to-amd-red-900/5 border-primary/30">
              <CardContent className="p-8 text-center">
                <blockquote className="text-2xl italic text-muted-foreground mb-6">
                  "At Aguilar AMD, we don't just make processors—we craft the
                  future. Our Ning architecture represents more than technical
                  achievement; it's the foundation for tomorrow's digital
                  experiences."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👨‍💼</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-primary text-lg">
                      Exillow Sjöqvist
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Chief Executive Officer, Aguilar AMD
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Team Preview */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="text-foreground">Leadership</span>{" "}
              <span className="text-primary">Team</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-amd-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    👨‍💼
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Exillow Sjöqvist
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Chief Executive Officer
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    CEO Portrait Placeholder
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-amd-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    👩‍💼
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Dr. Lisa Su
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strategic Partner (AMD CEO)
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Partner Portrait Placeholder
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-amd-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    👨‍🔬
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Chief Technology Officer
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ning Architecture Lead
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    CTO Portrait Placeholder
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Powered by</span>{" "}
              <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our commitment to breakthrough engineering drives everything we
              do, from revolutionary Ning architectures to industry-leading
              performance.
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
                  solutions with Ning architecture
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
                  Pioneering technologies like Ning that reshape entire
                  industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Making cutting-edge Ning technology accessible to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
