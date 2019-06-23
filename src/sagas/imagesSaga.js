import {
	takeEvery,
	select,
	call,
	put,
} from 'redux-saga/effects';
import IMAGES from '../constants';
import fetchImages from '../api';
import { setImages, setError } from '../actions';

// takeEvery: non blocking
// take: blocking
// call: call a function

const getPage = state => state.nextPage;

function* handleImagesLoad() {
	try {
		const page = yield select(getPage);
		const images = yield call(fetchImages, page);
		yield put(setImages(images)); // dispatch images action
	} catch (error) {
		yield put(setError(error.toString())); // dispatch error action
	}
}

export default function* watchImagesLoad() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
