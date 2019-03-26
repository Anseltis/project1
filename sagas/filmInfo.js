import { put, takeEvery, call, select } from 'redux-saga/effects'
import { actionCreator } from '../src/actions'
import { makeRequest } from '../src/services/getFilms/makeRequest'
import { makeFilmsQuery } from '../src/services/getFilms/makeFilmsQuery'
import { sagaActions } from '../src/actionNames'
import { sameFilmsGenreSelector } from '../src/selectors/sameFilmsGenreSelector'

function* filmInfo(action) {
  const newFilm = action.array[action.key]
  const state = yield select()
  const oldGenre = sameFilmsGenreSelector(state).genre
  const isGenreTheSame = oldGenre === newFilm.genres[0]
  yield put(actionCreator.routing.setSkipRouting(true))
  yield put(actionCreator.chosenFilm.setInfo(newFilm))

  if (isGenreTheSame) {
    return
  }

  const films = yield call(makeRequest, makeFilmsQuery ({
    sortBy: 'release_date',
    value: newFilm.genres[0],
    searchByFilter: 'genres'
  }))
  yield put(actionCreator.sameGenre.getFilms(films, newFilm.genres[0]))
}

export function* watchFilmObjectActionSaga() {
  yield takeEvery(sagaActions.sagaFilmObject, filmInfo)
}
