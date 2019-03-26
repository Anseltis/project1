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

export class MainScreenUnwrapped extends React.Component {
  onClickHandle = ({ dataKey }) => {
    const { dispatch, filmsArray, film } = this.props
    dispatch(actionCreator.initiate.setChosenFilm(filmsArray, film, dataKey))
  }

  render() {
    const {
      mainScreen,
      filmsArray,
      filmsQuantity
    } = this.props
    if (filmsQuantity > 0 && mainScreen === SearchStatus.showRequested) {
      const array = filmsArray
      return <MainScreen films={array} onclick={this.onClickHandle} />
    } return <NoResults />
  }
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

export const MainScreenContainer = withRouter(
  connect(mapStateToProps)(MainScreenUnwrapped)
)
