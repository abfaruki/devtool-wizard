import { Target, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const journeys = [
  {
    icon: Lightbulb,
    title: "Augmented Solutions",
    description: "We specialize in AI-augmented solutions that enhance human capabilities and workflow efficiency. Our AI-driven tools act as intelligent assistants, handling repetitive tasks so you can focus on creativity and innovation.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "Empowering individuals, businesses, and industries to achieve more with less effort through cutting-edge AI tools and seamless integration services.",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Stay ahead with AI solutions that evolve with your business, ensuring you're always at the forefront of technological innovation.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Redefining Interaction and{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automation
            </span>{" "}
            with Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses through intelligent automation and human-AI collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journeys.map((journey, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <journey.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl">{journey.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{journey.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
