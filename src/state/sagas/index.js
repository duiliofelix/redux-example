import { spawn } from 'redux-saga/effects';
import themeRootSaga from './theme';

function* rootSaga() {
  yield spawn(themeRootSaga);
}

export default rootSaga;