/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { Map, fromJS } from 'immutable'
import { SearchStatus } from '../constants'
import { actions } from '../actionNames'

export const initialState = Map({
  ScreenType: SearchStatus.notFound,
  FilmsInfo: [],
  SearchRequest: Map({ SearchBy: 'title', SortBy: 'vote_average', Text: ''}),
  SameGenre: {
    films: [],
    genre: ''
  }
})

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actions.mainViewSwitchAction:
      return state.setIn(['ScreenType'], fromJS(action.payload))
    case actions.filmsDataAction:
      return state.setIn(['FilmsInfo'], action.payload)
    case actions.search.DataAction:
      return state
        .setIn(['ScreenType'], SearchStatus.showRequested)
        .setIn(['SearchRequest', 'Text'], fromJS(action.payload))
    case actions.search.BySwitchAction:
      return state.setIn(['SearchRequest', 'SearchBy'], fromJS(action.payload))
    case actions.sortBySwitchAction:
      return state.setIn(['SearchRequest', 'SortBy'], fromJS(action.payload))
    case actions.showFilmInfoAction:
      return state.setIn(['SameGenreFilms'], action.payload)
    case actions.filmKeyAction:
      return state.setIn(['FilmsInfo', 'filmKey'], fromJS(action.payload))
    case actions.sameGenreFilmsAction:
      return state
        .setIn(['SameGenre', 'films'], action.payload)
        .setIn(['SameGenre', 'genre'], action.genre)
    case actions.clickedFilm:
      return state.setIn(['ChosenFilm'], action.payload)
    case actions.filmObject:
      return state
        .setIn(['ScreenType'], action.status)
        .setIn(['ChosenFilm'], action.film)
    case actions.filmsDataAllInfo:
      return state
        .setIn(['ScreenType'], fromJS(action.mainScreen))
        .setIn(['FilmsInfo'], action.films)
    case actions.moreFilmsByIdAction:
      return state.setIn(['SameGenreFilms'], action.payload)
    case actions.dataFromQueryUrlAction:
      return state
        .setIn(['SearchRequest', 'Text'], fromJS(action.value))
        .setIn(['SearchRequest', 'SearchBy'], fromJS(action.searchBy))
    case actions.clearFilmInfoAction:
      return state
        .setIn(['ScreenType'], SearchStatus.showRequested)
        .setIn(['SearchRequest', 'Text'], fromJS(action.payload))
    default:
      return state
  }
}
