import React from 'react'
import { connect } from 'react-redux'

import { createSelector } from 'reselect'
import { FilmHeader } from '../../components/FilmHeader'
import { MainHeader } from '../../components/MainHeader'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/SubHeader'
import {
  filmInfoSelector,
  headerClassSelector,
  screenSelector,
  searchButtonSelector
} from '../../selectors'

export const HeaderContainerUnwrapped = props => {
  const handleClick = () => {
    const { dispatch } = props
    dispatch(actionCreator.chosenFilm.clearInfo(''))
  }
  const { className, film, mainScreen, genre, searchButtonClass } = props
  return mainScreen === SearchStatus.showMovieInfo ? (
    <>
      <FilmHeader
        film={film}
        className={className}
        onclick={handleClick}
        searchButtonClass={searchButtonClass}
      />
      <SubHeader genre={genre} />
    </>
  ) : (
    <MainHeader
      className={className}
      onclick={handleClick}
      searchButtonClass={searchButtonClass}
    />
  )
}

const mapStateToProps = createSelector(
  [screenSelector, filmInfoSelector, headerClassSelector, searchButtonSelector],
  (screen, film, headerClass, searchButtonClass) => ({
    ...screen,
    ...film,
    ...headerClass,
    ...searchButtonClass
  })
)

export const HeaderContainer = connect(mapStateToProps)(HeaderContainerUnwrapped)
