module.exports = {
  siteMetadata: {
    title: "gatsby-static-website",
    description: "This is the teksial-consulting website",
    author: "@thomasFranja, teksial-consulting",
    siteUrl: "https://www.test-teksialconsulting.com"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-stylus",
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.test-teksialconsulting.com',
        sitemap: 'https://www.test-teksialconsulting.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
};
