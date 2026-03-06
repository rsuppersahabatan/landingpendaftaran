import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          tujuan
          siteUrl
          openGraphImage
          social {
            twitter
          }
        }
      }
    }
  `)

    return data.site.siteMetadata
}