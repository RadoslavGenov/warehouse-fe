import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_HOST_URI}:${process.env.REACT_APP_PORT}/graphql`,
  cache: new InMemoryCache()
})
