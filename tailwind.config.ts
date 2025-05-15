
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				nexus: {
					DEFAULT: '#4A5568',
					light: '#718096',
					dark: '#1A202C',
					accent: '#3182CE',
				},
				crypto: {
					DEFAULT: '#2B6CB0',
					light: '#90CDF4',
					dark: '#2C5282',
				},
				byte: {
					DEFAULT: '#38A169',
					light: '#9AE6B4',
					dark: '#276749',
				},
				success: {
					DEFAULT: '#48BB78',
					light: '#9AE6B4',
				},
				warning: {
					DEFAULT: '#ECC94B',
					light: '#FEFCBF',
				},
				danger: {
					DEFAULT: '#F56565',
					light: '#FED7D7',
				},
				corporate: {
					DEFAULT: '#3182CE',
					light: '#EBF8FF',
					dark: '#2A4365',
					accent: '#63B3ED',
					muted: '#E2E8F0',
					highlight: '#4FD1C5',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"pulse-glow": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.7"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"spin-slow": {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
						transform: "rotate(360deg)"
					}
				},
				"shimmer": {
					"0%": {
						backgroundPosition: "-40rem 0"
					},
					"100%": {
						backgroundPosition: "40rem 0"
					}
				},
				"slide-in": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				},
				"slide-up": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"zoom-in": {
					"0%": {
						transform: "scale(0.8)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"bounce-light": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-5px)"
					}
				},
				"rotate-slow": {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
						transform: "rotate(360deg)"
					}
				},
				"gradient-shift": {
					"0%": {
						backgroundPosition: "0% 50%"
					},
					"50%": {
						backgroundPosition: "100% 50%"
					},
					"100%": {
						backgroundPosition: "0% 50%"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.3s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"pulse-glow": "pulse-glow 3s infinite",
				"float": "float 6s ease-in-out infinite",
				"spin-slow": "spin-slow 12s linear infinite",
				"shimmer": "shimmer 3s infinite linear",
				"slide-in": "slide-in 0.6s ease-out",
				"slide-up": "slide-up 0.5s ease-out",
				"zoom-in": "zoom-in 0.5s ease-out",
				"bounce-light": "bounce-light 2s infinite ease-in-out",
				"rotate-slow": "rotate-slow 20s linear infinite",
				"gradient-shift": "gradient-shift 8s ease infinite"
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(to right, rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.9)), url("/assets/hero-bg.jpg")',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-primary': 'linear-gradient(90deg, #3182CE 0%, #63B3ED 100%)',
				'gradient-crypto': 'linear-gradient(90deg, #2B6CB0 0%, #90CDF4 100%)',
				'gradient-byte': 'linear-gradient(90deg, #38A169 0%, #9AE6B4 100%)',
				'gradient-corporate': 'linear-gradient(135deg, #3182CE 0%, #4FD1C5 100%)',
				'gradient-blue': 'linear-gradient(135deg, #2B6CB0 0%, #4299E1 100%)',
				'gradient-card': 'linear-gradient(135deg, rgba(49, 130, 206, 0.05) 0%, rgba(79, 209, 197, 0.05) 100%)',
				'dots-pattern': 'radial-gradient(#3182CE 1px, transparent 1px)',
				'grid-pattern': 'linear-gradient(to right, rgba(226, 232, 240, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.1) 1px, transparent 1px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
