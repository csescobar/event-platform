import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vhh1g51jhr01uhemwz576k/master',
    cache: new InMemoryCache()
})

export default client;