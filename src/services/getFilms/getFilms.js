import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import gql from 'graphql-tag'

import { endPoint } from '../../constants'

const restLink = new RestLink({
  uri: endPoint,
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),

})

const query = ({ sortBy, value, searchByFilter }) => gql`
query movies {
  data(sortBy: ${sortBy}, sortOrder: "desc", search: "${value}", searchBy: ${searchByFilter} ) @rest(type: "Movies", path: "/?{args}",) {
    data
  }
}
`

export async function getFilms({ sortBy, value, searchByFilter }) {
  const response = await client.query({ query: query({ sortBy, value, searchByFilter }) })
  if (!response.data.data) {
    return []
  }

  return response.data.data.data || []
}
