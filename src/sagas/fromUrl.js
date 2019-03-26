import { takeEvery, put, call, select } from 'redux-saga/effects'

import { actionCreator } from '../actions'
import { sagaActions } from '../actionNames'
import { searchParamsSelector } from '../selectors'
import { getFilms } from '../services/getFilms/getFilms'


function* fromUrl(action) {
    const { search, searchBy } = action.params
    yield put(actionCreator.routing.getDataFromUrl({ value: search, searchByFilter: searchBy }))

    const state = yield select()
    const searchParam = searchParamsSelector(state)
    const films = yield call(getFilms, { sortBy: searchParam.sortBy, value: search, searchByFilter: searchBy })
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaAppFilterAction() {
    yield takeEvery(sagaActions.sagaAppFilterAction, fromUrl)
}