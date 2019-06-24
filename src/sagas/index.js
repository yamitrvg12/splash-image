import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

// all: similar to promisses all, but it allows to run on generator functions

function* rootSaga() {
	yield all([
		imagesSaga(),
		statsSaga(),
	]);
}

export default rootSaga;
