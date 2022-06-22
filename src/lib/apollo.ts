import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oezjgi210s01xr9dw3g8kt/master',
    cache: new InMemoryCache()
})