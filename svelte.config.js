import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build' }),
		// hydrate the <div id="svelte"> element in src/app.html
		files: {
			assets: 'static'
		}
	},
	preprocess: sveltePreprocess({})
};

export default config;
