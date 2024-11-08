/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js'
	],
	theme: {
		fontFamily: {
			sans: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue',
		},
		extend: {
			colors: {
				primary: '#e31515',
				"primary-dark": '#b31313',
				secondary: '#f5f5f5',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			}
		},
	},
	plugins: [
		require('preline/plugin'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	],
}
