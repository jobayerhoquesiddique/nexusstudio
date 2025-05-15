
/**
 * Creates a ripple effect on button click
 * @param event Mouse event from button click
 */
export const createRippleEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
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

/**
 * Animates counting up to a specified number
 * @param element Element to update with count value
 * @param target Target number to count to
 * @param duration Duration of animation in milliseconds
 * @param suffix Optional suffix to add after number (like '+' or '%')
 */
export const animateCounter = (
  element: HTMLElement, 
  target: number, 
  duration = 2000, 
  suffix = '+'
) => {
  let start = 0;
  const increment = target / (duration / 16); // 16ms is approx 60fps
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = `${Math.floor(target)}${suffix}`;
      clearInterval(timer);
    } else {
      element.textContent = `${Math.floor(start)}${suffix}`;
    }
  }, 16);
  
  return timer;
};

/**
 * Sets up intersection observer for reveal animations
 * @param selector CSS selector for elements to animate
 * @param threshold Visibility threshold to trigger animation
 * @param rootMargin Root margin for intersection observer
 */
export const setupScrollReveal = (
  selector = '.reveal-on-scroll',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px'
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );
  
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => observer.observe(el));
  
  return {
    observer,
    elements
  };
};

/**
 * Creates a staggered animation for multiple elements
 * @param elements Array of elements to animate
 * @param staggerDelay Delay between each element animation in ms
 */
export const createStaggeredAnimation = (
  elements: HTMLElement[], 
  staggerDelay = 100
) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * staggerDelay);
  });
};

/**
 * Adds parallax effect to background elements
 * @param element Element to apply parallax to
 * @param speed Speed factor for parallax (higher = more movement)
 */
export const applyParallaxEffect = (element: HTMLElement, speed = 0.5) => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
