const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const subjectTemplate = require.resolve(`./src/templates/subjectTemplate.js`)
  
    const result = await graphql(`
      {
        allFile(filter: {sourceInstanceName: {eq: "subjects"}}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: node.childMarkdownRemark.fields.slug,
        component: subjectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.childMarkdownRemark.fields.slug,
        },
      })
    })
  }
