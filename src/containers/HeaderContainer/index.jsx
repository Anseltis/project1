import React from 'react'
import { connect } from 'react-redux'

import { createSelector } from 'reselect'
import { Header } from '../../components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/SubHeader'
import {
  filmInfoSelector,
  headerClassSelector,
  movieInfoFlagSelector,
  screenSelector,
  searchButtonSelector
} from '../../selectors'

const handleClick = dispatch => () => {
  dispatch(actionCreator.chosenFilm.clearInfo(''))
}

export const HeaderUnwrapped = ({ className, film, mainScreen, genre, searchButtonClass, isMovieInfo, handleClick }) => {
  return (<>
    <Header
      film={film}
      className={className}
      onclick={handleClick}
      searchButtonClass={searchButtonClass}
      isMovieInfo={isMovieInfo}
    />
    {(mainScreen === SearchStatus.showMovieInfo) && <SubHeader genre={genre} />}
  </>)
}

const mapStateToProps = createSelector(
  [
    screenSelector,
    filmInfoSelector,
    headerClassSelector,
    searchButtonSelector,
    movieInfoFlagSelector
  ],
  (screen, film, headerClass, searchButtonClass, movieInfoClass) => ({
    ...screen,
    ...film,
    ...headerClass,
    ...searchButtonClass,
    ...movieInfoClass
  })
)

const mapDispathToProps = dispatch => ({
  handleClick: handleClick(dispatch)
})

export const HeaderContainer = connect(mapStateToProps, mapDispathToProps)(HeaderUnwrapped)
