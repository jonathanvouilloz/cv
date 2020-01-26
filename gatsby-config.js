/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jonathan Vouilloz | Développeur`,
    author: `Jonathan Vouilloz`,
    description: `Jeune étudiant en cours de formation à la Haute école de Gestion de Genève, je suis curieux des nouvelles technologies et aime découvrir les dernières nouveautés concernant les technologies web. Je suis également actif avec mon club de badminton ou je m'occupe du site et de la rédaction des articles.`,
    siteUrl: `https://jonathanvouilloz.ch/`,
    social: {
      twitter: `Jon_Praxie`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Vouilloz | Développeur`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
