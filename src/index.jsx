import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import './index.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#root')
);

let heading = 'Who are we ?';
let typedText = '';

const homeHeading = document.querySelector('.home__heading');
let counter = 0;
setInterval(() => {
	if (counter === heading.length) {
		clearInterval();
		return;
	}
	typedText+=heading[counter]
	homeHeading.textContent = typedText
	counter++;
}, 120);

let aboutBtn = document.querySelector('.btn')
aboutBtn.addEventListener('click', () => {
	window.scrollBy(0, 600);
})