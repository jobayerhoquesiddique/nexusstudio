
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get icon path based on technology/framework
 * @param technology - The technology name
 * @returns URL to the technology icon
 */
export const getTechIcon = (technology: string): string => {
  const icons: Record<string, string> = {
    ethereum: "https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png",
    solana: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
    polygon: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    binance: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    hyperledger: "https://hyperledger.org/wp-content/uploads/2018/03/Hyperledger_Fabric_Logo.png",
    react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    node: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    typescript: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    aws: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    mongodb: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  };
  
  return icons[technology.toLowerCase()] || "https://via.placeholder.com/150";
};

/**
 * Format number with commas
 * @param num - Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Generate a random ID
 * @returns Random string ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Format date to readable string
 * @param date - Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Extract initials from full name
 * @param name - Full name
 * @returns Initials (up to 2 characters)
 */
export const getInitials = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
};

/**
 * Check if a string is a valid URL
 * @param url - URL to validate
 * @returns Boolean indicating if URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
