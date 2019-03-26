import { takeEvery, put, call } from 'redux-saga/effects'
import { actionCreator } from '../src/actions'
import { makeRequest } from '../src/services/getFilms/makeRequest'
import { makeFilmsQuery } from '../src/services/getFilms/makeFilmsQuery'


function* fromUrl(action) {
    const value = yield action.params.get('search')
    const searchByFilter = yield action.params.get('searchBy')
    const sortBy = yield action.sortBy
    yield put(actionCreator.routing.getDataFromUrl(value, searchByFilter))
    const films = yield call(makeRequest, makeFilmsQuery({sortBy, value, searchByFilter}))
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaAppFilterAction() {
    yield takeEvery('sagaAppFilterAction', fromUrl)
}