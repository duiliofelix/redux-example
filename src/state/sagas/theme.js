import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { DARK_MODE_TOGGLE_REQUEST } from "../constants/theme";
import { createDarkModeToggle } from '../actions/theme';

const sleep = (secs) => new Promise((res, _rej) => setTimeout(res, secs * 1000));

function* toggleDarkModeWithDelay(_action) {
  yield call(sleep, 1);
  yield put(createDarkModeToggle());
}

function* themeRootSaga() {
  yield takeEvery(DARK_MODE_TOGGLE_REQUEST, toggleDarkModeWithDelay);
}

export default themeRootSaga;
