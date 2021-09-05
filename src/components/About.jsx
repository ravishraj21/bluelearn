import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import aboutImg from './vc.png'

import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className="about" id="about">
			<div className="about__img">
				<img src={aboutImg} alt="About image" />
			</div>
			<div className="about__content">
				This is not just a RoadMap of the sort but a fantastic resource on what
				it takes to become a Web developer. It lists all the technologies and
				tools a Web developer should be familiar with.
			</div>
			<Link to="/explore" className="about__btn" id="explore">
				Get Started{' '}
				<span className="arrow">
					<FaArrowCircleRight />
				</span>
			</Link>
		</div>
	);
};
