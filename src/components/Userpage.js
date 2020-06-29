import React from 'react';
import { Link } from 'react-router-dom';

function Userpage() {
	return (
		<div style={{textAlign: "center"}}>
			<h1>Welcome!</h1>
			<img src="/image/rainbow.png"/>
			<p>
				<Link to="#">Add support person</Link>
				<Link to="#">Add healthcare provider</Link>
			</p>
		</div>
	);
}

export default Userpage;