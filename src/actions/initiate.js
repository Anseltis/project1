import { sagaActions } from '../actionNames'
import { SearchStatus } from '../constants'

export const setChosenFilm = (array, film, key) => {
    return {
        type: sagaActions.sagaFilmObject,
        array,
        key,
        film: film,
        status: SearchStatus.showMovieInfo,
    }
}

export const setInfoFromRouting = (match) => {
    return {
        type: sagaActions.sagaAppFilmAction,
        match
    }
}

export const getInfoFromUrl = (params, sortBy) => {
    return {
        type: sagaActions.sagaAppFilterAction,
        params,
        sortBy
    }
}

export const triggerSortBy = (sortBy, searchBy, value) => {
    return {
        type: sagaActions.sagaSortByAction,
        sortBy,
        searchBy,
        value
    }
}

export const triggerSortByDefault = (sortBy) => {
    return {
        type: sagaActions.sagaSortByDefaultAction,
        sortBy
    }
}

export const triggerFormSubmit = (value, searchByFilter, sortBy) => {
    return {
        type: sagaActions.sagaFormSubmitAction,
        value,
        searchByFilter,
        sortBy
    }
}

export const triggerFetchAllFilms = () => {
    return {
        type: sagaActions.sagaFetchAllFilmsAction
    }
}
