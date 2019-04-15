module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    usps: [{
      list: [
        '0 years web development',
        '5 years mobile web',
        'NodeJs ecosystem.',
        'CI/CD'
      ],
      title: 'Web Developer',
      icon: 'world'
    },
    {
      list: [
        'Complex corporate environments',
        'Agile/Scrum practices',
        'DevOps',
        'Offshore teams'
      ],
      title: 'Team Player',
      icon: 'comment'
    },
    {
      list: [
        'Angular 7',
        'Bootstrap 4',
        'Progressive Web Apps',
        'Serverless Architecture'
      ],
      title: 'Passionate Learner',
      icon: 'mail'
    }],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rtbprojects-website`,
        short_name: `rtbprojects`,
        start_url: `/`,
        background_color: `#2d3a4b`,
        theme_color: `#2d3a4b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
