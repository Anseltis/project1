import { createSelector } from 'reselect'

export const sameGenreSelector = state => state.main.get('SameGenre')
export const sameGenreInfoSelector = createSelector(
    sameGenreSelector,
    sameFilms => ({
        sameGenreFilms: sameFilms.films,
        filmsAreLoaded: sameFilms && sameFilms.films && sameFilms.films.length > 0
    })
)
