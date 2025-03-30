import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const apiToken = "0561bd6814e3f551d47b513d1b2953"

const httpLink = createHttpLink({
    uri:"https://graphql.datocms.com/"
})

const authLink = setContext((_, {headers}) => {
    return{
        headers:{
            ...headers,
            authorization:`Bearer ${apiToken}`
        }
    }
})

export const apolloClient = new ApolloClient({
    link:authLink.concat(httpLink),
    cache: new InMemoryCache()
})