
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { theme } = useTheme();

  // Toggle button visibility based on scroll position
  useEffect(() => {
    let scrollTimer: number;
    
    const toggleVisibility = () => {
      // Show button when scrolled down
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Indicate scrolling
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={`h-12 w-12 rounded-full ${
          theme === 'dark' ? 'bg-primary/10 border-primary/30' : 'bg-background/80 border-primary/20'
        } hover:bg-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group ${
          isScrolling ? 'animate-pulse' : ''
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-primary group-hover:animate-bounce" />
        <span className="absolute -inset-0.5 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
