import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using the Vercel adapter so the app can be deployed on Vercel.
		adapter: adapter()
	}
};

export default config;
