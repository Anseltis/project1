import { createSelector } from 'reselect'
import { FormClass, HeaderClass, SearchButtonClass, SearchStatus } from '../../constants'

export const mainSelector = state => (state.main)

export const screenSelector = createSelector(
    mainSelector,
    main => ({
        mainScreen: main.get('screenType')})
)

export const routingSelector = state => ({
    skipRouting: state.routing.get('skipRouting')
})

export const sortBySelector = state => ({
    sortBy: state.main.get('searchRequest').get('sortBy')
})

export const formClassSelector = state => ({
    formClass:
        state.main.get('screenType') === SearchStatus.showMovieInfo ||
        state.main.screenType === SearchStatus.notFound
            ? FormClass.hidden
            : FormClass.default
})

export const headerClassSelector = state => ({
    className:
        state.main.get('screenType') === SearchStatus.showMovieInfo
            ? HeaderClass.movieCard
            : HeaderClass.searchResult
})

export const searchButtonSelector = state => ({
    searchButtonClass:
        state.main.get('screenType') === SearchStatus.showMovieInfo
            ? SearchButtonClass.default
            : SearchButtonClass.hidden
})

export const movieInfoFlagSelector = state => ({
    isMovieInfo: state.main.get('screenType') === SearchStatus.showMovieInfo
})
