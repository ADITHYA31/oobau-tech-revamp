// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Oobau',
	siteDescription:
		"Oobbau helps you streamline productivity, enhance security, and seamlessly integrate with your favorite tools—all with thoughtfully designed modern web solutions.",
	ogImage: '/og.png',
	logo: {
		src: '/',
		alt: 'Oobbau. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}
