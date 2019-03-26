import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { SearchStatus, SortByParam } from '../../constants'
import { MainBody } from '../../components/MainBody'
import {
  fullRequestSelector,
  filmsQuantitySelector,
  screenSelector
} from '../../selectors'
import { actionCreator } from '../../actions'
import { FilmBody } from '../../components/FilmBody'

export const BodyContainerUnwrapped = ({
  mainScreen,
  sortActions,
  defaultSortActions,
  filmsQuantity,
  sortBy,
  text
}) => {
  return mainScreen === SearchStatus.showMovieInfo ? (
    <FilmBody />
  ) : (
    <MainBody
      filmsQuantity={filmsQuantity}
      text={text}
      defaultSortActions={defaultSortActions}
      sortActions={sortActions}
      sortBy={sortBy}
    />
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
  const { searchBy, text } = stateProps
  const { dispatch } = dispatchProps

  const handleSortByRatingClick = () => {
    dispatch(
      actionCreator.initiate.triggerSortBy(SortByParam.byRating, searchBy, text)
    )
  }

  const handleSortByDateClick = () => {
    dispatch(
      actionCreator.initiate.triggerSortBy(SortByParam.byDate, searchBy, text)
    )
  }

  const handleDefaultSortByRating = () => {
    dispatch(actionCreator.initiate.triggerSortByDefault(SortByParam.byRating))
  }

  const handleDefaultSortByDate = () => {
    dispatch(actionCreator.initiate.triggerSortByDefault(SortByParam.byDate))
  }

  return {
    ...stateProps,
    sortActions: {
      sortByRating: () => {
        handleSortByRatingClick()
      },
      sortByDate: () => {
        handleSortByDateClick()
      }
    },
    defaultSortActions: {
      sortByRating: () => {
        handleDefaultSortByRating()
      },
      sortByDate: () => {
        handleDefaultSortByDate()
      }
    }
  }
}

export const BodyContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(BodyContainerUnwrapped)
