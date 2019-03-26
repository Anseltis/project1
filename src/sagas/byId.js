import { call, takeEvery, put, select } from 'redux-saga/effects'

import { getFilmById } from '../services/getFilms/getFilmById'
import { actionCreator } from '../actions'
import { getFilms } from '../services/getFilms/getFilms'
import { sagaActions} from '../actionNames'
import { searchParamsSelector} from '../selectors'

function* byId(action) {
    const id = action.match.params.id
    const film = yield call(getFilmById, id)
    yield put(actionCreator.chosenFilm.setInfo(film))

    const state = yield select()
    const searchParam = searchParamsSelector(state)
    
    const genre = film.genres[0]
    const searchByFix = 'genres'
    const films = yield call(getFilms, {sortBy: searchParam.sortBy, value: genre, searchByFilter: searchByFix})
    yield put(actionCreator.sameGenre.getFilms(films))
}

export function* watchSagaAppFilmAction(){
    yield takeEvery(sagaActions.sagaAppFilmAction, byId)
}