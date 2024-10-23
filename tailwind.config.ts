import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: '640px',
			md: '760px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				mainwhite: '#F3F3F3',
				secondary: '#009a27',
				mainblack: '#181717',
				maingrey: '#606060'
			},
			fontSize: {
				sm: '0.75rem',
				subText: '0.875rem',
				body: '1.125rem',
				link: '1.125rem',
				nav: '1.3125rem',
				h2: '2rem',
				h1: '3.75rem'
			},
			animation: {
				shine: 'shine var(--duration) infinite linear'
			},
			keyframes: {
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				}
			}
		}
	},
	plugins: [],
};
export default config;
