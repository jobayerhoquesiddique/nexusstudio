
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { ArrowUp } from "lucide-react";

const Index = () => {
  // Ref for tracking animation elements
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  // State for scroll to top button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  // Active section tracking for navigation highlighting
  const [activeSection, setActiveSection] = useState<string>('hero');
  // Refs for each section
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    hero: null,
    services: null,
    about: null,
    portfolio: null,
    testimonials: null,
    contact: null
  });
  
  // Show welcome toast when page loads
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to Nexus Creative Studio",
          description: "Explore our corporate solutions and services tailored for enterprise clients.",
          duration: 5000,
        });
        sessionStorage.setItem('hasSeenWelcome', 'true');
      }, 1500);
    }
  }, []);
  
  // Enhanced scroll reveal effect with more options
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Add staggered animation to children with stagger class
            const staggeredElements = entry.target.querySelectorAll('.stagger');
            staggeredElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, index * 100);
            });
            
            // Add ripple effect to buttons inside revealed elements
            const buttons = entry.target.querySelectorAll('.btn-ripple');
            buttons.forEach(button => {
              button.addEventListener('click', createRipple);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    // Create ripple effect for buttons
    const createRipple = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;
      const ripple = document.createElement('span');
      
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      
      const rect = button.getBoundingClientRect();
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - rect.left - radius}px`;
      ripple.style.top = `${event.clientY - rect.top - radius}px`;
      ripple.classList.add('ripple-effect');
      
      const existingRipple = button.querySelector('.ripple-effect');
      if (existingRipple) {
        existingRipple.remove();
      }
      
      button.appendChild(ripple);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
      observer.observe(el);
      // Store elements for cleanup
      animatedElementsRef.current.push(el as HTMLElement);
    });

    return () => {
      // Cleanup observer and event listeners
      animatedElementsRef.current.forEach(el => {
        observer.unobserve(el);
        const buttons = el.querySelectorAll('.btn-ripple');
        buttons.forEach(button => {
          button.removeEventListener('click', createRipple);
        });
      });
    };
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Add a smooth scroll behavior when clicking navigation links
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navLink = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (navLink) {
        e.preventDefault();
        const targetId = navLink.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          // Add highlight animation to the target section
          targetElement.classList.add('highlight-section');
          setTimeout(() => {
            targetElement.classList.remove('highlight-section');
          }, 1500);
          
          // Smooth scroll with offset for fixed header
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);
  
  // Track active section for navigation highlighting
  useEffect(() => {
    // Store refs to sections
    Object.keys(sectionRefs.current).forEach(key => {
      sectionRefs.current[key] = document.getElementById(key);
    });
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the current active section
      for (const section of Object.keys(sectionRefs.current)) {
        const element = sectionRefs.current[section];
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
              
              // Update URL without scrolling
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  // Initialize counters
  useEffect(() => {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const countElements = entry.target.querySelectorAll('.counter-value');
          
          countElements.forEach(el => {
            const target = parseInt((el as HTMLElement).getAttribute('data-value') || '0', 10);
            const duration = 2000; // ms
            const steps = 50;
            const stepTime = duration / steps;
            const stepValue = target / steps;
            let current = 0;
            let timer: number;
            
            const updateCounter = () => {
              current += stepValue;
              if (current < target) {
                el.textContent = `${Math.ceil(current)}+`;
                timer = window.setTimeout(updateCounter, stepTime);
              } else {
                el.textContent = `${target}+`;
              }
            };
            
            updateCounter();
            
            // Clean up timer if needed
            return () => clearTimeout(timer);
          });
          
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Observe all counter sections
    const counterSections = document.querySelectorAll('.counter-section');
    counterSections.forEach(section => {
      countObserver.observe(section);
    });
    
    return () => {
      counterSections.forEach(section => {
        countObserver.unobserve(section);
      });
    };
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 h-12 w-12 rounded-full bg-corporate shadow-lg text-white flex items-center justify-center z-50 transition-all duration-300 ${
          showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
