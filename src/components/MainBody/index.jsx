import React from 'react'
import { SearchSettings } from '../SearchSettings'
import { MainScreenContainer } from '../../containers/MainScreenContainer'

export const MainBody = ({
  filmsQuantity,
  text,
  defaultSortActions,
  sortActions,
  sortBy
}) => {
  return (
    <>
      {filmsQuantity > 0 && (
        <SearchSettings
          counter={filmsQuantity}
          sortActions={text === '' ? defaultSortActions : sortActions}
          filter={sortBy}
          request={text}
        />
      )}
      <MainScreenContainer />
    </>
  )
}
