import gql from 'graphql-tag'

export function makeFilmIdQuery(id) {
  return gql`
  query movie {
    data(id: ${id}) @rest(type: "Movie", path: "/${id}",) {
        genres
        id
        title
        overview
        poster_path
        release_date
        runtime
        tagline
        vote_average
    }
  }
`
}