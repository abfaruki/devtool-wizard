import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "AI Remarkables transformed our business operations completely. Their AI integration saved us 40+ hours per week and increased our productivity by 300%. The team is incredibly responsive and professional.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions Ltd.",
    content:
      "The document automation system they built for us is phenomenal. What used to take days now takes minutes. Our legal team can focus on strategy instead of repetitive paperwork.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Creative Agency Pro",
    content:
      "Their sales automation platform doubled our lead conversion rate. The AI-powered personalization is incredible - it's like having a dedicated sales team working 24/7.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "David Thompson",
    role: "Founder & CTO",
    company: "InnovateLab",
    content:
      "Working with AI Remarkables was a game-changer. Their virtual assistant services freed up our team to focus on innovation. The ROI was visible within the first month.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    gradient: "from-green-500 to-emerald-500",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Quote className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Trusted
            </span>
            <br />
            by Industry Leaders
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are achieving remarkable results with
            our AI solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Testimonial Card */}
              <div className="relative h-full bg-background/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Quote Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 fill-current text-gradient-to-r ${testimonial.gradient}`}
                        style={{ color: "#3B82F6" }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg leading-relaxed text-foreground">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-background shadow-lg"
                    />
                    <div>
                      <h4 className="font-display font-bold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
