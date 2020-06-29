import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div style={{textAlign: "center"}}>
			<h1>Preparing for Baby</h1>
			<p>Know exactly what to expect when you're expecting, all in one site!</p>
			<img src="/image/rainbow.png"/>
			<p><Link to="#" className="button">Take a tour of our site</Link></p>
		</div>
	);
}

export default Homepage;