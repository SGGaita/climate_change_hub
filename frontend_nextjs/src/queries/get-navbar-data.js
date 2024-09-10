import { gql } from "@apollo/client";
import MenuFragment from "./Fragments/menus";


export const GET_NAVBAR_DATA = gql`
query GET_MENUS {
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER}) {
    nodes {
     ...MenuFragment
      childItems {
        nodes {
           ...MenuFragment
        }
      }
    }
  }

   logo: getHeader {
      siteLogoUrl
      siteTitle
    }
}
  ${MenuFragment}
`