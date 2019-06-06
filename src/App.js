import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

const App = () => (
	<div className="App">
		<Header />
		<ImageGrid />
	</div>
);

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
