module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
