module.exports = [{
      plugin: require('/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1380,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-numbered-footnotes"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null]},
    },{
      plugin: require('/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
