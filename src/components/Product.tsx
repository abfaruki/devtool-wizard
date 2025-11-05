import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, BarChart3, RefreshCw } from "lucide-react";
import productImage from "@/assets/product-laptop.jpg";

const features = [
  {
    icon: Clock,
    title: "Real-Time Valuation",
    description:
      "Instantly generate accurate property valuations with up-to-the-minute data, eliminating delays.",
  },
  {
    icon: BarChart3,
    title: "Advanced Data Analysis",
    description:
      "Leverage sophisticated algorithms that analyze vast market trends for highly reliable insights.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Monitoring",
    description:
      "Stay updated with ongoing market changes so valuations reflect real-time conditions.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Efficiency",
    description:
      "Reduce time spent on traditional appraisals, allowing you to focus on client engagement.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flagship
            </span>{" "}
            AI Product
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our modular AI platform brings together drafting tools, chatbots,
            voice-based services, and intelligent agents in a single ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 animate-glow"></div>
            <img
              src={productImage}
              alt="AI Real Estate Valuation Platform"
              className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />
          </div>

          <div className="space-y-8 animate-slide-in-right order-1 lg:order-2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-x-2 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-muted transition-all hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
