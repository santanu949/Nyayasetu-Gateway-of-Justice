import { Button } from "@/UI/ui/button";
import { MessageCircle, Search, FileText, Gavel } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/back.jpg"
          alt="Justice Gateway - Modern courthouse representing legal excellence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 opacity-20">
        <Gavel className="w-16 h-16 text-secondary float-animation" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <FileText className="w-12 h-12 text-secondary float-animation animate-delay-300" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center reveal-on-scroll">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground leading-tight">
              <span className="block">Nyaysetu</span>
              <span className="text-gradient-accent text-5xl md:text-6xl font-semibold">
                Gateway for Justice
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive legal services, court information, and AI-powered assistance 
              for all your justice-related needs in one unified platform.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="glow"
              className="group h-12 px-8 text-lg font-semibold shadow-justice transition-bounce glow-hover hover-scale hover-glow-secondary"
            >
              <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-smooth" />
              Start AI Chat Assistant
            </Button>
            <Button 
              variant="glass"
              className="h-12 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 text-lg font-semibold transition-bounce hover-scale hover-glow-primary"
            >
              <Search className="w-6 h-6 mr-2" />
              Search Legal Services
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animate-delay-200">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-primary-foreground/80">Cases Resolved</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-primary-foreground/80">AI Support</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-primary-foreground/80">Courts Connected</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-primary-foreground/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce reveal-on-scroll reveal-up">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;