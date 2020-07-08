import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
	return (
		<div id="app-header">
			<Link style={{color:'#D2A297', fontSize:'48px'}} to="/">
				<img style={{width:'100px'}} src="/image/rainbow.png"/>
				<span style={{top:'-15px', position:'relative'}}>Nona</span>
			</Link>

			<div>
				<div className="app-nav">
					<Link to="/app/dashboard">Dashboard</Link>
					<Link to="/app/journal">Journal</Link>
					<Link to="/app/share">Share</Link>
					<Link to="/app/profile">Profile</Link>
					<Link to="/">Log Out</Link>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;