
import { useToast, toast } from "@/hooks/use-toast";

// Utility functions for commonly used toast patterns
const corporateToast = {
  success: (title: string, description?: string) => {
    toast({
      title,
      description,
      className: "bg-success/10 text-success border-success/20 dark:bg-success/5",
    });
  },
  
  error: (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: "destructive",
    });
  },
  
  info: (title: string, description?: string) => {
    toast({
      title,
      description,
      className: "bg-corporate/10 text-corporate border-corporate/20 dark:bg-corporate/5",
    });
  },
  
  warning: (title: string, description?: string) => {
    toast({
      title,
      description,
      className: "bg-warning/10 text-warning-foreground border-warning/20 dark:bg-warning/5",
    });
  }
};

export { useToast, toast, corporateToast };
