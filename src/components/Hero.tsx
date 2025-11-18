import { ArrowRight, Calendar, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img 
          src={heroImage} 
          alt="Campus events" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Calendar className="w-16 h-16 text-primary/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-12 h-12 text-accent/20" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your Campus, All in One Place</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Never Miss a
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent"> Campus Event </span>
            Again
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Say goodbye to scattered WhatsApp groups and missed opportunities. 
            Discover all campus events, workshops, competitions, and club activities in one searchable, personalized hub.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 group">
              Explore Events
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Search className="mr-2 w-5 h-5" />
              Search Activities
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Clubs & Societies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Students Connected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
