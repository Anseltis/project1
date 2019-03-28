import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'

import { isInitializedSelector, sameGenreInfoSelector } from '../../selectors'
import { actionCreator } from '../../actions'
import { useRoutedApp } from '../RoutedApp'

const clickHandler = dispatch => ({ sameGenreFilms, film, setOnSkipRouting }) => ({ dataKey }) => {
  dispatch(actionCreator.initiate.setChosenFilm(sameGenreFilms, film, dataKey))
  setOnSkipRouting();
}

const moreMoviesByGenreContainer = ({ sameGenreFilms, film, onClick, setOnSkipRouting }) => {
  if (sameGenreFilms.length === 0) {
    return <YetLoader />
  }

  return <SearchResultLayout films={sameGenreFilms} onclick={onClick({ sameGenreFilms, film, setOnSkipRouting })} />
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

export const MoreMoviesByGenreContainer = compose(
  useRoutedApp,
  connect(mapStateToProps, mapDispatchToProps)
)(moreMoviesByGenreContainer)

