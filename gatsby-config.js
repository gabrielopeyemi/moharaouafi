module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Moharaouafi`,
    description: `A starter that includes react-bootstrap and react-icons, along with SASS compilation.`,
    author: `Gabriel Opeyemi <famosipe2010@gamil.com> https://gabrielopeyemi.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogpost`,
        path: `${__dirname}/src/blogpost`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogfile`,
        path: `${__dirname}/src/blogfile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/assets/Image/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Portfolio`,
        path: `${__dirname}/src/assets/Portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ProfileImages`,
        path: `${__dirname}/src/assets/Image/Profil`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ServicesImages`,
        path: `${__dirname}/src/assets/Image/Services`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
