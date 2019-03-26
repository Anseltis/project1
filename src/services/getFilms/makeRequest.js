import { RestLink } from 'apollo-link-rest'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { endPoint } from '../../constants'

export async function makeRequest(query) {
  const restLink = new RestLink({
    uri: endPoint
  })

  const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  })

  const response = await client.query({ query })
  if (!response.data.data && !response.data ) {
    return []
  }

   if (!response.data.data.data) {
       if (!response.data.data) {
           return []
       } return response.data.data
    }
      return response.data.data.data
}
