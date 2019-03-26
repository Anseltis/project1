import { takeEvery, put, call } from 'redux-saga/effects'
import { sagaActions } from '../actionNames'
import { actionCreator } from '../actions'
import { getFilms } from '../services/getFilms/getFilms'

function* formSubmit(action) {
    const sortBy = action.sortBy
    const value = action.value
    const searchByFilter = action.searchByFilter
    yield put(actionCreator.search.getData(action.value))
    const films = yield call(getFilms, { sortBy, value, searchByFilter })
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchFormSubmitAction() {
    yield takeEvery(sagaActions.sagaFormSubmitAction, formSubmit)
}