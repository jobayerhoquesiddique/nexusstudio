
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/animations.css";
import { useEffect } from "react";

// Configure the query client with enhanced settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      retry: 1,
      retryDelay: 3000,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Add corporate accent color to browser theme
    const metaThemeColor = document.createElement('meta');
    metaThemeColor.name = 'theme-color';
    metaThemeColor.content = '#3182CE';
    document.head.appendChild(metaThemeColor);
    
    return () => {
      document.head.removeChild(metaThemeColor);
    };
  }, []);
  
  useEffect(() => {
    // Add page transition effect
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.add('transition-opacity', 'duration-500');
      document.body.classList.remove('opacity-0');
    }, 100);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner 
            position="top-right" 
            closeButton 
            className="corporate-toaster"
            toastOptions={{
              classNames: {
                toast: "group corporate-toast",
                title: "font-semibold text-foreground",
                description: "text-muted-foreground text-sm",
                actionButton: "bg-primary",
                cancelButton: "bg-muted",
                error: "bg-red-500/10 border-red-500/30 text-red-500",
                info: "bg-blue-500/10 border-blue-500/30 text-blue-500",
                success: "bg-green-500/10 border-green-500/30 text-green-500",
                warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-500",
              }
            }}
          />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
