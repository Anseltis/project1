import { createSelector } from 'reselect'

export const searchRequestSelector = state => state.main.get('searchRequest')
export const searchParamsSelector = createSelector(
    searchRequestSelector,
    searchParams => ({
        sortBy: searchParams.get('sortBy'),
        searchBy: searchParams.get('searchBy')
    })
)

