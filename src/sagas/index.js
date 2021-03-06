import { takeEvery, all } from 'redux-saga/effects'
import { watchFilmObjectActionSaga } from './filmInfo'
import { watchSagaAppFilmAction } from './byId'
import { watchSagaAppFilterAction } from './fromUrl'
import { watchSortByAction } from './sortBy'
import { watchFormSubmitAction } from './formSubmit'
import { watchSagaFetchFilmsAction } from './fetchAllFilms'

function logSaga() {
}

function* watchAllActions(){
    yield takeEvery('*', logSaga)

}

export function* rootSaga() {
    yield  all([
        watchAllActions(),
        watchFilmObjectActionSaga(),
        watchSagaAppFilmAction(),
        watchSagaAppFilterAction(),
        watchSortByAction(),
        watchFormSubmitAction(),
        watchSagaFetchFilmsAction()
    ])
}