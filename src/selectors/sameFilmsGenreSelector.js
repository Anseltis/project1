import { createSelector } from 'reselect'

export const genreSelector = state => state.main.get('sameGenre')
export const sameFilmsGenreSelector = createSelector(
    genreSelector,
    sameFilms => ({
        genre: sameFilms.genre
    })
)
