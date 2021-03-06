module.exports = {
  siteMetadata: {
    title: `David Crandall`,
    description: `David Crandall's portfolio and blog. David is a full-stack web developer with a passion
    for building things with React and Flask. He is located in the greater New York city area.`,
    author: `dacrands`,
  },
  plugins: [   
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127816565-2",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          include: /assets/
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Crandall Blog`,
        short_name: `Crandall BLog`,
        start_url: `/`,
        background_color: `#3150bf`,
        theme_color: `#3150bf`,
        display: `minimal-ui`,
        icon: `src/images/dc-logo-purple.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
