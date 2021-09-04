import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Slides from './Slides.jsx';

let backendLinks = [
	{
		href: '#',
		title: 'Basic Frontend Links',
	},
	{
		href: '#',
		title: 'Learn a Language',
	},
	{
		href: '#',
		title: 'Version Control Systems',
	},
	{
		href: '#',
		title: 'Databases',
	},
	{
		href: '#',
		title: 'APIs',
	},
];
let basicfrontendLinks = [
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
];
let vcsLinks = [
	{
		href: 'https://git-scm.com/doc',
		title: 'Basic Usage of Git',
	},
	{
		href: 'https://github.com/',
		title: 'Repo Hosting Services',
	},
];

let apiLinks = [
	{
		href: 'https://restfulapi.net/',
		title: 'REST',
	},
	{
		href: 'https://jsonapi.org/',
		title: 'JSON APIs',
	},
	{
		href: 'https://stoplight.io/api-types/soap-api/',
		title: 'SOAP',
	},
	{
		href: 'https://grpc.io/',
		title: 'gRPC',
	},
];
let databasesLinks = [
	{
		href: 'https://www.w3schools.com/MySQL/default.asp',
		title: 'MySQL',
	},
	{
		href: 'https://www.postgresql.org/',
		title: 'PostgreSQL',
	},
	{
		href: 'https://www.mongodb.com/',
		title: 'MongoDB',
	},
	{
		href: 'https://cassandra.apache.org/_/index.html',
		title: 'Cassandra',
	},
	{
		href: 'https://firebase.google.com/',
		title: 'FireBase',
	},
];

let languageLinks = [
	{
		href: 'https://www.w3schools.com/java/',
		title: 'JAVA',
	},
	{
		href: 'https://www.w3schools.com/js/default.asp',
		title: 'JavaScript',
	},
	{
		href: 'https://www.w3schools.com/python/default.asp',
		title: 'Python',
	},
	{
		href: 'https://www.w3schools.com/php/default.asp',
		title: 'PHP',
	},
	{
		href: 'https://www.ruby-lang.org/en/',
		title: 'RUBY',
	},
];


export default () => {
	return (
		<div className="backend">
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
				}}
				className="backend__slide"
			>
				<Slides heading="BackEnd" links={backendLinks} />

				<Slides heading="Basic Frontend Knowledge" links={basicfrontendLinks} />
				<Slides heading="Learn a Language" links={languageLinks} />
				<Slides heading="Version Control System" links={vcsLinks} />
				<Slides heading="Databases" links={databasesLinks} />
				<Slides heading="APIs" links={apiLinks} />
			</Splide>
		</div>
	);
};
