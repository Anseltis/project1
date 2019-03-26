import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { actionCreator } from '../../actions'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { fullRequestSelector, filmsQuantitySelector } from '../../selectors'

const handleSortClick = dispatch => (searchBy, text) => sortBy => {
  const action = text === ''
    ? actionCreator.initiate.triggerSortByDefault(sortBy)
    : actionCreator.initiate.triggerSortBy(sortBy, searchBy, text);
  return () => dispatch(action)
}

export const bodyContainer = ({ handleSortClick, filmsInfo, searchParams }) => {
  const searchSettings =
    <SearchSettings
      counter={filmsInfo.filmsQuantity}
      handleSortClick={handleSortClick(searchParams.searchBy, searchParams.text)}
      filter={searchParams.sortBy}
      request={searchParams.text}
    />
  return <>
    {filmsInfo.filmsQuantity.filmsQuantity > 0 && searchSettings}
    <MainScreenContainer />
  </>
}

const mapStateToProps = createSelector(
  [filmsQuantitySelector, fullRequestSelector],
  (filmsInfo, searchParams) => ({ filmsInfo, searchParams })
)

const mapDispatchToProps = dispatch => ({
  handleSortClick: handleSortClick(dispatch)
})

export const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(bodyContainer)
