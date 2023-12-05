/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	mode: 'jit',
	theme: {
		screens: {
			xs: '350px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				'main-text': '#D0D6F9',
				'primary-black': {
					DEFAULT: '#0B0D17',
					100: '#F5F8FF',
				},
				'header-bg': '#FFFFFF0A',
				'light-white': {
					DEFAULT: 'rgba(59,60,152,0.03)',
					100: 'rgba(59,60,152,0.02)',
				},
				grey: '#747A88',
			},
			backgroundImage: {
				pattern: "url('/pattern.png')",
				main: "url('/background-home-desktop.jpg')",
				mainTablet: "url('/background-home-tablet.jpg')",
				mainMobile: "url('/background-home-mobile.jpg')",
				destination: "url('/background-destination-desktop.jpg')",
				destinationTablet: "url('/background-destination-tablet.jpg')",
				destinationMobile: "url('/background-destination-desktop.jpg')",
				crew: "url('/background-crew-desktop.jpg')",
				crewTablet: "url('/background-crew-tablet.jpg')",
				crewMobile: "url('/background-crew-mobile.jpg')",
				technology: "url('/background-technology-desktop.jpg')",
				technologyTablet: "url('/background-technology-tablet.jpg')",
				technologyMobile: "url('/background-technology-mobile.jpg')",
			},
		},
	},
	plugins: [],
};
