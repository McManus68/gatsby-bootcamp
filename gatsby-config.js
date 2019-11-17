module.exports = {
  siteMetadata: {
    title: 'Full-Stack BootCamp.',
    author: 'Emmanuel Tarrou',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
