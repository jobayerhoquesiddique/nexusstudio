
/**
 * Environment configuration for the application
 * Can be used across different platforms (Vercel, Netlify, etc.)
 */

// Base URL for API requests
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.nexuscreativestudio.com';

// Company information
export const COMPANY_INFO = {
  name: 'Nexus Creative Studio',
  tagline: 'Innovate. Create. Transform.',
  description: 'A parent group uniting expertise in blockchain technology, software development, and digital innovation.',
  founded: 2018,
  location: 'Global',
  founder: 'Jobayer Hoque Siddique',
  email: 'contact@nexuscreativestudio.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
  socialMedia: {
    twitter: 'https://twitter.com/nexuscreative',
    facebook: 'https://facebook.com/nexuscreativestudio',
    linkedin: 'https://linkedin.com/company/nexuscreativestudio',
    instagram: 'https://instagram.com/nexuscreative'
  }
};

// Brand colors - can be overridden through environment variables
export const BRAND_COLORS = {
  primary: import.meta.env.VITE_PRIMARY_COLOR || '#6E59A5',
  secondary: import.meta.env.VITE_SECONDARY_COLOR || '#9b87f5',
  crypto: import.meta.env.VITE_CRYPTO_COLOR || '#8B5CF6',
  byte: import.meta.env.VITE_BYTE_COLOR || '#0EA5E9',
};

// Feature flags
export const FEATURES = {
  contactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM !== 'false',
  newsletter: import.meta.env.VITE_ENABLE_NEWSLETTER !== 'false',
  testimonials: import.meta.env.VITE_ENABLE_TESTIMONIALS !== 'false',
  portfolio: import.meta.env.VITE_ENABLE_PORTFOLIO !== 'false',
  blog: import.meta.env.VITE_ENABLE_BLOG === 'true',
};

// Analytics configuration
export const ANALYTICS = {
  googleAnalyticsId: import.meta.env.VITE_GA_ID || '',
  facebookPixelId: import.meta.env.VITE_FB_PIXEL_ID || '',
};

/**
 * Function to get environment-specific configuration
 * @returns configuration object based on current environment
 */
export const getEnvironmentConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  
  return {
    isDevelopment,
    isProduction: !isDevelopment,
    apiUrl: isDevelopment 
      ? 'http://localhost:3000/api'
      : API_BASE_URL,
    features: FEATURES,
    analytics: isDevelopment 
      ? { googleAnalyticsId: '', facebookPixelId: '' } // Disable analytics in development
      : ANALYTICS,
  };
};

// Export a default configuration object
export default {
  company: COMPANY_INFO,
  colors: BRAND_COLORS,
  env: getEnvironmentConfig(),
};
