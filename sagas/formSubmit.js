import { takeEvery, put, call } from 'redux-saga/effects'
import { sagaActions } from '../src/actionNames'
import { actionCreator } from '../src/actions'
import { makeRequest } from '../src/services/getFilms/makeRequest'
import { makeFilmsQuery } from '../src/services/getFilms/makeFilmsQuery'

function* formSubmit(action) {
    const sortBy = yield action.sortBy
    const value = yield action.value
    const searchByFilter = yield action.searchByFilter
    yield put(actionCreator.search.getData(action.value))
    const films = yield call(makeRequest, makeFilmsQuery({ sortBy, value, searchByFilter}))
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchFormSubmitAction() {
    yield takeEvery(sagaActions.sagaFormSubmitAction, formSubmit)
}