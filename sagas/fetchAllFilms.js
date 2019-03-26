import { takeEvery, call, put } from 'redux-saga/effects'
import { sagaActions } from '../src/actionNames'
import { makeRequest } from '../src/services/getFilms/makeRequest'
import { makeAllFilmsQuery } from '../src/services/getFilms/makeAllFilmsQuery'
import { actionCreator } from '../src/actions'


export function* fetchAllFilms(action) {
    const films = yield call(makeRequest, makeAllFilmsQuery(action.sortBy))
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaFetchFilmsAction() {
    yield takeEvery(sagaActions.sagaFetchAllFilmsAction, fetchAllFilms)
}