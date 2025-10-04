import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, CheckCircle2, Clock, Zap, Users, Shield } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">AI-Powered Document Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Fill Documents{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Automatically
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stop wasting time on repetitive document work. LLify uses AI to automatically fill, process, and manage your documents in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Documents Processed</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">2min</div>
                <div className="text-sm text-muted-foreground">Average Time Saved</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Background image */}
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
            <img
              src={heroIllustration}
              alt="Document automation visualization"
              className="relative rounded-2xl opacity-80"
            />
            
            {/* Floating document cards - strategically positioned */}
            
            {/* Top left - Processing status */}
            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-elegant animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Auto-filling...</div>
                  <div className="text-xs text-muted-foreground">Contract.pdf</div>
                </div>
              </div>
            </div>

            {/* Top right - Time savings */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-md border border-accent/30 rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">10hrs saved</div>
                  <div className="text-xs text-muted-foreground">This week</div>
                </div>
              </div>
            </div>

            {/* Middle right - Team collaboration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-background/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-elegant animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs font-medium text-foreground">5 team members</div>
              </div>
            </div>

            {/* Bottom left - Security badge */}
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-elegant animate-float" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <div className="text-xs font-semibold text-foreground">SOC 2 Certified</div>
              </div>
            </div>

            {/* Bottom right - Success completion */}
            <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Completed</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    2.3s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
