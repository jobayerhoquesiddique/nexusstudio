
import { Code, Globe, Briefcase } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive solutions across blockchain, AI, and software development sectors.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Crypto Nexus Services */}
          <div className="col-span-1 space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-gradient-crypto font-heading text-2xl font-bold">Crypto Nexus</h3>
            </div>
            
            <ServiceCard 
              title="Blockchain Development"
              description="Custom blockchain solutions, smart contracts, and decentralized applications."
              icon={<Code className="text-crypto-light" />}
              delay={0.1}
            />
            
            <ServiceCard 
              title="NFT Marketplaces"
              description="End-to-end NFT marketplace development with minting, trading, and auction functionalities."
              icon={<Globe className="text-crypto-light" />}
              delay={0.2}
            />
            
            <ServiceCard 
              title="Crypto Consulting"
              description="Strategic consulting for cryptocurrency projects, tokenomics, and blockchain integration."
              icon={<Briefcase className="text-crypto-light" />}
              delay={0.3}
            />
          </div>
          
          {/* Byte Studio Services */}
          <div className="col-span-1 space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-gradient-byte font-heading text-2xl font-bold">Byte Studio</h3>
            </div>
            
            <ServiceCard 
              title="AI Solutions"
              description="Custom AI implementation, machine learning models, and intelligent automation systems."
              icon={<Code className="text-byte-light" />}
              delay={0.4}
            />
            
            <ServiceCard 
              title="Web Development"
              description="Responsive websites, progressive web apps, and eCommerce solutions."
              icon={<Globe className="text-byte-light" />}
              delay={0.5}
            />
            
            <ServiceCard 
              title="Software Engineering"
              description="Custom software development, mobile applications, and enterprise solutions."
              icon={<Briefcase className="text-byte-light" />}
              delay={0.6}
            />
          </div>
          
          {/* Nexus Studio / Personal Services */}
          <div className="col-span-1 space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-gradient-primary font-heading text-2xl font-bold">Jobayer Hoque Siddique</h3>
            </div>
            
            <ServiceCard 
              title="Technical Consultation"
              description="Expert guidance on technical decisions, architecture, and technology stack selection."
              icon={<Code className="text-nexus-light" />}
              delay={0.7}
            />
            
            <ServiceCard 
              title="Digital Strategy"
              description="Comprehensive digital strategy development for businesses seeking technological transformation."
              icon={<Globe className="text-nexus-light" />}
              delay={0.8}
            />
            
            <ServiceCard 
              title="Leadership & Mentoring"
              description="Technical team leadership, mentoring, and growth strategy development."
              icon={<Briefcase className="text-nexus-light" />}
              delay={0.9}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ 
  title, 
  description, 
  icon,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div 
      className="glass-card p-6 hover-lift hover:shadow-lg transition-all"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0
      }}
      onLoad={(e) => {
        const target = e.currentTarget;
        setTimeout(() => {
          target.classList.add("animate-fade-in");
        }, delay * 1000);
      }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-secondary">
          {icon}
        </div>
      </div>
      <h4 className="font-heading font-semibold text-lg mb-2 text-center">{title}</h4>
      <p className="text-muted-foreground text-sm text-center">{description}</p>
    </div>
  );
};

export default Services;
