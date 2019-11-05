import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import articleSaga from './article/sagas';

function* rootSaga() {
    yield all([articleSaga]);
}

export default rootSaga;
