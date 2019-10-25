import { all } from 'redux-saga/effects'
import 'isomorphic-unfetch'
import postsSaga from './posts/sagas'

function * rootSaga () {
  yield all([postsSaga])
}

export default rootSaga