import React from 'react'
import { MoreMoviesByGenreContainer } from '../../containers/MoreMoviesByGenreContainer'
import { MovieInfoScreenWrapper } from '../MovieInfoScreenWrapper'

export const FilmBody = () => {
  return (
    <MovieInfoScreenWrapper>
      <MoreMoviesByGenreContainer genre="" />
    </MovieInfoScreenWrapper>
  )
}
