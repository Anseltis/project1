import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { NoResults } from '../../components/MainScreen/NoResults'
import { MainScreen } from '../../components/MainScreen'
import { SearchStatus } from '../../constants'
import {
  chosenFilmInfoSelector,
  filmsQuantityFullSelector,
  screenSelector,
  sortBySelector
} from '../../selectors'

import '../../components/MainScreen/style.scss'
import { actionCreator } from '../../actions'

const clickHandler = dispatch => ({ filmsArray, film }) => ({ dataKey }) => {
  dispatch(actionCreator.initiate.setChosenFilm(filmsArray, film, dataKey))
}

const mainScreenContainer = ({ mainScreen, filmsArray, filmsQuantity, film, clickHandler }) => {

  if (filmsQuantity === 0 || mainScreen !== SearchStatus.showRequested) {
    return <NoResults />
  }

  return <MainScreen films={filmsArray} onclick={clickHandler({ filmsArray, film })} />
}


export const mapStateToProps = createSelector(
  [
    screenSelector,
    filmsQuantityFullSelector,
    chosenFilmInfoSelector,
    sortBySelector
  ],
  (screenType, filmsInfo, film, sortBy) => ({
    ...screenType,
    ...filmsInfo,
    ...film,
    ...sortBy
  })
)

const mapDispatchToProps = (dispath) => ({
  clickHandler: clickHandler(dispath)
})

export const MainScreenContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(mainScreenContainer)
)
