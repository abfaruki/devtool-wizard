import {
  Brain,
  Users,
  FileText,
  Cog,
  Zap,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Seamlessly integrate AI into your existing workflows and systems for maximum efficiency.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "500+ Integrations",
    features: ["Custom AI Solutions", "System Integration", "24/7 Support"],
  },
  {
    icon: Users,
    title: "Sales Automation",
    description:
      "AI-powered lead generation and personalized communication that scales with your business.",
    gradient: "from-purple-500 to-pink-500",
    stats: "300% ROI Average",
    features: ["Lead Generation", "Email Campaigns", "Analytics Dashboard"],
  },
  {
    icon: Zap,
    title: "Virtual Assistants",
    description:
      "Perfect blend of AI efficiency and human expertise for your daily operations.",
    gradient: "from-orange-500 to-red-500",
    stats: "80% Time Saved",
    features: ["Task Automation", "Quality Assurance", "Scalable Solutions"],
  },
  {
    icon: FileText,
    title: "Document Automation",
    description:
      "Generate professional, legally compliant documents in minutes with AI precision.",
    gradient: "from-green-500 to-emerald-500",
    stats: "10x Faster Processing",
    features: ["Legal Compliance", "Custom Templates", "Instant Generation"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">Our Expertise</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              AI Solutions
            </span>
            <br />
            That Transform
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge artificial intelligence services designed to
            revolutionize your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Card */}
              <div className="relative h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-primary/30">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {service.title}
                    </h3>
                    <div
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-sm font-medium rounded-full`}
                    >
                      {service.stats}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                        ></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Support Available
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              5x
            </div>
            <div className="text-sm text-muted-foreground">
              Efficiency Boost
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
