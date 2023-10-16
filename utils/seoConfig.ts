// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "http://localhost:3000", // Change this to your production URL.
	description:
		"David Cojocaru is a full-stack web developer and designer based in Romania. Here you can find his portfolio, blog and contact information.", // Change this to your website's description.
	type: "website",
	image: {
		url: "https://i.imgur.com/LH0T6Cd.png", // Change this to your website's thumbnail.
		alt: "David Cojocaru's Portfolio", // Change this to your website's name.
		width: 1200,
		height: 630
	},
	siteName: "David Cojocaru", // Change this to your website's name.
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "David Cojocaru's Portfolio", // Change this to your website's name.
	short_name: "David Cojocaru", // Change this to your website's name.
	description:
		"David Cojocaru is a full-stack web developer and designer based in Romania. Here you can find his portfolio, blog and contact information.", // Change this to your website's description.
	theme_color: "#0c58c2", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
