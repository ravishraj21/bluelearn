import React from 'react';
import Tilty from 'react-tilty';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';

import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className="explore">
			<Switch>
				<Route exact path="/explore">
					<Link to="/frontend">
						<Tilty max={25} glare={true} maxGlare={0.7} scale={1.2} perspective={800}>
							<div className="card card--frontend">Frontend</div>
						</Tilty>
					</Link>
					<Link to="/backend">
						<Tilty max={25} glare={true} maxGlare={0.7} scale={1.2} perspective={800}>
							<div className="card card--backend">Backend</div>
						</Tilty>
					</Link>
				</Route>

				<Route exact path="/frontend">
					<Frontend />
				</Route>

				<Route exact path="/backend">
					<Backend />
				</Route>
			</Switch>
		</div>
	);
};
