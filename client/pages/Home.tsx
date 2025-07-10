import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const navigate = useNavigate();

  const specifications = [
    { label: "VRAM", value: "16GB GDDR6", highlight: true },
    { label: "Power Consumption", value: "304W TGP" },
    { label: "Ray Tracing", value: "Hardware RT Cores", highlight: true },
    { label: "Boost Clock", value: "2.8 GHz" },
    { label: "Memory Bus", value: "256-bit" },
    { label: "Memory Bandwidth", value: "672 GB/s" },
    { label: "Display Outputs", value: "3x DP 2.1, 1x HDMI 2.1" },
    { label: "Architecture", value: "RDNA 4", highlight: true },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Epic Product Background */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df"
            alt="Aguilar AMD RX 9070 XT Background"
            className="w-full h-full object-cover opacity-15 scale-110 animate-pulse"
            style={{
              filter: "blur(1px) brightness(0.8) contrast(1.2)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
        </div>

        {/* Advanced Animated Elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Energy orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse opacity-60"
            style={{ animation: "orbit 8s linear infinite" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amd-red-600/30 rounded-full blur-3xl animate-pulse opacity-50"
            style={{ animation: "orbit 10s linear infinite reverse" }}
          />

          {/* Scanning lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-full h-0.5 bg-primary/20"
              style={{ animation: "scan-horizontal 4s linear infinite" }}
            />
            <div
              className="absolute w-0.5 h-full bg-primary/20"
              style={{ animation: "scan-vertical 5s linear infinite" }}
            />
          </div>

          {/* Geometric shapes */}
          <div
            className="absolute top-20 right-20 w-16 h-16 border border-primary/30 rotate-45"
            style={{ animation: "spin 20s linear infinite" }}
          />
          <div
            className="absolute bottom-20 left-20 w-12 h-12 border border-amd-red-600/30"
            style={{ animation: "pulse 3s ease-in-out infinite" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className="text-center lg:text-left relative z-20"
              style={{ animation: "slideInLeft 1s ease-out" }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/20 text-primary border-primary/40 backdrop-blur-sm hover:bg-primary/30 hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/20"
                style={{ animation: "glow 2s ease-in-out infinite alternate" }}
              >
                🚀 New Release
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 relative">
                <span
                  className="text-foreground hover:text-primary/80 transition-colors duration-700"
                  style={{ animation: "slideInUp 1.2s ease-out" }}
                >
                  Aguilar AMD RX
                </span>
                <br />
                <span
                  className="text-primary bg-gradient-to-r from-primary via-amd-red-500 to-primary bg-clip-text text-transparent"
                  style={{
                    animation:
                      "slideInUp 1.4s ease-out, shimmer 3s ease-in-out infinite",
                    backgroundSize: "200% 100%",
                  }}
                >
                  9070 XT
                </span>
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amd-red-600/20 rounded-lg blur opacity-30"
                  style={{ animation: "pulse 2s infinite" }}
                />
              </h1>

              <p
                className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl hover:text-foreground transition-colors duration-500"
                style={{ animation: "slideInUp 1.6s ease-out" }}
              >
                Unleash the future of gaming with cutting-edge{" "}
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-amd-red-500 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300">
                  4K & 1440p performance
                </span>
                . Ray tracing redefined.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ animation: "slideInUp 1.8s ease-out" }}
              >
                <Button
                  size="lg"
                  onClick={() => navigate("/buy")}
                  className="bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 text-primary-foreground text-lg px-8 py-4 h-auto font-semibold transition-all duration-500 ease-out relative overflow-hidden group"
                  style={{
                    animation: "buttonGlow 2s ease-in-out infinite alternate",
                  }}
                >
                  <span className="relative z-10">💰 Buy Now - $649</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-amd-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amd-red-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/about-amd")}
                  className="border-primary/40 text-foreground hover:bg-primary/20 hover:border-primary/70 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 text-lg px-8 py-4 h-auto transition-all duration-500 ease-out backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">📚 Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-amd-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>
            </div>

            {/* GPU Image */}
            <div
              className="relative group perspective-1000"
              style={{ animation: "slideInRight 1.5s ease-out" }}
            >
              <div
                className="relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-y-12 transform-gpu-3d"
                style={{
                  transformStyle: "preserve-3d",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df"
                  alt="Aguilar RX 9070 XT Graphics Card"
                  className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-700 ease-out hover:shadow-primary/40 filter hover:brightness-110 hover:contrast-110"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(237, 44, 44, 0.3))",
                    animation: "gpuGlow 3s ease-in-out infinite alternate",
                  }}
                />

                {/* Multi-layer glow effects */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-amd-red-600/20 to-primary/20 rounded-2xl blur-xl -z-10 scale-110 transition-all duration-700 ease-out group-hover:scale-130 group-hover:blur-2xl"
                  style={{ animation: "pulse 2s infinite" }}
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl -z-20 scale-120 transition-all duration-700 ease-out group-hover:bg-primary/30 group-hover:scale-140" />

                {/* Holographic overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ animation: "hologram 4s linear infinite" }}
                />
              </div>

              {/* Enhanced Floating specs with 3D effects */}
              <div
                className="absolute top-4 right-4 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-4 transition-all duration-500 ease-out hover:scale-125 hover:bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 cursor-pointer transform hover:-translate-y-2 hover:rotate-3"
                style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
              >
                <div
                  className="text-sm font-bold text-primary mb-1"
                  style={{
                    animation: "glow 2s ease-in-out infinite alternate",
                  }}
                >
                  💾 16GB VRAM
                </div>
                <div className="text-xs text-muted-foreground">GDDR6</div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amd-red-600/20 rounded-xl blur opacity-0 hover:opacity-50 transition-opacity duration-500" />
              </div>

              <div
                className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-4 transition-all duration-500 ease-out hover:scale-125 hover:bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 cursor-pointer transform hover:-translate-y-2 hover:-rotate-3"
                style={{ animation: "float 3s ease-in-out infinite 1s" }}
              >
                <div
                  className="text-sm font-bold text-primary mb-1"
                  style={{
                    animation: "glow 2s ease-in-out infinite alternate 0.5s",
                  }}
                >
                  🚀 RDNA 4
                </div>
                <div className="text-xs text-muted-foreground">
                  Architecture
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amd-red-600/20 rounded-xl blur opacity-0 hover:opacity-50 transition-opacity duration-500" />
              </div>

              {/* Additional tech specs floating around */}
              <div
                className="absolute top-1/2 -right-8 bg-card/80 backdrop-blur-sm border border-amd-red-600/30 rounded-lg p-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
              >
                <div className="text-amd-red-600 font-semibold">⚡ 2.8GHz</div>
                <div className="text-muted-foreground">Boost</div>
              </div>

              <div
                className="absolute bottom-1/2 -left-8 bg-card/80 backdrop-blur-sm border border-amd-red-600/30 rounded-lg p-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                style={{ animation: "float 4s ease-in-out infinite 2s" }}
              >
                <div className="text-amd-red-600 font-semibold">🎯 304W</div>
                <div className="text-muted-foreground">TGP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Technical</span>{" "}
              <span className="text-primary">Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for enthusiasts who demand nothing but the best. Every
              component engineered for peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  spec.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2 transition-colors duration-300 group-hover:text-muted-foreground/80">
                    {spec.label}
                  </div>
                  <div
                    className={`text-lg font-bold transition-all duration-300 ${spec.highlight ? "text-primary group-hover:text-primary/90" : "text-foreground group-hover:text-primary/70"}`}
                  >
                    {spec.value}
                  </div>
                  {spec.highlight && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/80" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-foreground">Dominate</span>{" "}
                <span className="text-primary">4K Gaming</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Experience ultra-smooth gameplay at 4K resolution with
                consistently high frame rates. Ray tracing performance that
                doesn't compromise on speed.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:px-4 rounded-lg cursor-pointer group">
                  <span className="text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Cyberpunk 2077 (4K, RT Ultra)
                  </span>
                  <span className="text-primary font-bold group-hover:scale-110 transition-transform duration-300">
                    75+ FPS
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:px-4 rounded-lg cursor-pointer group">
                  <span className="text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Call of Duty (1440p, Max)
                  </span>
                  <span className="text-primary font-bold group-hover:scale-110 transition-transform duration-300">
                    165+ FPS
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:px-4 rounded-lg cursor-pointer group">
                  <span className="text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Fortnite (1440p, Epic RT)
                  </span>
                  <span className="text-primary font-bold group-hover:scale-110 transition-transform duration-300">
                    144+ FPS
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Card className="bg-gradient-to-br from-primary/10 to-amd-red-900/10 border-primary/20 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/90">
                      16GB
                    </div>
                    <div className="text-xl text-foreground mb-2 transition-colors duration-300 group-hover:text-primary/70">
                      VRAM Capacity
                    </div>
                    <div className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80">
                      Future-proof your gaming with massive VRAM for 4K
                      textures, ray tracing, and content creation workflows.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-amd-red-900/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-foreground">Ready to</span>{" "}
            <span className="text-primary">Upgrade?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of gamers experiencing the next generation of graphics
            performance.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/buy")}
            className="bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 text-primary-foreground text-xl px-12 py-6 h-auto font-bold transition-all duration-300 ease-out"
          >
            Order Your RX 9070 XT Now
          </Button>
        </div>
      </section>
    </div>
  );
}
