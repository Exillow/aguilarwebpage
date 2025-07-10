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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-amd-black-900/50" />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amd-red-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                New Release
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Aguilar RX</span>
                <br />
                <span className="text-primary">9070 XT</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Unleash the future of gaming with cutting-edge{" "}
                <span className="text-primary font-semibold">
                  4K & 1440p performance
                </span>
                . Ray tracing redefined.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate("/buy")}
                  className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 text-primary-foreground text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 ease-out"
                >
                  Buy Now - $649
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/about-amd")}
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:scale-105 hover:shadow-lg text-lg px-8 py-4 h-auto transition-all duration-300 ease-out"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* GPU Image */}
            <div className="relative group">
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df"
                  alt="Aguilar RX 9070 XT Graphics Card"
                  className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 ease-out hover:shadow-primary/25"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl -z-10 scale-110 transition-all duration-500 ease-out group-hover:bg-primary/30 group-hover:scale-125" />
              </div>

              {/* Floating specs */}
              <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 transition-all duration-300 ease-out hover:scale-110 hover:bg-card/90 hover:border-primary/30 hover:shadow-lg cursor-pointer">
                <div className="text-sm font-semibold text-primary">
                  16GB VRAM
                </div>
                <div className="text-xs text-muted-foreground">GDDR6</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 transition-all duration-300 ease-out hover:scale-110 hover:bg-card/90 hover:border-primary/30 hover:shadow-lg cursor-pointer">
                <div className="text-sm font-semibold text-primary">RDNA 4</div>
                <div className="text-xs text-muted-foreground">
                  Architecture
                </div>
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
