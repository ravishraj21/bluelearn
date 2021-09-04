import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<nav>
			<div className="logo">Dev Buddy</div>
			<div className="nav-list">
				<li>
					<a href="/#home">Home</a>
				</li>
				<li>
					<Link to="/" className="btn">About</Link>
				</li>
				<li>
					<a href="/#explore">Explore</a>
				</li>
			</div>
		</nav>
	);
};
// SGAv
