import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte_component_to_image } from 'svelte-component-to-image/vite';

export default defineConfig({
	plugins: [sveltekit(), svelte_component_to_image()]
});
