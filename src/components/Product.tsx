import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/product-laptop.jpg";

const features = [
  "Advanced AI-powered analytics dashboard",
  "Real-time data processing and insights",
  "Customizable automation workflows",
  "Seamless third-party integrations",
  "Enterprise-grade security protocols",
  "24/7 dedicated support team",
];

const Product = () => {
  return (
    <section id="product" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flagship
            </span>{" "}
            AI Product
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive AI solution that adapts to your business needs
            and scales with your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
            <img
              src={productImage}
              alt="AI Dashboard on laptop"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2 animate-slide-in-right">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-bold">
                AI that <span className="text-primary">Elevates</span> Your Business
              </h3>
              <p className="text-muted-foreground">
                Our flagship product combines cutting-edge AI technology with intuitive
                design to deliver exceptional results. Experience the future of business
                automation today.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 group"
              >
                Explore Product
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
