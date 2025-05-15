
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

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
            Discover our story, mission, and the expertise that drives innovation across our companies.
          </p>
        </div>
        
        <Tabs defaultValue="nexus" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="nexus" className="data-[state=active]:bg-nexus data-[state=active]:text-white">
              Nexus Creative Studio
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
              title="Nexus Creative Studio"
              subtitle="The Innovation Hub"
              description="Founded in 2018, Nexus Creative Studio is the parent organization that unites specialized agencies in blockchain and software development. We've built a reputation for delivering innovative solutions that combine cutting-edge technology with strategic business insights. Our holistic approach ensures that every project benefits from our diverse expertise across multiple technology domains."
              highlights={[
                "Unified technology vision",
                "Cross-discipline collaboration",
                "Award-winning global portfolio",
                "Continuous innovation culture",
              ]}
              image="/placeholder.svg"
              bgClass="bg-nexus/20"
              buttonClass="bg-gradient-primary"
              values={[
                { title: "Innovation", description: "We embrace emerging technologies and creative approaches to solve complex challenges." },
                { title: "Integrity", description: "We maintain the highest ethical standards in all our business relationships and technical implementations." },
                { title: "Excellence", description: "We strive for excellence in every line of code, every design element, and every client interaction." },
                { title: "Collaboration", description: "We believe that the best solutions emerge from diverse perspectives working together." }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="crypto" className="animate-fade-in">
            <AboutTab
              title="Crypto Nexus"
              subtitle="Blockchain & Web3 Specialists"
              description="Crypto Nexus is at the forefront of blockchain innovation, specializing in cryptocurrency solutions, smart contract development, and NFT ecosystems. Our team of blockchain engineers and crypto strategists work with businesses ranging from startups to enterprises, helping them harness the transformative power of decentralized technologies to create secure, transparent, and efficient systems."
              highlights={[
                "Comprehensive blockchain expertise",
                "End-to-end NFT development",
                "Security-first methodology",
                "Decentralized finance solutions",
              ]}
              image="/placeholder.svg"
              bgClass="bg-crypto/20"
              buttonClass="bg-gradient-crypto"
              values={[
                { title: "Security", description: "We prioritize uncompromising security in all our blockchain implementations." },
                { title: "Transparency", description: "We believe in the transformative power of transparent, auditable systems." },
                { title: "Accessibility", description: "We strive to make blockchain technology accessible to businesses of all sizes." },
                { title: "Innovation", description: "We continuously explore new blockchain applications and protocols." }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="byte" className="animate-fade-in">
            <AboutTab
              title="Byte Studio"
              subtitle="Software & AI Excellence"
              description="Byte Studio specializes in creating robust, scalable software solutions powered by the latest in artificial intelligence and machine learning. Our technical expertise spans modern frameworks, cloud architectures, and AI/ML models that transform raw data into actionable business intelligence. We're committed to building digital products that not only solve today's problems but are flexible enough to adapt to tomorrow's challenges."
              highlights={[
                "Full-stack development mastery",
                "AI/ML implementation specialists",
                "Cloud-native architecture",
                "Mobile-first application design",
              ]}
              image="/placeholder.svg"
              bgClass="bg-byte/20"
              buttonClass="bg-gradient-byte"
              values={[
                { title: "Quality", description: "We deliver software that meets the highest standards of performance, security, and usability." },
                { title: "Efficiency", description: "We optimize our development processes and the solutions we build for maximum efficiency." },
                { title: "Adaptability", description: "We create flexible systems that can evolve with changing business needs and technologies." },
                { title: "User-Centricity", description: "We focus on creating experiences that delight users while solving business problems." }
              ]}
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
              With over a decade of experience in technology leadership, Jobayer founded Nexus Creative Studio with a vision to create a comprehensive ecosystem of digital service providers addressing the complex technological needs of modern businesses.
            </p>
            <p className="text-muted-foreground mb-6">
              Before founding Nexus Creative Studio, Jobayer led major digital transformation initiatives for Fortune 500 companies, bringing his unique perspective on how technology can drive business value. His expertise spans blockchain implementation, enterprise software architecture, and digital strategy development.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Certified Blockchain Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>MIT Sloan Executive Education in AI & Business Strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Former CTO at Global Tech Innovations Inc.</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-gradient-primary hover:opacity-90">View Portfolio</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Connect on LinkedIn
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

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-heading text-3xl font-bold mb-6">
              Our <span className="text-gradient-primary">Team</span>
            </h3>
            <p className="text-muted-foreground">
              Meet the experts behind our innovative solutions. Our diverse team brings together talent from around the world.
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-12">
            <div className="flex -space-x-4 items-center">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-16 h-16 rounded-full border-4 border-background overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background text-white font-medium">
                15+
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Users className="h-8 w-8 text-primary" />}
              value="20+"
              label="Team Members"
            />
            <StatCard
              icon={<Globe className="h-8 w-8 text-primary" />}
              value="8+"
              label="Countries"
            />
            <StatCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              value="50+"
              label="Projects Delivered"
            />
            <StatCard
              icon={<Award className="h-8 w-8 text-primary" />}
              value="12+"
              label="Industry Awards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="glass-card p-6 text-center hover:shadow-lg transition-all">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-2xl font-bold mb-1">{value}</h4>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

interface ValueProps {
  title: string;
  description: string;
}

const AboutTab = ({
  title,
  subtitle,
  description,
  highlights,
  image,
  bgClass,
  buttonClass,
  values
}: {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  bgClass: string;
  buttonClass: string;
  values: ValueProps[];
}) => {
  return (
    <div className="space-y-16">
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
      
      {/* Company Values Section */}
      <div>
        <h4 className="font-heading text-xl font-bold mb-8 text-center">Our Core Values</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-6 hover:shadow-lg transition-all">
              <h5 className="font-heading font-semibold text-lg mb-3">{value.title}</h5>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
