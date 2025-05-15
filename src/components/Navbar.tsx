
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-gradient-primary">
              NEXUS<span className="text-foreground">CREATIVE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="bg-gradient-primary hover:opacity-90" 
              onClick={() => scrollToSection("contact")}
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
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </button>
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>
            <button 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 mt-2"
              onClick={() => scrollToSection("contact")}
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
