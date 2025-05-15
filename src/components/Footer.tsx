
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      duration: 5000,
    });
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-gradient-primary mb-6">
                NEXUS<span className="text-foreground">CREATIVE</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                A parent group uniting expertise in blockchain technology, software development, and digital innovation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <FooterLink href="/#about" label="About Us" />
                <FooterLink href="/#services" label="Our Services" />
                <FooterLink href="/#portfolio" label="Portfolio" />
                <FooterLink href="/#contact" label="Contact" />
                <FooterLink href="#" label="Careers" />
                <FooterLink href="#" label="Blog" />
              </ul>
            </div>
            
            {/* Companies */}
            <div>
              <h4 className="font-medium text-lg mb-6">Our Companies</h4>
              <ul className="space-y-3">
                <FooterLink href="#" label="Nexus Creative Studio" />
                <FooterLink href="#" label="Crypto Nexus" />
                <FooterLink href="#" label="Byte Studio" />
                <FooterLink href="#" label="Jobayer Hoque Siddique" />
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-medium text-lg mb-6">Subscribe to Our Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest news and projects.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="bg-background/50"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                  <ArrowRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Nexus Creative Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
