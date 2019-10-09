module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Jiun Ting Wang`,
    author: `Jiun Ting Wang`,
    description: `A resource for marketing, design, and development tutorials.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jiuntingwang`,
      },
      {
        name: `github`,
        url: `https://github.com/jiuntwang`,
      },
    ],
  },
}
