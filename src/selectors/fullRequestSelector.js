import { createSelector } from 'reselect'
import { searchRequestSelector } from './searchParamsSelector'

export const fullRequestSelector = createSelector(
    searchRequestSelector,
    searchParams => ({
        sortBy: searchParams.get('sortBy'),
        searchBy: searchParams.get('searchBy'),
        text: searchParams.get('text')
    })
)