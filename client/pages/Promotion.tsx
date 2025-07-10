import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Promotion() {
  const navigate = useNavigate();

  const promotions = [
    {
      title: "Black Friday Mega Sale",
      discount: "30% OFF",
      description: "Get massive savings on all Aguilar AMD products",
      validUntil: "November 30, 2024",
      products: ["RX 9070 XT", "Ning CPU X7", "Ning CPU X9"],
      highlight: true,
    },
    {
      title: "Gaming Bundle Deal",
      discount: "25% OFF",
      description: "Buy Ning CPU + RX Graphics Card together",
      validUntil: "December 15, 2024",
      products: ["Bundle Deal"],
    },
    {
      title: "Student Discount",
      discount: "15% OFF",
      description: "Special pricing for students and educators",
      validUntil: "Ongoing",
      products: ["All Products"],
    },
    {
      title: "Upgrade Program",
      discount: "Up to $200",
      description: "Trade in your old GPU for instant credit",
      validUntil: "January 31, 2025",
      products: ["Graphics Cards"],
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
              Limited Time Offers
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Special</span>{" "}
              <span className="text-primary">Promotions</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Don't miss out on incredible savings for{" "}
              <span className="text-primary font-semibold">
                Aguilar AMD products
              </span>
              . Limited time offers on cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  promo.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant={promo.highlight ? "default" : "secondary"}
                      className="text-lg px-3 py-1"
                    >
                      {promo.discount}
                    </Badge>
                    {promo.highlight && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      promo.highlight
                        ? "text-primary group-hover:text-primary/90"
                        : "text-foreground group-hover:text-primary/70"
                    }`}
                  >
                    {promo.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-4 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {promo.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        Valid until:{" "}
                      </span>
                      <span className="text-foreground font-semibold">
                        {promo.validUntil}
                      </span>
                    </div>

                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        Applies to:{" "}
                      </span>
                      <span className="text-foreground">
                        {promo.products.join(", ")}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate("/product")}
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    Shop Now
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
            <span className="text-foreground">Never Miss</span>{" "}
            <span className="text-primary">A Deal</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter and be the first to know about exclusive
            promotions and new product launches.
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
