import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
	loadingReducer,
	imagesReducer,
	errorReducer,
});

export default rootReducer;
