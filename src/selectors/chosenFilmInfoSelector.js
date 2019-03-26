import { createSelector } from 'reselect'
import { filmSelector } from './filmInfoSelector'



export const chosenFilmInfoSelector = createSelector(
    filmSelector,
    (film = {}) => film
)