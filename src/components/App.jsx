import React from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Explore from './Explore.jsx';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import { Switch, Route, useLocation } from 'react-router';

const App = () => {
	let location = useLocation();
	return (
		<div>
			<Navbar />
			<Home />

			<Switch>
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/:explore">
					<Explore />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
