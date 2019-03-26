import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import gql from 'graphql-tag'

import { endPoint } from '../../constants'

const restLink = new RestLink({
  uri: endPoint
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})

const query = sortBy => gql`
  query movies {
    data(sortBy:${sortBy}, sortOrder: "desc") @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
export async function getAllFilms(sortBy) {
  const response = await client.query({ query: query(sortBy) })
  return (response.data.data || {}).data || []
}
