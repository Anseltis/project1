import gql from 'graphql-tag'

export const makeAllFilmsQuery = function(sortBy) {
 return gql`
  query movies {
    data(sortBy:${sortBy}, sortOrder: "desc") @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
}
