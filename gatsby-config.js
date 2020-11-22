// require('dotenv').config()

module.exports = {

  plugins: [

    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     typeName: "GraphCMS",
    //     fieldName: "gcms",
    //     endpoint: 'https://api-eu-central-1.graphcms.com/v2/ckhf77o5yb5i601xp2yzdcs43/master'

    //   },
    // },

    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GRAPHCMS',
        fieldName: 'graphCmsData',
        url: 'https://api-eu-central-1.graphcms.com/v2/ckhf77o5yb5i601xp2yzdcs43/master',
      }
    },

  ],
}
