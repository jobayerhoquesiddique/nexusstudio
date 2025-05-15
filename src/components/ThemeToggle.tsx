
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Only render the toggle on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 1000);
  };

  if (!mounted) return null;

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleToggle}
      className="rounded-full focus:ring-2 ring-corporate/30 relative overflow-hidden transition-all duration-300 hover:bg-corporate/10 w-10 h-10"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-corporate/10 to-corporate-accent/10 transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="relative h-[1.2rem] w-[1.2rem] transition-all duration-500">
        <Sun className={`absolute inset-0 h-full w-full transition-all duration-500 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100 text-corporate" : "rotate-90 scale-0 opacity-0"
        }`} />
        <Moon className={`absolute inset-0 h-full w-full transition-all duration-500 ${
          theme === "light" ? "rotate-0 scale-100 opacity-100 text-corporate" : "-rotate-90 scale-0 opacity-0"
        }`} />
      </div>
    </Button>
  );
}

export default ThemeToggle;
