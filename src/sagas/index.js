import { takeEvery } from 'redux-saga/effects';
import IMAGES from '../constants';

// takeEvery: non blocking
// take: blocking
// call: call a function

function* handleImagesLoad() {
	yield console.log('fetching image from unsplash');
}

function* rootSaga() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;
