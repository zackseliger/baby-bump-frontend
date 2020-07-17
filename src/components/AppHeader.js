import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
	let location = window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1);
	let lightColorStyle = {color: '#A8C7BB'}
	

	return (
		<div id="app-header">
			<Link style={{color:'#D2A297', fontSize:'48px'}} to="/">
				<img style={{width:'100px'}} src="/image/rainbow.png" alt="Nona logo"/>
				<span style={{top:'-15px', position:'relative'}}>Nona</span>
			</Link>

			<div>
				<div className="app-nav">
					<Link style={location==="dashboard"?lightColorStyle:{}} to="/app/dashboard">Dashboard</Link>
					<Link style={location==="journal"?lightColorStyle:{}} to="/app/journal">Journal</Link>
					<Link style={location==="share"?lightColorStyle:{}} to="/app/share">Share</Link>
					<Link style={location==="profile"?lightColorStyle:{}} to="/app/profile">Profile</Link>
					<Link style={location==="feedback"?lightColorStyle:{}} to="/app/feedback">Feedback</Link>
					<Link to="/">Log Out</Link>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;