import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ children, loading, ...props }) => (
	<button type="button" className="button" disabled={loading} {...props}>
		{loading ? 'Loading...' : children}
	</button>
);

Button.defaultProps = {
	loading: false,
	children: null,
};

Button.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};

export default Button;
