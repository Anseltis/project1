import { takeEvery, put, call } from 'redux-saga/effects'
import { actionCreator } from '../actions'
import { getFilms } from '../services/getFilms/getFilms'
import { fetchAllFilms } from './fetchAllFilms'
import { sagaActions } from '../actionNames'

function* sortBy(action) {
  const sortBy = action.sortBy
  const value = action.value
  const searchByFilter = action.searchBy
  yield put(actionCreator.search.sortFilter(sortBy))
  const films = yield call(getFilms, { sortBy, value, searchByFilter })
  yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

function* sortByDefault(action) {
  const sortBy = action.sortBy
  yield put(actionCreator.search.sortFilter(sortBy))
  yield fetchAllFilms(actionCreator.initiate.triggerFetchAllFilms(sortBy))
}

export function* watchSortByAction() {
  yield takeEvery(sagaActions.sagaSortByAction, sortBy)
  yield takeEvery(sagaActions.sagaSortByDefaultAction, sortByDefault)
}
