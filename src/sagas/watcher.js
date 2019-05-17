
import { takeLatest } from "redux-saga/effects";
import workerSaga from './workerSaga';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}