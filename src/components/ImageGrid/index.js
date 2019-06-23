import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import Button from '../Button';

import './styles.css';

class ImageGrid extends Component {
	static get propTypes() {
		return {
			loadImagesFun: PropTypes.func.isRequired,
			images: PropTypes.arrayOf(PropTypes.object).isRequired,
			error: PropTypes.string,
			isLoading: PropTypes.bool,
		};
	}

	componentDidMount() {
		const { loadImagesFun } = this.props;

		loadImagesFun();
	}

	render() {
		const {
			loadImagesFun,
			images,
			error,
			isLoading,
		} = this.props;
		return (
			<div className="content">
				<section className="grid">
					{images.map(image => (
						<div key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}>
							<img src={image.urls.small} alt={image.user.username} />
						</div>
					))}
					<Button loading={isLoading} onClick={() => !isLoading && loadImagesFun()}>
						Load more...
					</Button>
				</section>
				{error && <div className="error">{JSON.stringify(error)}</div>}
			</div>
		);
	}
}

ImageGrid.defaultProps = {
	error: null,
	isLoading: false,
};

const mapStateToProps = ({ isLoading, images, error }) => ({
	isLoading,
	images,
	error,
});

const mapDispatchToProps = dispatch => ({
	loadImagesFun: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
