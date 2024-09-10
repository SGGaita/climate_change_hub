import { gql } from "@apollo/client";

export const GET_LOGO = gql`
query GET_LOGO {
    logo: getHeader {
      siteLogoUrl
      siteTitle
    }
  }
`

