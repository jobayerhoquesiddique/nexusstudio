
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-24">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-nexus/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-byte/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-crypto/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-primary/30 blur-xl animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-crypto/30 blur-xl animate-pulse-glow" style={{ animationDelay: "2.5s" }}></div>
      </div>
      
      {/* Background image overlay with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1578070181910-f1e514afdd08?q=80&w=2000&auto=format&fit=crop"
          alt="Digital Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMzAgMGg2MHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjMjIyMjIyIiBmaWxsLW9wYWNpdHk9Ii4wMiIgZD0iTTAgMGgzMHY2MEgweiIvPjwvZz48L3N2Zz4=')] dark:opacity-20 opacity-5 z-0"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute rounded-full ${theme === 'dark' ? 'bg-white/5' : 'bg-primary/5'}`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero content with improved animations */}
      <div className="container relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
            <span className="block overflow-hidden">
              <span className="block animate-fade-in" style={{ animationDelay: "0.2s" }}>Transforming Ideas Into</span>
            </span>
            <span className="block overflow-hidden mt-2">
              <span className="text-gradient-primary block animate-fade-in shimmer" style={{ animationDelay: "0.4s" }}>
                DIGITAL REALITY
              </span>
            </span>
          </h1>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto my-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <span className="font-heading font-semibold text-foreground">Nexus Studio</span> is where innovation meets execution. We unite <span className="text-gradient-crypto font-semibold">Crypto Nexus</span> and <span className="text-gradient-byte font-semibold">Byte Studio</span> to deliver exceptional blockchain and software solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shimmer"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
            >
              Explore Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/20"
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
            >
              About Us
            </Button>
          </div>
        </div>
        
        {/* Animated company cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="glass-card p-6 transform hover:scale-105 transition-all hover:shadow-nexus/20 hover:shadow-lg">
            <div className="h-12 w-12 rounded-full bg-nexus/20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gradient-nexus text-xl font-bold">NS</span>
            </div>
            <h3 className="text-gradient-nexus font-heading font-bold text-2xl mb-2">Nexus Studio</h3>
            <p className="text-muted-foreground">The parent company unifying our technology ventures</p>
          </div>
          
          <div className="glass-card p-6 transform hover:scale-105 transition-all hover:shadow-crypto/20 hover:shadow-lg">
            <div className="h-12 w-12 rounded-full bg-crypto/20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gradient-crypto text-xl font-bold">CN</span>
            </div>
            <h3 className="text-gradient-crypto font-heading font-bold text-2xl mb-2">Crypto Nexus</h3>
            <p className="text-muted-foreground">Pioneering Web3, Blockchain & NFT Solutions</p>
          </div>
          
          <div className="glass-card p-6 transform hover:scale-105 transition-all hover:shadow-byte/20 hover:shadow-lg">
            <div className="h-12 w-12 rounded-full bg-byte/20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gradient-byte text-xl font-bold">BS</span>
            </div>
            <h3 className="text-gradient-byte font-heading font-bold text-2xl mb-2">Byte Studio</h3>
            <p className="text-muted-foreground">Crafting AI, Web & Software Experiences</p>
          </div>
        </div>
        
        {/* Company metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="text-center">
            <h3 className="text-gradient-primary text-4xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-gradient-primary text-4xl font-bold mb-2">12+</h3>
            <p className="text-muted-foreground">Global Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-gradient-primary text-4xl font-bold mb-2">20+</h3>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-gradient-primary text-4xl font-bold mb-2">5+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full border border-primary/30 h-12 w-12 hover:bg-primary/10 hover:border-primary"
          onClick={scrollToServices}
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
