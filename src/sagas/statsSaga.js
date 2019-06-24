import {
	fork,
	take,
	call,
	put,
} from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

// takeEvery: non blocking
// fork: non blocking, parallel sagas
// put: non blocking
// take: blocking
// call: blocking, call a function

function* handleStatsRequest(id) {
	for (let i = 0; i < 3; i += 1) {
		try {
			yield put(loadImageStats(id));
			const res = yield call(fetchImageStats, id);
			yield put(setImageStats(id, res.downloads.total));
			return true;
		// eslint-disable-next-line no-empty
		} catch (error) {}
	}

	return yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
	while (true) {
		const { images } = yield take(IMAGES.LOAD_SUCCESS);

		for (let i = 0; i < images.length; i += 1) {
			yield fork(handleStatsRequest, images[i].id);
		}
	}
}
