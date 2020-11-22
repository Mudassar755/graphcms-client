const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
  {
    graphCmsData {
      blogs {
        id
        title
        description
        slug
        image {
          handle
          url
          width
          height
        }
        createdAt
      }
    }
  }
  `)



    result.data.graphCmsData.blogs.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                slug: blog.slug,
            },
        })
    })
}
