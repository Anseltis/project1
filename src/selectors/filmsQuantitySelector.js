import { createSelector } from 'reselect'

export const filmsInfoSelector = state => state.main.get('filmsInfo')
export const filmsQuantitySelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsQuantity: filmsInfo.length
    })
)
