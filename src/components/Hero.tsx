
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animate elements on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-24">
      {/* Corporate grid pattern background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30 dark:opacity-10"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-corporate/10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-corporate-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-corporate-highlight/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-primary/20 blur-xl animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-corporate-accent/20 blur-xl animate-pulse-glow" style={{ animationDelay: "2.5s" }}></div>
      </div>
      
      {/* Background image with corporate overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
          alt="Corporate Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-32 h-32 border border-corporate/30 rounded-lg top-1/4 right-1/4 rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-20 h-20 border border-corporate-accent/20 rounded-full bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute w-24 h-24 border border-corporate-highlight/20 rounded-lg top-1/3 right-1/5 -rotate-12 animate-float" style={{ animationDelay: "0s" }}></div>
      </div>
      
      {/* Hero content with improved animations */}
      <div className="container relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className={`overflow-hidden transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
              <span className="block overflow-hidden">
                <span className="block animate-slide-in" style={{ animationDelay: "0.2s" }}>Transforming Ideas Into</span>
              </span>
              <span className="block overflow-hidden mt-2">
                <span className="text-gradient-corporate block animate-slide-in shimmer" style={{ animationDelay: "0.4s" }}>
                  CORPORATE EXCELLENCE
                </span>
              </span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto my-6 animate-slide-in" style={{ animationDelay: "0.6s" }}>
              <span className="font-heading font-semibold text-foreground">Nexus Creative Studio</span> delivers exceptional corporate solutions through our divisions <span className="text-gradient-crypto font-semibold">Crypto Nexus</span> and <span className="text-gradient-byte font-semibold">Byte Studio</span>, empowering businesses globally.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="corporate-button px-8 py-6"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
            >
              Explore Solutions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-corporate text-corporate hover:bg-corporate/10 px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
            >
              About Us
            </Button>
          </div>
        </div>
        
        {/* Business division cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "1s" }}>
          {/* Nexus Studio Card */}
          <div className="corporate-card p-6 transform hover:scale-105 transition-all hover:shadow-corporate/20 hover:shadow-lg flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-corporate/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gradient-corporate text-xl font-bold">NS</span>
            </div>
            <h3 className="text-gradient-corporate font-heading font-bold text-2xl mb-2">Nexus Studio</h3>
            <p className="text-muted-foreground">Strategic business consulting and integrated solutions</p>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 w-full">
              <Button variant="ghost" className="text-corporate hover:text-corporate hover:bg-corporate/10 w-full">Learn More</Button>
            </div>
          </div>
          
          {/* Crypto Nexus Card with Link */}
          <Link to="/crypto-nexus" className="block">
            <div className="corporate-card p-6 transform hover:scale-105 transition-all hover:shadow-crypto/20 hover:shadow-lg flex flex-col items-center h-full">
              <div className="h-14 w-14 rounded-full bg-crypto/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gradient-crypto text-xl font-bold">CN</span>
              </div>
              <h3 className="text-gradient-crypto font-heading font-bold text-2xl mb-2">Crypto Nexus</h3>
              <p className="text-muted-foreground">Enterprise blockchain solutions and digital assets</p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 w-full">
                <Button variant="ghost" className="text-crypto hover:text-crypto hover:bg-crypto/10 w-full">
                  Visit Division
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
          
          {/* Byte Studio Card with Link */}
          <Link to="/byte-studio" className="block">
            <div className="corporate-card p-6 transform hover:scale-105 transition-all hover:shadow-byte/20 hover:shadow-lg flex flex-col items-center h-full">
              <div className="h-14 w-14 rounded-full bg-byte/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gradient-byte text-xl font-bold">BS</span>
              </div>
              <h3 className="text-gradient-byte font-heading font-bold text-2xl mb-2">Byte Studio</h3>
              <p className="text-muted-foreground">Enterprise software and digital transformation</p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 w-full">
                <Button variant="ghost" className="text-byte hover:text-byte hover:bg-byte/10 w-full">
                  Visit Division
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Company metrics with enhanced visuals */}
        <div className="mt-20 py-8 rounded-2xl bg-gradient-card border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in px-4 counter-section" style={{ animationDelay: "1.2s" }}>
            <div className="text-center">
              <h3 className="text-gradient-corporate text-4xl font-bold mb-2 counter-value" data-value="120">0+</h3>
              <p className="text-muted-foreground">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-gradient-corporate text-4xl font-bold mb-2 counter-value" data-value="35">0+</h3>
              <p className="text-muted-foreground">Global Markets</p>
            </div>
            <div className="text-center">
              <h3 className="text-gradient-corporate text-4xl font-bold mb-2 counter-value" data-value="85">0+</h3>
              <p className="text-muted-foreground">Team Experts</p>
            </div>
            <div className="text-center">
              <h3 className="text-gradient-corporate text-4xl font-bold mb-2 counter-value" data-value="12">0+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
        
        {/* Corporate trust indicators */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "1.4s" }}>
          <p className="text-muted-foreground mb-6">TRUSTED BY LEADING ORGANIZATIONS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" alt="IBM" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/800px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-logo-2015.png/640px-Google-logo-2015.png" alt="Google" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Goldman_Sachs.svg/800px-Goldman_Sachs.svg.png" alt="Goldman Sachs" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/800px-Oracle_logo.svg.png" alt="Oracle" className="h-8 md:h-10" />
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full border border-corporate/30 h-12 w-12 hover:bg-corporate/10 hover:border-corporate"
          onClick={scrollToServices}
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
