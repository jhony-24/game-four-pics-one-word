const path = require("path")

module.exports = {
	siteMetadata: {
		title: `4 pics, 1 word`,
		description: `Discover the word based on the images that will be shown`,
		author: `jhony@vega`,
	},
	plugins: [
		"gatsby-plugin-aphrodite",
		`gatsby-plugin-react-helmet`,
		"gatsby-plugin-root-import",
		"gatsby-plugin-lodash",
		{
			resolve: "gatsby-plugin-styletron",
			options: {
				debug: false,
			},
		},
		{
			resolve: "gatsby-plugin-react-i18next",
			options: {
				path: `${__dirname}/src/locales`,
				defaultLanguage: "es",
				debug: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `rgb(30,130,230)`,
				theme_color: `rgb(30,130,230)`,
				display: `fullscreen`,
				// icon: `src/images/icon.png`,
			},
		},
	],
}
