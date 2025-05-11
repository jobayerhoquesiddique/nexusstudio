
import { useState } from "react";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background/95 to-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-primary/20 animate-spin-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: "reverse" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest projects across blockchain, software development, and AI solutions.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="crypto">Blockchain & NFT</TabsTrigger>
              <TabsTrigger value="software">Software & AI</TabsTrigger>
              <TabsTrigger value="web">Web & Mobile</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="animate-fade-in">
            <ProjectGrid projects={allProjects} />
          </TabsContent>
          
          <TabsContent value="crypto" className="animate-fade-in">
            <ProjectGrid projects={allProjects.filter(p => p.category === "crypto")} />
          </TabsContent>
          
          <TabsContent value="software" className="animate-fade-in">
            <ProjectGrid projects={allProjects.filter(p => p.category === "software")} />
          </TabsContent>
          
          <TabsContent value="web" className="animate-fade-in">
            <ProjectGrid projects={allProjects.filter(p => p.category === "web")} />
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2 group border-primary text-primary hover:bg-primary/20 hover:text-primary">
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "DecentralEx",
    description: "A decentralized cryptocurrency exchange with advanced trading features.",
    image: "/placeholder.svg",
    category: "crypto",
    tags: ["Blockchain", "DeFi", "Smart Contracts"],
    link: "#"
  },
  {
    id: 2,
    title: "AI Vision Pro",
    description: "Computer vision solution for retail analytics and customer insights.",
    image: "/placeholder.svg",
    category: "software",
    tags: ["AI", "Machine Learning", "Computer Vision"],
    link: "#"
  },
  {
    id: 3,
    title: "MetaVerse Marketplace",
    description: "NFT marketplace for virtual real estate in the metaverse.",
    image: "/placeholder.svg",
    category: "crypto",
    tags: ["NFT", "Ethereum", "Metaverse"],
    link: "#"
  },
  {
    id: 4,
    title: "ByteHealth",
    description: "Healthcare management platform with AI-powered diagnostics.",
    image: "/placeholder.svg",
    category: "software",
    tags: ["Healthcare", "AI", "SaaS"],
    link: "#"
  },
  {
    id: 5,
    title: "CryptoWallet Pro",
    description: "Secure multi-chain cryptocurrency wallet with DeFi integration.",
    image: "/placeholder.svg",
    category: "crypto",
    tags: ["Wallet", "Security", "Multi-chain"],
    link: "#"
  },
  {
    id: 6,
    title: "EcoTrack",
    description: "Sustainability tracking platform for enterprises with blockchain verification.",
    image: "/placeholder.svg",
    category: "web",
    tags: ["Sustainability", "Dashboard", "Analytics"],
    link: "#"
  },
];

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryColor = 
    project.category === "crypto" 
      ? "bg-crypto text-white" 
      : project.category === "software" 
        ? "bg-byte text-white" 
        : "bg-nexus text-white";

  return (
    <Card 
      className="overflow-hidden bg-secondary/50 border-muted hover-lift"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
      onLoad={(e) => {
        const target = e.currentTarget;
        setTimeout(() => {
          target.classList.add("animate-fade-in");
        }, index * 100);
      }}
    >
      <div 
        className="relative overflow-hidden aspect-video"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
            <Button size="sm" variant="secondary" className="gap-2">
              <Eye size={14} />
              View Project
            </Button>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`text-xs py-1 px-3 rounded-full ${categoryColor}`}>
            {project.category === "crypto" ? "Blockchain & NFT" : 
              project.category === "software" ? "Software & AI" : "Web & Mobile"}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-muted py-1 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {project.link && (
          <Button variant="ghost" size="sm" className="gap-2 ml-auto">
            Visit Project <ExternalLink size={14} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
