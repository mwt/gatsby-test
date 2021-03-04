module.exports = {
  siteMetadata: {
    title: 'Think Tutor',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Think Tutor',
        short_name: 'Think Tutor',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'subjects',
        path: `${__dirname}/src/data/subjects`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'tutors',
        path: `${__dirname}/src/images/tutors`
      }
    }
  ],
};
