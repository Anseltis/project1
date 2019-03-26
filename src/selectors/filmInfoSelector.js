import { createSelector } from 'reselect'

export const filmSelector = state => state.main.get('ChosenFilm')
export const filmInfoSelector = createSelector(
    filmSelector,
    film => ({
        film: film || {},
        genre: (film || { genres: [null] }).genres[0]
    })
)
