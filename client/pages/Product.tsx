import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Aguilar AMD RX 9070 XT",
      price: "$649",
      category: "Graphics Card",
      features: ["16GB GDDR6", "RDNA 4", "Hardware RT", "2.8 GHz Boost"],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df",
      highlight: true,
    },
    {
      name: "Ning CPU X7 8-Core",
      price: "$399",
      category: "Processor",
      features: [
        "8 Cores/16 Threads",
        "4.5 GHz Boost",
        "32MB Cache",
        "65W TDP",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F1b9dec3471014abea6e839e638494c5d",
    },
    {
      name: "Ning CPU X9 12-Core",
      price: "$599",
      category: "Processor",
      features: [
        "12 Cores/24 Threads",
        "4.8 GHz Boost",
        "64MB Cache",
        "105W TDP",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F439b13fd33c14fc28e0918e935469b1a",
    },
    {
      name: "Aguilar AMD RX 9060",
      price: "$449",
      category: "Graphics Card",
      features: ["12GB GDDR6", "RDNA 4", "Hardware RT", "2.5 GHz Boost"],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df",
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
              Latest Technology
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Our</span>{" "}
              <span className="text-primary">Products</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Discover the latest in high-performance computing with{" "}
              <span className="text-primary font-semibold">
                Aguilar AMD technology
              </span>
              . From revolutionary Ning processors to cutting-edge graphics
              cards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  product.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full lg:w-48 object-cover rounded-lg ${
                          product.name === "Ning CPU X7 8-Core"
                            ? "h-48"
                            : product.name === "Ning CPU X9 12-Core"
                              ? "h-44"
                              : "h-32"
                        }`}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        {product.highlight && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>

                      <h3
                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          product.highlight
                            ? "text-primary group-hover:text-primary/90"
                            : "text-foreground group-hover:text-primary/70"
                        }`}
                      >
                        {product.name}
                      </h3>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">
                          {product.price}
                        </div>
                        <Button
                          onClick={() => navigate("/buy")}
                          className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-amd-red-900/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-foreground">Need Help</span>{" "}
            <span className="text-primary">Choosing?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Our experts are here to help you find the perfect Aguilar AMD
            solution for your needs.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 text-primary-foreground text-xl px-12 py-6 h-auto font-bold transition-all duration-300 ease-out"
          >
            Contact Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
}
