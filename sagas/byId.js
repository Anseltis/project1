import { call, takeEvery, put } from 'redux-saga/effects'
import { makeFilmIdQuery } from '../src/services/getFilms/getFilmById'
import { actionCreator } from '../src/actions'
import { makeRequest } from '../src/services/getFilms/makeRequest'
import { makeFilmsQuery } from '../src/services/getFilms/makeFilmsQuery'


function* byId(action) {
    const id = yield action.match.params.id
    const film = yield call(makeRequest, makeFilmIdQuery (id))
    const genre = yield film.genres[0]
    const sortBy = yield action.sortBy
    const searchByFix = yield 'genres'
    yield put(actionCreator.chosenFilm.setInfo(film))
    const films = yield call(makeRequest, makeFilmsQuery({sortBy, value: genre, searchByFilter: searchByFix}))
    yield put(actionCreator.sameGenre.getFilms(films))
}

export function* watchSagaAppFilmAction(){
    yield takeEvery('sagaAppFilmAction', byId)
}