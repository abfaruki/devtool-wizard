import { Brain, Cpu, Zap, Shield, BarChart3, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import collaborationImage from "@/assets/collaboration-ai.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Harness machine learning to extract actionable insights from your data in real-time.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows with intelligent process optimization.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized AI infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your sensitive data.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor performance metrics and KPIs with comprehensive analytics dashboards.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Interact with AI using natural language for intuitive user experiences.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Redefining Interaction and{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automation
            </span>{" "}
            with Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover powerful features designed to transform your business operations
            and drive exponential growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50"></div>
            <img
              src={collaborationImage}
              alt="Human-AI collaboration"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
