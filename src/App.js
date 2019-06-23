import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import configureStore from './store';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

const store = configureStore();

const App = () => (
	<Provider store={store} className="App">
		<Fragment>
			<Header />
			<ImageGrid />
		</Fragment>
	</Provider>
);

export default App;

/*
const mapStateToProps = state => ({
	age: state.age,
});

const mapDispachToProps = dispatch => ({
	onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
	onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
});

export default connect(
	mapStateToProps,
	mapDispachToProps,
)(App);
*/
