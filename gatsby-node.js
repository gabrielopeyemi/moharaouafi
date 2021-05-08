/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`
        query post {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: `/blogs/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/blogdetails.js`),
            context: { slug: node.frontmatter.slug }
        })
    })
}

