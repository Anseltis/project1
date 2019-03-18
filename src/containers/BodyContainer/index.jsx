import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'
import {
  fullRequestSelector,
  filmsQuantitySelector,
  screenSelector
} from '../../selectors'

export const BodyContainerUnwrapped = ({
  mainScreen,
  sortActions,
  filmsQuantity,
  sortBy, text
}) => {
  return mainScreen === SearchStatus.showMovieInfo ? (
    <MovieInfoScreenWrapper>
      <MoreMoviesByGenreContainer genre="" />
    </MovieInfoScreenWrapper>
  ) : filmsQuantity > 0 ? (
    <>
      <SearchSettings
        counter={filmsQuantity}
        sortActions={sortActions}
        filter={sortBy}
        request={text}
      />
      <MainScreenContainer />
    </>
  ) : (
    <MainScreenContainer />
  )
}

const mapStateToProps = createSelector(
  [filmsQuantitySelector, fullRequestSelector, screenSelector],
  (filmsInfo, searchParams, screen) => ({
    ...filmsInfo,
    ...searchParams,
    ...screen
  })
)

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
      sortByRating: handleSortByRatingClick,
      sortByDate: handleSortByDateClick
    }
  }
}

export const BodyContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(BodyContainerUnwrapped)
