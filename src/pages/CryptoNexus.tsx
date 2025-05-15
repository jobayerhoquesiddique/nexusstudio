
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, Shield, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CryptoNexus = () => {
  // Show welcome toast when page loads
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenCryptoWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to Crypto Nexus",
          description: "Explore our blockchain solutions and digital transformation services.",
          duration: 5000,
        });
        sessionStorage.setItem('hasSeenCryptoWelcome', 'true');
      }, 1500);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection="crypto" />
      
      <main>
        {/* Hero Section */}
        <section id="cryptoHero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 px-4 py-24">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-crypto/10 blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Floating geometric elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-32 h-32 border border-crypto/30 rounded-lg top-1/4 right-1/4 rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute w-20 h-20 border border-blue-500/20 rounded-full bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute w-24 h-24 border border-indigo-500/20 rounded-lg top-1/3 right-1/5 -rotate-12 animate-float" style={{ animationDelay: "0s" }}></div>
          </div>
          
          {/* Hero content */}
          <div className="container relative z-10 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 text-left">
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-crypto-light">CryptoNexus</h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white">
                    <span className="text-gradient-crypto animate-gradient-shift bg-clip-text text-transparent">Blockchain Innovation</span>
                  </h1>
                  <p className="text-xl text-slate-300 mt-6 max-w-2xl">
                    Pioneering blockchain solutions for the digital future. We build enterprise-grade distributed systems that transform industries.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button 
                      size="lg" 
                      className="bg-gradient-crypto text-white hover:opacity-90"
                    >
                      Explore Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-crypto-light text-crypto-light hover:bg-crypto/10"
                    >
                      View Case Studies
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-8 mt-10">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-crypto-light">120+</span>
                      <span className="text-sm text-slate-400">Projects Delivered</span>
                    </div>
                    <div className="h-10 w-px bg-slate-700"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-crypto-light">50+</span>
                      <span className="text-sm text-slate-400">Enterprise Clients</span>
                    </div>
                    <div className="h-10 w-px bg-slate-700"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-crypto-light">8+</span>
                      <span className="text-sm text-slate-400">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  {/* 3D blockchain illustration */}
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-4 border border-slate-700/50">
                      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute w-32 h-32 bg-crypto/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute w-24 h-24 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                        <img 
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/blockchain-5041612-4204349.png" 
                          alt="Blockchain 3D Illustration" 
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
        <section id="cryptoServices" className="py-20 bg-slate-900">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Services</h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                Enterprise blockchain solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Contract Development</h3>
                <p className="text-slate-300">
                  Secure, audited and optimized smart contracts for various blockchain platforms.
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Blockchain Security Audits</h3>
                <p className="text-slate-300">
                  Comprehensive security reviews and vulnerability assessments for blockchain applications.
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">NFT Platform Development</h3>
                <p className="text-slate-300">
                  End-to-end solutions for creating, minting, and trading digital assets on the blockchain.
                </p>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">DeFi App Development</h3>
                <p className="text-slate-300">
                  Decentralized finance applications with advanced features like yield farming and liquidity provision.
                </p>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Blockchain Integration</h3>
                <p className="text-slate-300">
                  Seamless integration of blockchain technology with existing enterprise systems and applications.
                </p>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-crypto/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 rounded-lg bg-crypto/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-crypto-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Private Blockchain Networks</h3>
                <p className="text-slate-300">
                  Custom enterprise blockchain solutions with tailored consensus mechanisms and governance.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-crypto text-white hover:bg-crypto/80">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section id="cryptoTech" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Technology Stack</h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                We leverage cutting-edge blockchain technologies and frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png" 
                    alt="Ethereum" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Ethereum</h3>
                <span className="text-sm text-slate-400">Smart Contracts</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png" 
                    alt="Solana" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Solana</h3>
                <span className="text-sm text-slate-400">High Performance</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
                    alt="Polygon" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Polygon</h3>
                <span className="text-sm text-slate-400">Scaling Solutions</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" 
                    alt="Binance" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Binance</h3>
                <span className="text-sm text-slate-400">BNB Chain</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full p-2 flex items-center justify-center mb-3 border border-slate-700">
                  <img 
                    src="https://hyperledger.org/wp-content/uploads/2018/03/Hyperledger_Fabric_Logo.png" 
                    alt="Hyperledger" 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-white font-medium">Hyperledger</h3>
                <span className="text-sm text-slate-400">Enterprise DLT</span>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Blockchain Solutions</h3>
                  <p className="text-slate-300">
                    Need a tailored blockchain implementation for your specific business requirements?
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-crypto text-white whitespace-nowrap"
                >
                  Schedule a Consultation
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

export default CryptoNexus;
