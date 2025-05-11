
import { useEffect, useRef, useState } from "react";
import { Code, Globe, Briefcase, ArrowRight, Layers, Database, Shield, Brain, PenTool, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When section comes into view, trigger animations for service cards
          const cards = document.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
            }, index * 150);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-crypto/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We provide comprehensive solutions across blockchain, AI, and software development sectors, delivering cutting-edge technology with expertise and innovation.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">All Services</TabsTrigger>
              <TabsTrigger value="crypto" className="data-[state=active]:bg-crypto data-[state=active]:text-white">Blockchain & NFT</TabsTrigger>
              <TabsTrigger value="software" className="data-[state=active]:bg-byte data-[state=active]:text-white">Software & AI</TabsTrigger>
              <TabsTrigger value="consulting" className="data-[state=active]:bg-nexus data-[state=active]:text-white">Consulting</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="animate-fade-in space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconColor={service.iconColor}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="crypto" className="animate-fade-in space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.filter(s => s.category === "crypto").map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconColor={service.iconColor}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="software" className="animate-fade-in space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.filter(s => s.category === "software").map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconColor={service.iconColor}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="consulting" className="animate-fade-in space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.filter(s => s.category === "consulting").map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconColor={service.iconColor}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary hover:opacity-90 px-8 py-6 h-auto"
          >
            <span className="text-lg">Discuss Your Project</span>
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Service Card Component
const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  iconColor,
  index = 0,
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  iconColor: string;
  index?: number;
}) => {
  return (
    <div 
      className="glass-card p-6 hover-lift hover:shadow-lg transition-all service-card opacity-0 h-full flex flex-col"
      style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`h-16 w-16 rounded-full flex items-center justify-center ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <h4 className="font-heading font-semibold text-xl mb-3 text-center">{title}</h4>
      <p className="text-muted-foreground text-center flex-1">{description}</p>
      <div className="mt-6 flex justify-center">
        <Button variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary-foreground" size="sm">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  category: "crypto" | "software" | "consulting";
}

const allServices: Service[] = [
  {
    id: 1,
    title: "Blockchain Development",
    description: "Custom blockchain architecture, smart contracts development, and decentralized application building with industry-leading security practices.",
    icon: Database,
    iconColor: "bg-crypto/20 text-crypto",
    category: "crypto"
  },
  {
    id: 2,
    title: "NFT Marketplaces",
    description: "End-to-end NFT marketplace development with minting capabilities, trading features, auction functionalities, and enhanced authentication.",
    icon: Layers,
    iconColor: "bg-crypto/20 text-crypto",
    category: "crypto"
  },
  {
    id: 3,
    title: "Smart Contract Audits",
    description: "Comprehensive security audits for smart contracts to identify vulnerabilities, ensure compliance, and protect digital assets from breaches.",
    icon: Shield,
    iconColor: "bg-crypto/20 text-crypto",
    category: "crypto"
  },
  {
    id: 4,
    title: "AI Solutions",
    description: "Custom AI implementation, machine learning models, and predictive analysis tools tailored to your business needs and workflow integration.",
    icon: Brain,
    iconColor: "bg-byte/20 text-byte",
    category: "software"
  },
  {
    id: 5,
    title: "Web Development",
    description: "Modern, responsive, and high-performance web applications built with the latest technologies and optimized for user experience.",
    icon: Globe,
    iconColor: "bg-byte/20 text-byte",
    category: "software"
  },
  {
    id: 6,
    title: "Software Engineering",
    description: "Custom enterprise software solutions, mobile applications, and cloud infrastructure designed for scalability and future-proof architecture.",
    icon: Code,
    iconColor: "bg-byte/20 text-byte",
    category: "software"
  },
  {
    id: 7,
    title: "Technical Consultation",
    description: "Expert guidance on technical decisions, system architecture, and technology stack selection to align with your business objectives.",
    icon: Briefcase,
    iconColor: "bg-nexus/20 text-nexus",
    category: "consulting"
  },
  {
    id: 8,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation roadmaps and innovation strategies to keep your business competitive in rapidly evolving markets.",
    icon: LineChart,
    iconColor: "bg-nexus/20 text-nexus",
    category: "consulting"
  },
  {
    id: 9,
    title: "UX/UI Design",
    description: "Human-centered design services that create intuitive user experiences and visually appealing interfaces tailored to your target audience.",
    icon: PenTool,
    iconColor: "bg-nexus/20 text-nexus",
    category: "consulting"
  }
];

export default Services;
