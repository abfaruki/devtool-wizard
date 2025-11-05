import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.svg";

const Contact = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Newsletter Section - Full Width */}
          <div className="md:col-span-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 mb-[100px]">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-bold mb-4">
                Stay Updated with AI Innovations
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights, tips, and updates on AI technology
                delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-medium hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="AI Solutions US Logo" className="" />
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                AI Solutions US is dedicated to empowering businesses with
                cutting-edge AI solutions. Our mission is to provide innovative,
                scalable, and user-friendly AI technology that drives business
                growth and innovation.
              </p>

              <p className="text-sm text-muted-foreground">
                © 2025 All Rights Reserved. AI Solutions US.
              </p>
            </div>
          </div>

          {/* Support Section */}
          <div className="md:col-span-5 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold mb-4">Support</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Have questions? Get in touch or check out our Help Center.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  Text support team at{" "}
                  <span className="font-semibold">(310) 773-5384</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  Email us at{" "}
                  <a
                    href="mailto:help@aisolutionsusa.com"
                    className="text-primary hover:underline"
                  >
                    help@aisolutionsusa.com
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of use
                </a>
                <span>|</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="md:col-span-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 rounded-2xl transition-all hover:scale-110 group"
              >
                <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-700/10 to-blue-800/10 hover:from-blue-700/20 hover:to-blue-800/20 rounded-2xl transition-all hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-blue-700 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700/10 to-gray-900/10 hover:from-gray-700/20 hover:to-gray-900/20 rounded-2xl transition-all hover:scale-110 group"
              >
                <Twitter className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500/10 to-purple-600/10 hover:from-pink-500/20 hover:to-purple-600/20 rounded-2xl transition-all hover:scale-110 group"
              >
                <Instagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
