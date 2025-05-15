
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  activeSection?: string;
}

export const Navbar = ({ activeSection = 'hero' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  // Determine active brand based on URL
  const activeBrand = location.pathname.includes('crypto-nexus') 
    ? 'crypto' 
    : location.pathname.includes('byte-studio') 
      ? 'byte' 
      : 'nexus';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-heading text-2xl font-bold ${
              activeBrand === 'crypto' ? 'text-gradient-crypto' : 
              activeBrand === 'byte' ? 'text-gradient-byte' : 
              'text-gradient-primary'
            }`}>
              {activeBrand === 'crypto' ? 'CRYPTO' : activeBrand === 'byte' ? 'BYTE' : 'NEXUS'}
              <span className="text-foreground">
                {activeBrand === 'crypto' || activeBrand === 'byte' ? '' : 'CREATIVE'}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              // Home page navigation
              <>
                <button 
                  onClick={() => scrollToSection("hero")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "hero" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "services" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "about" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("portfolio")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "portfolio" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "testimonials" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className={`text-sm font-medium transition-colors ${
                    activeSection === "contact" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  Contact
                </button>
              </>
            ) : (
              // Sub-brand page navigation
              <>
                <Link 
                  to="/"
                  className="text-sm font-medium transition-colors text-foreground hover:text-primary"
                >
                  Main Site
                </Link>
                <Link 
                  to="#"
                  className="text-sm font-medium transition-colors text-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cryptoServices')?.scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  Services
                </Link>
                <Link 
                  to="#"
                  className="text-sm font-medium transition-colors text-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cryptoTech')?.scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  Technology
                </Link>
              </>
            )}

            {/* Sub-brand Links */}
            <div className="hidden xl:block">
              <div className="flex items-center gap-2">
                <Link 
                  to="/crypto-nexus" 
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeBrand === 'crypto' 
                      ? 'bg-crypto text-white' 
                      : 'bg-background border border-muted hover:bg-crypto/10 hover:border-crypto/30 transition-colors'
                  }`}
                >
                  Crypto Nexus
                </Link>
                <Link 
                  to="/byte-studio" 
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeBrand === 'byte' 
                      ? 'bg-byte text-white' 
                      : 'bg-background border border-muted hover:bg-byte/10 hover:border-byte/30 transition-colors'
                  }`}
                >
                  Byte Studio
                </Link>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className={`${
                activeBrand === 'crypto' 
                  ? 'bg-gradient-crypto hover:opacity-90' : 
                activeBrand === 'byte' 
                  ? 'bg-gradient-byte hover:opacity-90' : 
                'bg-gradient-primary hover:opacity-90'
              }`}
              onClick={() => isHomePage ? scrollToSection("contact") : null}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full border-t border-border/20 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {isHomePage ? (
              // Home page mobile navigation
              <>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "hero" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </button>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "services" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "about" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "portfolio" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </button>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "testimonials" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonials
                </button>
                <button 
                  className={`py-2 transition-colors ${
                    activeSection === "contact" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </>
            ) : (
              // Sub-brand page mobile navigation
              <>
                <Link 
                  to="/"
                  className="py-2 transition-colors text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Main Site
                </Link>
                <Link 
                  to="#"
                  className="py-2 transition-colors text-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cryptoServices')?.scrollIntoView({behavior: 'smooth'});
                    setMobileMenuOpen(false);
                  }}
                >
                  Services
                </Link>
                <Link 
                  to="#"
                  className="py-2 transition-colors text-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cryptoTech')?.scrollIntoView({behavior: 'smooth'});
                    setMobileMenuOpen(false);
                  }}
                >
                  Technology
                </Link>
              </>
            )}

            {/* Sub-brand Links */}
            <div className="pt-2 border-t border-border/50 mt-2">
              <p className="text-xs text-muted-foreground mb-2">Our Divisions</p>
              <Link 
                to="/crypto-nexus" 
                className="block mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={`py-1 px-3 rounded-full text-xs font-semibold ${
                  activeBrand === 'crypto' 
                    ? 'bg-crypto text-white' 
                    : 'bg-background border border-muted'
                }`}>
                  Crypto Nexus
                </span>
              </Link>
              <Link 
                to="/byte-studio" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={`py-1 px-3 rounded-full text-xs font-semibold ${
                  activeBrand === 'byte' 
                    ? 'bg-byte text-white' 
                    : 'bg-background border border-muted'
                }`}>
                  Byte Studio
                </span>
              </Link>
            </div>
            
            <Button 
              className={`mt-2 ${
                activeBrand === 'crypto' 
                  ? 'bg-gradient-crypto hover:opacity-90' : 
                activeBrand === 'byte' 
                  ? 'bg-gradient-byte hover:opacity-90' : 
                'bg-gradient-primary hover:opacity-90'
              }`}
              onClick={() => {
                isHomePage ? scrollToSection("contact") : null;
                setMobileMenuOpen(false);
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
