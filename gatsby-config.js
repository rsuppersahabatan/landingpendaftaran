module.exports = {
  siteMetadata: {
    title: `Pendaftaran Online RS Persahabatan`,
    author: {
      name: `mdestafadilah`,
      summary: `Software Engineer RS Persahabatan`,
    },
    openGraphImage: `open-graph-image.png`,
    tujuan: ``,
    description: `Landing Pendaftaran Online RS Persahabatn.`,
    siteUrl: `https://pendaftaran.rspersahabatan.co.id`,
    social: {
      twitter: `rs_persahabatan`,
      youtube: `rs_persahabatan`,
      instagram: `rs_persahabatan`,
    },
    socialLinks: [
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCYs6Gwc15B7dXJnqU85CVSA",
      },
      {
        name: "twitter",
        url: "https://twitter.com/rs_persahabatan?lang=en",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/rs_persahabatan/?hl=en",
      },
      {
        name: "admin",
        url: "https://pendaftaran.rspersahabatan.co.id/admin",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '7d787945-bb04-464c-8975-c4c9fdc4e8c3',
        srcUrl: 'https://umami.dev.persahabatan.co.id/script.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: "static",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/netlify-cms/index.js`,
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Landing Manager",
        includeRobots: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                tujuan
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      tujuan
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `Pendaftaran Online RS Persahabatan`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`, `Poppins\:400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
