import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div style={{textAlign: "center", marginTop: '50px'}}>
			<h1>Introducing <span style={{fontWeight:'bold', color:'#D2A297'}}>Nona</span></h1>
			<p style={{width:'50%', margin:'0 auto'}}>a tool that allows you to monitor your pregnancy remotely, so you know exactly what to expect when you’re expecting.</p>
			<img src="/image/rainbow.png"/>
			<p><Link to="#" className="button">Take a tour of our site</Link></p>
		</div>
	);
}

export default Homepage;