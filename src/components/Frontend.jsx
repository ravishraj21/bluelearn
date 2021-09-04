import React from 'react';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Slides from './Slides.jsx';

let frontendLinks = [
	{
		href: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_',
		title: 'Internet',
	},
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		title: 'HTML',
	},
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		title: 'CSS',
	},
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		title: 'JavaScript',
	},
	{
		href: '#',
		title: 'Frameworks',
	},
	{
		href: '#',
		title: 'Explore More',
	},
];
let exploreMoreLinks = [
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
		title: 'PWAs',
	},
	{
		href: 'https://developers.google.com/web/updates/2019/02/rendering-on-the-web',
		title: 'Serever Side Rendering(SSR)',
	},
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
		title: 'Web Sockets',
	},
	{
		href: 'https://www.sitepoint.com/static-site-generators/',
		title: 'Static Site Generation',
	},
];

let internetLinks = [
	{
		href: '#',
		title: 'How does the internet work?',
	},
	{
		href: '#',
		title: 'what is HTTP',
	},
	{
		href: '#',
		title: 'DNS and how it works',
	},
	{
		href: '#',
		title: 'what is domain name',
	},
	{
		href: '#',
		title: 'what is hosting',
	},
];
let htmlLinks = [
	{
		href: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
		title: 'Learn the basics',
	},
	{
		href: '#',
		title: 'forms and validations',
	},
	{
		href: '#',
		title: 'conventions and best practices',
	},
	{
		href: '#',
		title: 'writing semantic html',
	},
	{
		href: '#',
		title: 'accessibility',
	},
	{
		href: '#',
		title: 'seo basics',
	},
];

let cssLinks = [
	{
		href: '#',
		title: 'Learn the basics',
	},
	{
		href: '#',
		title: 'Making layouts',
	},
	{
		href: '#',
		title: 'Responsive design and media queries',
	},
	{
		href: '#',
		title: 'SCSS/SASS',
	}
	
];

let javascriptLinks = [
	{
		href: '#',
		title: 'Syntax and Basic constructs',
	},
	{
		href: '#',
		title: 'learn DOM manipulation',
	},
	{
		href: '#',
		title: 'learn fetch API /ajax(XHR)',
	},
	{
		href: '#',
		title: 'ES6+ and modular javascrip',
	}
	
];

let frameworksLinks = [
	{
		href: 'https://getbootstrap.com/',
		title: 'Bootstrap',
	},
	{
		href: 'https://tailwindcss.com/',
		title: 'Tailwind CSS',
	},
	{
		href: 'https://reactjs.org/',
		title: 'ReactJS',
	},
	{
		href: 'https://angular.io/',
		title: 'Angular',
	},
	{
		href: 'https://vuejs.org/',
		title: 'VueJS',
	},
	{
		href: '#',
		title: 'seo basics',
	},
];


export default () => {
	return (
		<div className="frontend">
			<Splide
				options={{
					rewind: true,
					gap: '1rem',
					padding: {
						right: '7rem',
						left: '7rem',
					},
					trimSpace: true,
					// autoplay: true,
					interval: 2000,
					updateOnMove: true,
				}}
				className="frontend__slide"
			>
				<Slides heading="FrontEnd" links={frontendLinks} />
				<Slides heading="Internet" links={internetLinks} />
				<Slides heading="HTML" links={htmlLinks} />
				<Slides heading="CSS" links={cssLinks} />
				<Slides heading="JavaScript" links={javascriptLinks} />
				<Slides heading="Frameworks" links={frameworksLinks} />
				<Slides heading="Explore More" links={exploreMoreLinks} />	
			</Splide>
		</div>
	);
};
