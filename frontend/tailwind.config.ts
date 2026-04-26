// Optional Tailwind CSS v4 config
// Your design tokens are defined in CSS via @theme in `src/app/globals.css` and extended in `src/app/components/Auth.css`.
// Keep this minimal and ESM-safe; avoid CommonJS require and TS-only types.

export default {
	darkMode: ["class"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: { '2xl': '1400px' },
		},
		extend: {
			fontFamily: {
				display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
		},
	},
	plugins: [],
};