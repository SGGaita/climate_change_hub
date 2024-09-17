import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
import ApolloWrapper, { client } from "@/apollo/client"
import './styles/global.scss'
import Navbar from "@/components/Navbar/Navbar"
config.autoAddCss = false;

export const metadata = {
  title: 'Climate Change Hub',
  description: 'Generated by Next.js',
}



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ApolloWrapper >
          <Navbar/>
        {children}
        </ApolloWrapper>
        </body>
    </html>
  )
}


