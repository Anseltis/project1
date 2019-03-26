import { createSelector } from 'reselect'

export const sameGenreSelector = state => state.main.get('sameGenre')
export const sameGenreInfoSelector = createSelector(
    sameGenreSelector,
    sameFilms => ({
        sameGenreFilms: sameFilms.films,
        filmsAreLoaded: sameFilms.films.length > 0
    })
)
