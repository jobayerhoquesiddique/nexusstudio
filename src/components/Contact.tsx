
import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll be in touch shortly!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Animation for form elements when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const formElements = entry.target.querySelectorAll('.fade-in-element');
          formElements.forEach((el, index) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.2 });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nexus/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-nexus/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-crypto/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Contact us to discuss how we can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - with enhanced styling */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 hover:shadow-lg transition-all duration-300 fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}>
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="text-primary" />} 
                  title="Email Us"
                  content="hello@nexusstudio.com"
                />
                
                <ContactInfo 
                  icon={<Phone className="text-primary" />} 
                  title="Call Us"
                  content="+1 (555) 123-4567"
                />
                
                <ContactInfo 
                  icon={<MapPin className="text-primary" />} 
                  title="Visit Us"
                  content="123 Tech Plaza, Innovation District, San Francisco, CA 94105"
                />
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 hover:shadow-lg transition-all duration-300 fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.2s" }}>
              <h3 className="font-heading text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.3s" }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                      className="bg-background/50 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.4s" }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="bg-background/50 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                
                <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.5s" }}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?" 
                    required 
                    className="bg-background/50 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                
                <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.6s" }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    rows={5} 
                    required 
                    className="bg-background/50 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                
                <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.7s" }}>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto shimmer"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <ArrowRight size={16} className="ml-2" /></>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-start group">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <h5 className="text-sm font-medium">{title}</h5>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};

export default Contact;
