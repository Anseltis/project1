import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { isInitializedSelector, sameGenreInfoSelector } from '../../selectors'
import { actionCreator } from '../../actions'

const clickHandler = dispatch => ({ sameGenreFilms, film }) => ({ dataKey }) =>
  dispatch(actionCreator.initiate.setChosenFilm(sameGenreFilms, film, dataKey))

const moreMoviesByGenreContainer = ({ sameGenreFilms, film, onClick }) => {
  if (sameGenreFilms.length === 0) {
    return <YetLoader />
  }

  return <SearchResultLayout films={sameGenreFilms} onclick={onClick({ sameGenreFilms, film })} />
}

const mapStateToProps = createSelector(
  [sameGenreInfoSelector, isInitializedSelector],
  (sameFilms, film = {}) => ({
    ...sameFilms,
    ...film
  })
)

const mapDispatchToProps = dispatch => ({
  onClick: clickHandler(dispatch)
})

export const MoreMoviesByGenreContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(moreMoviesByGenreContainer)
)
