import { createSelector } from 'reselect'

export const genreSelector = createSelector(
    state => state.main,
    main => main.get('SameGenre')
)
export const sameFilmsGenreSelector = createSelector(
    genreSelector,
    sameFilms => ({
        genre: sameFilms.genre
    })
)
