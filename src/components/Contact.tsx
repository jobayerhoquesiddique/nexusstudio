
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Mail, MapPin, Phone, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. Our team will be in touch shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          newsletter: false
        });
        
        if (formRef.current) {
          formRef.current.reset();
        }
        
        setFormSubmitted(false);
      }, 3000);
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-corporate/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-corporate/5 blur-3xl"></div>
        <div className="dots-bg absolute inset-0 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-gradient-corporate">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact our corporate team to discuss how Nexus Creative Studio can help transform your business with tailored enterprise solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - with enhanced corporate styling */}
          <div className="lg:col-span-5 space-y-8">
            <div className="corporate-card p-8 corporate-shadow fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}>
              <h3 className="font-heading text-2xl font-bold mb-6 text-left">Corporate Headquarters</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="text-corporate" />} 
                  title="Email Us"
                  content="corporate@nexusstudio.com"
                />
                
                <ContactInfo 
                  icon={<Phone className="text-corporate" />} 
                  title="Call Us"
                  content="+1 (555) 123-4567"
                />
                
                <ContactInfo 
                  icon={<MapPin className="text-corporate" />} 
                  title="Visit Us"
                  content="Nexus Tower, 123 Corporate Plaza, Financial District, New York, NY 10004"
                />
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium mb-4 text-left">Connect With Us</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-corporate/10 hover:text-corporate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-corporate/10 hover:text-corporate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-corporate/10 hover:text-corporate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-corporate/10 hover:text-corporate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium mb-4 text-left">Global Offices</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center"><span className="w-20 inline-block font-medium">London:</span> +44 20 1234 5678</p>
                  <p className="text-sm text-muted-foreground flex items-center"><span className="w-20 inline-block font-medium">Tokyo:</span> +81 3 1234 5678</p>
                  <p className="text-sm text-muted-foreground flex items-center"><span className="w-20 inline-block font-medium">Singapore:</span> +65 1234 5678</p>
                </div>
              </div>
            </div>
            
            {/* Corporate hours & additional info */}
            <div className="corporate-card p-8 corporate-shadow fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.2s" }}>
              <h3 className="font-heading text-xl font-bold mb-4 text-left">Corporate Hours</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-center justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>By appointment only</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-center justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-7">
            <div className="corporate-card p-8 corporate-shadow fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.2s" }}>
              <h3 className="font-heading text-2xl font-bold mb-6 text-left">Contact Our Team</h3>
              
              {formSubmitted ? (
                <div className="bg-success/10 border border-success/30 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Received!</h4>
                  <p className="text-muted-foreground mb-4">Thank you for reaching out to Nexus Creative Studio. A member of our team will be in touch with you shortly.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.3s" }}>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith" 
                        required 
                        className={`bg-background/50 focus:ring-2 focus:ring-corporate/30 ${formErrors.name ? 'border-red-500 focus:ring-red-300' : ''}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1 text-left">{formErrors.name}</p>}
                    </div>
                    <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.4s" }}>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john.smith@company.com" 
                        required 
                        className={`bg-background/50 focus:ring-2 focus:ring-corporate/30 ${formErrors.email ? 'border-red-500 focus:ring-red-300' : ''}`}
                      />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1 text-left">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.5s" }}>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-left">
                        Company
                      </label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name" 
                        className="bg-background/50 focus:ring-2 focus:ring-corporate/30"
                      />
                    </div>
                    <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.6s" }}>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-left">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567" 
                        className="bg-background/50 focus:ring-2 focus:ring-corporate/30"
                      />
                    </div>
                  </div>
                  
                  <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.7s" }}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-left">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help your business?" 
                      required 
                      className={`bg-background/50 focus:ring-2 focus:ring-corporate/30 ${formErrors.subject ? 'border-red-500 focus:ring-red-300' : ''}`}
                    />
                    {formErrors.subject && <p className="text-red-500 text-xs mt-1 text-left">{formErrors.subject}</p>}
                  </div>
                  
                  <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.8s" }}>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your project or inquiry..." 
                      rows={5} 
                      required 
                      className={`bg-background/50 focus:ring-2 focus:ring-corporate/30 ${formErrors.message ? 'border-red-500 focus:ring-red-300' : ''}`}
                    />
                    {formErrors.message && <p className="text-red-500 text-xs mt-1 text-left">{formErrors.message}</p>}
                  </div>
                  
                  <div className="fade-in-element flex items-start gap-3" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "0.9s" }}>
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="mt-1"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground text-left">
                      Subscribe to our newsletter for industry insights and updates on our services
                    </label>
                  </div>
                  
                  <div className="fade-in-element" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", transitionDelay: "1s" }}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="corporate-button px-8 py-6 w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <span className="flex items-center gap-2">Send Message <ArrowRight size={16} /></span>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4 text-left">
                      By submitting this form, you agree to our <a href="#" className="text-corporate hover:underline">Privacy Policy</a> and <a href="#" className="text-corporate hover:underline">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-start group text-left">
      <div className="h-10 w-10 rounded-full bg-corporate/10 flex items-center justify-center mr-4 group-hover:bg-corporate/20 transition-colors">
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
