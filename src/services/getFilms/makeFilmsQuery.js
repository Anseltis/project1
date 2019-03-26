import gql from 'graphql-tag'

export function makeFilmsQuery({sortBy, value, searchByFilter}) {
  return gql`
  query movies {
    data(sortBy: ${sortBy}, sortOrder: "desc", search: "${value}", searchBy: ${searchByFilter} ) @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
}