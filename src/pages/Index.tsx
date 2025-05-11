
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Ref for tracking animation elements
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  
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
          
          // Smooth scroll
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
