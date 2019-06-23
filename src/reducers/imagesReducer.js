import IMAGES from '../constants';

const imagesReducers = (state = [], action) => {
	if (action.type === IMAGES.LOAD_SUCCESS) {
		return [...state, ...action.images];
	}

	return state;
};

export default imagesReducers;
