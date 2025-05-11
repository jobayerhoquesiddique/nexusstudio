
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full focus:ring-2 ring-primary/30 relative overflow-hidden transition-all duration-300 hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0" />
      )}
      <span className={`absolute inset-0 ${theme === "dark" ? "bg-primary/10" : "bg-yellow-400/10"} rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-100`}></span>
    </Button>
  );
}

export default ThemeToggle;
