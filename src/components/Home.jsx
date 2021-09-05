import React from 'react';
import homeImg from './Programming-rafiki.png';

export default () => {
	return (
		<div className="home" id="home">
			<div className="home__content">
				<div className="home__heading">Who are we ?</div>
				Hey there we at DEV BUDDY let you explore and get started with the
				journey of Web Development in best and then easiest way
			</div>
			<div className="home__img">
				<img src={homeImg} alt="Home Image" />
			</div>
		</div>
	);
};
