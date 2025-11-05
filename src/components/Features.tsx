import { Brain, Users, FileText, Cog, Target, TrendingUp, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cog,
    title: "AI Integration Services",
    description: "Seamlessly integrate AI into your existing workflows and systems.",
    features: [
      { icon: Target, text: "Automate repetitive tasks with intelligent chatbots and virtual assistants" },
      { icon: TrendingUp, text: "Data-driven insights for smarter decision-making and forecasting" },
      { icon: Shield, text: "Seamless integration with CRM, ERP, and HR systems" },
      { icon: Clock, text: "Ongoing support to keep your AI models effective and evolving" },
    ],
  },
  {
    icon: Users,
    title: "Automated Sales Outreach",
    description: "AI-powered lead generation and personalized communication at scale.",
    features: [
      { icon: Target, text: "Smart prospecting based on behavior and engagement patterns" },
      { icon: TrendingUp, text: "Personalized messaging that resonates with each prospect" },
      { icon: Clock, text: "Real-time analytics on open rates, responses, and conversions" },
      { icon: Shield, text: "Continuous campaign refinement for better performance" },
    ],
  },
  {
    icon: Brain,
    title: "Virtual Assistant Services",
    description: "Perfect blend of AI efficiency and human expertise for your business.",
    features: [
      { icon: Target, text: "AI handles routine tasks like email triage and scheduling" },
      { icon: Shield, text: "Human oversight ensures accuracy and personalization" },
      { icon: TrendingUp, text: "Highly scalable and adaptable to your business needs" },
      { icon: Clock, text: "Focus on growth while we manage your workload" },
    ],
  },
  {
    icon: FileText,
    title: "Business & Legal Document Tools",
    description: "Generate professional, legally compliant documents in minutes.",
    features: [
      { icon: Target, text: "Instant creation of contracts, NDAs, and agreements" },
      { icon: Shield, text: "Built-in compliance with latest legal standards" },
      { icon: TrendingUp, text: "Customizable templates for any industry" },
      { icon: Clock, text: "Seamless integration with your existing systems" },
    ],
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pl-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
