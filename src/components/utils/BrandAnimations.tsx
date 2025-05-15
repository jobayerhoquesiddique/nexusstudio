
import React, { useEffect, useState } from "react";

interface ParticleProps {
  brand: 'corporate' | 'crypto' | 'byte';
}

/**
 * Animated floating particles specific to each brand
 */
export const BrandParticles: React.FC<ParticleProps> = ({ brand }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);
  
  useEffect(() => {
    // Create random particles
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // % position
      y: Math.random() * 100, // % position
      size: Math.random() * 8 + 2, // Size between 2-10
      speed: Math.random() * 3 + 1 // Speed between 1-4
    }));
    
    setParticles(newParticles);
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          y: (p.y - p.speed * 0.05) % 100, // Move upward and loop
          x: p.x + Math.sin(p.y / 10) * 0.1 // Slight horizontal movement
        }))
      );
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [brand]);
  
  // Set brand-specific colors
  const getColor = () => {
    switch (brand) {
      case 'crypto':
        return 'bg-crypto/20';
      case 'byte':
        return 'bg-byte/20';
      default:
        return 'bg-corporate/20';
    }
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(particle => (
        <div 
          key={particle.id}
          className={`absolute rounded-full ${getColor()} blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.4 + Math.random() * 0.3
          }}
        />
      ))}
    </div>
  );
};

/**
 * Animated gradient background specific to each brand
 */
export const BrandGradientBg: React.FC<ParticleProps> = ({ brand }) => {
  const getBgClass = () => {
    switch (brand) {
      case 'crypto':
        return 'from-crypto/5 via-transparent to-transparent dark:from-crypto/10';
      case 'byte':
        return 'from-byte/5 via-transparent to-transparent dark:from-byte/10';
      default:
        return 'from-corporate/5 via-transparent to-transparent dark:from-corporate/10';
    }
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute inset-0 bg-gradient-to-b ${getBgClass()}`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10" />
    </div>
  );
};

export default {
  BrandParticles,
  BrandGradientBg
};
