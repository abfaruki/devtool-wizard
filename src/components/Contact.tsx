import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30"></div>
            
            <CardContent className="p-8 lg:p-16 relative z-10">
              <div className="text-center mb-12 space-y-4 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Let's Connect</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                  Have a Question or Want to{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Collaborate?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  That's how fast it is to get started. Reach out and let's build something amazing together.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6 animate-fade-in">
                  <Card className="bg-background/50 border-border/50">
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <Input placeholder="John" className="bg-background/80" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <Input placeholder="Doe" className="bg-background/80" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input type="email" placeholder="john@example.com" className="bg-background/80" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Message</label>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] bg-background/80"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
                        >
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-4">
                    <Card className="group hover:shadow-xl transition-all duration-300 bg-background/50 border-border/50 hover:-translate-y-1">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold mb-1">Email Us</h3>
                          <p className="text-muted-foreground text-sm">contact@aisolutions.com</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 bg-background/50 border-border/50 hover:-translate-y-1">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold mb-1">Call Us</h3>
                          <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 bg-background/50 border-border/50 hover:-translate-y-1">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold mb-1">Visit Us</h3>
                          <p className="text-muted-foreground text-sm">123 AI Street, Tech Valley, CA 94000</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
                    >
                      Get a Quote
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 hover:bg-muted transition-all hover:scale-105"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
