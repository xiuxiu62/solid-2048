const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{ts, tsx}'],
	// purge: ['./index.html', './src/**/*.tsx?'],
	theme: {
		extend: {
			fontWeight: ['hover', 'focus'],
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [],
};
