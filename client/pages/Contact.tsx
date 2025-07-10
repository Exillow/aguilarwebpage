import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactMethods = [
    {
      title: "Phone Support",
      value: "09161865009",
      description: "Call us directly for immediate assistance",
      icon: "📞",
      available: "24/7 Support",
      highlight: true,
    },
    {
      title: "Email Support",
      value: "support@aguilaramd.com",
      description: "Send us your questions and we'll respond within 24 hours",
      icon: "📧",
      available: "Response within 24h",
    },
    {
      title: "Live Chat",
      value: "Chat Available",
      description: "Instant messaging support during business hours",
      icon: "💬",
      available: "Mon-Fri 9AM-6PM",
    },
    {
      title: "Technical Support",
      value: "tech@aguilaramd.com",
      description: "Specialized technical assistance for advanced issues",
      icon: "🔧",
      available: "Mon-Fri 8AM-8PM",
    },
  ];

  const offices = [
    {
      location: "Headquarters",
      address: "Silicon Valley Tech Park, California, USA",
      phone: "09161865009",
      email: "headquarters@aguilaramd.com",
    },
    {
      location: "R&D Center",
      address: "Innovation District, Austin, Texas, USA",
      phone: "+1 (555) 123-4567",
      email: "research@aguilaramd.com",
    },
    {
      location: "Asia Pacific",
      address: "Tech Hub, Singapore",
      phone: "+65 6123 4567",
      email: "apac@aguilaramd.com",
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
              Get In Touch
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Contact</span>{" "}
              <span className="text-primary">Us</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Have questions about{" "}
              <span className="text-primary font-semibold">
                Aguilar AMD products
              </span>
              ? Our expert team is here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">How to</span>{" "}
              <span className="text-primary">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're committed
              to providing excellent customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  method.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {method.icon}
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      method.highlight
                        ? "text-primary group-hover:text-primary/90"
                        : "text-foreground group-hover:text-primary/70"
                    }`}
                  >
                    {method.title}
                  </h3>

                  <div className="text-lg font-semibold text-primary mb-2">
                    {method.value}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {method.description}
                  </p>

                  <Badge variant="outline" className="text-xs">
                    {method.available}
                  </Badge>

                  {method.highlight && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Send Us</span>{" "}
              <span className="text-primary">A Message</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Product Question</option>
                    <option>Partnership</option>
                    <option>Media/Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-foreground">Our</span>{" "}
              <span className="text-primary">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at one of our global offices or reach out through any of
              our contact channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary/70 transition-colors duration-300">
                    {office.location}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Address: </span>
                      <span className="text-foreground">{office.address}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Phone: </span>
                      <span className="text-primary font-semibold">
                        {office.phone}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email: </span>
                      <span className="text-foreground">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
