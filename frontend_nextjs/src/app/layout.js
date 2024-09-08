import ApolloWrapper from "@/apollo/client"



export const metadata = {
  title: 'Climate Change Hub',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper >
        {children}
        </ApolloWrapper>
        </body>
    </html>
  )
}
