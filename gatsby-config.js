module.exports = { 
  flags: { FAST_DEV: true, PARALLEL_SOURCING: true },
  siteMetadata: {
    title: `Art of Balance Fund`,
    description: `A website to help fund the critical work of mental health.`,
    author: `@jvmontes`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
		resolve: `gatsby-source-notion-api`,
		options: {
			token: `secret_oo3JupO4jGlST15CYRu78r0YNoGTW0thCW3Cpjl3szw`,
			databaseId: `ad1dbb9c08fa47c19e7ef4abe02088b8`,
			propsToFrontmatter: true,
			lowerTitleLevel: true,
		},
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/art-of-balance.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-breakpoints`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
