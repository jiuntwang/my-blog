const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-blog-src-templates-post-js": hot(preferDefault(require("/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-theme-blog/src/templates/post.js"))),
  "component---node-modules-gatsby-theme-blog-src-templates-posts-js": hot(preferDefault(require("/Users/jiuntwang/Documents/GitHub/my-blog/node_modules/gatsby-theme-blog/src/templates/posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jiuntwang/Documents/GitHub/my-blog/.cache/dev-404-page.js")))
}

