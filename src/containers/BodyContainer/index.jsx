import React from 'react'
import { connect } from 'react-redux'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'

export const BodyContainerUnwrapped = ({
  mainScreen,
  sortActions,
  filmsQuantity,
  sortBy,
  quantity
}) => {
  return mainScreen === SearchStatus.showMovieInfo ? (
    <MovieInfoScreenWrapper>
      <MoreMoviesByGenreContainer genre="" />
    </MovieInfoScreenWrapper>
  ) : quantity > 0 ? (
    <>
      <SearchSettings
        counter={filmsQuantity}
        sortActions={sortActions}
        filter={sortBy}
      />
      <MainScreenContainer />
    </>
  ) : (
    <MainScreenContainer />
  )
}

const mapStateToProps = state => {
  return {
    mainScreen: state.ScreenType,
    filmsQuantity: state.FilmsInfo.Quantity,
    searchByFilter: state.SearchRequest.SearchBy,
    value: state.SearchRequest.Text,
    sortBy: state.SearchRequest.SortBy,
    quantity: state.FilmsInfo.Quantity
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { searchByFilter, value } = stateProps
  const { dispatch } = dispatchProps

  const handleSortByRatingClick = () => {
    sortByRatingClickHandler(dispatch)(searchByFilter, value)
  }

  const handleSortByDateClick = () => {
    sortByDateClickHandler(dispatch)(searchByFilter, value)
  }

  return {
    ...stateProps,
    sortActions: {
      sortByRating:
        handleSortByRatingClick,
      sortByDate:
        handleSortByDateClick
    }
  }
}

export const BodyContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(BodyContainerUnwrapped)
