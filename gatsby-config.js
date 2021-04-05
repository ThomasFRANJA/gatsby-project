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
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
    }
  ],
};
