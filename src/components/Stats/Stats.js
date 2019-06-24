import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Stats = ({ stats }) => {
	if (!stats) {
		return <span className="stats">Loading...</span>;
	}

	return (
		<span className="stats">
			{stats.error && 'Error!'}
			{stats.isLoading && '🙄 Loading...'}
			{stats.downloads !== null && `🤘 ${stats.downloads}`}
		</span>
	);
};

Stats.defaultProps = {
	stats: {
		downloads: 0,
		error: false,
		isLoading: true,
	},
};

Stats.propTypes = {
	stats: PropTypes.shape({
		downloads: PropTypes.number,
		error: PropTypes.bool,
		isLoading: PropTypes.bool,
	}),
};

export default Stats;
