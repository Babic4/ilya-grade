import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [tailwindcss(), svelte()],
	resolve: {
		alias: {
			$shared: path.resolve('./src/shared'),
		},
	},
})
