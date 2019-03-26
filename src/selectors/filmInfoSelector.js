import { createSelector } from 'reselect'

export const filmSelector = state => state.main.get('chosenFilm')
export const filmInfoSelector = createSelector(
    filmSelector,
    film => ({
        film: film ? film : {},
        genre: film ? film.genres[0] : null
    })
)
