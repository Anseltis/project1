import { Map, fromJS } from 'immutable'
import { SearchStatus } from '../constants'
import { actions } from '../actionNames'

export const initialState = Map({
  screenType: SearchStatus.notFound,
  filmsInfo: [],
  searchRequest: Map({ searchBy: 'title', sortBy: 'vote_average', text: ''}),
  sameGenre: {
    films: [],
    genre: ''
  }
})

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actions.mainViewSwitchAction:
      return state.setIn(['screenType'], fromJS(action.payload))

    case actions.filmsDataAction:
      return state.setIn(['filmsInfo'], action.payload)

    case actions.search.dataAction:
      return state
        .setIn(['screenType'], SearchStatus.showRequested)
        .setIn(['searchRequest', 'text'], fromJS(action.payload))

    case actions.search.bySwitchAction:
      return state.setIn(['searchRequest', 'searchBy'], fromJS(action.payload))

    case actions.sortBySwitchAction:
      return state.setIn(['searchRequest', 'sortBy'], fromJS(action.payload))

    // case actions.showFilmInfoAction:
    //   return state.setIn(['SameGenreFilms'], action.payload)

    case actions.filmKeyAction:
      return state.setIn(['filmsInfo', 'filmKey'], fromJS(action.payload))

    case actions.sameGenreFilmsAction:
      return state
        .setIn(['sameGenre', 'films'], action.payload)
        .setIn(['sameGenre', 'genre'], action.genre)

    case actions.clickedFilm:
      return state.setIn(['chosenFilm'], action.payload)

    case actions.filmObject:
      return state
        .setIn(['screenType'], action.status)
        .setIn(['chosenFilm'], action.film)

    case actions.filmsDataAllInfo:
      return state
        .setIn(['screenType'], fromJS(action.mainScreen))
        .setIn(['filmsInfo'], action.films)

    // case actions.moreFilmsByIdAction:
    //   return state.setIn(['SameGenreFilms'], action.payload)

    case actions.dataFromQueryUrlAction:
      return state
        .setIn(['searchRequest', 'text'], fromJS(action.value))
        .setIn(['searchRequest', 'searchBy'], fromJS(action.searchBy))

    case actions.clearFilmInfoAction:
      return state
        .setIn(['screenType'], SearchStatus.showRequested)
        .setIn(['searchRequest', 'text'], fromJS(action.payload))

    default:
      return state
  }
}
