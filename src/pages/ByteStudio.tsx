
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, Laptop, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ByteStudio = () => {
  // Show welcome toast when page loads
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenByteWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to Byte Studio",
          description: "Explore our software development and digital transformation services.",
          duration: 5000,
        });
        sessionStorage.setItem('hasSeenByteWelcome', 'true');
      }, 1500);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection="byte" />
      
      <main>
        {/* Hero Section */}
        <section id="byteHero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 px-4 py-24">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-byte/10 blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-teal-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Floating geometric elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-32 h-32 border border-byte/30 rounded-lg top-1/4 right-1/4 rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute w-20 h-20 border border-emerald-500/20 rounded-full bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute w-24 h-24 border border-teal-500/20 rounded-lg top-1/3 right-1/5 -rotate-12 animate-float" style={{ animationDelay: "0s" }}></div>
          </div>
          
          {/* Hero content */}
          <div className="container relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 text-left">
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-byte-light">ByteStudio</h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white">
                    <span className="text-gradient-byte animate-gradient-shift bg-clip-text text-transparent">Digital Transformation</span>
                  </h1>
                  <p className="text-xl text-slate-300 mt-6 max-w-2xl">
                    Cutting-edge software development and digital solutions that drive business growth and innovation.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button 
                      size="lg" 
                      className="bg-gradient-byte text-white hover:opacity-90"
                    >
                      Our Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-byte-light text-byte-light hover:bg-byte/10"
                    >
                      View Portfolio
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-8 mt-10">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-byte-light">200+</span>
                      <span className="text-sm text-slate-400">Projects Delivered</span>
                    </div>
                    <div className="h-10 w-px bg-slate-700"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-byte-light">45+</span>
                      <span className="text-sm text-slate-400">Development Experts</span>
                    </div>
                    <div className="h-10 w-px bg-slate-700"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-byte-light">10+</span>
                      <span className="text-sm text-slate-400">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  {/* 3D software development illustration */}
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-4 border border-slate-700/50">
                      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute w-32 h-32 bg-byte/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute w-24 h-24 bg-emerald-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                        <img 
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5684902-4734189.png" 
                          alt="Software Development 3D Illustration" 
                          className="w-4/5 h-4/5 object-contain drop-shadow-2xl animate-float"
                        />
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="byteServices" className="py-20 bg-slate-900">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Services</h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                End-to-end software development solutions for modern enterprises
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Software Development</h3>
                <p className="text-slate-300">
                  Tailored software solutions designed to address your specific business challenges.
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Application Development</h3>
                <p className="text-slate-300">
                  Modern, responsive web applications built with cutting-edge technologies.
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Database Solutions</h3>
                <p className="text-slate-300">
                  Robust data management systems designed for performance and scalability.
                </p>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">API Development & Integration</h3>
                <p className="text-slate-300">
                  Seamless API development and third-party system integrations for your business.
                </p>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                <p className="text-slate-300">
                  Strategic digital transformation initiatives to modernize legacy systems.
                </p>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-byte/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-byte/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-byte-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">DevOps & Cloud Solutions</h3>
                <p className="text-slate-300">
                  Streamlined deployment pipelines and cloud infrastructure management.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-byte text-white hover:bg-byte/80">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section id="byteTech" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Technology Stack</h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                We utilize modern technologies to deliver scalable and robust solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
                    alt="React" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">React</h3>
                <span className="text-sm text-slate-400">Frontend</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" 
                    alt="Node.js" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Node.js</h3>
                <span className="text-sm text-slate-400">Backend</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" 
                    alt="TypeScript" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">TypeScript</h3>
                <span className="text-sm text-slate-400">Language</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" 
                    alt="AWS" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">AWS</h3>
                <span className="text-sm text-slate-400">Cloud</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" 
                    alt="MongoDB" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">MongoDB</h3>
                <span className="text-sm text-slate-400">Database</span>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
                  <p className="text-slate-300">
                    Let's discuss how we can help transform your business with custom software development.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-byte text-white whitespace-nowrap"
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ByteStudio;
