import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-human.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              Empowering the{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Future
              </span>{" "}
              with AI-Driven Solutions
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Automate petition drafting with AI for faster, accurate, and
              hassle-free legal work. Perfect for law and real estate firms.
            </p>

            <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 max-w-md">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  alt="User 4"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              </div>
              <p className="text-sm font-medium">
                <span className="text-primary font-bold">10,000+</span> people
                already joined AI Solutions USA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 animate-glow"></div>
            <img
              src={heroImage}
              alt="AI collaboration between human and robot"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
