import { takeEvery, call, put, select } from 'redux-saga/effects'

import { sagaActions } from '../actionNames'
import { getAllFilms } from '../services/getFilms/getAllFilms'
import { actionCreator } from '../actions'
import { searchParamsSelector} from '../selectors'

export function* fetchAllFilms() {

    const state = yield select()
    const searchParam = searchParamsSelector(state)

    const films = yield call(getAllFilms, searchParam.sortBy)
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaFetchFilmsAction() {
    yield takeEvery(sagaActions.sagaFetchAllFilmsAction, fetchAllFilms)
}