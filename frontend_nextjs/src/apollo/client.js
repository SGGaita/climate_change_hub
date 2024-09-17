import { createHttpLink } from '@apollo/client';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache, } from '@apollo/experimental-nextjs-app-support';
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";


//configuration for different GraphQL operation types
const defaultOptions = {
    //queries that need to stay up-to-date with real-time server changes.
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",

    },
    //one-time data fetching
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    }
}

//   //Apollo Client won't store query results in memory by default
const cache = new InMemoryCache({
    resultCaching: false,
})

// creates a link to your GraphQL server
const link = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
})

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        link,
        cache,
        defaultOptions
    });
});