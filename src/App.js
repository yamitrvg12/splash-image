import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

const App = props => (
	<div className="App">
		<Header />
		<ImageGrid />
		<div className="Age-label">
			your age:
			<span>{props.age}</span>
		</div>
		<button onClick={props.onAgeUp}>Age UP</button>
		<button onClick={props.onAgeDown}>Age Down</button>
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
