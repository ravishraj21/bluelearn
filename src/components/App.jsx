import React from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
      <Footer />
		</div>
	);
};

export default App;
