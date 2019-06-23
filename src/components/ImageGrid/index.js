import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
	state = {
		images: [],
	}

	componentDidMount() {
		axios.get(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
			.then((response) => {
				this.setState({
					images: response.data,
				});
			});
	}

	render() {
		const { images } = this.state;
		return (
			<div className="content">
				<section className="grid">
					{images.map(image => (
						<div key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}>
							<img src={image.urls.small} alt={image.user.username} />
						</div>
					))}
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({ isLoading, images, error }) => ({
	isLoading,
	images,
	error,
});

export default connect(mapStateToProps, null)(ImageGrid);
