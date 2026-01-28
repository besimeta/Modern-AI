import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using the Vercel adapter so the app can be deployed on Vercel.
		// Explicitly set the runtime to nodejs so Vercel uses a compatible Node version.
		adapter: adapter({ runtime: 'nodejs' })
	}
};

export default config;
