import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using the Vercel adapter so the app can be deployed on Vercel.
		// Use a Vercel-supported Node runtime. Valid examples: 'nodejs18.x', 'nodejs20.x'.
		adapter: adapter({ runtime: 'nodejs20.x' })
	}
};

export default config;
