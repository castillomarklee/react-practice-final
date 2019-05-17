import { fork } from 'redux-saga/effects';
import watchSaga from './watcher';

export default function* startForman() {
  yield fork(watchSaga);
}
