
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const About = () => {
  const [activeTab, setActiveTab] = useState("nexus");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nexus/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-nexus/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn more about our companies and the visionary behind them.
          </p>
        </div>
        
        <Tabs defaultValue="nexus" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="nexus" className="data-[state=active]:bg-nexus data-[state=active]:text-white">
              Nexus Studio
            </TabsTrigger>
            <TabsTrigger value="crypto" className="data-[state=active]:bg-crypto data-[state=active]:text-white">
              Crypto Nexus
            </TabsTrigger>
            <TabsTrigger value="byte" className="data-[state=active]:bg-byte data-[state=active]:text-white">
              Byte Studio
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="nexus" className="animate-fade-in">
            <AboutTab
              title="Nexus Studio"
              subtitle="The Parent Group"
              description="Nexus Studio serves as the umbrella organization that oversees and unites our specialized agencies. Founded with the vision to create a comprehensive ecosystem of digital service providers, Nexus Studio drives innovation across blockchain, software development, and digital transformation sectors. We believe in the power of technology to reshape industries and create meaningful impact."
              highlights={[
                "Established in 2022",
                "Unified vision across specialized fields",
                "Global client portfolio",
                "Award-winning projects",
              ]}
              image="/placeholder.svg"
              bgClass="bg-nexus/20"
              buttonClass="bg-gradient-primary"
            />
          </TabsContent>
          
          <TabsContent value="crypto" className="animate-fade-in">
            <AboutTab
              title="Crypto Nexus"
              subtitle="Blockchain, NFT & Crypto Agency"
              description="Crypto Nexus specializes in blockchain technology, cryptocurrency solutions, and NFT development. Our team of blockchain engineers, smart contract developers, and crypto strategists work to harness the revolutionary potential of distributed ledger technologies. We've successfully delivered projects ranging from custom blockchain implementations to NFT marketplaces and DeFi applications."
              highlights={[
                "Expert blockchain developers",
                "Complete NFT ecosystem development",
                "Smart contract auditing and security",
                "DeFi protocol implementation",
              ]}
              image="/placeholder.svg"
              bgClass="bg-crypto/20"
              buttonClass="bg-gradient-crypto"
            />
          </TabsContent>
          
          <TabsContent value="byte" className="animate-fade-in">
            <AboutTab
              title="Byte Studio"
              subtitle="AI, Web & Software Development Agency"
              description="Byte Studio focuses on cutting-edge software development, artificial intelligence solutions, and web applications. Our technical expertise spans across modern frameworks, cloud architectures, and AI/ML models. We pride ourselves on building scalable, robust applications that solve complex business challenges and deliver exceptional user experiences."
              highlights={[
                "Full-stack development team",
                "AI and machine learning specialists",
                "Cloud-native architecture experts",
                "Mobile app development",
              ]}
              image="/placeholder.svg"
              bgClass="bg-byte/20"
              buttonClass="bg-gradient-byte"
            />
          </TabsContent>
        </Tabs>
        
        {/* Founder Profile */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Jobayer Hoque Siddique
            </h3>
            <h4 className="text-gradient-primary text-xl mb-6">Founder & CEO</h4>
            <p className="text-muted-foreground mb-6">
              A visionary entrepreneur with expertise spanning blockchain technology, software development, and digital transformation. Jobayer founded Nexus Studio with the mission to create a comprehensive digital services ecosystem that addresses the complex technological needs of modern businesses.
            </p>
            <p className="text-muted-foreground mb-6">
              With over 10 years of experience in the technology sector, Jobayer has led numerous successful projects and continues to drive innovation across all Nexus Studio ventures. His technical expertise combined with business acumen has established him as a trusted advisor for companies seeking digital evolution.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-gradient-primary hover:opacity-90">View Portfolio</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Connect
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src="/placeholder.svg"
                  alt="Jobayer Hoque Siddique"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/30 blur-xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutTab = ({
  title,
  subtitle,
  description,
  highlights,
  image,
  bgClass,
  buttonClass,
}: {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  bgClass: string;
  buttonClass: string;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-xl mb-6 text-muted-foreground">{subtitle}</p>
        <p className="text-muted-foreground mb-8">{description}</p>
        
        <div className="mb-8">
          <h4 className="font-medium mb-4">Key Highlights:</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button className={buttonClass + " hover:opacity-90"}>Learn More</Button>
      </div>
      
      <div className="relative group">
        <div className={`absolute inset-0 rounded-2xl ${bgClass} blur-xl transform group-hover:scale-105 transition-transform duration-500`}></div>
        <div className="relative glass-card overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover aspect-video transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
