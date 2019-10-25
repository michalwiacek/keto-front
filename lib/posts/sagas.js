import { put, takeLatest } from 'redux-saga/effects'
import { polyfill } from 'es6-promise'
import fetch from 'isomorphic-unfetch'

import { actionTypes, loadDataSuccess, loadDataError } from './actions'

polyfill()

function * loadDataSaga () {
  try {
    const res = yield fetch('https://keto-rails-api.herokuapp.com/api/articles')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(loadDataError(err))
  }
}

export default takeLatest(actionTypes.LOAD_DATA, loadDataSaga)